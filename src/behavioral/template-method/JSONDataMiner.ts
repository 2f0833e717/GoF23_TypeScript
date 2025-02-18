/**
 * JSONデータマイナー
 * 
 * JSONファイルのデータ解析を行う具象クラスです。
 */
import { DataMiner, DataSet, AnalysisResult } from './DataMiner';
import * as fs from 'fs';
import * as path from 'path';

interface JSONData {
    headers: string[];
    data: any[];
    metadata?: {
        description?: string;
        version?: string;
        tags?: string[];
    };
}

export class JSONDataMiner extends DataMiner {
    private skippedRows: number = 0;
    private readonly dataCache: Map<string, DataSet> = new Map();
    private readonly resultCache: Map<string, AnalysisResult> = new Map();

    protected readData(source: string): DataSet {
        // キャッシュされたデータがあれば返す
        if (this.dataCache.has(source)) {
            console.log(`キャッシュからデータを読み込み: ${source}`);
            return this.dataCache.get(source)!;
        }

        console.log(`JSONファイルを読み込み: ${source}`);
        const filePath = path.resolve(source);
        const content = fs.readFileSync(filePath, 'utf-8');
        const jsonData: JSONData = JSON.parse(content);

        if (!this.validateJSONStructure(jsonData)) {
            throw new Error('無効なJSONデータ構造です');
        }

        const rows = jsonData.data.map(item =>
            jsonData.headers.map(header => this.extractValue(item, header))
        );

        const data: DataSet = {
            headers: jsonData.headers,
            rows,
            metadata: {
                source,
                createdAt: new Date(),
                format: 'JSON'
            }
        };

        this.dataCache.set(source, data);
        return data;
    }

    protected cleanData(data: DataSet): DataSet {
        console.log('データのクリーニングを実行');
        this.skippedRows = 0;

        // 無効なデータを除外
        const cleanedRows = data.rows.filter(row => {
            // 必要なフィールドが存在するか確認
            if (row.some(value => value === undefined)) {
                this.skippedRows++;
                return false;
            }
            // 数値フィールドの検証
            if (!row.every(value => value === null || !isNaN(value) || typeof value === 'string')) {
                this.skippedRows++;
                return false;
            }
            return true;
        });

        return {
            ...data,
            rows: cleanedRows
        };
    }

    protected analyzeData(data: DataSet): { [key: string]: number } {
        console.log('データの解析を実行');
        const statistics: { [key: string]: number } = {};

        // 各フィールドの統計情報を計算
        data.headers.forEach((header, index) => {
            const values = data.rows.map(row => row[index]).filter(value => !isNaN(value));
            if (values.length > 0) {
                statistics[`${header}_avg`] = this.calculateAverage(values);
                statistics[`${header}_max`] = Math.max(...values);
                statistics[`${header}_min`] = Math.min(...values);
                statistics[`${header}_count`] = values.length;
            }
        });

        return statistics;
    }

    protected shouldCache(): boolean {
        return true;
    }

    protected cacheResult(result: AnalysisResult): void {
        const source = result.summary.source;
        if (source) {
            this.resultCache.set(source, result);
            console.log(`結果をキャッシュに保存: ${source}`);
        }
    }

    protected getSkippedRows(): number {
        return this.skippedRows;
    }

    protected generateInsights(statistics: { [key: string]: number }): string[] {
        const insights: string[] = [];
        const metrics = Object.entries(statistics);

        // フィールドごとにグループ化
        const fieldMetrics: { [key: string]: { [metric: string]: number } } = {};
        metrics.forEach(([key, value]) => {
            const [field, metric] = key.split('_');
            if (!fieldMetrics[field]) {
                fieldMetrics[field] = {};
            }
            fieldMetrics[field][metric] = value;
        });

        // フィールドごとの洞察を生成
        Object.entries(fieldMetrics).forEach(([field, metrics]) => {
            insights.push(`${field}フィールドの分析:`);
            if (metrics.avg !== undefined) {
                insights.push(`- 平均値: ${metrics.avg.toFixed(2)}`);
            }
            if (metrics.max !== undefined) {
                insights.push(`- 最大値: ${metrics.max.toFixed(2)}`);
            }
            if (metrics.min !== undefined) {
                insights.push(`- 最小値: ${metrics.min.toFixed(2)}`);
            }
            if (metrics.count !== undefined) {
                insights.push(`- データ数: ${metrics.count}`);
            }
        });

        return insights;
    }

    /**
     * JSONデータの構造を検証します
     * @param data JSONデータ
     * @returns 有効な構造の場合はtrue
     */
    private validateJSONStructure(data: JSONData): boolean {
        return Array.isArray(data.headers) &&
            Array.isArray(data.data) &&
            data.headers.length > 0 &&
            data.data.length > 0;
    }

    /**
     * オブジェクトから指定されたパスの値を取得します
     * @param obj オブジェクト
     * @param path パス（ドット区切り）
     * @returns 取得した値
     */
    private extractValue(obj: any, path: string): any {
        return path.split('.').reduce((current, key) =>
            current && current[key] !== undefined ? current[key] : null
            , obj);
    }

    /**
     * 平均値を計算します
     * @param values 数値の配列
     * @returns 平均値
     */
    private calculateAverage(values: number[]): number {
        return values.reduce((sum, value) => sum + value, 0) / values.length;
    }
} 
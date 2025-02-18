/**
 * CSVデータマイナー
 * 
 * CSVファイルのデータ解析を行う具象クラスです。
 */
import { DataMiner, DataSet, AnalysisResult } from './DataMiner';
import * as fs from 'fs';
import * as path from 'path';

export class CSVDataMiner extends DataMiner {
    private skippedRows: number = 0;
    private readonly dataCache: Map<string, DataSet> = new Map();
    private readonly resultCache: Map<string, AnalysisResult> = new Map();

    protected readData(source: string): DataSet {
        // キャッシュされたデータがあれば返す
        if (this.dataCache.has(source)) {
            console.log(`キャッシュからデータを読み込み: ${source}`);
            return this.dataCache.get(source)!;
        }

        console.log(`CSVファイルを読み込み: ${source}`);
        const filePath = path.resolve(source);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n').map(line => line.trim()).filter(line => line);

        if (lines.length === 0) {
            throw new Error('CSVファイルが空です');
        }

        const headers = lines[0].split(',').map(header => header.trim());
        const rows = lines.slice(1).map(line => {
            const cells = line.split(',').map(cell => this.parseCell(cell.trim()));
            if (cells.length !== headers.length) {
                throw new Error(`CSVデータの列数が不正です: 期待=${headers.length}, 実際=${cells.length}`);
            }
            return cells;
        });

        const data: DataSet = {
            headers,
            rows,
            metadata: {
                source,
                createdAt: new Date(),
                format: 'CSV'
            }
        };

        this.dataCache.set(source, data);
        return data;
    }

    protected cleanData(data: DataSet): DataSet {
        console.log('データのクリーニングを実行');
        this.skippedRows = 0;

        // 無効な行を除外
        const cleanedRows = data.rows.filter(row => {
            // 数値データの検証
            if (!row.every(cell => cell === null || !isNaN(cell) || typeof cell === 'string')) {
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

        // 各列の統計情報を計算
        data.headers.forEach((header, index) => {
            const values = data.rows.map(row => row[index]).filter(value => !isNaN(value));
            if (values.length > 0) {
                statistics[`${header}_avg`] = this.calculateAverage(values);
                statistics[`${header}_max`] = Math.max(...values);
                statistics[`${header}_min`] = Math.min(...values);
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

        metrics.forEach(([key, value]) => {
            if (key.endsWith('_avg')) {
                insights.push(`${key.replace('_avg', '')}の平均値は${value.toFixed(2)}です`);
            }
            if (key.endsWith('_max')) {
                insights.push(`${key.replace('_max', '')}の最大値は${value.toFixed(2)}です`);
            }
            if (key.endsWith('_min')) {
                insights.push(`${key.replace('_min', '')}の最小値は${value.toFixed(2)}です`);
            }
        });

        return insights;
    }

    /**
     * セルの値をパースします
     * @param value セルの値
     * @returns パースされた値
     */
    private parseCell(value: string): any {
        if (value === '') {
            return null;
        }
        const number = parseFloat(value);
        return isNaN(number) ? value : number;
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
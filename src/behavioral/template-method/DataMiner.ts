/**
 * データマイナー
 * 
 * データ解析処理のテンプレートを定義する抽象クラスです。
 * 具象クラスは、各ステップの具体的な実装を提供します。
 */

export interface DataSet {
    headers: string[];
    rows: any[][];
    metadata: {
        source: string;
        createdAt: Date;
        format: string;
    };
}

export interface AnalysisResult {
    summary: {
        totalRows: number;
        processedRows: number;
        skippedRows: number;
        source?: string;
    };
    statistics: {
        [key: string]: number;
    };
    insights: string[];
    timestamp: Date;
}

/**
 * データマイナーの抽象基底クラス
 */
export abstract class DataMiner {
    /**
     * テンプレートメソッド
     * データ解析の全体的な流れを定義します
     * @param source データソース
     * @returns 解析結果
     */
    public mine(source: string): AnalysisResult {
        const data = this.readData(source);
        const cleanedData = this.cleanData(data);
        const analyzedData = this.analyzeData(cleanedData);
        const result = this.generateReport(analyzedData, data);

        if (this.shouldCache()) {
            this.cacheResult(result);
        }

        this.logOperation(source, result);
        return result;
    }

    /**
     * データを読み込みます
     * @param source データソース
     * @returns 読み込んだデータ
     */
    protected abstract readData(source: string): DataSet;

    /**
     * データをクリーニングします
     * @param data 生データ
     * @returns クリーニング済みデータ
     */
    protected abstract cleanData(data: DataSet): DataSet;

    /**
     * データを解析します
     * @param data クリーニング済みデータ
     * @returns 解析結果の統計情報
     */
    protected abstract analyzeData(data: DataSet): { [key: string]: number };

    /**
     * レポートを生成します
     * @param statistics 統計情報
     * @param originalData 元のデータ
     * @returns 解析結果
     */
    protected generateReport(statistics: { [key: string]: number }, originalData: DataSet): AnalysisResult {
        return {
            summary: {
                totalRows: originalData.rows.length,
                processedRows: originalData.rows.length - this.getSkippedRows(),
                skippedRows: this.getSkippedRows(),
                source: originalData.metadata.source
            },
            statistics,
            insights: this.generateInsights(statistics),
            timestamp: new Date()
        };
    }

    /**
     * 結果をキャッシュするかどうかを判断します
     * フックメソッド - サブクラスでオーバーライド可能
     */
    protected shouldCache(): boolean {
        return false;
    }

    /**
     * 結果をキャッシュします
     * フックメソッド - サブクラスでオーバーライド可能
     * @param result 解析結果
     */
    protected cacheResult(result: AnalysisResult): void {
        // デフォルトの実装では何もしません
    }

    /**
     * スキップされた行数を取得します
     * フックメソッド - サブクラスでオーバーライド可能
     */
    protected getSkippedRows(): number {
        return 0;
    }

    /**
     * 統計情報から洞察を生成します
     * フックメソッド - サブクラスでオーバーライド可能
     * @param statistics 統計情報
     */
    protected generateInsights(statistics: { [key: string]: number }): string[] {
        return Object.entries(statistics).map(([key, value]) =>
            `${key}: ${value}`
        );
    }

    /**
     * 操作をログに記録します
     * @param source データソース
     * @param result 解析結果
     */
    private logOperation(source: string, result: AnalysisResult): void {
        console.log(`データ解析を実行: ${source}`);
        console.log(`処理行数: ${result.summary.processedRows}/${result.summary.totalRows}`);
        console.log(`スキップ行数: ${result.summary.skippedRows}`);
        console.log(`処理時刻: ${result.timestamp.toLocaleString()}`);
    }
} 
/**
 * データソースデコレーター
 * 
 * すべてのデコレーターの基底クラスです。
 * デコレーターは、ラップされたデータソースへの参照を保持し、
 * すべての操作をそのオブジェクトに委譲します。
 */
import { DataSource } from './DataSource';

export class DataSourceDecorator implements DataSource {
    /**
     * コンストラクタ
     * @param wrappee ラップするデータソース
     */
    constructor(protected wrappee: DataSource) {}

    /**
     * データを書き込みます
     * @param data 書き込むデータ
     */
    writeData(data: string): void {
        this.wrappee.writeData(data);
    }

    /**
     * データを読み込みます
     * @returns 読み込んだデータ
     */
    readData(): string {
        return this.wrappee.readData();
    }
} 
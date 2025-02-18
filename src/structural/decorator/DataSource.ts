/**
 * データソースインターフェース
 * 
 * データの読み書きの基本操作を定義します。
 * このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。
 */
export interface DataSource {
    /**
     * データを書き込みます
     * @param data 書き込むデータ
     */
    writeData(data: string): void;

    /**
     * データを読み込みます
     * @returns 読み込んだデータ
     */
    readData(): string;
} 
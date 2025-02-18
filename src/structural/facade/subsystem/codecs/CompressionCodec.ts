/**
 * 圧縮コーデック
 * 
 * ビデオ圧縮コーデックのインターフェースを定義します。
 */
export interface CompressionCodec {
    /**
     * コーデックの種類を取得します
     */
    getType(): string;

    /**
     * ビデオデータを圧縮します
     * @param data 圧縮するデータ
     * @returns 圧縮されたデータ
     */
    compress(data: string): string;

    /**
     * ビデオデータを解凍します
     * @param compressedData 圧縮されたデータ
     * @returns 解凍されたデータ
     */
    decompress(compressedData: string): string;
} 
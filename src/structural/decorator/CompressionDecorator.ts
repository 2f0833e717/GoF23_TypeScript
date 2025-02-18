/**
 * 圧縮デコレーター
 * 
 * データの書き込み時に圧縮し、読み込み時に解凍する機能を追加します。
 */
import { DataSourceDecorator } from './DataSourceDecorator';
import * as zlib from 'zlib';

export class CompressionDecorator extends DataSourceDecorator {
    /**
     * データを圧縮して書き込みます
     * @param data 書き込むデータ
     */
    writeData(data: string): void {
        const compressedData = this.compress(data);
        super.writeData(compressedData);
    }

    /**
     * データを読み込んで解凍します
     * @returns 解凍されたデータ
     */
    readData(): string {
        const compressedData = super.readData();
        if (!compressedData) {
            return '';
        }
        return this.decompress(compressedData);
    }

    /**
     * データを圧縮します
     * @param data 圧縮するデータ
     * @returns Base64エンコードされた圧縮データ
     */
    private compress(data: string): string {
        try {
            const buffer = Buffer.from(data, 'utf8');
            const compressed = zlib.deflateSync(buffer);
            return compressed.toString('base64');
        } catch (error) {
            console.error('データの圧縮に失敗しました:', error);
            return data;
        }
    }

    /**
     * データを解凍します
     * @param compressedData Base64エンコードされた圧縮データ
     * @returns 解凍されたデータ
     */
    private decompress(compressedData: string): string {
        try {
            const buffer = Buffer.from(compressedData, 'base64');
            const decompressed = zlib.inflateSync(buffer);
            return decompressed.toString('utf8');
        } catch (error) {
            console.error('データの解凍に失敗しました:', error);
            return compressedData;
        }
    }
} 
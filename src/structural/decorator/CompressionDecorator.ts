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
        if (data === null || data === undefined) {
            throw new Error('データが無効です');
        }

        if (typeof data !== 'string') {
            throw new Error('データは文字列である必要があります');
        }

        try {
            const compressedData = this.compress(data);
            super.writeData(compressedData);
        } catch (error) {
            console.error('データの書き込みに失敗しました:', error);
            throw new Error('データの書き込みに失敗しました');
        }
    }

    /**
     * データを読み込んで解凍します
     * @returns 解凍されたデータ
     */
    readData(): string {
        try {
            const compressedData = super.readData();
            if (!compressedData) {
                return '';
            }
            return this.decompress(compressedData);
        } catch (error) {
            console.error('データの読み込みに失敗しました:', error);
            throw new Error('データの読み込みに失敗しました');
        }
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
            throw new Error('データの圧縮に失敗しました');
        }
    }

    /**
     * データを解凍します
     * @param compressedData Base64エンコードされた圧縮データ
     * @returns 解凍されたデータ
     */
    private decompress(compressedData: string): string {
        try {
            if (!compressedData) {
                return '';
            }

            const buffer = Buffer.from(compressedData, 'base64');
            const decompressed = zlib.inflateSync(buffer);
            return decompressed.toString('utf8');
        } catch (error) {
            console.error('データの解凍に失敗しました:', error);
            throw new Error('データの解凍に失敗しました');
        }
    }
} 
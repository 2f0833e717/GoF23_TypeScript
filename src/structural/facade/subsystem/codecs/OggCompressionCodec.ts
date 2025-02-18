/**
 * Ogg圧縮コーデック
 * 
 * Ogg形式のビデオ圧縮を行うコーデックの実装です。
 */
import { CompressionCodec } from './CompressionCodec';

export class OggCompressionCodec implements CompressionCodec {
    /**
     * コーデックの種類を取得します
     */
    getType(): string {
        return 'ogg';
    }

    /**
     * Ogg形式でビデオデータを圧縮します
     * @param data 圧縮するデータ
     * @returns 圧縮されたデータ
     */
    compress(data: string): string {
        console.log('Ogg: データを圧縮しています...');
        return `[Ogg compressed] ${data}`;
    }

    /**
     * Ogg形式のビデオデータを解凍します
     * @param compressedData 圧縮されたデータ
     * @returns 解凍されたデータ
     */
    decompress(compressedData: string): string {
        console.log('Ogg: データを解凍しています...');
        return compressedData.replace('[Ogg compressed] ', '');
    }
} 
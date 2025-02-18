/**
 * ビデオコンバーター
 * 
 * 複雑なビデオ変換サブシステムに対するシンプルなインターフェースを提供するファサードです。
 */
import { VideoFile } from './subsystem/VideoFile';
import { CodecFactory } from './subsystem/CodecFactory';
import { BitrateReader } from './subsystem/BitrateReader';
import { AudioMixer } from './subsystem/AudioMixer';
import { CompressionCodec } from './subsystem/codecs/CompressionCodec';

export class VideoConverter {
    /**
     * ビデオを指定されたフォーマットに変換します
     * @param filename 入力ファイル名
     * @param format 出力フォーマット
     * @returns 変換後のファイル名
     */
    public convert(filename: string, format: string): string {
        console.log('VideoConverter: 変換を開始します...');

        // ビデオファイルを作成
        const file = new VideoFile(filename, this.extractCodec(filename), this.calculateDuration(filename));
        console.log(`入力ファイル: ${file.toString()}`);

        // ソースコーデックを抽出
        const sourceCodec = CodecFactory.extract(file);

        // 目的のコーデックを取得
        const destinationCodec = this.getCodec(format);

        // ビデオデータを読み取り
        const buffer = BitrateReader.read(file);

        // ビデオデータを変換
        let result = BitrateReader.convert(buffer, destinationCodec);

        // オーディオを処理
        const mixer = new AudioMixer();
        result = mixer.fix(result);
        result = mixer.mix(result);

        const outputFilename = this.generateOutputFilename(filename, format);
        console.log(`VideoConverter: 変換が完了しました => ${outputFilename}`);

        return outputFilename;
    }

    /**
     * ファイル名からコーデックを抽出します
     * @param filename ファイル名
     * @returns コーデックタイプ
     */
    private extractCodec(filename: string): string {
        const extension = filename.split('.').pop()?.toLowerCase() || '';
        return extension === 'mp4' ? 'mp4' : 'ogg';
    }

    /**
     * ファイルの長さを計算します（デモ用の簡易実装）
     * @param filename ファイル名
     * @returns 動画の長さ（秒）
     */
    private calculateDuration(filename: string): number {
        // 実際のアプリケーションでは、ファイルを解析して正確な長さを取得します
        return Math.floor(Math.random() * 180) + 60; // 60-240秒
    }

    /**
     * フォーマットに応じたコーデックを取得します
     * @param format フォーマット
     * @returns コーデック
     */
    private getCodec(format: string): CompressionCodec {
        const file = new VideoFile('temp', format, 0);
        return CodecFactory.extract(file);
    }

    /**
     * 出力ファイル名を生成します
     * @param inputFilename 入力ファイル名
     * @param format 出力フォーマット
     * @returns 出力ファイル名
     */
    private generateOutputFilename(inputFilename: string, format: string): string {
        const parts = inputFilename.split('.');
        // 拡張子を除いた部分を結合
        const baseName = parts.length > 1 ? parts.slice(0, -1).join('.') : parts[0];
        return `${baseName}_converted.${format}`;
    }
} 
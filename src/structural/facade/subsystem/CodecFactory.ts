/**
 * コーデックファクトリー
 * 
 * ビデオファイルのコーデックタイプに基づいて適切なコーデックを生成します。
 */
import { VideoFile } from './VideoFile';
import { MPEG4CompressionCodec } from './codecs/MPEG4CompressionCodec';
import { OggCompressionCodec } from './codecs/OggCompressionCodec';
import { CompressionCodec } from './codecs/CompressionCodec';

export class CodecFactory {
    /**
     * ファイルの拡張子からコーデックを抽出します
     * @param file ビデオファイル
     * @returns 適切なコーデック
     */
    public static extract(file: VideoFile): CompressionCodec {
        const type = file.getCodecType().toLowerCase();
        if (type.includes('mp4')) {
            console.log('CodecFactory: MPEG4コーデックを抽出しています...');
            return new MPEG4CompressionCodec();
        } else {
            console.log('CodecFactory: Oggコーデックを抽出しています...');
            return new OggCompressionCodec();
        }
    }
} 
/**
 * コーデックサブシステムのテスト
 * 
 * MPEG4とOggコーデックの機能をテストします。
 */
import { MPEG4CompressionCodec } from '../../../../../src/structural/facade/subsystem/codecs/MPEG4CompressionCodec';
import { OggCompressionCodec } from '../../../../../src/structural/facade/subsystem/codecs/OggCompressionCodec';

describe('Codec Subsystem', () => {
    describe('MPEG4 Codec', () => {
        let codec: MPEG4CompressionCodec;

        beforeEach(() => {
            codec = new MPEG4CompressionCodec();
        });

        test('should return correct codec type', () => {
            expect(codec.getType()).toBe('mp4');
        });

        test('should compress data with MPEG4 format', () => {
            const data = 'test video data';
            const compressed = codec.compress(data);
            expect(compressed).toBe('[MPEG4 compressed] test video data');
        });

        test('should decompress MPEG4 data', () => {
            const compressedData = '[MPEG4 compressed] test video data';
            const decompressed = codec.decompress(compressedData);
            expect(decompressed).toBe('test video data');
        });

        test('should handle empty data compression', () => {
            const compressed = codec.compress('');
            expect(compressed).toBe('[MPEG4 compressed] ');
        });

        test('should handle empty data decompression', () => {
            const decompressed = codec.decompress('[MPEG4 compressed] ');
            expect(decompressed).toBe('');
        });

        test('should handle special characters in data', () => {
            const data = 'test!@#$%^&*()_+ video データ';
            const compressed = codec.compress(data);
            const decompressed = codec.decompress(compressed);
            expect(decompressed).toBe(data);
        });
    });

    describe('Ogg Codec', () => {
        let codec: OggCompressionCodec;

        beforeEach(() => {
            codec = new OggCompressionCodec();
        });

        test('should return correct codec type', () => {
            expect(codec.getType()).toBe('ogg');
        });

        test('should compress data with Ogg format', () => {
            const data = 'test video data';
            const compressed = codec.compress(data);
            expect(compressed).toBe('[Ogg compressed] test video data');
        });

        test('should decompress Ogg data', () => {
            const compressedData = '[Ogg compressed] test video data';
            const decompressed = codec.decompress(compressedData);
            expect(decompressed).toBe('test video data');
        });

        test('should handle empty data compression', () => {
            const compressed = codec.compress('');
            expect(compressed).toBe('[Ogg compressed] ');
        });

        test('should handle empty data decompression', () => {
            const decompressed = codec.decompress('[Ogg compressed] ');
            expect(decompressed).toBe('');
        });

        test('should handle special characters in data', () => {
            const data = 'test!@#$%^&*()_+ video データ';
            const compressed = codec.compress(data);
            const decompressed = codec.decompress(compressed);
            expect(decompressed).toBe(data);
        });
    });

    describe('Codec Interoperability', () => {
        test('should not mix up different codec formats', () => {
            const mpeg4Codec = new MPEG4CompressionCodec();
            const oggCodec = new OggCompressionCodec();

            const data = 'test video data';
            const mpeg4Compressed = mpeg4Codec.compress(data);
            const oggCompressed = oggCodec.compress(data);

            expect(mpeg4Compressed).not.toBe(oggCompressed);
            expect(mpeg4Codec.decompress(mpeg4Compressed)).toBe(data);
            expect(oggCodec.decompress(oggCompressed)).toBe(data);
        });
    });
}); 
/**
 * ファサードパターンのテスト
 * 
 * ビデオ変換システムのファサードをテストします。
 */
import { VideoConverter } from '../../../src/structural/facade/VideoConverter';

describe('Facade Pattern - Video Converter', () => {
    let converter: VideoConverter;

    beforeEach(() => {
        converter = new VideoConverter();
    });

    describe('Format Conversion', () => {
        test('should convert MP4 to OGG', () => {
            const result = converter.convert('sample.mp4', 'ogg');
            expect(result).toBe('sample_converted.ogg');
        });

        test('should convert OGG to MP4', () => {
            const result = converter.convert('sample.ogg', 'mp4');
            expect(result).toBe('sample_converted.mp4');
        });

        test('should handle files without extension', () => {
            const result = converter.convert('sample', 'mp4');
            expect(result).toBe('sample_converted.mp4');
        });
    });

    describe('Edge Cases', () => {
        test('should handle empty filename', () => {
            const result = converter.convert('', 'mp4');
            expect(result).toBe('_converted.mp4');
        });

        test('should handle filename with multiple dots', () => {
            const result = converter.convert('my.sample.video.mp4', 'ogg');
            expect(result).toBe('my.sample.video_converted.ogg');
        });

        test('should handle uppercase extensions', () => {
            const result = converter.convert('sample.MP4', 'OGG');
            expect(result).toBe('sample_converted.OGG');
        });
    });

    describe('Complex Conversions', () => {
        test('should convert between same formats', () => {
            const result = converter.convert('sample.mp4', 'mp4');
            expect(result).toBe('sample_converted.mp4');
        });

        test('should handle special characters in filename', () => {
            const result = converter.convert('my-video_2024.mp4', 'ogg');
            expect(result).toBe('my-video_2024_converted.ogg');
        });
    });
}); 
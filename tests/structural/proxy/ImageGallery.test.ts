/**
 * プロキシパターンのテスト
 * 
 * 画像ギャラリーの機能と遅延読み込みをテストします。
 */
import { ImageGallery } from '../../../src/structural/proxy/ImageGallery';

describe('Proxy Pattern - Image Gallery', () => {
    let gallery: ImageGallery;

    beforeEach(() => {
        gallery = new ImageGallery();
    });

    describe('Image Management', () => {
        test('should add images to gallery', () => {
            gallery.addImage('test1.jpg');
            gallery.addImage('test2.jpg');
            expect(() => gallery.showImageInfo('test1.jpg')).not.toThrow();
            expect(() => gallery.showImageInfo('test2.jpg')).not.toThrow();
        });

        test('should not add duplicate images', () => {
            gallery.addImage('test.jpg');
            const initialInfo = gallery.showImageInfo('test.jpg');
            gallery.addImage('test.jpg');
            const finalInfo = gallery.showImageInfo('test.jpg');
            expect(initialInfo).toBe(finalInfo);
        });

        test('should throw error for non-existent images', () => {
            expect(() => gallery.displayImage('nonexistent.jpg')).toThrow();
            expect(() => gallery.showImageInfo('nonexistent.jpg')).toThrow();
            expect(() => gallery.isImageLoaded('nonexistent.jpg')).toThrow();
        });
    });

    describe('Lazy Loading', () => {
        test('should not load image until display is called', () => {
            gallery.addImage('test.jpg');
            expect(gallery.isImageLoaded('test.jpg')).toBe(false);

            gallery.displayImage('test.jpg');
            expect(gallery.isImageLoaded('test.jpg')).toBe(true);
        });

        test('should load metadata independently of image', () => {
            gallery.addImage('test.jpg');

            // メタデータの読み込みをトリガー
            gallery.showImageInfo('test.jpg');

            // 画像本体はまだ読み込まれていないはず
            expect(gallery.isImageLoaded('test.jpg')).toBe(false);
        });

        test('should reuse loaded image', () => {
            gallery.addImage('test.jpg');
            gallery.displayImage('test.jpg');
            const firstDisplayTime = Date.now();

            // 2回目の表示は即座に行われるはず
            gallery.displayImage('test.jpg');
            const secondDisplayTime = Date.now();

            expect(secondDisplayTime - firstDisplayTime).toBeLessThan(100);
        });
    });

    describe('Gallery Information', () => {
        test('should show gallery info with multiple images', () => {
            gallery.addImage('photo1.jpg');
            gallery.addImage('photo2.jpg');
            gallery.addImage('photo3.jpg');

            // ギャラリー情報の表示をテスト
            expect(() => gallery.showGalleryInfo()).not.toThrow();
        });

        test('should show individual image info', () => {
            gallery.addImage('test.jpg');

            // 画像情報の表示をテスト
            expect(() => gallery.showImageInfo('test.jpg')).not.toThrow();
        });
    });

    describe('Error Handling', () => {
        test('should handle invalid filenames', () => {
            expect(() => gallery.addImage('')).not.toThrow();
            expect(() => gallery.displayImage('')).toThrow();
        });

        test('should handle multiple operations on non-existent images', () => {
            expect(() => gallery.displayImage('missing.jpg')).toThrow();
            expect(() => gallery.showImageInfo('missing.jpg')).toThrow();
            expect(() => gallery.isImageLoaded('missing.jpg')).toThrow();
        });
    });
}); 
/**
 * プロキシパターンの使用例
 * 
 * 画像ギャラリーでの遅延読み込みの例を示します。
 */
import { ImageGallery } from '../../../src/structural/proxy/ImageGallery';

export function runProxyExample(): void {
    console.log('プロキシパターンの実行例:');
    console.log('--------------------------------');

    const gallery = new ImageGallery();

    // 1. 画像の追加
    console.log('1. 画像の追加:');
    gallery.addImage('landscape.jpg');
    gallery.addImage('portrait.jpg');
    gallery.addImage('wallpaper.jpg');
    console.log();

    // 2. ギャラリー情報の表示
    console.log('2. ギャラリー情報の表示:');
    gallery.showGalleryInfo();
    console.log();

    // 3. 特定の画像の情報表示（メタデータのみ読み込み）
    console.log('3. 画像情報の表示:');
    gallery.showImageInfo('landscape.jpg');
    console.log(`画像の読み込み状態: ${gallery.isImageLoaded('landscape.jpg') ? '読み込み済み' : '未読み込み'}`);
    console.log();

    // 4. 画像の表示（実際の画像を読み込み）
    console.log('4. 画像の表示:');
    gallery.displayImage('landscape.jpg');
    console.log(`画像の読み込み状態: ${gallery.isImageLoaded('landscape.jpg') ? '読み込み済み' : '未読み込み'}`);
    console.log();

    // 5. 2回目の表示（キャッシュを使用）
    console.log('5. 2回目の画像表示（キャッシュ使用）:');
    gallery.displayImage('landscape.jpg');
    console.log();

    // 6. エラーハンドリング
    console.log('6. エラーハンドリング:');
    try {
        gallery.displayImage('nonexistent.jpg');
    } catch (error) {
        console.log('エラー:', error.message);
    }
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runProxyExample();
} 
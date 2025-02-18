/**
 * 画像ギャラリー
 * 
 * 複数の画像を管理し、必要に応じて画像を表示します。
 * プロキシパターンを使用して、画像の遅延読み込みを実現します。
 */
import { Image } from './Image';
import { ProxyImage } from './ProxyImage';

export class ImageGallery {
    private images: Map<string, Image> = new Map();

    /**
     * ギャラリーに画像を追加します
     * @param filename 画像ファイル名
     */
    public addImage(filename: string): void {
        if (!this.images.has(filename)) {
            const image = new ProxyImage(filename);
            this.images.set(filename, image);
            console.log(`ギャラリーに画像を追加: ${filename}`);
        }
    }

    /**
     * 指定された画像を表示します
     * @param filename 画像ファイル名
     * @throws Error 画像が見つからない場合
     */
    public displayImage(filename: string): void {
        if (!filename) {
            throw new Error('ファイル名が指定されていません');
        }
        const image = this.images.get(filename);
        if (!image) {
            throw new Error(`画像が見つかりません: ${filename}`);
        }
        image.display();
    }

    /**
     * 画像のメタデータを表示します
     * @param filename 画像ファイル名
     * @throws Error 画像が見つからない場合
     */
    public showImageInfo(filename: string): void {
        const image = this.images.get(filename);
        if (!image) {
            throw new Error(`画像が見つかりません: ${filename}`);
        }

        const size = image.getSize();
        const resolution = image.getResolution();
        console.log('画像情報:');
        console.log(`- ファイル名: ${filename}`);
        console.log(`- サイズ: ${this.formatSize(size)}`);
        console.log(`- 解像度: ${resolution.width}x${resolution.height}`);
    }

    /**
     * すべての画像のメタデータを表示します
     */
    public showGalleryInfo(): void {
        console.log('ギャラリー情報:');
        console.log(`総画像数: ${this.images.size}`);

        let totalSize = 0;
        this.images.forEach(image => {
            totalSize += image.getSize();
        });

        console.log(`総サイズ: ${this.formatSize(totalSize)}`);
        console.log('\n画像一覧:');
        this.images.forEach(image => {
            const resolution = image.getResolution();
            console.log(`- ${image.getFilename()} (${resolution.width}x${resolution.height})`);
        });
    }

    /**
     * 指定された画像が読み込まれているかを確認します
     * @param filename 画像ファイル名
     * @returns 読み込み済みの場合はtrue
     * @throws Error 画像が見つからない場合
     */
    public isImageLoaded(filename: string): boolean {
        const image = this.images.get(filename);
        if (!image) {
            throw new Error(`画像が見つかりません: ${filename}`);
        }
        return (image as ProxyImage).isLoaded();
    }

    /**
     * ファイルサイズを読みやすい形式に変換します
     * @param bytes バイト数
     * @returns フォーマットされたサイズ文字列
     */
    private formatSize(bytes: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let size = bytes;
        let unitIndex = 0;

        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

        return `${size.toFixed(1)} ${units[unitIndex]}`;
    }
} 
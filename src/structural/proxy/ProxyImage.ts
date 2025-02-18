/**
 * 画像プロキシ
 * 
 * 実際の画像の代理として機能し、必要になるまで
 * 重い画像の読み込みを遅延させます。
 */
import { Image } from './Image';
import { RealImage } from './RealImage';

export class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private metadata: {
        size: number;
        resolution: { width: number; height: number };
    } | null = null;

    /**
     * コンストラクタ
     * @param filename 画像ファイル名
     */
    constructor(
        private readonly filename: string
    ) {
        console.log(`プロキシを作成: ${filename}`);
    }

    /**
     * メタデータを遅延読み込みします
     */
    private loadMetadata(): void {
        if (!this.metadata) {
            // 実際の画像を一時的に作成してメタデータを取得
            const tempImage = new RealImage(this.filename);
            this.metadata = {
                size: tempImage.getSize(),
                resolution: tempImage.getResolution()
            };
            console.log(`メタデータを読み込み: ${this.filename}`);
        }
    }

    /**
     * 実際の画像を遅延読み込みします
     */
    private loadRealImage(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
    }

    display(): void {
        this.loadRealImage();
        this.realImage!.display();
    }

    getSize(): number {
        this.loadMetadata();
        return this.metadata!.size;
    }

    getResolution(): { width: number; height: number } {
        this.loadMetadata();
        return { ...this.metadata!.resolution };
    }

    getFilename(): string {
        return this.filename;
    }

    /**
     * 実際の画像が読み込まれているかを確認します
     */
    isLoaded(): boolean {
        return this.realImage !== null;
    }

    /**
     * メタデータが読み込まれているかを確認します
     */
    hasMetadata(): boolean {
        return this.metadata !== null;
    }
} 
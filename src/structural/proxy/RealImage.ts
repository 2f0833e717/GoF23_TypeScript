/**
 * 実際の画像
 * 
 * 画像の実際の実装を提供します。
 * 画像の読み込みと表示を行います。
 */
import { Image } from './Image';

export class RealImage implements Image {
    private loaded: boolean = false;
    private size: number;
    private resolution: { width: number; height: number };
    private loadingTime: number;

    /**
     * コンストラクタ
     * @param filename 画像ファイル名
     */
    constructor(
        private readonly filename: string
    ) {
        // 実際のアプリケーションでは、ここで画像メタデータを読み込みます
        this.size = Math.floor(Math.random() * 10000000) + 1000000; // 1MB-10MB
        this.resolution = {
            width: Math.floor(Math.random() * 3840) + 1280, // 1280-3840px
            height: Math.floor(Math.random() * 2160) + 720  // 720-2160px
        };
        this.loadingTime = Math.floor(Math.random() * 2000) + 500; // 500-2500ms
    }

    /**
     * 画像を読み込みます
     */
    private loadImage(): void {
        if (!this.loaded) {
            console.log(`画像を読み込み中: ${this.filename}`);
            console.log(`サイズ: ${this.formatSize(this.size)}`);
            console.log(`解像度: ${this.resolution.width}x${this.resolution.height}`);

            // 画像読み込みをシミュレート
            const startTime = Date.now();
            while (Date.now() - startTime < this.loadingTime) {
                // ビジー待機
            }

            this.loaded = true;
            console.log(`画像の読み込みが完了: ${this.filename} (${this.loadingTime}ms)`);
        }
    }

    display(): void {
        this.loadImage();
        console.log(`画像を表示: ${this.filename}`);
    }

    getSize(): number {
        return this.size;
    }

    getResolution(): { width: number; height: number } {
        return { ...this.resolution };
    }

    getFilename(): string {
        return this.filename;
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
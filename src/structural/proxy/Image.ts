/**
 * 画像インターフェース
 * 
 * 画像の基本操作を定義します。
 * このインターフェースは実際の画像とプロキシの両方で実装されます。
 */
export interface Image {
    /**
     * 画像を表示します
     */
    display(): void;

    /**
     * 画像のサイズを取得します（バイト）
     */
    getSize(): number;

    /**
     * 画像の解像度を取得します
     */
    getResolution(): { width: number; height: number };

    /**
     * 画像のファイル名を取得します
     */
    getFilename(): string;
} 
/**
 * ビルダーインターフェース
 * 
 * 製品の各パーツを構築するためのメソッドを宣言します。
 */
export interface Builder {
    /**
     * パーツAを構築します
     */
    buildPartA(): void;

    /**
     * パーツBを構築します
     */
    buildPartB(): void;

    /**
     * パーツCを構築します
     */
    buildPartC(): void;
} 
/**
 * テキストフォーマット
 * 
 * テキストの書式設定に関する共有可能な属性を定義します。
 * フライウェイトパターンの共有部分を表現します。
 */
export interface TextFormat {
    /**
     * フォントファミリーを取得します
     */
    getFontFamily(): string;

    /**
     * フォントサイズを取得します
     */
    getFontSize(): number;

    /**
     * フォントの色を取得します
     */
    getColor(): string;

    /**
     * フォントのスタイル（太字、斜体など）を取得します
     */
    getStyle(): string[];

    /**
     * フォーマット情報を文字列として取得します
     */
    toString(): string;
} 
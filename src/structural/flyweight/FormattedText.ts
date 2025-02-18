/**
 * フォーマット済みテキスト
 * 
 * テキストとそのフォーマットを組み合わせた外部状態を表現します。
 * フライウェイトパターンのコンテキストとして機能します。
 */
import { TextFormat } from './TextFormat';

export class FormattedText {
    /**
     * コンストラクタ
     * @param text テキスト内容
     * @param format テキストフォーマット
     */
    constructor(
        private readonly text: string,
        private readonly format: TextFormat
    ) {}

    /**
     * テキスト内容を取得します
     */
    getText(): string {
        return this.text;
    }

    /**
     * テキストフォーマットを取得します
     */
    getFormat(): TextFormat {
        return this.format;
    }

    /**
     * フォーマット済みテキストを文字列として取得します
     */
    toString(): string {
        return `"${this.text}" (${this.format.toString()})`;
    }

    /**
     * オブジェクトのメモリ使用量を計算します（概算）
     * @returns メモリ使用量（バイト）
     */
    public getApproximateSize(): number {
        // テキストは2バイト/文字として計算
        return this.text.length * 2;
    }
} 
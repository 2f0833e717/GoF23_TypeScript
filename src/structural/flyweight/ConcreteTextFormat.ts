/**
 * 具象テキストフォーマット
 * 
 * テキストフォーマットの具体的な実装を提供します。
 * 共有可能な内部状態を保持します。
 */
import { TextFormat } from './TextFormat';

export class ConcreteTextFormat implements TextFormat {
    /**
     * コンストラクタ
     * @param fontFamily フォントファミリー
     * @param fontSize フォントサイズ
     * @param color フォントの色
     * @param style フォントのスタイル
     */
    constructor(
        private readonly fontFamily: string,
        private readonly fontSize: number,
        private readonly color: string,
        private readonly style: string[]
    ) {}

    getFontFamily(): string {
        return this.fontFamily;
    }

    getFontSize(): number {
        return this.fontSize;
    }

    getColor(): string {
        return this.color;
    }

    getStyle(): string[] {
        return [...this.style]; // 配列の防御的コピー
    }

    toString(): string {
        const styles = this.style.length > 0 ? ` [${this.style.join(', ')}]` : '';
        return `${this.fontFamily} ${this.fontSize}pt ${this.color}${styles}`;
    }

    /**
     * オブジェクトのメモリ使用量を計算します（概算）
     * @returns メモリ使用量（バイト）
     */
    public getApproximateSize(): number {
        // 文字列は2バイト/文字として計算
        const fontFamilySize = this.fontFamily.length * 2;
        const colorSize = this.color.length * 2;
        const styleSize = this.style.reduce((sum, s) => sum + s.length * 2, 0);
        
        // 数値は8バイト
        const numberSize = 8;
        
        // 配列のオーバーヘッド（概算）
        const arrayOverhead = 24;

        return fontFamilySize + colorSize + styleSize + numberSize + arrayOverhead;
    }
} 
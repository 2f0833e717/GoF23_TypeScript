/**
 * テキストエディタ
 * 
 * フォーマット済みテキストを管理し、メモリ効率の良い
 * テキスト編集機能を提供します。
 */
import { TextFormatFactory } from './TextFormatFactory';
import { FormattedText } from './FormattedText';
import { TextFormat } from './TextFormat';

export class TextEditor {
    private readonly formatFactory: TextFormatFactory;
    private readonly texts: FormattedText[] = [];
    private totalTextMemory: number = 0;

    /**
     * コンストラクタ
     */
    constructor() {
        this.formatFactory = TextFormatFactory.getInstance();
    }

    /**
     * フォーマット済みテキストを追加します
     * @param text テキスト内容
     * @param fontFamily フォントファミリー
     * @param fontSize フォントサイズ
     * @param color フォントの色
     * @param style フォントのスタイル
     */
    public addText(
        text: string,
        fontFamily: string,
        fontSize: number,
        color: string,
        style: string[] = []
    ): void {
        const format = this.formatFactory.getTextFormat(fontFamily, fontSize, color, style);
        const formattedText = new FormattedText(text, format);
        this.texts.push(formattedText);
        this.totalTextMemory += formattedText.getApproximateSize();

        console.log(`テキストを追加: ${formattedText.toString()}`);
        this.printMemoryUsage();
    }

    /**
     * 特定のフォーマットを使用しているテキストを検索します
     * @param format 検索するフォーマット
     * @returns フォーマットに一致するテキストの配列
     */
    public findTextsByFormat(format: TextFormat): FormattedText[] {
        return this.texts.filter(text => text.getFormat() === format);
    }

    /**
     * すべてのフォーマット済みテキストを取得します
     */
    public getAllTexts(): FormattedText[] {
        return [...this.texts];
    }

    /**
     * メモリ使用状況を出力します
     */
    private printMemoryUsage(): void {
        console.log('メモリ使用状況:');
        console.log(`- テキストデータ: ${this.totalTextMemory} bytes`);
        console.log(`- フォーマットデータ: ${this.formatFactory.getTotalMemoryUsage()} bytes`);
        console.log(`- 合計: ${this.totalTextMemory + this.formatFactory.getTotalMemoryUsage()} bytes`);
        console.log(`- フォーマット数: ${this.formatFactory.getFormatCount()}`);
        console.log(`- テキスト数: ${this.texts.length}`);
    }

    /**
     * エディタをクリアします
     */
    public clear(): void {
        this.texts.length = 0;
        this.totalTextMemory = 0;
        this.formatFactory.clearCache();
        console.log('エディタをクリアしました');
    }
} 
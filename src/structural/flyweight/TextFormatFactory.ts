/**
 * テキストフォーマットファクトリー
 * 
 * テキストフォーマットのフライウェイトオブジェクトを管理し、
 * 必要に応じて新しいインスタンスを作成または既存のインスタンスを返します。
 */
import { TextFormat } from './TextFormat';
import { ConcreteTextFormat } from './ConcreteTextFormat';

export class TextFormatFactory {
    private static instance: TextFormatFactory;
    private readonly formats: Map<string, TextFormat>;
    private formatCount: number = 0;
    private totalMemoryUsage: number = 0;

    private constructor() {
        this.formats = new Map<string, TextFormat>();
    }

    /**
     * ファクトリーのインスタンスを取得します
     */
    public static getInstance(): TextFormatFactory {
        if (!TextFormatFactory.instance) {
            TextFormatFactory.instance = new TextFormatFactory();
        }
        return TextFormatFactory.instance;
    }

    /**
     * テキストフォーマットを取得または作成します
     * @param fontFamily フォントファミリー
     * @param fontSize フォントサイズ
     * @param color フォントの色
     * @param style フォントのスタイル
     * @returns テキストフォーマット
     */
    public getTextFormat(
        fontFamily: string,
        fontSize: number,
        color: string,
        style: string[] = []
    ): TextFormat {
        // フォーマットの一意のキーを生成
        const key = this.generateKey(fontFamily, fontSize, color, style);

        // 既存のフォーマットがあれば再利用
        if (this.formats.has(key)) {
            return this.formats.get(key)!;
        }

        // 新しいフォーマットを作成
        const format = new ConcreteTextFormat(fontFamily, fontSize, color, style);
        this.formats.set(key, format);
        this.formatCount++;
        this.totalMemoryUsage += (format as ConcreteTextFormat).getApproximateSize();

        console.log(`新しいフォーマットを作成: ${format.toString()}`);
        console.log(`現在のフォーマット数: ${this.formatCount}`);
        console.log(`推定メモリ使用量: ${this.totalMemoryUsage} bytes`);

        return format;
    }

    /**
     * 現在のフォーマット数を取得します
     */
    public getFormatCount(): number {
        return this.formatCount;
    }

    /**
     * 推定メモリ使用量を取得します
     */
    public getTotalMemoryUsage(): number {
        return this.totalMemoryUsage;
    }

    /**
     * フォーマットの一意のキーを生成します
     */
    private generateKey(
        fontFamily: string,
        fontSize: number,
        color: string,
        style: string[]
    ): string {
        return `${fontFamily}-${fontSize}-${color}-${style.sort().join(',')}`;
    }

    /**
     * キャッシュをクリアします
     */
    public clearCache(): void {
        this.formats.clear();
        this.formatCount = 0;
        this.totalMemoryUsage = 0;
        console.log('フォーマットキャッシュをクリアしました');
    }
} 
/**
 * 文書プロトタイプ
 * 
 * 文書テンプレートの基底クラスです。
 * このクラスは、文書の基本構造とクローン機能を定義します。
 */
export abstract class DocumentPrototype {
    protected title: string;
    protected content: string;
    protected author: string;
    protected metadata: Map<string, string>;
    protected createdAt: Date;

    /**
     * コンストラクタ
     * @param title タイトル
     * @param content 内容
     * @param author 作成者
     */
    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.metadata = new Map<string, string>();
        this.createdAt = new Date();
    }

    /**
     * メタデータを追加します
     * @param key キー
     * @param value 値
     */
    public addMetadata(key: string, value: string): void {
        this.metadata.set(key, value);
    }

    /**
     * 文書の情報を文字列として取得します
     * @returns {string} 文書情報
     */
    public toString(): string {
        const metadataStr = Array.from(this.metadata.entries())
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        return `タイトル: ${this.title}
作成者: ${this.author}
作成日時: ${this.createdAt.toLocaleString()}
メタデータ:
${metadataStr}
内容:
${this.content}`;
    }

    /**
     * 文書をクローンします
     * @returns {DocumentPrototype} クローンされた文書
     */
    public abstract clone(): DocumentPrototype;

    /**
     * 基本プロパティをコピーします
     * @param target コピー先のオブジェクト
     */
    protected copyBasicProperties(target: DocumentPrototype): void {
        target.title = this.title;
        target.content = this.content;
        target.author = this.author;
        target.metadata = new Map(this.metadata);
        // 1ミリ秒待ってから新しい作成日時を設定
        const now = new Date();
        const delay = 1;
        now.setMilliseconds(now.getMilliseconds() + delay);
        target.createdAt = now;
    }
} 
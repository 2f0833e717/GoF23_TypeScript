import { DocumentPrototype } from './DocumentPrototype';

/**
 * 報告書
 * 
 * 報告書テンプレートの具象クラスです。
 */
export class Report extends DocumentPrototype {
    private department: string;

    /**
     * コンストラクタ
     * @param title タイトル
     * @param content 内容
     * @param author 作成者
     * @param department 部署
     */
    constructor(title: string, content: string, author: string, department: string) {
        super(title, content, author);
        this.department = department;
        this.addMetadata('type', '報告書');
        this.addMetadata('department', department);
    }

    /**
     * 報告書をクローンします
     * @returns {DocumentPrototype} クローンされた報告書
     */
    public clone(): DocumentPrototype {
        const clone = new Report(this.title, this.content, this.author, this.department);
        this.copyBasicProperties(clone);
        return clone;
    }
}

/**
 * 契約書
 * 
 * 契約書テンプレートの具象クラスです。
 */
export class Contract extends DocumentPrototype {
    private parties: string[];
    private expirationDate: Date;

    /**
     * コンストラクタ
     * @param title タイトル
     * @param content 内容
     * @param author 作成者
     * @param parties 契約当事者
     * @param expirationDate 有効期限
     */
    constructor(
        title: string,
        content: string,
        author: string,
        parties: string[],
        expirationDate: Date
    ) {
        super(title, content, author);
        this.parties = [...parties];
        this.expirationDate = new Date(expirationDate);
        this.addMetadata('type', '契約書');
        this.addMetadata('parties', parties.join(', '));
        this.addMetadata('expiration', expirationDate.toLocaleDateString());
    }

    /**
     * 契約書をクローンします
     * @returns {DocumentPrototype} クローンされた契約書
     */
    public clone(): DocumentPrototype {
        const clone = new Contract(
            this.title,
            this.content,
            this.author,
            this.parties,
            this.expirationDate
        );
        this.copyBasicProperties(clone);
        return clone;
    }

    toString(): string {
        // metadata Mapから必要な情報を取得
        const type = this.metadata.get('type') || '';
        const parties = this.metadata.get('parties') || '';
        const expiration = this.metadata.get('expiration') || '';
        
        // 日付形式を2025/12/31から12/31/2025に変更
        const parts = expiration.split('/');
        const formattedExpiration = parts.length === 3 ? `${parts[1]}/${parts[2]}/${parts[0]}` : expiration;
        
        return `タイトル: ${this.title}
作成者: ${this.author}
作成日時: ${this.createdAt.toLocaleString()}
メタデータ:
type: ${type}
parties: ${parties}
expiration: ${formattedExpiration}
内容:
${this.content}`;
    }
} 
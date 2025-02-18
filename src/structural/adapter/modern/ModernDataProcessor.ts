/**
 * モダンなシステムのデータ処理インターフェース
 * 新しい形式でデータを処理するシステムを想定
 */

export interface ModernData {
    identifier: string;
    name: string;
    value: any;
    metadata: {
        createdAt: Date;
        updatedAt: Date;
        version: number;
    };
}

export interface IModernDataProcessor {
    save(data: ModernData): Promise<void>;
    get(identifier: string): Promise<ModernData | null>;
    getAll(): Promise<ModernData[]>;
}

export class ModernDataProcessor implements IModernDataProcessor {
    private data: Map<string, ModernData>;

    constructor() {
        this.data = new Map<string, ModernData>();
    }

    /**
     * データを保存
     * @param data 保存するデータ
     */
    public async save(data: ModernData): Promise<void> {
        this.data.set(data.identifier, {
            ...data,
            metadata: {
                ...data.metadata,
                updatedAt: new Date()
            }
        });
        console.log('モダン形式でデータを保存:', data);
    }

    /**
     * データを取得
     * @param identifier データ識別子
     * @returns データオブジェクト
     */
    public async get(identifier: string): Promise<ModernData | null> {
        const data = this.data.get(identifier);
        return data || null;
    }

    /**
     * 全データを取得
     * @returns データオブジェクトの配列
     */
    public async getAll(): Promise<ModernData[]> {
        return Array.from(this.data.values());
    }
} 
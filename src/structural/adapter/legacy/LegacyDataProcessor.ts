/**
 * レガシーシステムのデータ処理インターフェース
 * 古い形式のデータ処理を行うシステムを想定
 */

export interface LegacyData {
    id: number;
    old_name: string;
    old_value: string;
    created_at: string;
}

export class LegacyDataProcessor {
    private data: LegacyData[];

    constructor() {
        this.data = [];
    }

    /**
     * レガシー形式でデータを保存
     * @param data 保存するデータ
     */
    public saveInLegacyFormat(data: LegacyData): void {
        this.data.push(data);
        console.log('レガシー形式でデータを保存:', data);
    }

    /**
     * レガシー形式でデータを取得
     * @param id データID
     * @returns レガシー形式のデータ
     */
    public getInLegacyFormat(id: number): LegacyData | undefined {
        return this.data.find(item => item.id === id);
    }

    /**
     * レガシー形式で全データを取得
     * @returns レガシー形式のデータ配列
     */
    public getAllInLegacyFormat(): LegacyData[] {
        return [...this.data];
    }
} 
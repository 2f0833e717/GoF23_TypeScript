/**
 * レガシーシステムをモダンなシステムに適応させるアダプター
 * レガシーデータをモダンなデータ形式に変換し、その逆も行う
 */

import { LegacyData, LegacyDataProcessor } from '../legacy/LegacyDataProcessor';
import { ModernData, IModernDataProcessor } from '../modern/ModernDataProcessor';

export class LegacyToModernAdapter implements IModernDataProcessor {
    private legacyProcessor: LegacyDataProcessor;

    constructor(legacyProcessor: LegacyDataProcessor) {
        this.legacyProcessor = legacyProcessor;
    }

    /**
     * レガシーデータをモダンなデータに変換
     * @param legacyData レガシーデータ
     * @returns モダンなデータ
     */
    private convertToModern(legacyData: LegacyData): ModernData {
        let value: any;
        try {
            value = JSON.parse(legacyData.old_value);
        } catch {
            value = legacyData.old_value;
        }

        return {
            identifier: legacyData.id.toString(),
            name: legacyData.old_name,
            value: value,
            metadata: {
                createdAt: new Date(legacyData.created_at),
                updatedAt: new Date(),
                version: 1
            }
        };
    }

    /**
     * モダンなデータをレガシーデータに変換
     * @param modernData モダンなデータ
     * @returns レガシーデータ
     * @throws Error 無効な識別子の場合
     */
    private convertToLegacy(modernData: ModernData): LegacyData {
        const id = parseInt(modernData.identifier);
        if (isNaN(id)) {
            throw new Error(`Invalid identifier format: ${modernData.identifier}`);
        }

        const value = typeof modernData.value === 'object'
            ? JSON.stringify(modernData.value)
            : modernData.value.toString();

        return {
            id: id,
            old_name: modernData.name,
            old_value: value,
            created_at: modernData.metadata.createdAt.toISOString()
        };
    }

    /**
     * モダンなインターフェースでデータを保存
     * @param data モダンなデータ
     * @throws Error 無効な識別子の場合
     */
    public async save(data: ModernData): Promise<void> {
        const legacyData = this.convertToLegacy(data);
        this.legacyProcessor.saveInLegacyFormat(legacyData);
    }

    /**
     * モダンなインターフェースでデータを取得
     * @param identifier データ識別子
     * @returns モダンなデータ
     * @throws Error 無効な識別子の場合
     */
    public async get(identifier: string): Promise<ModernData | null> {
        const id = parseInt(identifier);
        if (isNaN(id)) {
            throw new Error(`Invalid identifier format: ${identifier}`);
        }
        const legacyData = this.legacyProcessor.getInLegacyFormat(id);
        return legacyData ? this.convertToModern(legacyData) : null;
    }

    /**
     * モダンなインターフェースで全データを取得
     * @returns モダンなデータの配列
     */
    public async getAll(): Promise<ModernData[]> {
        const legacyDataList = this.legacyProcessor.getAllInLegacyFormat();
        return legacyDataList.map(data => this.convertToModern(data));
    }
} 
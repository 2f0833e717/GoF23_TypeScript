/**
 * アダプターパターンのテスト
 * レガシーシステムとモダンなシステム間のデータ変換をテスト
 */

import { LegacyDataProcessor, LegacyData } from '../../../src/structural/adapter/legacy/LegacyDataProcessor';
import { ModernData } from '../../../src/structural/adapter/modern/ModernDataProcessor';
import { LegacyToModernAdapter } from '../../../src/structural/adapter/adapter/LegacyToModernAdapter';

describe('Legacy to Modern Adapter Pattern', () => {
    let legacyProcessor: LegacyDataProcessor;
    let adapter: LegacyToModernAdapter;

    beforeEach(() => {
        legacyProcessor = new LegacyDataProcessor();
        adapter = new LegacyToModernAdapter(legacyProcessor);
    });

    describe('Data Conversion', () => {
        const testModernData: ModernData = {
            identifier: '1',
            name: 'テストデータ',
            value: 'テスト値',
            metadata: {
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
                version: 1
            }
        };

        test('should save modern data through adapter', async () => {
            await adapter.save(testModernData);
            const legacyData = legacyProcessor.getInLegacyFormat(1);

            expect(legacyData).toBeDefined();
            expect(legacyData?.id).toBe(1);
            expect(legacyData?.old_name).toBe('テストデータ');
            expect(legacyData?.old_value).toBe('テスト値');
        });

        test('should retrieve modern data through adapter', async () => {
            const legacyData: LegacyData = {
                id: 1,
                old_name: 'レガシーデータ',
                old_value: 'レガシー値',
                created_at: '2024-01-01T00:00:00.000Z'
            };

            legacyProcessor.saveInLegacyFormat(legacyData);
            const modernData = await adapter.get('1');

            expect(modernData).not.toBeNull();
            expect(modernData?.identifier).toBe('1');
            expect(modernData?.name).toBe('レガシーデータ');
            expect(modernData?.value).toBe('レガシー値');
            expect(modernData?.metadata.createdAt).toEqual(new Date('2024-01-01T00:00:00.000Z'));
        });

        test('should return null for non-existent data', async () => {
            const modernData = await adapter.get('999');
            expect(modernData).toBeNull();
        });

        test('should retrieve all data through adapter', async () => {
            const legacyData1: LegacyData = {
                id: 1,
                old_name: 'レガシーデータ1',
                old_value: 'レガシー値1',
                created_at: '2024-01-01T00:00:00.000Z'
            };

            const legacyData2: LegacyData = {
                id: 2,
                old_name: 'レガシーデータ2',
                old_value: 'レガシー値2',
                created_at: '2024-01-02T00:00:00.000Z'
            };

            legacyProcessor.saveInLegacyFormat(legacyData1);
            legacyProcessor.saveInLegacyFormat(legacyData2);

            const allModernData = await adapter.getAll();

            expect(allModernData).toHaveLength(2);
            expect(allModernData[0].identifier).toBe('1');
            expect(allModernData[1].identifier).toBe('2');
            expect(allModernData[0].name).toBe('レガシーデータ1');
            expect(allModernData[1].name).toBe('レガシーデータ2');
        });
    });

    describe('Error Handling', () => {
        test('should handle invalid identifier format', async () => {
            const modernData: ModernData = {
                identifier: 'invalid',
                name: 'テストデータ',
                value: 'テスト値',
                metadata: {
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    version: 1
                }
            };

            await expect(adapter.save(modernData)).rejects.toThrow();
        });

        test('should handle data type conversion', async () => {
            const modernData: ModernData = {
                identifier: '1',
                name: 'テストデータ',
                value: 123,  // 数値型
                metadata: {
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    version: 1
                }
            };

            await adapter.save(modernData);
            const legacyData = legacyProcessor.getInLegacyFormat(1);

            expect(legacyData).toBeDefined();
            expect(legacyData?.old_value).toBe('123');  // 文字列に変換されていることを確認
        });
    });
}); 
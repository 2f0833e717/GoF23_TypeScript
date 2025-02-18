/**
 * アダプターパターンの使用例
 * レガシーシステムとモダンなシステム間のデータ変換を実演
 */

import { LegacyDataProcessor } from '../../../src/structural/adapter/legacy/LegacyDataProcessor';
import { ModernDataProcessor, ModernData } from '../../../src/structural/adapter/modern/ModernDataProcessor';
import { LegacyToModernAdapter } from '../../../src/structural/adapter/adapter/LegacyToModernAdapter';

export async function runAdapterExample(): Promise<void> {
    // レガシーシステムのセットアップ
    console.log('1. レガシーシステムのセットアップ');
    const legacyProcessor = new LegacyDataProcessor();
    const adapter = new LegacyToModernAdapter(legacyProcessor);

    // モダンなシステムのセットアップ
    console.log('2. モダンなシステムのセットアップ');
    const modernProcessor = new ModernDataProcessor();

    // モダンなデータの作成
    console.log('3. モダンなデータの作成');
    const modernData: ModernData = {
        identifier: '1',
        name: '新規プロジェクト計画',
        value: {
            description: 'TypeScriptを使用した新規開発プロジェクト',
            status: 'planning'
        },
        metadata: {
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1
        }
    };

    // モダンなシステムでデータを保存
    console.log('4. モダンなシステムでデータを保存');
    await modernProcessor.save(modernData);
    console.log('保存されたモダンなデータ:', await modernProcessor.get('1'));

    // アダプターを使用してレガシーシステムにデータを保存
    console.log('\n5. アダプターを使用してレガシーシステムにデータを保存');
    await adapter.save(modernData);

    // アダプターを使用してレガシーシステムからデータを取得
    console.log('\n6. アダプターを使用してレガシーシステムからデータを取得');
    const retrievedData = await adapter.get('1');
    console.log('取得されたデータ:', retrievedData);

    // 複数のデータを処理
    console.log('\n7. 複数のデータの処理');
    const modernData2: ModernData = {
        identifier: '2',
        name: 'レガシーシステム移行計画',
        value: {
            description: 'レガシーシステムのモダン化プロジェクト',
            status: 'in_progress'
        },
        metadata: {
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1
        }
    };

    await adapter.save(modernData2);
    const allData = await adapter.getAll();
    console.log('全てのデータ:', allData);

    // エラーハンドリングのデモ
    console.log('\n8. エラーハンドリングのデモ');
    try {
        const invalidData: ModernData = {
            identifier: 'invalid',
            name: '不正なデータ',
            value: 'テスト',
            metadata: {
                createdAt: new Date(),
                updatedAt: new Date(),
                version: 1
            }
        };
        await adapter.save(invalidData);
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

// 使用例の実行
runAdapterExample().catch(error => {
    console.error('実行中にエラーが発生しました:', error);
}); 
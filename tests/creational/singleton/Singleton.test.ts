import { Singleton } from '../../../src/creational/singleton/Singleton';

describe('Singleton Pattern', () => {
    describe('インスタンス生成', () => {
        test('getInstance()で取得したインスタンスが同一であること', () => {
            const instance1 = Singleton.getInstance();
            const instance2 = Singleton.getInstance();
            expect(instance1).toBe(instance2);
        });

        test('new演算子での直接インスタンス化でエラーが発生すること', () => {
            expect(() => {
                new (Singleton as any)();
            }).toThrow('このクラスは new による直接のインスタンス化はできません。getInstance() を使用してください。');
        });
    });

    describe('データ操作', () => {
        test('データの設定と取得が正しく動作すること', () => {
            const instance = Singleton.getInstance();
            const testData = 'テストデータ';
            
            instance.setData(testData);
            expect(instance.getData()).toBe(testData);
        });

        test('異なるインスタンス参照でも同じデータが共有されること', () => {
            const instance1 = Singleton.getInstance();
            const instance2 = Singleton.getInstance();
            const testData = 'shared data';

            instance1.setData(testData);
            expect(instance2.getData()).toBe(testData);
        });
    });
}); 
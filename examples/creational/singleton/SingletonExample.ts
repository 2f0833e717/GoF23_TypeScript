import { Singleton } from '../../../src/creational/singleton/Singleton';

/**
 * シングルトンパターンの使用例
 */
export function runSingletonExample(): void {
    console.log('シングルトンパターンの実行例:');
    console.log('--------------------------------');

    // 最初のインスタンスを取得
    const instance1 = Singleton.getInstance();
    instance1.setData('First Instance Data');
    console.log('Instance1のデータ:', instance1.getData());

    // 2番目のインスタンスを取得（実際は同じインスタンス）
    const instance2 = Singleton.getInstance();
    console.log('Instance2のデータ:', instance2.getData());

    // データを変更
    instance2.setData('Updated Data');
    console.log('Instance1のデータ（更新後）:', instance1.getData());
    console.log('Instance2のデータ（更新後）:', instance2.getData());

    // インスタンスが同一であることを確認
    console.log('instance1 === instance2:', instance1 === instance2);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runSingletonExample();
} 
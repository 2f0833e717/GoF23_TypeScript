/**
 * Stateパターンの使用例
 * 
 * 自動販売機の状態遷移と操作を示します。
 * - 商品の管理
 * - お金の投入と返却
 * - 商品の選択と購入
 * - 状態に応じた振る舞いの変化
 */

import { VendingMachine, Product } from '../../../src/behavioral/state/VendingMachine';

export function runStateExample(): void {
    console.log('Stateパターンの実行例:');
    console.log('--------------------------------');

    // 自動販売機の初期化
    const vendingMachine = new VendingMachine();

    // 商品の登録
    console.log('1. 商品の登録:');
    const products: Product[] = [
        { id: 'cola', name: 'コーラ', price: 150, quantity: 5 },
        { id: 'water', name: '水', price: 100, quantity: 3 },
        { id: 'coffee', name: 'コーヒー', price: 130, quantity: 4 },
        { id: 'tea', name: 'お茶', price: 120, quantity: 0 }
    ];

    products.forEach(product => {
        vendingMachine.addProduct(product);
        console.log(`- ${product.name} (${product.price}円) x ${product.quantity}個`);
    });
    console.log();

    // お金を投入せずに商品を選択
    console.log('2. お金を投入せずに商品を選択:');
    console.log(`状態: ${vendingMachine.getCurrentStateName()}`);
    console.log(vendingMachine.selectProduct('cola'));
    console.log();

    // お金を投入
    console.log('3. お金を投入:');
    console.log(vendingMachine.insertMoney(100));
    console.log(`状態: ${vendingMachine.getCurrentStateName()}`);
    console.log();

    // 投入金額不足で商品を選択
    console.log('4. 投入金額不足で商品を選択:');
    console.log(vendingMachine.selectProduct('cola'));
    console.log();

    // 追加でお金を投入
    console.log('5. 追加でお金を投入:');
    console.log(vendingMachine.insertMoney(100));
    console.log();

    // 売り切れ商品を選択
    console.log('6. 売り切れ商品を選択:');
    console.log(vendingMachine.selectProduct('tea'));
    console.log();

    // 有効な商品を選択
    console.log('7. 有効な商品を選択:');
    console.log(vendingMachine.selectProduct('cola'));
    console.log(`状態: ${vendingMachine.getCurrentStateName()}`);
    console.log();

    // 商品選択後に追加でお金を投入しようとする
    console.log('8. 商品選択後に追加でお金を投入:');
    console.log(vendingMachine.insertMoney(50));
    console.log();

    // 購入を完了
    console.log('9. 購入を完了:');
    console.log(vendingMachine.dispenseChange());
    console.log(`状態: ${vendingMachine.getCurrentStateName()}`);

    // 在庫の確認
    const cola = vendingMachine.getProduct('cola');
    console.log(`コーラの残り在庫: ${cola?.quantity}個`);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runStateExample();
} 
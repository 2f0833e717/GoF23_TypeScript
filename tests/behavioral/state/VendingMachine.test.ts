import { VendingMachine, Product } from '../../../src/behavioral/state/VendingMachine';

describe('State Pattern - Vending Machine Tests', () => {
    let vendingMachine: VendingMachine;
    let testProducts: Product[];

    beforeEach(() => {
        vendingMachine = new VendingMachine();
        testProducts = [
            { id: 'cola', name: 'コーラ', price: 150, quantity: 5 },
            { id: 'water', name: '水', price: 100, quantity: 3 },
            { id: 'coffee', name: 'コーヒー', price: 130, quantity: 0 }
        ];
        testProducts.forEach(product => vendingMachine.addProduct(product));
    });

    describe('初期状態（NoMoneyState）', () => {
        test('初期状態の確認', () => {
            expect(vendingMachine.getCurrentStateName()).toBe('NoMoney');
            expect(vendingMachine.getInsertedAmount()).toBe(0);
            expect(vendingMachine.getSelectedProduct()).toBeNull();
        });

        test('お金が投入されていない状態での操作', () => {
            expect(vendingMachine.selectProduct('cola')).toBe('お金を投入してください');
            expect(vendingMachine.dispenseChange()).toBe('お金が投入されていません');
        });

        test('無効な金額の投入', () => {
            expect(vendingMachine.insertMoney(0)).toBe('有効な金額を投入してください');
            expect(vendingMachine.insertMoney(-100)).toBe('有効な金額を投入してください');
        });

        test('有効な金額の投入', () => {
            expect(vendingMachine.insertMoney(100)).toBe('100円が投入されました');
            expect(vendingMachine.getCurrentStateName()).toBe('HasMoney');
            expect(vendingMachine.getInsertedAmount()).toBe(100);
        });
    });

    describe('お金が投入された状態（HasMoneyState）', () => {
        beforeEach(() => {
            vendingMachine.insertMoney(200);
        });

        test('追加の金額投入', () => {
            expect(vendingMachine.insertMoney(100))
                .toBe('100円が追加で投入されました。合計: 300円');
            expect(vendingMachine.getInsertedAmount()).toBe(300);
        });

        test('存在しない商品の選択', () => {
            expect(vendingMachine.selectProduct('invalid'))
                .toBe('選択された商品は存在しません');
        });

        test('売り切れ商品の選択', () => {
            expect(vendingMachine.selectProduct('coffee'))
                .toBe('選択された商品は売り切れです');
        });

        test('投入金額不足での商品選択', () => {
            vendingMachine = new VendingMachine();
            testProducts.forEach(product => vendingMachine.addProduct(product));
            vendingMachine.insertMoney(50);
            expect(vendingMachine.selectProduct('cola'))
                .toBe('投入金額が不足しています');
        });

        test('有効な商品選択', () => {
            expect(vendingMachine.selectProduct('cola'))
                .toBe('コーラが選択されました');
            expect(vendingMachine.getCurrentStateName())
                .toBe('ProductSelected');
            expect(vendingMachine.getSelectedProduct()?.name)
                .toBe('コーラ');
        });

        test('お釣りの返却', () => {
            expect(vendingMachine.dispenseChange())
                .toBe('200円のお釣りが返却されました');
            expect(vendingMachine.getCurrentStateName())
                .toBe('NoMoney');
            expect(vendingMachine.getInsertedAmount())
                .toBe(0);
        });
    });

    describe('商品が選択された状態（ProductSelectedState）', () => {
        beforeEach(() => {
            vendingMachine.insertMoney(200);
            vendingMachine.selectProduct('cola');
        });

        test('商品選択済みの状態での追加投入', () => {
            expect(vendingMachine.insertMoney(100))
                .toBe('商品が選択されています。購入を完了するか、お釣りを返却してください');
        });

        test('商品選択済みの状態での別商品選択', () => {
            expect(vendingMachine.selectProduct('water'))
                .toBe('商品が既に選択されています');
        });

        test('商品の購入完了', () => {
            const result = vendingMachine.dispenseChange();
            expect(result).toBe('コーラを購入しました。お釣り: 50円');

            // 状態の確認
            expect(vendingMachine.getCurrentStateName()).toBe('NoMoney');
            expect(vendingMachine.getInsertedAmount()).toBe(0);
            expect(vendingMachine.getSelectedProduct()).toBeNull();

            // 在庫の確認
            const updatedProduct = vendingMachine.getProduct('cola');
            expect(updatedProduct?.quantity).toBe(4);
        });
    });

    describe('商品管理', () => {
        test('商品の追加と取得', () => {
            const newProduct: Product = {
                id: 'tea',
                name: 'お茶',
                price: 120,
                quantity: 10
            };
            vendingMachine.addProduct(newProduct);

            const products = vendingMachine.getAllProducts();
            expect(products).toHaveLength(4);
            expect(products.find(p => p.id === 'tea')).toEqual(newProduct);
        });

        test('商品の在庫更新', () => {
            vendingMachine.updateProductQuantity('water', 10);
            const product = vendingMachine.getProduct('water');
            expect(product?.quantity).toBe(10);
        });

        test('存在しない商品の在庫更新', () => {
            vendingMachine.updateProductQuantity('invalid', 10);
            expect(vendingMachine.getProduct('invalid')).toBeUndefined();
        });
    });
}); 
/**
 * 自動販売機システム
 * 
 * Stateパターンを使用して、自動販売機の状態に応じた振る舞いを管理します。
 * - 商品の在庫管理
 * - 投入金額の管理
 * - 商品の販売処理
 * - お釣りの返却
 */

/**
 * 商品を表すインターフェース
 */
export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

/**
 * 自動販売機の状態を表すインターフェース
 */
export interface VendingMachineState {
    /**
     * お金を投入します
     * @param amount 投入金額
     * @returns 操作結果のメッセージ
     */
    insertMoney(amount: number): string;

    /**
     * 商品を選択します
     * @param productId 商品ID
     * @returns 操作結果のメッセージ
     */
    selectProduct(productId: string): string;

    /**
     * お釣りを返却します
     * @returns 操作結果のメッセージ
     */
    dispenseChange(): string;

    /**
     * 現在の状態名を取得します
     */
    getStateName(): string;
}

/**
 * 自動販売機クラス
 */
export class VendingMachine {
    private state: VendingMachineState;
    private products: Map<string, Product> = new Map();
    private insertedAmount: number = 0;
    private selectedProduct: Product | null = null;

    constructor() {
        // 初期状態を設定
        this.state = new NoMoneyState(this);
    }

    /**
     * 商品を追加します
     * @param product 追加する商品
     */
    addProduct(product: Product): void {
        this.products.set(product.id, { ...product });
    }

    /**
     * 商品の在庫を更新します
     * @param productId 商品ID
     * @param quantity 新しい在庫数
     */
    updateProductQuantity(productId: string, quantity: number): void {
        const product = this.products.get(productId);
        if (product) {
            product.quantity = quantity;
        }
    }

    /**
     * 商品を取得します
     * @param productId 商品ID
     */
    getProduct(productId: string): Product | undefined {
        return this.products.get(productId);
    }

    /**
     * 全商品を取得します
     */
    getAllProducts(): Product[] {
        return Array.from(this.products.values());
    }

    /**
     * 投入金額を取得します
     */
    getInsertedAmount(): number {
        return this.insertedAmount;
    }

    /**
     * 投入金額を設定します
     */
    setInsertedAmount(amount: number): void {
        this.insertedAmount = amount;
    }

    /**
     * 選択された商品を取得します
     */
    getSelectedProduct(): Product | null {
        return this.selectedProduct;
    }

    /**
     * 選択された商品を設定します
     */
    setSelectedProduct(product: Product | null): void {
        this.selectedProduct = product;
    }

    /**
     * 状態を変更します
     */
    setState(state: VendingMachineState): void {
        this.state = state;
    }

    /**
     * 現在の状態を取得します
     */
    getState(): VendingMachineState {
        return this.state;
    }

    // 以下、状態に応じた操作の委譲

    insertMoney(amount: number): string {
        return this.state.insertMoney(amount);
    }

    selectProduct(productId: string): string {
        return this.state.selectProduct(productId);
    }

    dispenseChange(): string {
        return this.state.dispenseChange();
    }

    /**
     * 現在の状態名を取得します
     */
    getCurrentStateName(): string {
        return this.state.getStateName();
    }
}

/**
 * お金が投入されていない状態
 */
export class NoMoneyState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) { }

    insertMoney(amount: number): string {
        if (amount <= 0) {
            return '有効な金額を投入してください';
        }
        this.vendingMachine.setInsertedAmount(amount);
        this.vendingMachine.setState(new HasMoneyState(this.vendingMachine));
        return `${amount}円が投入されました`;
    }

    selectProduct(productId: string): string {
        return 'お金を投入してください';
    }

    dispenseChange(): string {
        return 'お金が投入されていません';
    }

    getStateName(): string {
        return 'NoMoney';
    }
}

/**
 * お金が投入された状態
 */
export class HasMoneyState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) { }

    insertMoney(amount: number): string {
        if (amount <= 0) {
            return '有効な金額を投入してください';
        }
        const newAmount = this.vendingMachine.getInsertedAmount() + amount;
        this.vendingMachine.setInsertedAmount(newAmount);
        return `${amount}円が追加で投入されました。合計: ${newAmount}円`;
    }

    selectProduct(productId: string): string {
        const product = this.vendingMachine.getProduct(productId);
        if (!product) {
            return '選択された商品は存在しません';
        }
        if (product.quantity <= 0) {
            return '選択された商品は売り切れです';
        }
        if (this.vendingMachine.getInsertedAmount() < product.price) {
            return '投入金額が不足しています';
        }

        this.vendingMachine.setSelectedProduct(product);
        this.vendingMachine.setState(new ProductSelectedState(this.vendingMachine));
        return `${product.name}が選択されました`;
    }

    dispenseChange(): string {
        const amount = this.vendingMachine.getInsertedAmount();
        this.vendingMachine.setInsertedAmount(0);
        this.vendingMachine.setState(new NoMoneyState(this.vendingMachine));
        return `${amount}円のお釣りが返却されました`;
    }

    getStateName(): string {
        return 'HasMoney';
    }
}

/**
 * 商品が選択された状態
 */
export class ProductSelectedState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) { }

    insertMoney(amount: number): string {
        return '商品が選択されています。購入を完了するか、お釣りを返却してください';
    }

    selectProduct(productId: string): string {
        return '商品が既に選択されています';
    }

    dispenseChange(): string {
        const product = this.vendingMachine.getSelectedProduct();
        if (!product) {
            return 'エラー: 商品が選択されていません';
        }

        const insertedAmount = this.vendingMachine.getInsertedAmount();
        const change = insertedAmount - product.price;

        // 商品の在庫を減らす
        this.vendingMachine.updateProductQuantity(product.id, product.quantity - 1);

        // 状態をリセット
        this.vendingMachine.setInsertedAmount(0);
        this.vendingMachine.setSelectedProduct(null);
        this.vendingMachine.setState(new NoMoneyState(this.vendingMachine));

        return `${product.name}を購入しました。お釣り: ${change}円`;
    }

    getStateName(): string {
        return 'ProductSelected';
    }
} 
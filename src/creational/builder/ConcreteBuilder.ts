import { Builder } from './Builder';
import { Product } from './Product';

/**
 * 具象ビルダー
 * 
 * ビルダーインターフェースの具体的な実装を提供します。
 * 製品の構築手順を定義し、最終的な製品を返します。
 */
export class ConcreteBuilder implements Builder {
    private product!: Product;

    /**
     * 新しい製品の構築を開始します
     */
    constructor() {
        this.reset();
    }

    /**
     * ビルダーをリセットします
     */
    public reset(): void {
        this.product = new Product();
    }

    /**
     * パーツAを構築します
     */
    public buildPartA(): void {
        this.product.add('PartA1');
    }

    /**
     * パーツBを構築します
     */
    public buildPartB(): void {
        this.product.add('PartB1');
    }

    /**
     * パーツCを構築します
     */
    public buildPartC(): void {
        this.product.add('PartC1');
    }

    /**
     * 構築した製品を取得します
     * @returns {Product} 構築された製品
     */
    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
} 
import { Product } from './Product';

/**
 * 具象製品A
 * 
 * Product インターフェースの具象実装を提供します。
 */
export class ConcreteProductA implements Product {
    /**
     * 製品Aの操作を実行します
     * @returns {string} 操作の結果
     */
    operation(): string {
        return 'ConcreteProductA';
    }
}

/**
 * 具象製品B
 * 
 * Product インターフェースの別の具象実装を提供します。
 */
export class ConcreteProductB implements Product {
    /**
     * 製品Bの操作を実行します
     * @returns {string} 操作の結果
     */
    operation(): string {
        return 'ConcreteProductB';
    }
} 
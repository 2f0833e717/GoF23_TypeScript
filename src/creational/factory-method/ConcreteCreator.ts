import { Creator } from './Creator';
import { Product } from './Product';
import { ConcreteProductA, ConcreteProductB } from './ConcreteProduct';

/**
 * 具象クリエイターA
 * 
 * ConcreteProductA を生成するクリエイターの実装を提供します。
 */
export class ConcreteCreatorA extends Creator {
    /**
     * ファクトリーメソッドの実装
     * @returns {Product} ConcreteProductA のインスタンス
     */
    protected factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

/**
 * 具象クリエイターB
 * 
 * ConcreteProductB を生成するクリエイターの実装を提供します。
 */
export class ConcreteCreatorB extends Creator {
    /**
     * ファクトリーメソッドの実装
     * @returns {Product} ConcreteProductB のインスタンス
     */
    protected factoryMethod(): Product {
        return new ConcreteProductB();
    }
} 
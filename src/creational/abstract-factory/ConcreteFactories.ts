import { AbstractFactory } from './AbstractFactory';
import { AbstractProductA, AbstractProductB } from './AbstractProducts';
import { ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2 } from './ConcreteProducts';

/**
 * 具象ファクトリー1
 * 
 * 製品の第1バリエーションファミリーを生成する具象ファクトリーです。
 */
export class ConcreteFactory1 implements AbstractFactory {
    /**
     * 製品A1を生成します
     * @returns {AbstractProductA} 生成された製品A1
     */
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    /**
     * 製品B1を生成します
     * @returns {AbstractProductB} 生成された製品B1
     */
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

/**
 * 具象ファクトリー2
 * 
 * 製品の第2バリエーションファミリーを生成する具象ファクトリーです。
 */
export class ConcreteFactory2 implements AbstractFactory {
    /**
     * 製品A2を生成します
     * @returns {AbstractProductA} 生成された製品A2
     */
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    /**
     * 製品B2を生成します
     * @returns {AbstractProductB} 生成された製品B2
     */
    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
} 
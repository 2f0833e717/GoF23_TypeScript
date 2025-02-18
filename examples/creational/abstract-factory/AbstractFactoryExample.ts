import { AbstractFactory } from '../../../src/creational/abstract-factory/AbstractFactory';
import { AbstractProductA } from '../../../src/creational/abstract-factory/AbstractProducts';
import { AbstractProductB } from '../../../src/creational/abstract-factory/AbstractProducts';
import { ConcreteFactory1, ConcreteFactory2 } from '../../../src/creational/abstract-factory/ConcreteFactories';

/**
 * クライアントコード
 * 
 * 抽象ファクトリーと抽象製品のインターフェースを使用して動作します。
 * @param factory 使用するファクトリー
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.operationB());
    console.log(productB.anotherOperationB(productA));
}

/**
 * Abstract Factoryパターンの実行例
 */
export function runAbstractFactoryExample(): void {
    console.log('Abstract Factoryパターンの実行例:');
    console.log('--------------------------------');

    console.log('クライアント: ファクトリータイプ1で動作中...');
    clientCode(new ConcreteFactory1());

    console.log('\nクライアント: ファクトリータイプ2で動作中...');
    clientCode(new ConcreteFactory2());
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runAbstractFactoryExample();
} 
import { ConcreteBuilder } from '../../../src/creational/builder/ConcreteBuilder';
import { Director } from '../../../src/creational/builder/Director';

/**
 * Builderパターンの実行例
 */
export function runBuilderExample(): void {
    console.log('Builderパターンの実行例:');
    console.log('--------------------------------');

    const builder = new ConcreteBuilder();
    const director = new Director(builder);

    console.log('標準的な製品を構築:');
    director.buildMinimalViableProduct();
    console.log(builder.getProduct().listParts());

    console.log('フル機能の製品を構築:');
    director.buildFullFeaturedProduct();
    console.log(builder.getProduct().listParts());

    console.log('カスタム製品を構築:');
    builder.buildPartA();
    builder.buildPartC();
    console.log(builder.getProduct().listParts());
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runBuilderExample();
} 
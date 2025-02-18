import { ConcretePrototype1, ConcretePrototype2 } from '../../../src/creational/prototype/ConcretePrototype';

/**
 * Prototypeパターンの実行例
 */
export function runPrototypeExample(): void {
    console.log('Prototypeパターンの実行例:');
    console.log('--------------------------------');

    // ConcretePrototype1のデモ
    console.log('ConcretePrototype1のデモ:');
    const p1 = new ConcretePrototype1();
    p1.primitive = 1000;
    (p1.component as Date).setFullYear(2025);
    console.log('オリジナルのデータ:');
    console.log(`- primitive: ${p1.primitive}`);
    console.log(`- component: ${(p1.component as Date).getFullYear()}`);
    console.log(`- circularReference: ${p1.circularReference.prototype === p1}`);

    const c1 = p1.clone();
    console.log('\nクローンのデータ:');
    console.log(`- primitive: ${c1.primitive}`);
    console.log(`- component: ${(c1.component as Date).getFullYear()}`);
    console.log(`- circularReference: ${c1.circularReference.prototype === c1}`);

    // ConcretePrototype2のデモ
    console.log('\nConcretePrototype2のデモ:');
    const p2 = new ConcretePrototype2();
    (p2.component as Map<string, string>).set('key1', 'value1');
    console.log('オリジナルのデータ:');
    console.log(`- primitive: ${p2.primitive}`);
    console.log(`- component: ${[...(p2.component as Map<string, string>).entries()]}`);
    console.log(`- circularReference: ${p2.circularReference.prototype === p2}`);

    const c2 = p2.clone();
    console.log('\nクローンのデータ:');
    console.log(`- primitive: ${c2.primitive}`);
    console.log(`- component: ${[...(c2.component as Map<string, string>).entries()]}`);
    console.log(`- circularReference: ${c2.circularReference.prototype === c2}`);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runPrototypeExample();
} 
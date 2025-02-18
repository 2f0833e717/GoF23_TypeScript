import { ConcreteCreatorA, ConcreteCreatorB } from '../../../src/creational/factory-method/ConcreteCreator';
import { Creator } from '../../../src/creational/factory-method/Creator';

describe('Factory Method Pattern', () => {
    let creatorA: Creator;
    let creatorB: Creator;

    beforeEach(() => {
        creatorA = new ConcreteCreatorA();
        creatorB = new ConcreteCreatorB();
    });

    test('ConcreteCreatorA should create ConcreteProductA', () => {
        const result = creatorA.someOperation();
        expect(result).toBe('Creator: The same creator\'s code has just worked with ConcreteProductA');
    });

    test('ConcreteCreatorB should create ConcreteProductB', () => {
        const result = creatorB.someOperation();
        expect(result).toBe('Creator: The same creator\'s code has just worked with ConcreteProductB');
    });

    test('Different creators should create different products', () => {
        const resultA = creatorA.someOperation();
        const resultB = creatorB.someOperation();
        expect(resultA).not.toBe(resultB);
    });
}); 
import { AbstractFactory } from '../../../src/creational/abstract-factory/AbstractFactory';
import { ConcreteFactory1, ConcreteFactory2 } from '../../../src/creational/abstract-factory/ConcreteFactories';
import { AbstractProductA, AbstractProductB } from '../../../src/creational/abstract-factory/AbstractProducts';

describe('Abstract Factory Pattern', () => {
    let factory1: AbstractFactory;
    let factory2: AbstractFactory;

    beforeEach(() => {
        factory1 = new ConcreteFactory1();
        factory2 = new ConcreteFactory2();
    });

    describe('ConcreteFactory1', () => {
        test('should create ProductA1', () => {
            const productA = factory1.createProductA();
            expect(productA.operationA()).toBe('The result of the product A1.');
        });

        test('should create ProductB1', () => {
            const productB = factory1.createProductB();
            expect(productB.operationB()).toBe('The result of the product B1.');
        });

        test('ProductB1 should collaborate with ProductA1', () => {
            const productA = factory1.createProductA();
            const productB = factory1.createProductB();
            expect(productB.anotherOperationB(productA))
                .toBe('The result of the B1 collaborating with (The result of the product A1.)');
        });
    });

    describe('ConcreteFactory2', () => {
        test('should create ProductA2', () => {
            const productA = factory2.createProductA();
            expect(productA.operationA()).toBe('The result of the product A2.');
        });

        test('should create ProductB2', () => {
            const productB = factory2.createProductB();
            expect(productB.operationB()).toBe('The result of the product B2.');
        });

        test('ProductB2 should collaborate with ProductA2', () => {
            const productA = factory2.createProductA();
            const productB = factory2.createProductB();
            expect(productB.anotherOperationB(productA))
                .toBe('The result of the B2 collaborating with (The result of the product A2.)');
        });
    });

    describe('Cross-factory collaboration', () => {
        test('ProductB1 should collaborate with ProductA2', () => {
            const productA = factory2.createProductA();
            const productB = factory1.createProductB();
            expect(productB.anotherOperationB(productA))
                .toBe('The result of the B1 collaborating with (The result of the product A2.)');
        });

        test('ProductB2 should collaborate with ProductA1', () => {
            const productA = factory1.createProductA();
            const productB = factory2.createProductB();
            expect(productB.anotherOperationB(productA))
                .toBe('The result of the B2 collaborating with (The result of the product A1.)');
        });
    });
}); 
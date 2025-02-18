import { ConcreteBuilder } from '../../../src/creational/builder/ConcreteBuilder';
import { Director } from '../../../src/creational/builder/Director';

describe('Builder Pattern', () => {
    let builder: ConcreteBuilder;
    let director: Director;

    beforeEach(() => {
        builder = new ConcreteBuilder();
        director = new Director(builder);
    });

    describe('Builder without Director', () => {
        test('should construct product step by step', () => {
            builder.buildPartA();
            expect(builder.getProduct().listParts()).toBe('製品のパーツ: PartA1\n');

            builder.buildPartB();
            expect(builder.getProduct().listParts()).toBe('製品のパーツ: PartB1\n');

            builder.buildPartC();
            expect(builder.getProduct().listParts()).toBe('製品のパーツ: PartC1\n');
        });

        test('should reset builder state after getting product', () => {
            builder.buildPartA();
            builder.buildPartB();
            const product1 = builder.getProduct();
            const product2 = builder.getProduct();

            expect(product1.listParts()).toBe('製品のパーツ: PartA1, PartB1\n');
            expect(product2.listParts()).toBe('製品のパーツ: \n');
        });
    });

    describe('Builder with Director', () => {
        test('should build minimal viable product', () => {
            director.buildMinimalViableProduct();
            expect(builder.getProduct().listParts()).toBe('製品のパーツ: PartA1\n');
        });

        test('should build full featured product', () => {
            director.buildFullFeaturedProduct();
            expect(builder.getProduct().listParts())
                .toBe('製品のパーツ: PartA1, PartB1, PartC1\n');
        });

        test('should work with different builders', () => {
            const anotherBuilder = new ConcreteBuilder();
            director.setBuilder(anotherBuilder);
            director.buildFullFeaturedProduct();
            expect(anotherBuilder.getProduct().listParts())
                .toBe('製品のパーツ: PartA1, PartB1, PartC1\n');
        });
    });
}); 
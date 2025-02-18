import { ConcretePrototype1, ConcretePrototype2 } from '../../../src/creational/prototype/ConcretePrototype';

describe('Prototype Pattern', () => {
    describe('ConcretePrototype1', () => {
        test('should create a clone with different reference', () => {
            const p1 = new ConcretePrototype1();
            const c1 = p1.clone();

            expect(c1).not.toBe(p1);
            expect(c1.primitive).toBe(p1.primitive);
            expect(c1.component).not.toBe(p1.component);
            expect(c1.circularReference).not.toBe(p1.circularReference);
            expect(c1.circularReference.prototype).toBe(c1);
        });

        test('should maintain primitive values after cloning', () => {
            const p1 = new ConcretePrototype1();
            p1.primitive = 100;
            const c1 = p1.clone();

            expect(c1.primitive).toBe(100);
        });
    });

    describe('ConcretePrototype2', () => {
        test('should create a clone with different reference', () => {
            const p2 = new ConcretePrototype2();
            const c2 = p2.clone();

            expect(c2).not.toBe(p2);
            expect(c2.primitive).toBe(p2.primitive);
            expect(c2.component).not.toBe(p2.component);
            expect(c2.circularReference).not.toBe(p2.circularReference);
            expect(c2.circularReference.prototype).toBe(c2);
        });

        test('should maintain Map data after cloning', () => {
            const p2 = new ConcretePrototype2();
            (p2.component as Map<string, string>).set('key', 'value');
            const c2 = p2.clone();

            expect((c2.component as Map<string, string>).get('key')).toBe('value');
            expect(c2.component).not.toBe(p2.component);
        });
    });

    describe('Circular Reference', () => {
        test('should handle circular references correctly', () => {
            const p1 = new ConcretePrototype1();
            const c1 = p1.clone();

            expect(p1.circularReference.prototype).toBe(p1);
            expect(c1.circularReference.prototype).toBe(c1);
        });
    });
}); 
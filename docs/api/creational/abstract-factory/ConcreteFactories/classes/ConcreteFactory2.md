[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/abstract-factory/ConcreteFactories](../README.md) / ConcreteFactory2

# Class: ConcreteFactory2

Defined in: creational/abstract-factory/ConcreteFactories.ts:33

具象ファクトリー2

製品の第2バリエーションファミリーを生成する具象ファクトリーです。

## Implements

- [`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md)

## Constructors

### new ConcreteFactory2()

> **new ConcreteFactory2**(): [`ConcreteFactory2`](ConcreteFactory2.md)

#### Returns

[`ConcreteFactory2`](ConcreteFactory2.md)

## Methods

### createProductA()

> **createProductA**(): [`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

Defined in: creational/abstract-factory/ConcreteFactories.ts:38

製品A2を生成します

#### Returns

[`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

生成された製品A2

#### Implementation of

[`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md).[`createProductA`](../../AbstractFactory/interfaces/AbstractFactory.md#createproducta)

***

### createProductB()

> **createProductB**(): [`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

Defined in: creational/abstract-factory/ConcreteFactories.ts:46

製品B2を生成します

#### Returns

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

生成された製品B2

#### Implementation of

[`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md).[`createProductB`](../../AbstractFactory/interfaces/AbstractFactory.md#createproductb)

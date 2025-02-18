[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/abstract-factory/ConcreteFactories](../README.md) / ConcreteFactory1

# Class: ConcreteFactory1

Defined in: creational/abstract-factory/ConcreteFactories.ts:10

具象ファクトリー1

製品の第1バリエーションファミリーを生成する具象ファクトリーです。

## Implements

- [`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md)

## Constructors

### new ConcreteFactory1()

> **new ConcreteFactory1**(): [`ConcreteFactory1`](ConcreteFactory1.md)

#### Returns

[`ConcreteFactory1`](ConcreteFactory1.md)

## Methods

### createProductA()

> **createProductA**(): [`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

Defined in: creational/abstract-factory/ConcreteFactories.ts:15

製品A1を生成します

#### Returns

[`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

生成された製品A1

#### Implementation of

[`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md).[`createProductA`](../../AbstractFactory/interfaces/AbstractFactory.md#createproducta)

***

### createProductB()

> **createProductB**(): [`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

Defined in: creational/abstract-factory/ConcreteFactories.ts:23

製品B1を生成します

#### Returns

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

生成された製品B1

#### Implementation of

[`AbstractFactory`](../../AbstractFactory/interfaces/AbstractFactory.md).[`createProductB`](../../AbstractFactory/interfaces/AbstractFactory.md#createproductb)

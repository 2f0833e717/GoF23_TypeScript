[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/abstract-factory/AbstractFactory](../modules/creational_abstract_factory_AbstractFactory.md) / AbstractFactory

# Interface: AbstractFactory

[creational/abstract-factory/AbstractFactory](../modules/creational_abstract_factory_AbstractFactory.md).AbstractFactory

抽象ファクトリー

異なる抽象製品を生成するためのインターフェースを宣言します。

## Implemented by

- [`ConcreteFactory1`](../classes/creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md)
- [`ConcreteFactory2`](../classes/creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md)

## Table of contents

### Methods

- [createProductA](creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproducta)
- [createProductB](creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproductb)

## Methods

### createProductA

▸ **createProductA**(): [`AbstractProductA`](creational_abstract_factory_AbstractProducts.AbstractProductA.md)

製品Aを生成します

#### Returns

[`AbstractProductA`](creational_abstract_factory_AbstractProducts.AbstractProductA.md)

生成された製品A

#### Defined in

creational/abstract-factory/AbstractFactory.ts:13

___

### createProductB

▸ **createProductB**(): [`AbstractProductB`](creational_abstract_factory_AbstractProducts.AbstractProductB.md)

製品Bを生成します

#### Returns

[`AbstractProductB`](creational_abstract_factory_AbstractProducts.AbstractProductB.md)

生成された製品B

#### Defined in

creational/abstract-factory/AbstractFactory.ts:19

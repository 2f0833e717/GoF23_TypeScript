[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/abstract-factory/ConcreteFactories](../modules/creational_abstract_factory_ConcreteFactories.md) / ConcreteFactory2

# Class: ConcreteFactory2

[creational/abstract-factory/ConcreteFactories](../modules/creational_abstract_factory_ConcreteFactories.md).ConcreteFactory2

具象ファクトリー2

製品の第2バリエーションファミリーを生成する具象ファクトリーです。

## Implements

- [`AbstractFactory`](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md)

## Table of contents

### Constructors

- [constructor](creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md#constructor)

### Methods

- [createProductA](creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md#createproducta)
- [createProductB](creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md#createproductb)

## Constructors

### constructor

• **new ConcreteFactory2**(): [`ConcreteFactory2`](creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md)

#### Returns

[`ConcreteFactory2`](creational_abstract_factory_ConcreteFactories.ConcreteFactory2.md)

## Methods

### createProductA

▸ **createProductA**(): [`AbstractProductA`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductA.md)

製品A2を生成します

#### Returns

[`AbstractProductA`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductA.md)

生成された製品A2

#### Implementation of

[AbstractFactory](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md).[createProductA](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproducta)

#### Defined in

creational/abstract-factory/ConcreteFactories.ts:38

___

### createProductB

▸ **createProductB**(): [`AbstractProductB`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md)

製品B2を生成します

#### Returns

[`AbstractProductB`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md)

生成された製品B2

#### Implementation of

[AbstractFactory](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md).[createProductB](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproductb)

#### Defined in

creational/abstract-factory/ConcreteFactories.ts:46

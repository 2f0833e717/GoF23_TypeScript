[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/abstract-factory/ConcreteFactories](../modules/creational_abstract_factory_ConcreteFactories.md) / ConcreteFactory1

# Class: ConcreteFactory1

[creational/abstract-factory/ConcreteFactories](../modules/creational_abstract_factory_ConcreteFactories.md).ConcreteFactory1

具象ファクトリー1

製品の第1バリエーションファミリーを生成する具象ファクトリーです。

## Implements

- [`AbstractFactory`](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md)

## Table of contents

### Constructors

- [constructor](creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md#constructor)

### Methods

- [createProductA](creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md#createproducta)
- [createProductB](creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md#createproductb)

## Constructors

### constructor

• **new ConcreteFactory1**(): [`ConcreteFactory1`](creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md)

#### Returns

[`ConcreteFactory1`](creational_abstract_factory_ConcreteFactories.ConcreteFactory1.md)

## Methods

### createProductA

▸ **createProductA**(): [`AbstractProductA`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductA.md)

製品A1を生成します

#### Returns

[`AbstractProductA`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductA.md)

生成された製品A1

#### Implementation of

[AbstractFactory](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md).[createProductA](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproducta)

#### Defined in

creational/abstract-factory/ConcreteFactories.ts:15

___

### createProductB

▸ **createProductB**(): [`AbstractProductB`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md)

製品B1を生成します

#### Returns

[`AbstractProductB`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md)

生成された製品B1

#### Implementation of

[AbstractFactory](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md).[createProductB](../interfaces/creational_abstract_factory_AbstractFactory.AbstractFactory.md#createproductb)

#### Defined in

creational/abstract-factory/ConcreteFactories.ts:23

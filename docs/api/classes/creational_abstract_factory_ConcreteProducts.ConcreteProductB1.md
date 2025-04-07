[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/abstract-factory/ConcreteProducts](../modules/creational_abstract_factory_ConcreteProducts.md) / ConcreteProductB1

# Class: ConcreteProductB1

[creational/abstract-factory/ConcreteProducts](../modules/creational_abstract_factory_ConcreteProducts.md).ConcreteProductB1

具象製品B1

製品Bのバリエーション1を実装します。

## Implements

- [`AbstractProductB`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md)

## Table of contents

### Constructors

- [constructor](creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md#constructor)

### Methods

- [operationB](creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md#operationb)
- [anotherOperationB](creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md#anotheroperationb)

## Constructors

### constructor

• **new ConcreteProductB1**(): [`ConcreteProductB1`](creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md)

#### Returns

[`ConcreteProductB1`](creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md)

## Methods

### operationB

▸ **operationB**(): `string`

製品B1の操作を実行します

#### Returns

`string`

操作の結果

#### Implementation of

[AbstractProductB](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md).[operationB](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md#operationb)

#### Defined in

creational/abstract-factory/ConcreteProducts.ts:43

___

### anotherOperationB

▸ **anotherOperationB**(`collaborator`): `string`

製品B1と製品Aを組み合わせた操作を実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collaborator` | [`AbstractProductA`](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductA.md) | 協力する製品A |

#### Returns

`string`

コラボレーションの結果

#### Implementation of

[AbstractProductB](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md).[anotherOperationB](../interfaces/creational_abstract_factory_AbstractProducts.AbstractProductB.md#anotheroperationb)

#### Defined in

creational/abstract-factory/ConcreteProducts.ts:52

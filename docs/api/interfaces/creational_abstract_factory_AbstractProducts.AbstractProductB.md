[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/abstract-factory/AbstractProducts](../modules/creational_abstract_factory_AbstractProducts.md) / AbstractProductB

# Interface: AbstractProductB

[creational/abstract-factory/AbstractProducts](../modules/creational_abstract_factory_AbstractProducts.md).AbstractProductB

抽象製品B

製品Bのインターフェースを宣言します。
すべての具象製品はこのインターフェースを実装する必要があります。

## Implemented by

- [`ConcreteProductB1`](../classes/creational_abstract_factory_ConcreteProducts.ConcreteProductB1.md)
- [`ConcreteProductB2`](../classes/creational_abstract_factory_ConcreteProducts.ConcreteProductB2.md)

## Table of contents

### Methods

- [operationB](creational_abstract_factory_AbstractProducts.AbstractProductB.md#operationb)
- [anotherOperationB](creational_abstract_factory_AbstractProducts.AbstractProductB.md#anotheroperationb)

## Methods

### operationB

▸ **operationB**(): `string`

製品Bの操作を実行します

#### Returns

`string`

操作の結果

#### Defined in

creational/abstract-factory/AbstractProducts.ts:26

___

### anotherOperationB

▸ **anotherOperationB**(`collaborator`): `string`

製品Bと製品Aを組み合わせた操作を実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collaborator` | [`AbstractProductA`](creational_abstract_factory_AbstractProducts.AbstractProductA.md) | 協力する製品A |

#### Returns

`string`

コラボレーションの結果

#### Defined in

creational/abstract-factory/AbstractProducts.ts:33

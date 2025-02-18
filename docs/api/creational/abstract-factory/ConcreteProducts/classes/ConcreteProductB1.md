[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/abstract-factory/ConcreteProducts](../README.md) / ConcreteProductB1

# Class: ConcreteProductB1

Defined in: creational/abstract-factory/ConcreteProducts.ts:38

具象製品B1

製品Bのバリエーション1を実装します。

## Implements

- [`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

## Constructors

### new ConcreteProductB1()

> **new ConcreteProductB1**(): [`ConcreteProductB1`](ConcreteProductB1.md)

#### Returns

[`ConcreteProductB1`](ConcreteProductB1.md)

## Methods

### operationB()

> **operationB**(): `string`

Defined in: creational/abstract-factory/ConcreteProducts.ts:43

製品B1の操作を実行します

#### Returns

`string`

操作の結果

#### Implementation of

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md).[`operationB`](../../AbstractProducts/interfaces/AbstractProductB.md#operationb)

***

### anotherOperationB()

> **anotherOperationB**(`collaborator`): `string`

Defined in: creational/abstract-factory/ConcreteProducts.ts:52

製品B1と製品Aを組み合わせた操作を実行します

#### Parameters

##### collaborator

[`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

協力する製品A

#### Returns

`string`

コラボレーションの結果

#### Implementation of

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md).[`anotherOperationB`](../../AbstractProducts/interfaces/AbstractProductB.md#anotheroperationb)

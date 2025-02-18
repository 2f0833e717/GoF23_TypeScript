[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/abstract-factory/ConcreteProducts](../README.md) / ConcreteProductB2

# Class: ConcreteProductB2

Defined in: creational/abstract-factory/ConcreteProducts.ts:63

具象製品B2

製品Bのバリエーション2を実装します。

## Implements

- [`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md)

## Constructors

### new ConcreteProductB2()

> **new ConcreteProductB2**(): [`ConcreteProductB2`](ConcreteProductB2.md)

#### Returns

[`ConcreteProductB2`](ConcreteProductB2.md)

## Methods

### operationB()

> **operationB**(): `string`

Defined in: creational/abstract-factory/ConcreteProducts.ts:68

製品B2の操作を実行します

#### Returns

`string`

操作の結果

#### Implementation of

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md).[`operationB`](../../AbstractProducts/interfaces/AbstractProductB.md#operationb)

***

### anotherOperationB()

> **anotherOperationB**(`collaborator`): `string`

Defined in: creational/abstract-factory/ConcreteProducts.ts:77

製品B2と製品Aを組み合わせた操作を実行します

#### Parameters

##### collaborator

[`AbstractProductA`](../../AbstractProducts/interfaces/AbstractProductA.md)

協力する製品A

#### Returns

`string`

コラボレーションの結果

#### Implementation of

[`AbstractProductB`](../../AbstractProducts/interfaces/AbstractProductB.md).[`anotherOperationB`](../../AbstractProducts/interfaces/AbstractProductB.md#anotheroperationb)

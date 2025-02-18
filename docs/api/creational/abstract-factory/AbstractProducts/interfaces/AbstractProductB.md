[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/abstract-factory/AbstractProducts](../README.md) / AbstractProductB

# Interface: AbstractProductB

Defined in: creational/abstract-factory/AbstractProducts.ts:21

抽象製品B

製品Bのインターフェースを宣言します。
すべての具象製品はこのインターフェースを実装する必要があります。

## Methods

### operationB()

> **operationB**(): `string`

Defined in: creational/abstract-factory/AbstractProducts.ts:26

製品Bの操作を実行します

#### Returns

`string`

操作の結果

***

### anotherOperationB()

> **anotherOperationB**(`collaborator`): `string`

Defined in: creational/abstract-factory/AbstractProducts.ts:33

製品Bと製品Aを組み合わせた操作を実行します

#### Parameters

##### collaborator

[`AbstractProductA`](AbstractProductA.md)

協力する製品A

#### Returns

`string`

コラボレーションの結果

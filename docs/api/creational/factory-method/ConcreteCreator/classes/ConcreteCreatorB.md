[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/factory-method/ConcreteCreator](../README.md) / ConcreteCreatorB

# Class: ConcreteCreatorB

Defined in: creational/factory-method/ConcreteCreator.ts:25

具象クリエイターB

ConcreteProductB を生成するクリエイターの実装を提供します。

## Extends

- [`Creator`](../../Creator/classes/Creator.md)

## Constructors

### new ConcreteCreatorB()

> **new ConcreteCreatorB**(): [`ConcreteCreatorB`](ConcreteCreatorB.md)

#### Returns

[`ConcreteCreatorB`](ConcreteCreatorB.md)

#### Inherited from

[`Creator`](../../Creator/classes/Creator.md).[`constructor`](../../Creator/classes/Creator.md#constructors)

## Methods

### factoryMethod()

> `protected` **factoryMethod**(): [`Product`](../../Product/interfaces/Product.md)

Defined in: creational/factory-method/ConcreteCreator.ts:30

ファクトリーメソッドの実装

#### Returns

[`Product`](../../Product/interfaces/Product.md)

ConcreteProductB のインスタンス

#### Overrides

[`Creator`](../../Creator/classes/Creator.md).[`factoryMethod`](../../Creator/classes/Creator.md#factorymethod)

***

### someOperation()

> **someOperation**(): `string`

Defined in: creational/factory-method/Creator.ts:24

クリエイターのメインのビジネスロジック

ファクトリーメソッドを呼び出して製品オブジェクトを取得し、それを使用します。

#### Returns

`string`

操作の結果

#### Inherited from

[`Creator`](../../Creator/classes/Creator.md).[`someOperation`](../../Creator/classes/Creator.md#someoperation)

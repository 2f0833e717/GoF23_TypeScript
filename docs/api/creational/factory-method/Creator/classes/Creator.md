[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/factory-method/Creator](../README.md) / Creator

# Class: `abstract` Creator

Defined in: creational/factory-method/Creator.ts:9

クリエイター

ファクトリーメソッドを宣言する抽象クラスです。
このクラスは、新しい製品オブジェクトを返すファクトリーメソッドのデフォルト実装も提供できます。

## Extended by

- [`ConcreteCreatorA`](../../ConcreteCreator/classes/ConcreteCreatorA.md)
- [`ConcreteCreatorB`](../../ConcreteCreator/classes/ConcreteCreatorB.md)

## Constructors

### new Creator()

> **new Creator**(): [`Creator`](Creator.md)

#### Returns

[`Creator`](Creator.md)

## Methods

### factoryMethod()

> `abstract` `protected` **factoryMethod**(): [`Product`](../../Product/interfaces/Product.md)

Defined in: creational/factory-method/Creator.ts:16

ファクトリーメソッド

サブクラスで実装される必要があります。

#### Returns

[`Product`](../../Product/interfaces/Product.md)

生成された製品オブジェクト

***

### someOperation()

> **someOperation**(): `string`

Defined in: creational/factory-method/Creator.ts:24

クリエイターのメインのビジネスロジック

ファクトリーメソッドを呼び出して製品オブジェクトを取得し、それを使用します。

#### Returns

`string`

操作の結果

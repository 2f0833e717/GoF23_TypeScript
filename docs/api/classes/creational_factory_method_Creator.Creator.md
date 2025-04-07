[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/factory-method/Creator](../modules/creational_factory_method_Creator.md) / Creator

# Class: Creator

[creational/factory-method/Creator](../modules/creational_factory_method_Creator.md).Creator

クリエイター

ファクトリーメソッドを宣言する抽象クラスです。
このクラスは、新しい製品オブジェクトを返すファクトリーメソッドのデフォルト実装も提供できます。

## Hierarchy

- **`Creator`**

  ↳ [`ConcreteCreatorA`](creational_factory_method_ConcreteCreator.ConcreteCreatorA.md)

  ↳ [`ConcreteCreatorB`](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md)

## Table of contents

### Constructors

- [constructor](creational_factory_method_Creator.Creator.md#constructor)

### Methods

- [factoryMethod](creational_factory_method_Creator.Creator.md#factorymethod)
- [someOperation](creational_factory_method_Creator.Creator.md#someoperation)

## Constructors

### constructor

• **new Creator**(): [`Creator`](creational_factory_method_Creator.Creator.md)

#### Returns

[`Creator`](creational_factory_method_Creator.Creator.md)

## Methods

### factoryMethod

▸ **factoryMethod**(): [`Product`](../interfaces/creational_factory_method_Product.Product.md)

ファクトリーメソッド

サブクラスで実装される必要があります。

#### Returns

[`Product`](../interfaces/creational_factory_method_Product.Product.md)

生成された製品オブジェクト

#### Defined in

creational/factory-method/Creator.ts:16

___

### someOperation

▸ **someOperation**(): `string`

クリエイターのメインのビジネスロジック

ファクトリーメソッドを呼び出して製品オブジェクトを取得し、それを使用します。

#### Returns

`string`

操作の結果

#### Defined in

creational/factory-method/Creator.ts:24

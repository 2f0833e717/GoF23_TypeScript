[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/factory-method/ConcreteCreator](../modules/creational_factory_method_ConcreteCreator.md) / ConcreteCreatorB

# Class: ConcreteCreatorB

[creational/factory-method/ConcreteCreator](../modules/creational_factory_method_ConcreteCreator.md).ConcreteCreatorB

具象クリエイターB

ConcreteProductB を生成するクリエイターの実装を提供します。

## Hierarchy

- [`Creator`](creational_factory_method_Creator.Creator.md)

  ↳ **`ConcreteCreatorB`**

## Table of contents

### Constructors

- [constructor](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md#constructor)

### Methods

- [factoryMethod](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md#factorymethod)
- [someOperation](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md#someoperation)

## Constructors

### constructor

• **new ConcreteCreatorB**(): [`ConcreteCreatorB`](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md)

#### Returns

[`ConcreteCreatorB`](creational_factory_method_ConcreteCreator.ConcreteCreatorB.md)

#### Inherited from

[Creator](creational_factory_method_Creator.Creator.md).[constructor](creational_factory_method_Creator.Creator.md#constructor)

## Methods

### factoryMethod

▸ **factoryMethod**(): [`Product`](../interfaces/creational_factory_method_Product.Product.md)

ファクトリーメソッドの実装

#### Returns

[`Product`](../interfaces/creational_factory_method_Product.Product.md)

ConcreteProductB のインスタンス

#### Overrides

[Creator](creational_factory_method_Creator.Creator.md).[factoryMethod](creational_factory_method_Creator.Creator.md#factorymethod)

#### Defined in

creational/factory-method/ConcreteCreator.ts:30

___

### someOperation

▸ **someOperation**(): `string`

クリエイターのメインのビジネスロジック

ファクトリーメソッドを呼び出して製品オブジェクトを取得し、それを使用します。

#### Returns

`string`

操作の結果

#### Inherited from

[Creator](creational_factory_method_Creator.Creator.md).[someOperation](creational_factory_method_Creator.Creator.md#someoperation)

#### Defined in

creational/factory-method/Creator.ts:24

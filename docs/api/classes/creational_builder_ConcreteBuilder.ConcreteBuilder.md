[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/builder/ConcreteBuilder](../modules/creational_builder_ConcreteBuilder.md) / ConcreteBuilder

# Class: ConcreteBuilder

[creational/builder/ConcreteBuilder](../modules/creational_builder_ConcreteBuilder.md).ConcreteBuilder

具象ビルダー

ビルダーインターフェースの具体的な実装を提供します。
製品の構築手順を定義し、最終的な製品を返します。

## Implements

- [`Builder`](../interfaces/creational_builder_Builder.Builder.md)

## Table of contents

### Constructors

- [constructor](creational_builder_ConcreteBuilder.ConcreteBuilder.md#constructor)

### Methods

- [reset](creational_builder_ConcreteBuilder.ConcreteBuilder.md#reset)
- [buildPartA](creational_builder_ConcreteBuilder.ConcreteBuilder.md#buildparta)
- [buildPartB](creational_builder_ConcreteBuilder.ConcreteBuilder.md#buildpartb)
- [buildPartC](creational_builder_ConcreteBuilder.ConcreteBuilder.md#buildpartc)
- [getProduct](creational_builder_ConcreteBuilder.ConcreteBuilder.md#getproduct)

## Constructors

### constructor

• **new ConcreteBuilder**(): [`ConcreteBuilder`](creational_builder_ConcreteBuilder.ConcreteBuilder.md)

新しい製品の構築を開始します

#### Returns

[`ConcreteBuilder`](creational_builder_ConcreteBuilder.ConcreteBuilder.md)

#### Defined in

creational/builder/ConcreteBuilder.ts:16

## Methods

### reset

▸ **reset**(): `void`

ビルダーをリセットします

#### Returns

`void`

#### Defined in

creational/builder/ConcreteBuilder.ts:23

___

### buildPartA

▸ **buildPartA**(): `void`

パーツAを構築します

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/creational_builder_Builder.Builder.md).[buildPartA](../interfaces/creational_builder_Builder.Builder.md#buildparta)

#### Defined in

creational/builder/ConcreteBuilder.ts:30

___

### buildPartB

▸ **buildPartB**(): `void`

パーツBを構築します

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/creational_builder_Builder.Builder.md).[buildPartB](../interfaces/creational_builder_Builder.Builder.md#buildpartb)

#### Defined in

creational/builder/ConcreteBuilder.ts:37

___

### buildPartC

▸ **buildPartC**(): `void`

パーツCを構築します

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/creational_builder_Builder.Builder.md).[buildPartC](../interfaces/creational_builder_Builder.Builder.md#buildpartc)

#### Defined in

creational/builder/ConcreteBuilder.ts:44

___

### getProduct

▸ **getProduct**(): [`Product`](creational_builder_Product.Product.md)

構築した製品を取得します

#### Returns

[`Product`](creational_builder_Product.Product.md)

構築された製品

#### Defined in

creational/builder/ConcreteBuilder.ts:52

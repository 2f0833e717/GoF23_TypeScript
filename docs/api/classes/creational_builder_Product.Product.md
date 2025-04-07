[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/builder/Product](../modules/creational_builder_Product.md) / Product

# Class: Product

[creational/builder/Product](../modules/creational_builder_Product.md).Product

製品クラス

複雑なオブジェクトを表現します。
このクラスは、様々なパーツから構成される複雑なオブジェクトを定義します。

## Table of contents

### Constructors

- [constructor](creational_builder_Product.Product.md#constructor)

### Methods

- [add](creational_builder_Product.Product.md#add)
- [listParts](creational_builder_Product.Product.md#listparts)

## Constructors

### constructor

• **new Product**(): [`Product`](creational_builder_Product.Product.md)

#### Returns

[`Product`](creational_builder_Product.Product.md)

## Methods

### add

▸ **add**(`part`): `void`

パーツを追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `part` | `string` | 追加するパーツ |

#### Returns

`void`

#### Defined in

creational/builder/Product.ts:14

___

### listParts

▸ **listParts**(): `string`

製品の構成パーツを一覧表示します

#### Returns

`string`

パーツのリスト

#### Defined in

creational/builder/Product.ts:22

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/builder/Product](../README.md) / Product

# Class: Product

Defined in: creational/builder/Product.ts:7

製品クラス

複雑なオブジェクトを表現します。
このクラスは、様々なパーツから構成される複雑なオブジェクトを定義します。

## Constructors

### new Product()

> **new Product**(): [`Product`](Product.md)

#### Returns

[`Product`](Product.md)

## Methods

### add()

> **add**(`part`): `void`

Defined in: creational/builder/Product.ts:14

パーツを追加します

#### Parameters

##### part

`string`

追加するパーツ

#### Returns

`void`

***

### listParts()

> **listParts**(): `string`

Defined in: creational/builder/Product.ts:22

製品の構成パーツを一覧表示します

#### Returns

`string`

パーツのリスト

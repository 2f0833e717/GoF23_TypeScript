[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/builder/Director](../modules/creational_builder_Director.md) / Director

# Class: Director

[creational/builder/Director](../modules/creational_builder_Director.md).Director

ディレクター

特定の順序で構築手順を実行するためのクラスです。
同じ構築プロセスから異なる種類の製品を生成する場合に便利です。

## Table of contents

### Constructors

- [constructor](creational_builder_Director.Director.md#constructor)

### Methods

- [setBuilder](creational_builder_Director.Director.md#setbuilder)
- [buildMinimalViableProduct](creational_builder_Director.Director.md#buildminimalviableproduct)
- [buildFullFeaturedProduct](creational_builder_Director.Director.md#buildfullfeaturedproduct)

## Constructors

### constructor

• **new Director**(`builder`): [`Director`](creational_builder_Director.Director.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `builder` | [`Builder`](../interfaces/creational_builder_Builder.Builder.md) | 使用するビルダー |

#### Returns

[`Director`](creational_builder_Director.Director.md)

#### Defined in

creational/builder/Director.ts:16

## Methods

### setBuilder

▸ **setBuilder**(`builder`): `void`

ビルダーを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `builder` | [`Builder`](../interfaces/creational_builder_Builder.Builder.md) | 設定するビルダー |

#### Returns

`void`

#### Defined in

creational/builder/Director.ts:24

___

### buildMinimalViableProduct

▸ **buildMinimalViableProduct**(): `void`

最小構成の製品を構築します
パーツAのみを含む製品を作成します。

#### Returns

`void`

#### Defined in

creational/builder/Director.ts:32

___

### buildFullFeaturedProduct

▸ **buildFullFeaturedProduct**(): `void`

フル機能の製品を構築します
すべてのパーツを含む製品を作成します。

#### Returns

`void`

#### Defined in

creational/builder/Director.ts:40

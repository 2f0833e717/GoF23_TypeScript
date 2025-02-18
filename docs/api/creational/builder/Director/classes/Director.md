[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/builder/Director](../README.md) / Director

# Class: Director

Defined in: creational/builder/Director.ts:9

ディレクター

特定の順序で構築手順を実行するためのクラスです。
同じ構築プロセスから異なる種類の製品を生成する場合に便利です。

## Constructors

### new Director()

> **new Director**(`builder`): [`Director`](Director.md)

Defined in: creational/builder/Director.ts:16

コンストラクタ

#### Parameters

##### builder

[`Builder`](../../Builder/interfaces/Builder.md)

使用するビルダー

#### Returns

[`Director`](Director.md)

## Methods

### setBuilder()

> **setBuilder**(`builder`): `void`

Defined in: creational/builder/Director.ts:24

ビルダーを設定します

#### Parameters

##### builder

[`Builder`](../../Builder/interfaces/Builder.md)

設定するビルダー

#### Returns

`void`

***

### buildMinimalViableProduct()

> **buildMinimalViableProduct**(): `void`

Defined in: creational/builder/Director.ts:32

最小構成の製品を構築します
パーツAのみを含む製品を作成します。

#### Returns

`void`

***

### buildFullFeaturedProduct()

> **buildFullFeaturedProduct**(): `void`

Defined in: creational/builder/Director.ts:40

フル機能の製品を構築します
すべてのパーツを含む製品を作成します。

#### Returns

`void`

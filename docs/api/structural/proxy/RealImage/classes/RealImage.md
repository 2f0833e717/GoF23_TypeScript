[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/proxy/RealImage](../README.md) / RealImage

# Class: RealImage

Defined in: structural/proxy/RealImage.ts:9

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Implements

- [`Image`](../../Image/interfaces/Image.md)

## Constructors

### new RealImage()

> **new RealImage**(`filename`): [`RealImage`](RealImage.md)

Defined in: structural/proxy/RealImage.ts:19

コンストラクタ

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

[`RealImage`](RealImage.md)

## Methods

### display()

> **display**(): `void`

Defined in: structural/proxy/RealImage.ts:51

画像を表示します

#### Returns

`void`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`display`](../../Image/interfaces/Image.md#display)

***

### getSize()

> **getSize**(): `number`

Defined in: structural/proxy/RealImage.ts:56

画像のサイズを取得します（バイト）

#### Returns

`number`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`getSize`](../../Image/interfaces/Image.md#getsize)

***

### getResolution()

> **getResolution**(): `object`

Defined in: structural/proxy/RealImage.ts:60

画像の解像度を取得します

#### Returns

`object`

##### width

> **width**: `number`

##### height

> **height**: `number`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`getResolution`](../../Image/interfaces/Image.md#getresolution)

***

### getFilename()

> **getFilename**(): `string`

Defined in: structural/proxy/RealImage.ts:64

画像のファイル名を取得します

#### Returns

`string`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`getFilename`](../../Image/interfaces/Image.md#getfilename)

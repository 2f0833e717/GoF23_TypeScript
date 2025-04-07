[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/proxy/RealImage](../modules/structural_proxy_RealImage.md) / RealImage

# Class: RealImage

[structural/proxy/RealImage](../modules/structural_proxy_RealImage.md).RealImage

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Implements

- [`Image`](../interfaces/structural_proxy_Image.Image.md)

## Table of contents

### Constructors

- [constructor](structural_proxy_RealImage.RealImage.md#constructor)

### Methods

- [display](structural_proxy_RealImage.RealImage.md#display)
- [getSize](structural_proxy_RealImage.RealImage.md#getsize)
- [getResolution](structural_proxy_RealImage.RealImage.md#getresolution)
- [getFilename](structural_proxy_RealImage.RealImage.md#getfilename)

## Constructors

### constructor

• **new RealImage**(`filename`): [`RealImage`](structural_proxy_RealImage.RealImage.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

[`RealImage`](structural_proxy_RealImage.RealImage.md)

#### Defined in

structural/proxy/RealImage.ts:19

## Methods

### display

▸ **display**(): `void`

画像を表示します

#### Returns

`void`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[display](../interfaces/structural_proxy_Image.Image.md#display)

#### Defined in

structural/proxy/RealImage.ts:51

___

### getSize

▸ **getSize**(): `number`

画像のサイズを取得します（バイト）

#### Returns

`number`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[getSize](../interfaces/structural_proxy_Image.Image.md#getsize)

#### Defined in

structural/proxy/RealImage.ts:56

___

### getResolution

▸ **getResolution**(): `Object`

画像の解像度を取得します

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[getResolution](../interfaces/structural_proxy_Image.Image.md#getresolution)

#### Defined in

structural/proxy/RealImage.ts:60

___

### getFilename

▸ **getFilename**(): `string`

画像のファイル名を取得します

#### Returns

`string`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[getFilename](../interfaces/structural_proxy_Image.Image.md#getfilename)

#### Defined in

structural/proxy/RealImage.ts:64

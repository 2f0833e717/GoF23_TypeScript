[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/proxy/Image](../modules/structural_proxy_Image.md) / Image

# Interface: Image

[structural/proxy/Image](../modules/structural_proxy_Image.md).Image

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Implemented by

- [`ProxyImage`](../classes/structural_proxy_ProxyImage.ProxyImage.md)
- [`RealImage`](../classes/structural_proxy_RealImage.RealImage.md)

## Table of contents

### Methods

- [display](structural_proxy_Image.Image.md#display)
- [getSize](structural_proxy_Image.Image.md#getsize)
- [getResolution](structural_proxy_Image.Image.md#getresolution)
- [getFilename](structural_proxy_Image.Image.md#getfilename)

## Methods

### display

▸ **display**(): `void`

画像を表示します

#### Returns

`void`

#### Defined in

structural/proxy/Image.ts:11

___

### getSize

▸ **getSize**(): `number`

画像のサイズを取得します（バイト）

#### Returns

`number`

#### Defined in

structural/proxy/Image.ts:16

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

#### Defined in

structural/proxy/Image.ts:21

___

### getFilename

▸ **getFilename**(): `string`

画像のファイル名を取得します

#### Returns

`string`

#### Defined in

structural/proxy/Image.ts:26

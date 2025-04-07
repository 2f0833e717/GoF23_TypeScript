[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/proxy/ProxyImage](../modules/structural_proxy_ProxyImage.md) / ProxyImage

# Class: ProxyImage

[structural/proxy/ProxyImage](../modules/structural_proxy_ProxyImage.md).ProxyImage

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Implements

- [`Image`](../interfaces/structural_proxy_Image.Image.md)

## Table of contents

### Constructors

- [constructor](structural_proxy_ProxyImage.ProxyImage.md#constructor)

### Methods

- [display](structural_proxy_ProxyImage.ProxyImage.md#display)
- [getSize](structural_proxy_ProxyImage.ProxyImage.md#getsize)
- [getResolution](structural_proxy_ProxyImage.ProxyImage.md#getresolution)
- [getFilename](structural_proxy_ProxyImage.ProxyImage.md#getfilename)
- [isLoaded](structural_proxy_ProxyImage.ProxyImage.md#isloaded)
- [hasMetadata](structural_proxy_ProxyImage.ProxyImage.md#hasmetadata)

## Constructors

### constructor

• **new ProxyImage**(`filename`): [`ProxyImage`](structural_proxy_ProxyImage.ProxyImage.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

[`ProxyImage`](structural_proxy_ProxyImage.ProxyImage.md)

#### Defined in

structural/proxy/ProxyImage.ts:21

## Methods

### display

▸ **display**(): `void`

画像を表示します

#### Returns

`void`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[display](../interfaces/structural_proxy_Image.Image.md#display)

#### Defined in

structural/proxy/ProxyImage.ts:51

___

### getSize

▸ **getSize**(): `number`

画像のサイズを取得します（バイト）

#### Returns

`number`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[getSize](../interfaces/structural_proxy_Image.Image.md#getsize)

#### Defined in

structural/proxy/ProxyImage.ts:56

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

structural/proxy/ProxyImage.ts:61

___

### getFilename

▸ **getFilename**(): `string`

画像のファイル名を取得します

#### Returns

`string`

#### Implementation of

[Image](../interfaces/structural_proxy_Image.Image.md).[getFilename](../interfaces/structural_proxy_Image.Image.md#getfilename)

#### Defined in

structural/proxy/ProxyImage.ts:66

___

### isLoaded

▸ **isLoaded**(): `boolean`

実際の画像が読み込まれているかを確認します

#### Returns

`boolean`

#### Defined in

structural/proxy/ProxyImage.ts:73

___

### hasMetadata

▸ **hasMetadata**(): `boolean`

メタデータが読み込まれているかを確認します

#### Returns

`boolean`

#### Defined in

structural/proxy/ProxyImage.ts:80

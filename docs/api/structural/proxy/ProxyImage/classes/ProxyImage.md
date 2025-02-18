[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/proxy/ProxyImage](../README.md) / ProxyImage

# Class: ProxyImage

Defined in: structural/proxy/ProxyImage.ts:10

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Implements

- [`Image`](../../Image/interfaces/Image.md)

## Constructors

### new ProxyImage()

> **new ProxyImage**(`filename`): [`ProxyImage`](ProxyImage.md)

Defined in: structural/proxy/ProxyImage.ts:21

コンストラクタ

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

[`ProxyImage`](ProxyImage.md)

## Methods

### display()

> **display**(): `void`

Defined in: structural/proxy/ProxyImage.ts:51

画像を表示します

#### Returns

`void`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`display`](../../Image/interfaces/Image.md#display)

***

### getSize()

> **getSize**(): `number`

Defined in: structural/proxy/ProxyImage.ts:56

画像のサイズを取得します（バイト）

#### Returns

`number`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`getSize`](../../Image/interfaces/Image.md#getsize)

***

### getResolution()

> **getResolution**(): `object`

Defined in: structural/proxy/ProxyImage.ts:61

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

Defined in: structural/proxy/ProxyImage.ts:66

画像のファイル名を取得します

#### Returns

`string`

#### Implementation of

[`Image`](../../Image/interfaces/Image.md).[`getFilename`](../../Image/interfaces/Image.md#getfilename)

***

### isLoaded()

> **isLoaded**(): `boolean`

Defined in: structural/proxy/ProxyImage.ts:73

実際の画像が読み込まれているかを確認します

#### Returns

`boolean`

***

### hasMetadata()

> **hasMetadata**(): `boolean`

Defined in: structural/proxy/ProxyImage.ts:80

メタデータが読み込まれているかを確認します

#### Returns

`boolean`

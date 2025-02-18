[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/proxy/Image](../README.md) / Image

# Interface: Image

Defined in: structural/proxy/Image.ts:7

画像インターフェース

画像の基本操作を定義します。
このインターフェースは実際の画像とプロキシの両方で実装されます。

## Methods

### display()

> **display**(): `void`

Defined in: structural/proxy/Image.ts:11

画像を表示します

#### Returns

`void`

***

### getSize()

> **getSize**(): `number`

Defined in: structural/proxy/Image.ts:16

画像のサイズを取得します（バイト）

#### Returns

`number`

***

### getResolution()

> **getResolution**(): `object`

Defined in: structural/proxy/Image.ts:21

画像の解像度を取得します

#### Returns

`object`

##### width

> **width**: `number`

##### height

> **height**: `number`

***

### getFilename()

> **getFilename**(): `string`

Defined in: structural/proxy/Image.ts:26

画像のファイル名を取得します

#### Returns

`string`

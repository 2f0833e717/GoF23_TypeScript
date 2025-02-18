[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../../README.md) / [structural/facade/subsystem/codecs/CompressionCodec](../README.md) / CompressionCodec

# Interface: CompressionCodec

Defined in: structural/facade/subsystem/codecs/CompressionCodec.ts:6

圧縮コーデック

ビデオ圧縮コーデックのインターフェースを定義します。

## Methods

### getType()

> **getType**(): `string`

Defined in: structural/facade/subsystem/codecs/CompressionCodec.ts:10

コーデックの種類を取得します

#### Returns

`string`

***

### compress()

> **compress**(`data`): `string`

Defined in: structural/facade/subsystem/codecs/CompressionCodec.ts:17

ビデオデータを圧縮します

#### Parameters

##### data

`string`

圧縮するデータ

#### Returns

`string`

圧縮されたデータ

***

### decompress()

> **decompress**(`compressedData`): `string`

Defined in: structural/facade/subsystem/codecs/CompressionCodec.ts:24

ビデオデータを解凍します

#### Parameters

##### compressedData

`string`

圧縮されたデータ

#### Returns

`string`

解凍されたデータ

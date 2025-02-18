[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../../README.md) / [structural/facade/subsystem/codecs/OggCompressionCodec](../README.md) / OggCompressionCodec

# Class: OggCompressionCodec

Defined in: structural/facade/subsystem/codecs/OggCompressionCodec.ts:8

圧縮コーデック

ビデオ圧縮コーデックのインターフェースを定義します。

## Implements

- [`CompressionCodec`](../../CompressionCodec/interfaces/CompressionCodec.md)

## Constructors

### new OggCompressionCodec()

> **new OggCompressionCodec**(): [`OggCompressionCodec`](OggCompressionCodec.md)

#### Returns

[`OggCompressionCodec`](OggCompressionCodec.md)

## Methods

### getType()

> **getType**(): `string`

Defined in: structural/facade/subsystem/codecs/OggCompressionCodec.ts:12

コーデックの種類を取得します

#### Returns

`string`

#### Implementation of

[`CompressionCodec`](../../CompressionCodec/interfaces/CompressionCodec.md).[`getType`](../../CompressionCodec/interfaces/CompressionCodec.md#gettype)

***

### compress()

> **compress**(`data`): `string`

Defined in: structural/facade/subsystem/codecs/OggCompressionCodec.ts:21

Ogg形式でビデオデータを圧縮します

#### Parameters

##### data

`string`

圧縮するデータ

#### Returns

`string`

圧縮されたデータ

#### Implementation of

[`CompressionCodec`](../../CompressionCodec/interfaces/CompressionCodec.md).[`compress`](../../CompressionCodec/interfaces/CompressionCodec.md#compress)

***

### decompress()

> **decompress**(`compressedData`): `string`

Defined in: structural/facade/subsystem/codecs/OggCompressionCodec.ts:31

Ogg形式のビデオデータを解凍します

#### Parameters

##### compressedData

`string`

圧縮されたデータ

#### Returns

`string`

解凍されたデータ

#### Implementation of

[`CompressionCodec`](../../CompressionCodec/interfaces/CompressionCodec.md).[`decompress`](../../CompressionCodec/interfaces/CompressionCodec.md#decompress)

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/codecs/CompressionCodec](../modules/structural_facade_subsystem_codecs_CompressionCodec.md) / CompressionCodec

# Interface: CompressionCodec

[structural/facade/subsystem/codecs/CompressionCodec](../modules/structural_facade_subsystem_codecs_CompressionCodec.md).CompressionCodec

圧縮コーデック

ビデオ圧縮コーデックのインターフェースを定義します。

## Implemented by

- [`MPEG4CompressionCodec`](../classes/structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md)
- [`OggCompressionCodec`](../classes/structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md)

## Table of contents

### Methods

- [getType](structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#gettype)
- [compress](structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#compress)
- [decompress](structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#decompress)

## Methods

### getType

▸ **getType**(): `string`

コーデックの種類を取得します

#### Returns

`string`

#### Defined in

structural/facade/subsystem/codecs/CompressionCodec.ts:10

___

### compress

▸ **compress**(`data`): `string`

ビデオデータを圧縮します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 圧縮するデータ |

#### Returns

`string`

圧縮されたデータ

#### Defined in

structural/facade/subsystem/codecs/CompressionCodec.ts:17

___

### decompress

▸ **decompress**(`compressedData`): `string`

ビデオデータを解凍します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compressedData` | `string` | 圧縮されたデータ |

#### Returns

`string`

解凍されたデータ

#### Defined in

structural/facade/subsystem/codecs/CompressionCodec.ts:24

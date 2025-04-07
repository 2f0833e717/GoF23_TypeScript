[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/codecs/OggCompressionCodec](../modules/structural_facade_subsystem_codecs_OggCompressionCodec.md) / OggCompressionCodec

# Class: OggCompressionCodec

[structural/facade/subsystem/codecs/OggCompressionCodec](../modules/structural_facade_subsystem_codecs_OggCompressionCodec.md).OggCompressionCodec

圧縮コーデック

ビデオ圧縮コーデックのインターフェースを定義します。

## Implements

- [`CompressionCodec`](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md)

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md#constructor)

### Methods

- [getType](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md#gettype)
- [compress](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md#compress)
- [decompress](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md#decompress)

## Constructors

### constructor

• **new OggCompressionCodec**(): [`OggCompressionCodec`](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md)

#### Returns

[`OggCompressionCodec`](structural_facade_subsystem_codecs_OggCompressionCodec.OggCompressionCodec.md)

## Methods

### getType

▸ **getType**(): `string`

コーデックの種類を取得します

#### Returns

`string`

#### Implementation of

[CompressionCodec](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md).[getType](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#gettype)

#### Defined in

structural/facade/subsystem/codecs/OggCompressionCodec.ts:12

___

### compress

▸ **compress**(`data`): `string`

Ogg形式でビデオデータを圧縮します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 圧縮するデータ |

#### Returns

`string`

圧縮されたデータ

#### Implementation of

[CompressionCodec](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md).[compress](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#compress)

#### Defined in

structural/facade/subsystem/codecs/OggCompressionCodec.ts:21

___

### decompress

▸ **decompress**(`compressedData`): `string`

Ogg形式のビデオデータを解凍します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compressedData` | `string` | 圧縮されたデータ |

#### Returns

`string`

解凍されたデータ

#### Implementation of

[CompressionCodec](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md).[decompress](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#decompress)

#### Defined in

structural/facade/subsystem/codecs/OggCompressionCodec.ts:31

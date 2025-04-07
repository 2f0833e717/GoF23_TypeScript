[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/codecs/MPEG4CompressionCodec](../modules/structural_facade_subsystem_codecs_MPEG4CompressionCodec.md) / MPEG4CompressionCodec

# Class: MPEG4CompressionCodec

[structural/facade/subsystem/codecs/MPEG4CompressionCodec](../modules/structural_facade_subsystem_codecs_MPEG4CompressionCodec.md).MPEG4CompressionCodec

圧縮コーデック

ビデオ圧縮コーデックのインターフェースを定義します。

## Implements

- [`CompressionCodec`](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md)

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md#constructor)

### Methods

- [getType](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md#gettype)
- [compress](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md#compress)
- [decompress](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md#decompress)

## Constructors

### constructor

• **new MPEG4CompressionCodec**(): [`MPEG4CompressionCodec`](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md)

#### Returns

[`MPEG4CompressionCodec`](structural_facade_subsystem_codecs_MPEG4CompressionCodec.MPEG4CompressionCodec.md)

## Methods

### getType

▸ **getType**(): `string`

コーデックの種類を取得します

#### Returns

`string`

#### Implementation of

[CompressionCodec](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md).[getType](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md#gettype)

#### Defined in

structural/facade/subsystem/codecs/MPEG4CompressionCodec.ts:12

___

### compress

▸ **compress**(`data`): `string`

MPEG4形式でビデオデータを圧縮します

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

structural/facade/subsystem/codecs/MPEG4CompressionCodec.ts:21

___

### decompress

▸ **decompress**(`compressedData`): `string`

MPEG4形式のビデオデータを解凍します

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

structural/facade/subsystem/codecs/MPEG4CompressionCodec.ts:31

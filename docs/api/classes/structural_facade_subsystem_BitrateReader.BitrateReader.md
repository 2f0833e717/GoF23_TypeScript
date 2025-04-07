[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/BitrateReader](../modules/structural_facade_subsystem_BitrateReader.md) / BitrateReader

# Class: BitrateReader

[structural/facade/subsystem/BitrateReader](../modules/structural_facade_subsystem_BitrateReader.md).BitrateReader

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_BitrateReader.BitrateReader.md#constructor)

### Methods

- [read](structural_facade_subsystem_BitrateReader.BitrateReader.md#read)
- [convert](structural_facade_subsystem_BitrateReader.BitrateReader.md#convert)

## Constructors

### constructor

• **new BitrateReader**(): [`BitrateReader`](structural_facade_subsystem_BitrateReader.BitrateReader.md)

#### Returns

[`BitrateReader`](structural_facade_subsystem_BitrateReader.BitrateReader.md)

## Methods

### read

▸ **read**(`file`): `string`

ビデオデータを読み取ります

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`VideoFile`](structural_facade_subsystem_VideoFile.VideoFile.md) | ビデオファイル |

#### Returns

`string`

読み取ったデータ

#### Defined in

structural/facade/subsystem/BitrateReader.ts:15

___

### convert

▸ **convert**(`buffer`, `codec`): `string`

ビデオデータを指定されたコーデックに変換します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `string` | 変換するデータ |
| `codec` | [`CompressionCodec`](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md) | 変換先のコーデック |

#### Returns

`string`

変換されたデータ

#### Defined in

structural/facade/subsystem/BitrateReader.ts:26

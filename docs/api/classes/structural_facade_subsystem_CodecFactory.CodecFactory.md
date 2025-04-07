[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/CodecFactory](../modules/structural_facade_subsystem_CodecFactory.md) / CodecFactory

# Class: CodecFactory

[structural/facade/subsystem/CodecFactory](../modules/structural_facade_subsystem_CodecFactory.md).CodecFactory

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_CodecFactory.CodecFactory.md#constructor)

### Methods

- [extract](structural_facade_subsystem_CodecFactory.CodecFactory.md#extract)

## Constructors

### constructor

• **new CodecFactory**(): [`CodecFactory`](structural_facade_subsystem_CodecFactory.CodecFactory.md)

#### Returns

[`CodecFactory`](structural_facade_subsystem_CodecFactory.CodecFactory.md)

## Methods

### extract

▸ **extract**(`file`): [`CompressionCodec`](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md)

ファイルの拡張子からコーデックを抽出します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`VideoFile`](structural_facade_subsystem_VideoFile.VideoFile.md) | ビデオファイル |

#### Returns

[`CompressionCodec`](../interfaces/structural_facade_subsystem_codecs_CompressionCodec.CompressionCodec.md)

適切なコーデック

#### Defined in

structural/facade/subsystem/CodecFactory.ts:17

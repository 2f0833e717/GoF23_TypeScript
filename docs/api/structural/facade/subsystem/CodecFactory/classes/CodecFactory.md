[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/facade/subsystem/CodecFactory](../README.md) / CodecFactory

# Class: CodecFactory

Defined in: structural/facade/subsystem/CodecFactory.ts:11

## Constructors

### new CodecFactory()

> **new CodecFactory**(): [`CodecFactory`](CodecFactory.md)

#### Returns

[`CodecFactory`](CodecFactory.md)

## Methods

### extract()

> `static` **extract**(`file`): [`CompressionCodec`](../../codecs/CompressionCodec/interfaces/CompressionCodec.md)

Defined in: structural/facade/subsystem/CodecFactory.ts:17

ファイルの拡張子からコーデックを抽出します

#### Parameters

##### file

[`VideoFile`](../../VideoFile/classes/VideoFile.md)

ビデオファイル

#### Returns

[`CompressionCodec`](../../codecs/CompressionCodec/interfaces/CompressionCodec.md)

適切なコーデック

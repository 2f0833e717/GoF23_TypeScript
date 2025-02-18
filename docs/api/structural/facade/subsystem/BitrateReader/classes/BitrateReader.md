[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/facade/subsystem/BitrateReader](../README.md) / BitrateReader

# Class: BitrateReader

Defined in: structural/facade/subsystem/BitrateReader.ts:9

## Constructors

### new BitrateReader()

> **new BitrateReader**(): [`BitrateReader`](BitrateReader.md)

#### Returns

[`BitrateReader`](BitrateReader.md)

## Methods

### read()

> `static` **read**(`file`): `string`

Defined in: structural/facade/subsystem/BitrateReader.ts:15

ビデオデータを読み取ります

#### Parameters

##### file

[`VideoFile`](../../VideoFile/classes/VideoFile.md)

ビデオファイル

#### Returns

`string`

読み取ったデータ

***

### convert()

> `static` **convert**(`buffer`, `codec`): `string`

Defined in: structural/facade/subsystem/BitrateReader.ts:26

ビデオデータを指定されたコーデックに変換します

#### Parameters

##### buffer

`string`

変換するデータ

##### codec

[`CompressionCodec`](../../codecs/CompressionCodec/interfaces/CompressionCodec.md)

変換先のコーデック

#### Returns

`string`

変換されたデータ

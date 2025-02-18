[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/facade/subsystem/VideoFile](../README.md) / VideoFile

# Class: VideoFile

Defined in: structural/facade/subsystem/VideoFile.ts:6

ビデオファイル

ビデオファイルとそのメタデータを表現するクラスです。

## Constructors

### new VideoFile()

> **new VideoFile**(`filename`, `codecType`, `duration`): [`VideoFile`](VideoFile.md)

Defined in: structural/facade/subsystem/VideoFile.ts:17

コンストラクタ

#### Parameters

##### filename

`string`

ファイル名

##### codecType

`string`

コーデックタイプ

##### duration

`number`

動画の長さ（秒）

#### Returns

[`VideoFile`](VideoFile.md)

## Methods

### getFilename()

> **getFilename**(): `string`

Defined in: structural/facade/subsystem/VideoFile.ts:26

ファイル名を取得します

#### Returns

`string`

***

### getCodecType()

> **getCodecType**(): `string`

Defined in: structural/facade/subsystem/VideoFile.ts:33

コーデックタイプを取得します

#### Returns

`string`

***

### getDuration()

> **getDuration**(): `number`

Defined in: structural/facade/subsystem/VideoFile.ts:40

動画の長さを取得します

#### Returns

`number`

***

### toString()

> **toString**(): `string`

Defined in: structural/facade/subsystem/VideoFile.ts:47

ファイル情報を文字列として取得します

#### Returns

`string`

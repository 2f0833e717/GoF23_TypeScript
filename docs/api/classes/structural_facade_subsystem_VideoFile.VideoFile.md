[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/VideoFile](../modules/structural_facade_subsystem_VideoFile.md) / VideoFile

# Class: VideoFile

[structural/facade/subsystem/VideoFile](../modules/structural_facade_subsystem_VideoFile.md).VideoFile

ビデオファイル

ビデオファイルとそのメタデータを表現するクラスです。

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_VideoFile.VideoFile.md#constructor)

### Methods

- [getFilename](structural_facade_subsystem_VideoFile.VideoFile.md#getfilename)
- [getCodecType](structural_facade_subsystem_VideoFile.VideoFile.md#getcodectype)
- [getDuration](structural_facade_subsystem_VideoFile.VideoFile.md#getduration)
- [toString](structural_facade_subsystem_VideoFile.VideoFile.md#tostring)

## Constructors

### constructor

• **new VideoFile**(`filename`, `codecType`, `duration`): [`VideoFile`](structural_facade_subsystem_VideoFile.VideoFile.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | ファイル名 |
| `codecType` | `string` | コーデックタイプ |
| `duration` | `number` | 動画の長さ（秒） |

#### Returns

[`VideoFile`](structural_facade_subsystem_VideoFile.VideoFile.md)

#### Defined in

structural/facade/subsystem/VideoFile.ts:17

## Methods

### getFilename

▸ **getFilename**(): `string`

ファイル名を取得します

#### Returns

`string`

#### Defined in

structural/facade/subsystem/VideoFile.ts:26

___

### getCodecType

▸ **getCodecType**(): `string`

コーデックタイプを取得します

#### Returns

`string`

#### Defined in

structural/facade/subsystem/VideoFile.ts:33

___

### getDuration

▸ **getDuration**(): `number`

動画の長さを取得します

#### Returns

`number`

#### Defined in

structural/facade/subsystem/VideoFile.ts:40

___

### toString

▸ **toString**(): `string`

ファイル情報を文字列として取得します

#### Returns

`string`

#### Defined in

structural/facade/subsystem/VideoFile.ts:47

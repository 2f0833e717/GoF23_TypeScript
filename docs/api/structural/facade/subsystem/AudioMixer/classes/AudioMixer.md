[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/facade/subsystem/AudioMixer](../README.md) / AudioMixer

# Class: AudioMixer

Defined in: structural/facade/subsystem/AudioMixer.ts:6

オーディオミキサー

オーディオトラックの処理とミキシングを行うクラスです。

## Constructors

### new AudioMixer()

> **new AudioMixer**(): [`AudioMixer`](AudioMixer.md)

#### Returns

[`AudioMixer`](AudioMixer.md)

## Methods

### fix()

> **fix**(`videoData`): `string`

Defined in: structural/facade/subsystem/AudioMixer.ts:12

オーディオトラックを修正します

#### Parameters

##### videoData

`string`

ビデオデータ

#### Returns

`string`

修正されたビデオデータ

***

### mix()

> **mix**(`audioData`): `string`

Defined in: structural/facade/subsystem/AudioMixer.ts:22

オーディオトラックをミキシングします

#### Parameters

##### audioData

`string`

オーディオデータ

#### Returns

`string`

ミキシングされたオーディオデータ

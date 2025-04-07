[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/facade/subsystem/AudioMixer](../modules/structural_facade_subsystem_AudioMixer.md) / AudioMixer

# Class: AudioMixer

[structural/facade/subsystem/AudioMixer](../modules/structural_facade_subsystem_AudioMixer.md).AudioMixer

オーディオミキサー

オーディオトラックの処理とミキシングを行うクラスです。

## Table of contents

### Constructors

- [constructor](structural_facade_subsystem_AudioMixer.AudioMixer.md#constructor)

### Methods

- [fix](structural_facade_subsystem_AudioMixer.AudioMixer.md#fix)
- [mix](structural_facade_subsystem_AudioMixer.AudioMixer.md#mix)

## Constructors

### constructor

• **new AudioMixer**(): [`AudioMixer`](structural_facade_subsystem_AudioMixer.AudioMixer.md)

#### Returns

[`AudioMixer`](structural_facade_subsystem_AudioMixer.AudioMixer.md)

## Methods

### fix

▸ **fix**(`videoData`): `string`

オーディオトラックを修正します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `videoData` | `string` | ビデオデータ |

#### Returns

`string`

修正されたビデオデータ

#### Defined in

structural/facade/subsystem/AudioMixer.ts:12

___

### mix

▸ **mix**(`audioData`): `string`

オーディオトラックをミキシングします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioData` | `string` | オーディオデータ |

#### Returns

`string`

ミキシングされたオーディオデータ

#### Defined in

structural/facade/subsystem/AudioMixer.ts:22

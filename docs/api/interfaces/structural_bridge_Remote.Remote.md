[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/Remote](../modules/structural_bridge_Remote.md) / Remote

# Interface: Remote

[structural/bridge/Remote](../modules/structural_bridge_Remote.md).Remote

リモコンのインターフェース

デバイスを操作するための基本的なメソッドを定義します。

## Implemented by

- [`BasicRemote`](../classes/structural_bridge_abstraction_BasicRemote.BasicRemote.md)

## Table of contents

### Methods

- [turnOn](structural_bridge_Remote.Remote.md#turnon)
- [turnOff](structural_bridge_Remote.Remote.md#turnoff)
- [isEnabled](structural_bridge_Remote.Remote.md#isenabled)
- [getVolume](structural_bridge_Remote.Remote.md#getvolume)
- [setVolume](structural_bridge_Remote.Remote.md#setvolume)
- [getChannel](structural_bridge_Remote.Remote.md#getchannel)
- [setChannel](structural_bridge_Remote.Remote.md#setchannel)
- [volumeUp](structural_bridge_Remote.Remote.md#volumeup)
- [volumeDown](structural_bridge_Remote.Remote.md#volumedown)
- [channelUp](structural_bridge_Remote.Remote.md#channelup)
- [channelDown](structural_bridge_Remote.Remote.md#channeldown)
- [returnToPreviousChannel](structural_bridge_Remote.Remote.md#returntopreviouschannel)
- [mute](structural_bridge_Remote.Remote.md#mute)
- [addToFavorites](structural_bridge_Remote.Remote.md#addtofavorites)
- [cycleFavorites](structural_bridge_Remote.Remote.md#cyclefavorites)

## Methods

### turnOn

▸ **turnOn**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:7

___

### turnOff

▸ **turnOff**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:8

___

### isEnabled

▸ **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

structural/bridge/Remote.ts:9

___

### getVolume

▸ **getVolume**(): `number`

#### Returns

`number`

#### Defined in

structural/bridge/Remote.ts:10

___

### setVolume

▸ **setVolume**(`volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:11

___

### getChannel

▸ **getChannel**(): `number`

#### Returns

`number`

#### Defined in

structural/bridge/Remote.ts:12

___

### setChannel

▸ **setChannel**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:13

___

### volumeUp

▸ **volumeUp**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:14

___

### volumeDown

▸ **volumeDown**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:15

___

### channelUp

▸ **channelUp**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:16

___

### channelDown

▸ **channelDown**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:17

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:19

___

### mute

▸ **mute**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:20

___

### addToFavorites

▸ **addToFavorites**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:21

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

#### Returns

`void`

#### Defined in

structural/bridge/Remote.ts:22

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/abstraction/BasicRemote](../modules/structural_bridge_abstraction_BasicRemote.md) / BasicRemote

# Class: BasicRemote

[structural/bridge/abstraction/BasicRemote](../modules/structural_bridge_abstraction_BasicRemote.md).BasicRemote

リモコンのインターフェース

デバイスを操作するための基本的なメソッドを定義します。

## Hierarchy

- **`BasicRemote`**

  ↳ [`AdvancedRemote`](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md)

## Implements

- [`Remote`](../interfaces/structural_bridge_Remote.Remote.md)

## Table of contents

### Constructors

- [constructor](structural_bridge_abstraction_BasicRemote.BasicRemote.md#constructor)

### Properties

- [device](structural_bridge_abstraction_BasicRemote.BasicRemote.md#device)

### Methods

- [turnOn](structural_bridge_abstraction_BasicRemote.BasicRemote.md#turnon)
- [turnOff](structural_bridge_abstraction_BasicRemote.BasicRemote.md#turnoff)
- [isEnabled](structural_bridge_abstraction_BasicRemote.BasicRemote.md#isenabled)
- [getVolume](structural_bridge_abstraction_BasicRemote.BasicRemote.md#getvolume)
- [setVolume](structural_bridge_abstraction_BasicRemote.BasicRemote.md#setvolume)
- [getChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#getchannel)
- [setChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#setchannel)
- [volumeUp](structural_bridge_abstraction_BasicRemote.BasicRemote.md#volumeup)
- [volumeDown](structural_bridge_abstraction_BasicRemote.BasicRemote.md#volumedown)
- [channelUp](structural_bridge_abstraction_BasicRemote.BasicRemote.md#channelup)
- [channelDown](structural_bridge_abstraction_BasicRemote.BasicRemote.md#channeldown)
- [returnToPreviousChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#returntopreviouschannel)
- [mute](structural_bridge_abstraction_BasicRemote.BasicRemote.md#mute)
- [addToFavorites](structural_bridge_abstraction_BasicRemote.BasicRemote.md#addtofavorites)
- [cycleFavorites](structural_bridge_abstraction_BasicRemote.BasicRemote.md#cyclefavorites)

## Constructors

### constructor

• **new BasicRemote**(`device`): [`BasicRemote`](structural_bridge_abstraction_BasicRemote.BasicRemote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`Device`](../interfaces/structural_bridge_Device.Device.md) |

#### Returns

[`BasicRemote`](structural_bridge_abstraction_BasicRemote.BasicRemote.md)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:12

## Properties

### device

• `Protected` **device**: [`Device`](../interfaces/structural_bridge_Device.Device.md)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:10

## Methods

### turnOn

▸ **turnOn**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[turnOn](../interfaces/structural_bridge_Remote.Remote.md#turnon)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:16

___

### turnOff

▸ **turnOff**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[turnOff](../interfaces/structural_bridge_Remote.Remote.md#turnoff)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:20

___

### isEnabled

▸ **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[isEnabled](../interfaces/structural_bridge_Remote.Remote.md#isenabled)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:24

___

### getVolume

▸ **getVolume**(): `number`

#### Returns

`number`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[getVolume](../interfaces/structural_bridge_Remote.Remote.md#getvolume)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:28

___

### setVolume

▸ **setVolume**(`volume`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[setVolume](../interfaces/structural_bridge_Remote.Remote.md#setvolume)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:32

___

### getChannel

▸ **getChannel**(): `number`

#### Returns

`number`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[getChannel](../interfaces/structural_bridge_Remote.Remote.md#getchannel)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:36

___

### setChannel

▸ **setChannel**(`channel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[setChannel](../interfaces/structural_bridge_Remote.Remote.md#setchannel)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:40

___

### volumeUp

▸ **volumeUp**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[volumeUp](../interfaces/structural_bridge_Remote.Remote.md#volumeup)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:54

___

### volumeDown

▸ **volumeDown**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[volumeDown](../interfaces/structural_bridge_Remote.Remote.md#volumedown)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:60

___

### channelUp

▸ **channelUp**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[channelUp](../interfaces/structural_bridge_Remote.Remote.md#channelup)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:65

___

### channelDown

▸ **channelDown**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[channelDown](../interfaces/structural_bridge_Remote.Remote.md#channeldown)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:80

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[returnToPreviousChannel](../interfaces/structural_bridge_Remote.Remote.md#returntopreviouschannel)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:95

___

### mute

▸ **mute**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[mute](../interfaces/structural_bridge_Remote.Remote.md#mute)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:106

___

### addToFavorites

▸ **addToFavorites**(`channel`): `void`

お気に入りチャンネルを追加します
デバイスの電源状態に関係なく追加できます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | 追加するチャンネル |

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[addToFavorites](../interfaces/structural_bridge_Remote.Remote.md#addtofavorites)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:120

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

#### Returns

`void`

#### Implementation of

[Remote](../interfaces/structural_bridge_Remote.Remote.md).[cycleFavorites](../interfaces/structural_bridge_Remote.Remote.md#cyclefavorites)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:128

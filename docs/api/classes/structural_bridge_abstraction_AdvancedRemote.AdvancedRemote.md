[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/abstraction/AdvancedRemote](../modules/structural_bridge_abstraction_AdvancedRemote.md) / AdvancedRemote

# Class: AdvancedRemote

[structural/bridge/abstraction/AdvancedRemote](../modules/structural_bridge_abstraction_AdvancedRemote.md).AdvancedRemote

リモコンのインターフェース

デバイスを操作するための基本的なメソッドを定義します。

## Hierarchy

- [`BasicRemote`](structural_bridge_abstraction_BasicRemote.BasicRemote.md)

  ↳ **`AdvancedRemote`**

## Table of contents

### Constructors

- [constructor](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#constructor)

### Properties

- [device](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#device)

### Methods

- [mute](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#mute)
- [toggleMute](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#togglemute)
- [setVolume](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#setvolume)
- [returnToPreviousChannel](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#returntopreviouschannel)
- [jumpToChannel](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#jumptochannel)
- [addToFavorites](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#addtofavorites)
- [removeFromFavorites](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#removefromfavorites)
- [getFavorites](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#getfavorites)
- [getFavoriteChannels](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#getfavoritechannels)
- [cycleFavorites](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#cyclefavorites)
- [turnOn](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#turnon)
- [turnOff](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#turnoff)
- [isEnabled](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#isenabled)
- [getVolume](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#getvolume)
- [getChannel](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#getchannel)
- [setChannel](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#setchannel)
- [volumeUp](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#volumeup)
- [volumeDown](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#volumedown)
- [channelUp](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#channelup)
- [channelDown](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md#channeldown)

## Constructors

### constructor

• **new AdvancedRemote**(`device`): [`AdvancedRemote`](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`Device`](../interfaces/structural_bridge_Device.Device.md) |

#### Returns

[`AdvancedRemote`](structural_bridge_abstraction_AdvancedRemote.AdvancedRemote.md)

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[constructor](structural_bridge_abstraction_BasicRemote.BasicRemote.md#constructor)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:17

## Properties

### device

• `Protected` **device**: [`Device`](../interfaces/structural_bridge_Device.Device.md)

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[device](structural_bridge_abstraction_BasicRemote.BasicRemote.md#device)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:10

## Methods

### mute

▸ **mute**(): `void`

ミュートを切り替えます
デバイスの電源がONの状態でのみ動作します

#### Returns

`void`

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[mute](structural_bridge_abstraction_BasicRemote.BasicRemote.md#mute)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:25

___

### toggleMute

▸ **toggleMute**(): `void`

ミュートを切り替えます（toggleMuteのエイリアス）

#### Returns

`void`

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:42

___

### setVolume

▸ **setVolume**(`volume`): `void`

音量を設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | `number` |

#### Returns

`void`

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[setVolume](structural_bridge_abstraction_BasicRemote.BasicRemote.md#setvolume)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:49

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前のチャンネルに戻ります
デバイスの電源がONの状態でのみ動作します

#### Returns

`void`

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[returnToPreviousChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#returntopreviouschannel)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:61

___

### jumpToChannel

▸ **jumpToChannel**(`channel`): `void`

指定したチャンネルに直接移動します
デバイスの電源がONの状態でのみ動作します

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:72

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

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[addToFavorites](structural_bridge_abstraction_BasicRemote.BasicRemote.md#addtofavorites)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:86

___

### removeFromFavorites

▸ **removeFromFavorites**(`channel`): `void`

お気に入りチャンネルを削除します

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:95

___

### getFavorites

▸ **getFavorites**(): `number`[]

お気に入りチャンネルの一覧を取得します

#### Returns

`number`[]

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:102

___

### getFavoriteChannels

▸ **getFavoriteChannels**(): `number`[]

お気に入りチャンネルの一覧を取得します（getFavoritesのエイリアス）

#### Returns

`number`[]

**`Deprecated`**

代わりにgetFavoritesを使用してください

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:110

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

お気に入りチャンネルを順番に切り替えます
デバイスの電源がONの状態でのみ動作します

#### Returns

`void`

#### Overrides

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[cycleFavorites](structural_bridge_abstraction_BasicRemote.BasicRemote.md#cyclefavorites)

#### Defined in

structural/bridge/abstraction/AdvancedRemote.ts:118

___

### turnOn

▸ **turnOn**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[turnOn](structural_bridge_abstraction_BasicRemote.BasicRemote.md#turnon)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:16

___

### turnOff

▸ **turnOff**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[turnOff](structural_bridge_abstraction_BasicRemote.BasicRemote.md#turnoff)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:20

___

### isEnabled

▸ **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[isEnabled](structural_bridge_abstraction_BasicRemote.BasicRemote.md#isenabled)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:24

___

### getVolume

▸ **getVolume**(): `number`

#### Returns

`number`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[getVolume](structural_bridge_abstraction_BasicRemote.BasicRemote.md#getvolume)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:28

___

### getChannel

▸ **getChannel**(): `number`

#### Returns

`number`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[getChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#getchannel)

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

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[setChannel](structural_bridge_abstraction_BasicRemote.BasicRemote.md#setchannel)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:40

___

### volumeUp

▸ **volumeUp**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[volumeUp](structural_bridge_abstraction_BasicRemote.BasicRemote.md#volumeup)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:54

___

### volumeDown

▸ **volumeDown**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[volumeDown](structural_bridge_abstraction_BasicRemote.BasicRemote.md#volumedown)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:60

___

### channelUp

▸ **channelUp**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[channelUp](structural_bridge_abstraction_BasicRemote.BasicRemote.md#channelup)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:65

___

### channelDown

▸ **channelDown**(): `void`

#### Returns

`void`

#### Inherited from

[BasicRemote](structural_bridge_abstraction_BasicRemote.BasicRemote.md).[channelDown](structural_bridge_abstraction_BasicRemote.BasicRemote.md#channeldown)

#### Defined in

structural/bridge/abstraction/BasicRemote.ts:80

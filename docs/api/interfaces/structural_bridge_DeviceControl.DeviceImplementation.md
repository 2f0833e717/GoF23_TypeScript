[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md) / DeviceImplementation

# Interface: DeviceImplementation

[structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md).DeviceImplementation

デバイスの実装インターフェース

## Implemented by

- [`Radio`](../classes/structural_bridge_Devices.Radio.md)
- [`Television`](../classes/structural_bridge_Devices.Television.md)

## Table of contents

### Methods

- [turnOn](structural_bridge_DeviceControl.DeviceImplementation.md#turnon)
- [turnOff](structural_bridge_DeviceControl.DeviceImplementation.md#turnoff)
- [setVolume](structural_bridge_DeviceControl.DeviceImplementation.md#setvolume)
- [setChannel](structural_bridge_DeviceControl.DeviceImplementation.md#setchannel)
- [isEnabled](structural_bridge_DeviceControl.DeviceImplementation.md#isenabled)
- [getVolume](structural_bridge_DeviceControl.DeviceImplementation.md#getvolume)
- [getChannel](structural_bridge_DeviceControl.DeviceImplementation.md#getchannel)
- [returnToPreviousChannel](structural_bridge_DeviceControl.DeviceImplementation.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_DeviceControl.DeviceImplementation.md#addtofavorites)
- [removeFromFavorites](structural_bridge_DeviceControl.DeviceImplementation.md#removefromfavorites)
- [getFavorites](structural_bridge_DeviceControl.DeviceImplementation.md#getfavorites)

## Methods

### turnOn

▸ **turnOn**(): `void`

電源をONにします

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:18

___

### turnOff

▸ **turnOff**(): `void`

電源をOFFにします

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:23

___

### setVolume

▸ **setVolume**(`volume`): `void`

音量を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | 音量（0-100） |

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:29

___

### setChannel

▸ **setChannel**(`channel`): `void`

チャンネルを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | チャンネル番号 |

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:35

___

### isEnabled

▸ **isEnabled**(): `boolean`

現在の電源状態を取得します

#### Returns

`boolean`

#### Defined in

structural/bridge/DeviceControl.ts:40

___

### getVolume

▸ **getVolume**(): `number`

現在の音量を取得します

#### Returns

`number`

#### Defined in

structural/bridge/DeviceControl.ts:45

___

### getChannel

▸ **getChannel**(): `number`

現在のチャンネルを取得します

#### Returns

`number`

#### Defined in

structural/bridge/DeviceControl.ts:50

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前のチャンネルに戻ります

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:55

___

### addToFavorites

▸ **addToFavorites**(`channel`): `void`

お気に入りチャンネルを追加します

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:60

___

### removeFromFavorites

▸ **removeFromFavorites**(`channel`): `void`

お気に入りチャンネルを削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | 削除するチャンネル番号 |

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:66

___

### getFavorites

▸ **getFavorites**(): `number`[]

お気に入りチャンネルの一覧を取得します

#### Returns

`number`[]

#### Defined in

structural/bridge/DeviceControl.ts:71

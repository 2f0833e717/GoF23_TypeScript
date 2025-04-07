[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/Devices](../modules/structural_bridge_Devices.md) / Radio

# Class: Radio

[structural/bridge/Devices](../modules/structural_bridge_Devices.md).Radio

ラジオの実装

## Implements

- [`DeviceImplementation`](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md)

## Table of contents

### Constructors

- [constructor](structural_bridge_Devices.Radio.md#constructor)

### Methods

- [turnOn](structural_bridge_Devices.Radio.md#turnon)
- [turnOff](structural_bridge_Devices.Radio.md#turnoff)
- [isEnabled](structural_bridge_Devices.Radio.md#isenabled)
- [setVolume](structural_bridge_Devices.Radio.md#setvolume)
- [getVolume](structural_bridge_Devices.Radio.md#getvolume)
- [setChannel](structural_bridge_Devices.Radio.md#setchannel)
- [getChannel](structural_bridge_Devices.Radio.md#getchannel)
- [returnToPreviousChannel](structural_bridge_Devices.Radio.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_Devices.Radio.md#addtofavorites)
- [removeFromFavorites](structural_bridge_Devices.Radio.md#removefromfavorites)
- [getFavorites](structural_bridge_Devices.Radio.md#getfavorites)
- [getFrequency](structural_bridge_Devices.Radio.md#getfrequency)

## Constructors

### constructor

• **new Radio**(): [`Radio`](structural_bridge_Devices.Radio.md)

#### Returns

[`Radio`](structural_bridge_Devices.Radio.md)

## Methods

### turnOn

▸ **turnOn**(): `void`

電源をONにします

#### Returns

`void`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[turnOn](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#turnon)

#### Defined in

structural/bridge/Devices.ts:113

___

### turnOff

▸ **turnOff**(): `void`

電源をOFFにします

#### Returns

`void`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[turnOff](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#turnoff)

#### Defined in

structural/bridge/Devices.ts:120

___

### isEnabled

▸ **isEnabled**(): `boolean`

現在の電源状態を取得します

#### Returns

`boolean`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[isEnabled](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#isenabled)

#### Defined in

structural/bridge/Devices.ts:125

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

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[setVolume](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#setvolume)

#### Defined in

structural/bridge/Devices.ts:129

___

### getVolume

▸ **getVolume**(): `number`

現在の音量を取得します

#### Returns

`number`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[getVolume](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#getvolume)

#### Defined in

structural/bridge/Devices.ts:140

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

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[setChannel](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#setchannel)

#### Defined in

structural/bridge/Devices.ts:144

___

### getChannel

▸ **getChannel**(): `number`

現在のチャンネルを取得します

#### Returns

`number`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[getChannel](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#getchannel)

#### Defined in

structural/bridge/Devices.ts:157

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前のチャンネルに戻ります

#### Returns

`void`

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[returnToPreviousChannel](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#returntopreviouschannel)

#### Defined in

structural/bridge/Devices.ts:161

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

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[addToFavorites](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#addtofavorites)

#### Defined in

structural/bridge/Devices.ts:168

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

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[removeFromFavorites](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#removefromfavorites)

#### Defined in

structural/bridge/Devices.ts:178

___

### getFavorites

▸ **getFavorites**(): `number`[]

お気に入りチャンネルの一覧を取得します

#### Returns

`number`[]

#### Implementation of

[DeviceImplementation](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md).[getFavorites](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md#getfavorites)

#### Defined in

structural/bridge/Devices.ts:186

___

### getFrequency

▸ **getFrequency**(): `number`

#### Returns

`number`

#### Defined in

structural/bridge/Devices.ts:190

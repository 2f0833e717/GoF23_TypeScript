[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/Device](../modules/structural_bridge_Device.md) / Device

# Interface: Device

[structural/bridge/Device](../modules/structural_bridge_Device.md).Device

デバイスのインターフェース

デバイスの基本的な操作を定義します。
このインターフェースを実装することで、異なるデバイス間で共通の操作を提供します。

## Implemented by

- [`Radio`](../classes/structural_bridge_implementation_Radio.Radio.md)
- [`Television`](../classes/structural_bridge_implementation_Television.Television.md)

## Table of contents

### Methods

- [enable](structural_bridge_Device.Device.md#enable)
- [disable](structural_bridge_Device.Device.md#disable)
- [isEnabled](structural_bridge_Device.Device.md#isenabled)
- [getVolume](structural_bridge_Device.Device.md#getvolume)
- [setVolume](structural_bridge_Device.Device.md#setvolume)
- [getChannel](structural_bridge_Device.Device.md#getchannel)
- [setChannel](structural_bridge_Device.Device.md#setchannel)
- [returnToPreviousChannel](structural_bridge_Device.Device.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_Device.Device.md#addtofavorites)
- [removeFromFavorites](structural_bridge_Device.Device.md#removefromfavorites)
- [getFavorites](structural_bridge_Device.Device.md#getfavorites)
- [getFrequency](structural_bridge_Device.Device.md#getfrequency)
- [cycleFavorites](structural_bridge_Device.Device.md#cyclefavorites)

## Methods

### enable

▸ **enable**(): `void`

デバイスの電源をONにします

#### Returns

`void`

**`Throws`**

デバイスが既にONの場合

#### Defined in

structural/bridge/Device.ts:12

___

### disable

▸ **disable**(): `void`

デバイスの電源をOFFにします

#### Returns

`void`

**`Throws`**

デバイスが既にOFFの場合

#### Defined in

structural/bridge/Device.ts:18

___

### isEnabled

▸ **isEnabled**(): `boolean`

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがONの場合はtrue、OFFの場合はfalse

#### Defined in

structural/bridge/Device.ts:24

___

### getVolume

▸ **getVolume**(): `number`

現在の音量を取得します

#### Returns

`number`

音量（0-100）

#### Defined in

structural/bridge/Device.ts:30

___

### setVolume

▸ **setVolume**(`volume`): `void`

音量を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | 設定する音量（0-100） |

#### Returns

`void`

**`Throws`**

音量が数値でない場合

#### Defined in

structural/bridge/Device.ts:37

___

### getChannel

▸ **getChannel**(): `number`

現在のチャンネルを取得します

#### Returns

`number`

チャンネル番号（1-64）

#### Defined in

structural/bridge/Device.ts:43

___

### setChannel

▸ **setChannel**(`channel`): `void`

チャンネルを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | 設定するチャンネル番号（1-64） |

#### Returns

`void`

**`Throws`**

デバイスがOFFの場合、またはチャンネルが範囲外の場合

#### Defined in

structural/bridge/Device.ts:50

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前のチャンネルに戻ります

#### Returns

`void`

**`Throws`**

デバイスがOFFの場合、または前のチャンネルが存在しない場合

#### Defined in

structural/bridge/Device.ts:56

___

### addToFavorites

▸ **addToFavorites**(`channel`): `void`

チャンネルをお気に入りに追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | お気に入りに追加するチャンネル番号（1-64） |

#### Returns

`void`

**`Throws`**

チャンネルが範囲外の場合

#### Defined in

structural/bridge/Device.ts:63

___

### removeFromFavorites

▸ **removeFromFavorites**(`channel`): `void`

チャンネルをお気に入りから削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | お気に入りから削除するチャンネル番号 |

#### Returns

`void`

#### Defined in

structural/bridge/Device.ts:69

___

### getFavorites

▸ **getFavorites**(): `number`[]

お気に入りチャンネルの一覧を取得します

#### Returns

`number`[]

お気に入りチャンネルの配列（昇順）

#### Defined in

structural/bridge/Device.ts:75

___

### getFrequency

▸ **getFrequency**(): `number`

現在のチャンネルの周波数を取得します（ラジオのみ）

#### Returns

`number`

周波数（MHz）

#### Defined in

structural/bridge/Device.ts:81

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

お気に入りチャンネルを順番に切り替えます

#### Returns

`void`

**`Throws`**

デバイスがOFFの場合

#### Defined in

structural/bridge/Device.ts:87

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/implementation/Radio](../modules/structural_bridge_implementation_Radio.md) / Radio

# Class: Radio

[structural/bridge/implementation/Radio](../modules/structural_bridge_implementation_Radio.md).Radio

デバイスのインターフェース

デバイスの基本的な操作を定義します。
このインターフェースを実装することで、異なるデバイス間で共通の操作を提供します。

## Implements

- [`Device`](../interfaces/structural_bridge_Device.Device.md)

## Table of contents

### Constructors

- [constructor](structural_bridge_implementation_Radio.Radio.md#constructor)

### Methods

- [enable](structural_bridge_implementation_Radio.Radio.md#enable)
- [disable](structural_bridge_implementation_Radio.Radio.md#disable)
- [isEnabled](structural_bridge_implementation_Radio.Radio.md#isenabled)
- [getVolume](structural_bridge_implementation_Radio.Radio.md#getvolume)
- [setVolume](structural_bridge_implementation_Radio.Radio.md#setvolume)
- [getChannel](structural_bridge_implementation_Radio.Radio.md#getchannel)
- [setChannel](structural_bridge_implementation_Radio.Radio.md#setchannel)
- [returnToPreviousChannel](structural_bridge_implementation_Radio.Radio.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_implementation_Radio.Radio.md#addtofavorites)
- [removeFromFavorites](structural_bridge_implementation_Radio.Radio.md#removefromfavorites)
- [getFavorites](structural_bridge_implementation_Radio.Radio.md#getfavorites)
- [cycleFavorites](structural_bridge_implementation_Radio.Radio.md#cyclefavorites)
- [getFrequency](structural_bridge_implementation_Radio.Radio.md#getfrequency)

## Constructors

### constructor

• **new Radio**(): [`Radio`](structural_bridge_implementation_Radio.Radio.md)

#### Returns

[`Radio`](structural_bridge_implementation_Radio.Radio.md)

## Methods

### enable

▸ **enable**(): `void`

デバイスの電源をONにします

#### Returns

`void`

**`Throws`**

デバイスが既にONの場合

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[enable](../interfaces/structural_bridge_Device.Device.md#enable)

#### Defined in

structural/bridge/implementation/Radio.ts:30

___

### disable

▸ **disable**(): `void`

デバイスの電源をOFFにします

#### Returns

`void`

**`Throws`**

デバイスが既にOFFの場合

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[disable](../interfaces/structural_bridge_Device.Device.md#disable)

#### Defined in

structural/bridge/implementation/Radio.ts:40

___

### isEnabled

▸ **isEnabled**(): `boolean`

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがONの場合はtrue、OFFの場合はfalse

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[isEnabled](../interfaces/structural_bridge_Device.Device.md#isenabled)

#### Defined in

structural/bridge/implementation/Radio.ts:50

___

### getVolume

▸ **getVolume**(): `number`

現在の音量を取得します

#### Returns

`number`

音量（0-100）

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[getVolume](../interfaces/structural_bridge_Device.Device.md#getvolume)

#### Defined in

structural/bridge/implementation/Radio.ts:54

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

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[setVolume](../interfaces/structural_bridge_Device.Device.md#setvolume)

#### Defined in

structural/bridge/implementation/Radio.ts:58

___

### getChannel

▸ **getChannel**(): `number`

現在のチャンネルを取得します

#### Returns

`number`

チャンネル番号（1-64）

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[getChannel](../interfaces/structural_bridge_Device.Device.md#getchannel)

#### Defined in

structural/bridge/implementation/Radio.ts:75

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

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[setChannel](../interfaces/structural_bridge_Device.Device.md#setchannel)

#### Defined in

structural/bridge/implementation/Radio.ts:79

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前のチャンネルに戻ります

#### Returns

`void`

**`Throws`**

デバイスがOFFの場合、または前のチャンネルが存在しない場合

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[returnToPreviousChannel](../interfaces/structural_bridge_Device.Device.md#returntopreviouschannel)

#### Defined in

structural/bridge/implementation/Radio.ts:97

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

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[addToFavorites](../interfaces/structural_bridge_Device.Device.md#addtofavorites)

#### Defined in

structural/bridge/implementation/Radio.ts:111

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

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[removeFromFavorites](../interfaces/structural_bridge_Device.Device.md#removefromfavorites)

#### Defined in

structural/bridge/implementation/Radio.ts:126

___

### getFavorites

▸ **getFavorites**(): `number`[]

お気に入りチャンネルの一覧を取得します

#### Returns

`number`[]

お気に入りチャンネルの配列（昇順）

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[getFavorites](../interfaces/structural_bridge_Device.Device.md#getfavorites)

#### Defined in

structural/bridge/implementation/Radio.ts:134

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

お気に入りチャンネルを巡回する
- デバイスの電源がOFFの場合はエラー
- お気に入りが空の場合はメッセージを表示
- チャンネル1がお気に入りにある場合は、常に最初に移動
- その後は追加順に巡回する

#### Returns

`void`

**`Throws`**

デバイスの電源がOFFの場合

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[cycleFavorites](../interfaces/structural_bridge_Device.Device.md#cyclefavorites)

#### Defined in

structural/bridge/implementation/Radio.ts:146

___

### getFrequency

▸ **getFrequency**(): `number`

現在のチャンネルに対応する周波数を返します

#### Returns

`number`

周波数（MHz）

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[getFrequency](../interfaces/structural_bridge_Device.Device.md#getfrequency)

#### Defined in

structural/bridge/implementation/Radio.ts:181

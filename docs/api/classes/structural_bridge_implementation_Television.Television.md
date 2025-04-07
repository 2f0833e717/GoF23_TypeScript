[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/implementation/Television](../modules/structural_bridge_implementation_Television.md) / Television

# Class: Television

[structural/bridge/implementation/Television](../modules/structural_bridge_implementation_Television.md).Television

デバイスのインターフェース

デバイスの基本的な操作を定義します。
このインターフェースを実装することで、異なるデバイス間で共通の操作を提供します。

## Implements

- [`Device`](../interfaces/structural_bridge_Device.Device.md)

## Table of contents

### Constructors

- [constructor](structural_bridge_implementation_Television.Television.md#constructor)

### Methods

- [enable](structural_bridge_implementation_Television.Television.md#enable)
- [disable](structural_bridge_implementation_Television.Television.md#disable)
- [isEnabled](structural_bridge_implementation_Television.Television.md#isenabled)
- [getVolume](structural_bridge_implementation_Television.Television.md#getvolume)
- [setVolume](structural_bridge_implementation_Television.Television.md#setvolume)
- [getChannel](structural_bridge_implementation_Television.Television.md#getchannel)
- [setChannel](structural_bridge_implementation_Television.Television.md#setchannel)
- [returnToPreviousChannel](structural_bridge_implementation_Television.Television.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_implementation_Television.Television.md#addtofavorites)
- [removeFromFavorites](structural_bridge_implementation_Television.Television.md#removefromfavorites)
- [getFavorites](structural_bridge_implementation_Television.Television.md#getfavorites)
- [cycleFavorites](structural_bridge_implementation_Television.Television.md#cyclefavorites)

## Constructors

### constructor

• **new Television**(): [`Television`](structural_bridge_implementation_Television.Television.md)

#### Returns

[`Television`](structural_bridge_implementation_Television.Television.md)

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

structural/bridge/implementation/Television.ts:133

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

structural/bridge/implementation/Television.ts:152

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

structural/bridge/implementation/Television.ts:165

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

structural/bridge/implementation/Television.ts:169

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

structural/bridge/implementation/Television.ts:173

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

structural/bridge/implementation/Television.ts:195

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

structural/bridge/implementation/Television.ts:199

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

structural/bridge/implementation/Television.ts:216

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

structural/bridge/implementation/Television.ts:244

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

structural/bridge/implementation/Television.ts:258

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

structural/bridge/implementation/Television.ts:278

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

お気に入りチャンネルを巡回する

#### Returns

`void`

**`Throws`**

デバイスの電源がOFFの場合、またはお気に入りが登録されていない場合

#### Implementation of

[Device](../interfaces/structural_bridge_Device.Device.md).[cycleFavorites](../interfaces/structural_bridge_Device.Device.md#cyclefavorites)

#### Defined in

structural/bridge/implementation/Television.ts:286

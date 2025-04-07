[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md) / AdvancedRemote

# Class: AdvancedRemote

[structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md).AdvancedRemote

高度なリモコン

## Hierarchy

- [`DeviceControl`](structural_bridge_DeviceControl.DeviceControl.md)

  ↳ **`AdvancedRemote`**

## Table of contents

### Constructors

- [constructor](structural_bridge_DeviceControl.AdvancedRemote.md#constructor)

### Properties

- [implementation](structural_bridge_DeviceControl.AdvancedRemote.md#implementation)

### Methods

- [togglePower](structural_bridge_DeviceControl.AdvancedRemote.md#togglepower)
- [volumeUp](structural_bridge_DeviceControl.AdvancedRemote.md#volumeup)
- [volumeDown](structural_bridge_DeviceControl.AdvancedRemote.md#volumedown)
- [channelUp](structural_bridge_DeviceControl.AdvancedRemote.md#channelup)
- [channelDown](structural_bridge_DeviceControl.AdvancedRemote.md#channeldown)
- [setChannel](structural_bridge_DeviceControl.AdvancedRemote.md#setchannel)
- [mute](structural_bridge_DeviceControl.AdvancedRemote.md#mute)
- [returnToPreviousChannel](structural_bridge_DeviceControl.AdvancedRemote.md#returntopreviouschannel)
- [addToFavorites](structural_bridge_DeviceControl.AdvancedRemote.md#addtofavorites)
- [cycleFavorites](structural_bridge_DeviceControl.AdvancedRemote.md#cyclefavorites)

## Constructors

### constructor

• **new AdvancedRemote**(`implementation`): [`AdvancedRemote`](structural_bridge_DeviceControl.AdvancedRemote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | [`DeviceImplementation`](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md) |

#### Returns

[`AdvancedRemote`](structural_bridge_DeviceControl.AdvancedRemote.md)

#### Overrides

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[constructor](structural_bridge_DeviceControl.DeviceControl.md#constructor)

#### Defined in

structural/bridge/DeviceControl.ts:148

## Properties

### implementation

• `Protected` **implementation**: [`DeviceImplementation`](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md)

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[implementation](structural_bridge_DeviceControl.DeviceControl.md#implementation)

#### Defined in

structural/bridge/DeviceControl.ts:78

## Methods

### togglePower

▸ **togglePower**(): `void`

デバイスの電源をトグルします

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[togglePower](structural_bridge_DeviceControl.DeviceControl.md#togglepower)

#### Defined in

structural/bridge/DeviceControl.ts:83

___

### volumeUp

▸ **volumeUp**(): `void`

音量を上げます

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[volumeUp](structural_bridge_DeviceControl.DeviceControl.md#volumeup)

#### Defined in

structural/bridge/DeviceControl.ts:94

___

### volumeDown

▸ **volumeDown**(): `void`

音量を下げます

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[volumeDown](structural_bridge_DeviceControl.DeviceControl.md#volumedown)

#### Defined in

structural/bridge/DeviceControl.ts:102

___

### channelUp

▸ **channelUp**(): `void`

チャンネルを進めます

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[channelUp](structural_bridge_DeviceControl.DeviceControl.md#channelup)

#### Defined in

structural/bridge/DeviceControl.ts:110

___

### channelDown

▸ **channelDown**(): `void`

チャンネルを戻します

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[channelDown](structural_bridge_DeviceControl.DeviceControl.md#channeldown)

#### Defined in

structural/bridge/DeviceControl.ts:118

___

### setChannel

▸ **setChannel**(`channel`): `void`

特定のチャンネルに移動します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channel` | `number` | チャンネル番号 |

#### Returns

`void`

#### Inherited from

[DeviceControl](structural_bridge_DeviceControl.DeviceControl.md).[setChannel](structural_bridge_DeviceControl.DeviceControl.md#setchannel)

#### Defined in

structural/bridge/DeviceControl.ts:127

___

### mute

▸ **mute**(): `void`

デバイスをミュートします

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:156

___

### returnToPreviousChannel

▸ **returnToPreviousChannel**(): `void`

前回のチャンネルに戻ります

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:170

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

structural/bridge/DeviceControl.ts:177

___

### cycleFavorites

▸ **cycleFavorites**(): `void`

お気に入りチャンネルを巡回します

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:185

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md) / DeviceControl

# Class: DeviceControl

[structural/bridge/DeviceControl](../modules/structural_bridge_DeviceControl.md).DeviceControl

デバイス制御の抽象クラス

## Hierarchy

- **`DeviceControl`**

  ↳ [`BasicRemote`](structural_bridge_DeviceControl.BasicRemote.md)

  ↳ [`AdvancedRemote`](structural_bridge_DeviceControl.AdvancedRemote.md)

## Table of contents

### Constructors

- [constructor](structural_bridge_DeviceControl.DeviceControl.md#constructor)

### Properties

- [implementation](structural_bridge_DeviceControl.DeviceControl.md#implementation)

### Methods

- [togglePower](structural_bridge_DeviceControl.DeviceControl.md#togglepower)
- [volumeUp](structural_bridge_DeviceControl.DeviceControl.md#volumeup)
- [volumeDown](structural_bridge_DeviceControl.DeviceControl.md#volumedown)
- [channelUp](structural_bridge_DeviceControl.DeviceControl.md#channelup)
- [channelDown](structural_bridge_DeviceControl.DeviceControl.md#channeldown)
- [setChannel](structural_bridge_DeviceControl.DeviceControl.md#setchannel)

## Constructors

### constructor

• **new DeviceControl**(`implementation`): [`DeviceControl`](structural_bridge_DeviceControl.DeviceControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `implementation` | [`DeviceImplementation`](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md) |

#### Returns

[`DeviceControl`](structural_bridge_DeviceControl.DeviceControl.md)

#### Defined in

structural/bridge/DeviceControl.ts:78

## Properties

### implementation

• `Protected` **implementation**: [`DeviceImplementation`](../interfaces/structural_bridge_DeviceControl.DeviceImplementation.md)

#### Defined in

structural/bridge/DeviceControl.ts:78

## Methods

### togglePower

▸ **togglePower**(): `void`

デバイスの電源をトグルします

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:83

___

### volumeUp

▸ **volumeUp**(): `void`

音量を上げます

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:94

___

### volumeDown

▸ **volumeDown**(): `void`

音量を下げます

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:102

___

### channelUp

▸ **channelUp**(): `void`

チャンネルを進めます

#### Returns

`void`

#### Defined in

structural/bridge/DeviceControl.ts:110

___

### channelDown

▸ **channelDown**(): `void`

チャンネルを戻します

#### Returns

`void`

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

#### Defined in

structural/bridge/DeviceControl.ts:127

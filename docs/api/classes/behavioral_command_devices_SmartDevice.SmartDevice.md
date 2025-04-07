[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/devices/SmartDevice](../modules/behavioral_command_devices_SmartDevice.md) / SmartDevice

# Class: SmartDevice

[behavioral/command/devices/SmartDevice](../modules/behavioral_command_devices_SmartDevice.md).SmartDevice

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Hierarchy

- **`SmartDevice`**

  ↳ [`SmartLight`](behavioral_command_devices_SmartLight.SmartLight.md)

  ↳ [`Thermostat`](behavioral_command_devices_Thermostat.Thermostat.md)

## Table of contents

### Constructors

- [constructor](behavioral_command_devices_SmartDevice.SmartDevice.md#constructor)

### Methods

- [turnOn](behavioral_command_devices_SmartDevice.SmartDevice.md#turnon)
- [turnOff](behavioral_command_devices_SmartDevice.SmartDevice.md#turnoff)
- [isOn](behavioral_command_devices_SmartDevice.SmartDevice.md#ison)
- [getName](behavioral_command_devices_SmartDevice.SmartDevice.md#getname)
- [restoreLastState](behavioral_command_devices_SmartDevice.SmartDevice.md#restorelaststate)
- [toString](behavioral_command_devices_SmartDevice.SmartDevice.md#tostring)

## Constructors

### constructor

• **new SmartDevice**(`name`): [`SmartDevice`](behavioral_command_devices_SmartDevice.SmartDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SmartDevice`](behavioral_command_devices_SmartDevice.SmartDevice.md)

#### Defined in

behavioral/command/devices/SmartDevice.ts:10

## Methods

### turnOn

▸ **turnOn**(): `string`

デバイスの電源をオンにします

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/SmartDevice.ts:18

___

### turnOff

▸ **turnOff**(): `string`

デバイスの電源をオフにします

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/SmartDevice.ts:27

___

### isOn

▸ **isOn**(): `boolean`

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがオンの場合はtrue、オフの場合はfalse

#### Defined in

behavioral/command/devices/SmartDevice.ts:36

___

### getName

▸ **getName**(): `string`

デバイスの名前を取得します

#### Returns

`string`

デバイスの名前

#### Defined in

behavioral/command/devices/SmartDevice.ts:44

___

### restoreLastState

▸ **restoreLastState**(): `string`

最後の状態に戻します

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/SmartDevice.ts:52

___

### toString

▸ **toString**(): `string`

デバイスの状態を文字列で返します

#### Returns

`string`

デバイスの状態を表す文字列

#### Defined in

behavioral/command/devices/SmartDevice.ts:58

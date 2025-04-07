[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/devices/Thermostat](../modules/behavioral_command_devices_Thermostat.md) / Thermostat

# Class: Thermostat

[behavioral/command/devices/Thermostat](../modules/behavioral_command_devices_Thermostat.md).Thermostat

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Hierarchy

- [`SmartDevice`](behavioral_command_devices_SmartDevice.SmartDevice.md)

  ↳ **`Thermostat`**

## Table of contents

### Constructors

- [constructor](behavioral_command_devices_Thermostat.Thermostat.md#constructor)

### Methods

- [turnOn](behavioral_command_devices_Thermostat.Thermostat.md#turnon)
- [turnOff](behavioral_command_devices_Thermostat.Thermostat.md#turnoff)
- [isOn](behavioral_command_devices_Thermostat.Thermostat.md#ison)
- [getName](behavioral_command_devices_Thermostat.Thermostat.md#getname)
- [setTemperature](behavioral_command_devices_Thermostat.Thermostat.md#settemperature)
- [setMode](behavioral_command_devices_Thermostat.Thermostat.md#setmode)
- [getTemperature](behavioral_command_devices_Thermostat.Thermostat.md#gettemperature)
- [getMode](behavioral_command_devices_Thermostat.Thermostat.md#getmode)
- [restoreLastState](behavioral_command_devices_Thermostat.Thermostat.md#restorelaststate)
- [toString](behavioral_command_devices_Thermostat.Thermostat.md#tostring)

## Constructors

### constructor

• **new Thermostat**(`name`): [`Thermostat`](behavioral_command_devices_Thermostat.Thermostat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Thermostat`](behavioral_command_devices_Thermostat.Thermostat.md)

#### Inherited from

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[constructor](behavioral_command_devices_SmartDevice.SmartDevice.md#constructor)

#### Defined in

behavioral/command/devices/SmartDevice.ts:10

## Methods

### turnOn

▸ **turnOn**(): `string`

デバイスの電源をオンにします

#### Returns

`string`

操作結果のメッセージ

#### Inherited from

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[turnOn](behavioral_command_devices_SmartDevice.SmartDevice.md#turnon)

#### Defined in

behavioral/command/devices/SmartDevice.ts:18

___

### turnOff

▸ **turnOff**(): `string`

デバイスの電源をオフにします

#### Returns

`string`

操作結果のメッセージ

#### Inherited from

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[turnOff](behavioral_command_devices_SmartDevice.SmartDevice.md#turnoff)

#### Defined in

behavioral/command/devices/SmartDevice.ts:27

___

### isOn

▸ **isOn**(): `boolean`

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがオンの場合はtrue、オフの場合はfalse

#### Inherited from

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[isOn](behavioral_command_devices_SmartDevice.SmartDevice.md#ison)

#### Defined in

behavioral/command/devices/SmartDevice.ts:36

___

### getName

▸ **getName**(): `string`

デバイスの名前を取得します

#### Returns

`string`

デバイスの名前

#### Inherited from

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[getName](behavioral_command_devices_SmartDevice.SmartDevice.md#getname)

#### Defined in

behavioral/command/devices/SmartDevice.ts:44

___

### setTemperature

▸ **setTemperature**(`temp`): `string`

温度を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `temp` | `number` | 温度（16-32℃） |

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/Thermostat.ts:20

___

### setMode

▸ **setMode**(`mode`): `string`

動作モードを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | ``"off"`` \| ``"heat"`` \| ``"cool"`` | 動作モード（heat/cool/off） |

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/Thermostat.ts:42

___

### getTemperature

▸ **getTemperature**(): `number`

温度を取得します

#### Returns

`number`

現在の温度設定

#### Defined in

behavioral/command/devices/Thermostat.ts:63

___

### getMode

▸ **getMode**(): ``"off"`` \| ``"heat"`` \| ``"cool"``

動作モードを取得します

#### Returns

``"off"`` \| ``"heat"`` \| ``"cool"``

現在の動作モード

#### Defined in

behavioral/command/devices/Thermostat.ts:71

___

### restoreLastState

▸ **restoreLastState**(): `string`

前回の設定に戻します

#### Returns

`string`

操作結果のメッセージ

#### Overrides

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[restoreLastState](behavioral_command_devices_SmartDevice.SmartDevice.md#restorelaststate)

#### Defined in

behavioral/command/devices/Thermostat.ts:79

___

### toString

▸ **toString**(): `string`

デバイスの状態を文字列で返します

#### Returns

`string`

デバイスの状態を表す文字列

#### Overrides

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[toString](behavioral_command_devices_SmartDevice.SmartDevice.md#tostring)

#### Defined in

behavioral/command/devices/Thermostat.ts:102

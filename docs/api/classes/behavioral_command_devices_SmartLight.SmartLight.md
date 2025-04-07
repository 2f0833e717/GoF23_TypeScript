[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/devices/SmartLight](../modules/behavioral_command_devices_SmartLight.md) / SmartLight

# Class: SmartLight

[behavioral/command/devices/SmartLight](../modules/behavioral_command_devices_SmartLight.md).SmartLight

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Hierarchy

- [`SmartDevice`](behavioral_command_devices_SmartDevice.SmartDevice.md)

  ↳ **`SmartLight`**

## Table of contents

### Constructors

- [constructor](behavioral_command_devices_SmartLight.SmartLight.md#constructor)

### Methods

- [turnOn](behavioral_command_devices_SmartLight.SmartLight.md#turnon)
- [turnOff](behavioral_command_devices_SmartLight.SmartLight.md#turnoff)
- [isOn](behavioral_command_devices_SmartLight.SmartLight.md#ison)
- [getName](behavioral_command_devices_SmartLight.SmartLight.md#getname)
- [setBrightness](behavioral_command_devices_SmartLight.SmartLight.md#setbrightness)
- [getBrightness](behavioral_command_devices_SmartLight.SmartLight.md#getbrightness)
- [restoreBrightness](behavioral_command_devices_SmartLight.SmartLight.md#restorebrightness)
- [restoreLastState](behavioral_command_devices_SmartLight.SmartLight.md#restorelaststate)
- [toString](behavioral_command_devices_SmartLight.SmartLight.md#tostring)

## Constructors

### constructor

• **new SmartLight**(`name`): [`SmartLight`](behavioral_command_devices_SmartLight.SmartLight.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SmartLight`](behavioral_command_devices_SmartLight.SmartLight.md)

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

### setBrightness

▸ **setBrightness**(`level`): `string`

明るさを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | 明るさ（0-100） |

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/SmartLight.ts:19

___

### getBrightness

▸ **getBrightness**(): `number`

明るさを取得します

#### Returns

`number`

現在の明るさ（0-100）

#### Defined in

behavioral/command/devices/SmartLight.ts:40

___

### restoreBrightness

▸ **restoreBrightness**(): `string`

前回の明るさに戻します

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/command/devices/SmartLight.ts:48

___

### restoreLastState

▸ **restoreLastState**(): `string`

前回の状態に戻します

#### Returns

`string`

操作結果のメッセージ

#### Overrides

[SmartDevice](behavioral_command_devices_SmartDevice.SmartDevice.md).[restoreLastState](behavioral_command_devices_SmartDevice.SmartDevice.md#restorelaststate)

#### Defined in

behavioral/command/devices/SmartLight.ts:59

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

behavioral/command/devices/SmartLight.ts:72

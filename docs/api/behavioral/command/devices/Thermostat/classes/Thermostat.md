[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/devices/Thermostat](../README.md) / Thermostat

# Class: Thermostat

Defined in: behavioral/command/devices/Thermostat.ts:9

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Extends

- [`SmartDevice`](../../SmartDevice/classes/SmartDevice.md)

## Constructors

### new Thermostat()

> **new Thermostat**(`name`): [`Thermostat`](Thermostat.md)

Defined in: behavioral/command/devices/SmartDevice.ts:10

#### Parameters

##### name

`string`

#### Returns

[`Thermostat`](Thermostat.md)

#### Inherited from

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`constructor`](../../SmartDevice/classes/SmartDevice.md#constructors)

## Methods

### turnOn()

> **turnOn**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:18

デバイスの電源をオンにします

#### Returns

`string`

操作結果のメッセージ

#### Inherited from

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`turnOn`](../../SmartDevice/classes/SmartDevice.md#turnon)

***

### turnOff()

> **turnOff**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:27

デバイスの電源をオフにします

#### Returns

`string`

操作結果のメッセージ

#### Inherited from

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`turnOff`](../../SmartDevice/classes/SmartDevice.md#turnoff)

***

### isOn()

> **isOn**(): `boolean`

Defined in: behavioral/command/devices/SmartDevice.ts:36

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがオンの場合はtrue、オフの場合はfalse

#### Inherited from

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`isOn`](../../SmartDevice/classes/SmartDevice.md#ison)

***

### getName()

> **getName**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:44

デバイスの名前を取得します

#### Returns

`string`

デバイスの名前

#### Inherited from

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`getName`](../../SmartDevice/classes/SmartDevice.md#getname)

***

### setTemperature()

> **setTemperature**(`temp`): `string`

Defined in: behavioral/command/devices/Thermostat.ts:20

温度を設定します

#### Parameters

##### temp

`number`

温度（16-32℃）

#### Returns

`string`

操作結果のメッセージ

***

### setMode()

> **setMode**(`mode`): `string`

Defined in: behavioral/command/devices/Thermostat.ts:42

動作モードを設定します

#### Parameters

##### mode

動作モード（heat/cool/off）

`"heat"` | `"cool"` | `"off"`

#### Returns

`string`

操作結果のメッセージ

***

### getTemperature()

> **getTemperature**(): `number`

Defined in: behavioral/command/devices/Thermostat.ts:59

温度を取得します

#### Returns

`number`

現在の温度設定

***

### getMode()

> **getMode**(): `"heat"` \| `"cool"` \| `"off"`

Defined in: behavioral/command/devices/Thermostat.ts:67

動作モードを取得します

#### Returns

`"heat"` \| `"cool"` \| `"off"`

現在の動作モード

***

### restoreLastState()

> **restoreLastState**(): `string`

Defined in: behavioral/command/devices/Thermostat.ts:75

前回の設定に戻します

#### Returns

`string`

操作結果のメッセージ

#### Overrides

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`restoreLastState`](../../SmartDevice/classes/SmartDevice.md#restorelaststate)

***

### toString()

> **toString**(): `string`

Defined in: behavioral/command/devices/Thermostat.ts:98

デバイスの状態を文字列で返します

#### Returns

`string`

デバイスの状態を表す文字列

#### Overrides

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`toString`](../../SmartDevice/classes/SmartDevice.md#tostring)

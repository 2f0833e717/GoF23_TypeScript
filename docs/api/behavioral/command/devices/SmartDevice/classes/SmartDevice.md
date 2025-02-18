[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/devices/SmartDevice](../README.md) / SmartDevice

# Class: `abstract` SmartDevice

Defined in: behavioral/command/devices/SmartDevice.ts:6

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Extended by

- [`SmartLight`](../../SmartLight/classes/SmartLight.md)
- [`Thermostat`](../../Thermostat/classes/Thermostat.md)

## Constructors

### new SmartDevice()

> **new SmartDevice**(`name`): [`SmartDevice`](SmartDevice.md)

Defined in: behavioral/command/devices/SmartDevice.ts:10

#### Parameters

##### name

`string`

#### Returns

[`SmartDevice`](SmartDevice.md)

## Methods

### turnOn()

> **turnOn**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:18

デバイスの電源をオンにします

#### Returns

`string`

操作結果のメッセージ

***

### turnOff()

> **turnOff**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:27

デバイスの電源をオフにします

#### Returns

`string`

操作結果のメッセージ

***

### isOn()

> **isOn**(): `boolean`

Defined in: behavioral/command/devices/SmartDevice.ts:36

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスがオンの場合はtrue、オフの場合はfalse

***

### getName()

> **getName**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:44

デバイスの名前を取得します

#### Returns

`string`

デバイスの名前

***

### restoreLastState()

> `abstract` **restoreLastState**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:52

最後の状態に戻します

#### Returns

`string`

操作結果のメッセージ

***

### toString()

> `abstract` **toString**(): `string`

Defined in: behavioral/command/devices/SmartDevice.ts:58

デバイスの状態を文字列で返します

#### Returns

`string`

デバイスの状態を表す文字列

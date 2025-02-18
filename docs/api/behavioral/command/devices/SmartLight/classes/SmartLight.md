[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/devices/SmartLight](../README.md) / SmartLight

# Class: SmartLight

Defined in: behavioral/command/devices/SmartLight.ts:9

スマートデバイスの基底クラス

すべてのスマートデバイスの共通機能を提供します。

## Extends

- [`SmartDevice`](../../SmartDevice/classes/SmartDevice.md)

## Constructors

### new SmartLight()

> **new SmartLight**(`name`): [`SmartLight`](SmartLight.md)

Defined in: behavioral/command/devices/SmartDevice.ts:10

#### Parameters

##### name

`string`

#### Returns

[`SmartLight`](SmartLight.md)

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

### setBrightness()

> **setBrightness**(`level`): `string`

Defined in: behavioral/command/devices/SmartLight.ts:19

明るさを設定します

#### Parameters

##### level

`number`

明るさ（0-100）

#### Returns

`string`

操作結果のメッセージ

***

### getBrightness()

> **getBrightness**(): `number`

Defined in: behavioral/command/devices/SmartLight.ts:40

明るさを取得します

#### Returns

`number`

現在の明るさ（0-100）

***

### restoreBrightness()

> **restoreBrightness**(): `string`

Defined in: behavioral/command/devices/SmartLight.ts:48

前回の明るさに戻します

#### Returns

`string`

操作結果のメッセージ

***

### restoreLastState()

> **restoreLastState**(): `string`

Defined in: behavioral/command/devices/SmartLight.ts:59

前回の状態に戻します

#### Returns

`string`

操作結果のメッセージ

#### Overrides

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`restoreLastState`](../../SmartDevice/classes/SmartDevice.md#restorelaststate)

***

### toString()

> **toString**(): `string`

Defined in: behavioral/command/devices/SmartLight.ts:72

デバイスの状態を文字列で返します

#### Returns

`string`

デバイスの状態を表す文字列

#### Overrides

[`SmartDevice`](../../SmartDevice/classes/SmartDevice.md).[`toString`](../../SmartDevice/classes/SmartDevice.md#tostring)

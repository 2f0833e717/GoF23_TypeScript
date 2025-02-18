[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/bridge/abstraction/Device](../README.md) / Device

# Class: `abstract` Device

Defined in: structural/bridge/abstraction/Device.ts:9

## Extended by

- [`BasicRemote`](../../BasicRemote/classes/BasicRemote.md)

## Constructors

### new Device()

> **new Device**(`implementation`): [`Device`](Device.md)

Defined in: structural/bridge/abstraction/Device.ts:10

#### Parameters

##### implementation

[`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

#### Returns

[`Device`](Device.md)

## Properties

### implementation

> `protected` **implementation**: [`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

Defined in: structural/bridge/abstraction/Device.ts:10

## Methods

### turnOn()

> **turnOn**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:15

デバイスの電源をオンにします

#### Returns

`void`

***

### turnOff()

> **turnOff**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:22

デバイスの電源をオフにします

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: structural/bridge/abstraction/Device.ts:30

デバイスの音量を設定します

#### Parameters

##### volume

`number`

設定する音量（0-100）

#### Returns

`void`

***

### setChannel()

> **setChannel**(`channel`): `void`

Defined in: structural/bridge/abstraction/Device.ts:38

デバイスのチャンネルを設定します

#### Parameters

##### channel

`number`

設定するチャンネル番号

#### Returns

`void`

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: structural/bridge/abstraction/Device.ts:46

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスが有効な場合はtrue

***

### getVolume()

> **getVolume**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:54

デバイスの現在の音量を取得します

#### Returns

`number`

現在の音量（0-100）

***

### getChannel()

> **getChannel**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:62

デバイスの現在のチャンネルを取得します

#### Returns

`number`

現在のチャンネル番号

***

### executeDeviceFunction()

> `abstract` **executeDeviceFunction**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:70

デバイス固有の操作を実行します
サブクラスで実装される必要があります

#### Returns

`void`

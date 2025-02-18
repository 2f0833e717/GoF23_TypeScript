[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/bridge/abstraction/BasicRemote](../README.md) / BasicRemote

# Class: BasicRemote

Defined in: structural/bridge/abstraction/BasicRemote.ts:10

## Extends

- [`Device`](../../Device/classes/Device.md)

## Extended by

- [`AdvancedRemote`](../../AdvancedRemote/classes/AdvancedRemote.md)

## Constructors

### new BasicRemote()

> **new BasicRemote**(`implementation`): [`BasicRemote`](BasicRemote.md)

Defined in: structural/bridge/abstraction/BasicRemote.ts:11

#### Parameters

##### implementation

[`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

#### Returns

[`BasicRemote`](BasicRemote.md)

#### Overrides

[`Device`](../../Device/classes/Device.md).[`constructor`](../../Device/classes/Device.md#constructors)

## Properties

### implementation

> `protected` **implementation**: [`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

Defined in: structural/bridge/abstraction/Device.ts:10

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`implementation`](../../Device/classes/Device.md#implementation-1)

## Methods

### executeDeviceFunction()

> **executeDeviceFunction**(): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:19

デバイスの基本機能を実行します
電源のオン/オフを切り替えます

#### Returns

`void`

#### Overrides

[`Device`](../../Device/classes/Device.md).[`executeDeviceFunction`](../../Device/classes/Device.md#executedevicefunction)

***

### volumeUp()

> **volumeUp**(`step`): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:31

音量を上げます

#### Parameters

##### step

`number` = `10`

上げる量（デフォルト: 10）

#### Returns

`void`

***

### volumeDown()

> **volumeDown**(`step`): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:40

音量を下げます

#### Parameters

##### step

`number` = `10`

下げる量（デフォルト: 10）

#### Returns

`void`

***

### channelUp()

> **channelUp**(): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:48

チャンネルを進めます

#### Returns

`void`

***

### channelDown()

> **channelDown**(): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:56

チャンネルを戻します

#### Returns

`void`

***

### turnOn()

> **turnOn**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:15

デバイスの電源をオンにします

#### Returns

`void`

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`turnOn`](../../Device/classes/Device.md#turnon)

***

### turnOff()

> **turnOff**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:22

デバイスの電源をオフにします

#### Returns

`void`

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`turnOff`](../../Device/classes/Device.md#turnoff)

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

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`setVolume`](../../Device/classes/Device.md#setvolume)

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

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`setChannel`](../../Device/classes/Device.md#setchannel)

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: structural/bridge/abstraction/Device.ts:46

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスが有効な場合はtrue

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`isEnabled`](../../Device/classes/Device.md#isenabled)

***

### getVolume()

> **getVolume**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:54

デバイスの現在の音量を取得します

#### Returns

`number`

現在の音量（0-100）

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`getVolume`](../../Device/classes/Device.md#getvolume)

***

### getChannel()

> **getChannel**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:62

デバイスの現在のチャンネルを取得します

#### Returns

`number`

現在のチャンネル番号

#### Inherited from

[`Device`](../../Device/classes/Device.md).[`getChannel`](../../Device/classes/Device.md#getchannel)

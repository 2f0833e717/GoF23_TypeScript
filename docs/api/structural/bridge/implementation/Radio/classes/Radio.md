[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/bridge/implementation/Radio](../README.md) / Radio

# Class: Radio

Defined in: structural/bridge/implementation/Radio.ts:9

デバイス実装のインターフェース

デバイスの基本的な操作を定義します。
具象実装クラスはこのインターフェースを実装する必要があります。

## Implements

- [`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md)

## Constructors

### new Radio()

> **new Radio**(): [`Radio`](Radio.md)

#### Returns

[`Radio`](Radio.md)

## Methods

### turnOn()

> **turnOn**(): `void`

Defined in: structural/bridge/implementation/Radio.ts:14

デバイスの電源をオンにします

#### Returns

`void`

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`turnOn`](../../DeviceImplementation/interfaces/DeviceImplementation.md#turnon)

***

### turnOff()

> **turnOff**(): `void`

Defined in: structural/bridge/implementation/Radio.ts:19

デバイスの電源をオフにします

#### Returns

`void`

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`turnOff`](../../DeviceImplementation/interfaces/DeviceImplementation.md#turnoff)

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: structural/bridge/implementation/Radio.ts:24

デバイスの音量を設定します

#### Parameters

##### volume

`number`

設定する音量（0-100）

#### Returns

`void`

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`setVolume`](../../DeviceImplementation/interfaces/DeviceImplementation.md#setvolume)

***

### setChannel()

> **setChannel**(`channel`): `void`

Defined in: structural/bridge/implementation/Radio.ts:35

デバイスのチャンネルを設定します

#### Parameters

##### channel

`number`

設定するチャンネル番号

#### Returns

`void`

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`setChannel`](../../DeviceImplementation/interfaces/DeviceImplementation.md#setchannel)

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: structural/bridge/implementation/Radio.ts:44

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスが有効な場合はtrue

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`isEnabled`](../../DeviceImplementation/interfaces/DeviceImplementation.md#isenabled)

***

### getVolume()

> **getVolume**(): `number`

Defined in: structural/bridge/implementation/Radio.ts:48

デバイスの現在の音量を取得します

#### Returns

`number`

現在の音量（0-100）

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`getVolume`](../../DeviceImplementation/interfaces/DeviceImplementation.md#getvolume)

***

### getChannel()

> **getChannel**(): `number`

Defined in: structural/bridge/implementation/Radio.ts:52

デバイスの現在のチャンネルを取得します

#### Returns

`number`

現在のチャンネル番号

#### Implementation of

[`DeviceImplementation`](../../DeviceImplementation/interfaces/DeviceImplementation.md).[`getChannel`](../../DeviceImplementation/interfaces/DeviceImplementation.md#getchannel)

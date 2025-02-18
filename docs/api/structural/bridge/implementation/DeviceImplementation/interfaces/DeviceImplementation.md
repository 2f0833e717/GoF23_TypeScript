[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/bridge/implementation/DeviceImplementation](../README.md) / DeviceImplementation

# Interface: DeviceImplementation

Defined in: structural/bridge/implementation/DeviceImplementation.ts:7

デバイス実装のインターフェース

デバイスの基本的な操作を定義します。
具象実装クラスはこのインターフェースを実装する必要があります。

## Methods

### turnOn()

> **turnOn**(): `void`

Defined in: structural/bridge/implementation/DeviceImplementation.ts:11

デバイスの電源をオンにします

#### Returns

`void`

***

### turnOff()

> **turnOff**(): `void`

Defined in: structural/bridge/implementation/DeviceImplementation.ts:16

デバイスの電源をオフにします

#### Returns

`void`

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: structural/bridge/implementation/DeviceImplementation.ts:22

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

Defined in: structural/bridge/implementation/DeviceImplementation.ts:28

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

Defined in: structural/bridge/implementation/DeviceImplementation.ts:34

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスが有効な場合はtrue

***

### getVolume()

> **getVolume**(): `number`

Defined in: structural/bridge/implementation/DeviceImplementation.ts:40

デバイスの現在の音量を取得します

#### Returns

`number`

現在の音量（0-100）

***

### getChannel()

> **getChannel**(): `number`

Defined in: structural/bridge/implementation/DeviceImplementation.ts:46

デバイスの現在のチャンネルを取得します

#### Returns

`number`

現在のチャンネル番号

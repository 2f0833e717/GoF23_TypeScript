[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/bridge/abstraction/AdvancedRemote](../README.md) / AdvancedRemote

# Class: AdvancedRemote

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:10

## Extends

- [`BasicRemote`](../../BasicRemote/classes/BasicRemote.md)

## Constructors

### new AdvancedRemote()

> **new AdvancedRemote**(`implementation`): [`AdvancedRemote`](AdvancedRemote.md)

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:15

#### Parameters

##### implementation

[`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

#### Returns

[`AdvancedRemote`](AdvancedRemote.md)

#### Overrides

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`constructor`](../../BasicRemote/classes/BasicRemote.md#constructors)

## Properties

### implementation

> `protected` **implementation**: [`DeviceImplementation`](../../../implementation/DeviceImplementation/interfaces/DeviceImplementation.md)

Defined in: structural/bridge/abstraction/Device.ts:10

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`implementation`](../../BasicRemote/classes/BasicRemote.md#implementation-1)

## Methods

### executeDeviceFunction()

> **executeDeviceFunction**(): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:23

デバイスの高度な機能を実行します
ミュート状態を切り替えます

#### Returns

`void`

#### Overrides

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`executeDeviceFunction`](../../BasicRemote/classes/BasicRemote.md#executedevicefunction)

***

### toggleMute()

> **toggleMute**(): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:30

ミュート状態を切り替えます

#### Returns

`void`

***

### previousChannel()

> **previousChannel**(): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:43

前回のチャンネルに戻ります

#### Returns

`void`

***

### setChannel()

> **setChannel**(`channel`): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:53

チャンネルを設定し、前回のチャンネルを記憶します

#### Parameters

##### channel

`number`

設定するチャンネル番号

#### Returns

`void`

#### Overrides

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`setChannel`](../../BasicRemote/classes/BasicRemote.md#setchannel)

***

### setVolume()

> **setVolume**(`volume`): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:62

音量を設定し、前回の音量を記憶します（ミュート以外の場合）

#### Parameters

##### volume

`number`

設定する音量（0-100）

#### Returns

`void`

#### Overrides

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`setVolume`](../../BasicRemote/classes/BasicRemote.md#setvolume)

***

### jumpToChannel()

> **jumpToChannel**(`channel`): `void`

Defined in: structural/bridge/abstraction/AdvancedRemote.ts:73

指定したチャンネルに直接ジャンプします

#### Parameters

##### channel

`number`

ジャンプ先のチャンネル番号

#### Returns

`void`

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

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`volumeUp`](../../BasicRemote/classes/BasicRemote.md#volumeup)

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

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`volumeDown`](../../BasicRemote/classes/BasicRemote.md#volumedown)

***

### channelUp()

> **channelUp**(): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:48

チャンネルを進めます

#### Returns

`void`

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`channelUp`](../../BasicRemote/classes/BasicRemote.md#channelup)

***

### channelDown()

> **channelDown**(): `void`

Defined in: structural/bridge/abstraction/BasicRemote.ts:56

チャンネルを戻します

#### Returns

`void`

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`channelDown`](../../BasicRemote/classes/BasicRemote.md#channeldown)

***

### turnOn()

> **turnOn**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:15

デバイスの電源をオンにします

#### Returns

`void`

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`turnOn`](../../BasicRemote/classes/BasicRemote.md#turnon)

***

### turnOff()

> **turnOff**(): `void`

Defined in: structural/bridge/abstraction/Device.ts:22

デバイスの電源をオフにします

#### Returns

`void`

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`turnOff`](../../BasicRemote/classes/BasicRemote.md#turnoff)

***

### isEnabled()

> **isEnabled**(): `boolean`

Defined in: structural/bridge/abstraction/Device.ts:46

デバイスの電源状態を取得します

#### Returns

`boolean`

デバイスが有効な場合はtrue

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`isEnabled`](../../BasicRemote/classes/BasicRemote.md#isenabled)

***

### getVolume()

> **getVolume**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:54

デバイスの現在の音量を取得します

#### Returns

`number`

現在の音量（0-100）

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`getVolume`](../../BasicRemote/classes/BasicRemote.md#getvolume)

***

### getChannel()

> **getChannel**(): `number`

Defined in: structural/bridge/abstraction/Device.ts:62

デバイスの現在のチャンネルを取得します

#### Returns

`number`

現在のチャンネル番号

#### Inherited from

[`BasicRemote`](../../BasicRemote/classes/BasicRemote.md).[`getChannel`](../../BasicRemote/classes/BasicRemote.md#getchannel)

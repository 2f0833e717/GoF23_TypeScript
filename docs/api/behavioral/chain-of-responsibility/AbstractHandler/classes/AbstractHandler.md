[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/chain-of-responsibility/AbstractHandler](../README.md) / AbstractHandler

# Class: `abstract` AbstractHandler

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:9

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Extended by

- [`EscalationSupportHandler`](../../EscalationSupportHandler/classes/EscalationSupportHandler.md)
- [`FirstLevelSupportHandler`](../../FirstLevelSupportHandler/classes/FirstLevelSupportHandler.md)
- [`SecondLevelSupportHandler`](../../SecondLevelSupportHandler/classes/SecondLevelSupportHandler.md)

## Implements

- [`Handler`](../../Handler/interfaces/Handler.md)

## Constructors

### new AbstractHandler()

> **new AbstractHandler**(): [`AbstractHandler`](AbstractHandler.md)

#### Returns

[`AbstractHandler`](AbstractHandler.md)

## Properties

### nextHandler

> `protected` **nextHandler**: `null` \| [`Handler`](../../Handler/interfaces/Handler.md) = `null`

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:10

## Methods

### setNext()

> **setNext**(`handler`): [`Handler`](../../Handler/interfaces/Handler.md)

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:12

次のハンドラーを設定します

#### Parameters

##### handler

[`Handler`](../../Handler/interfaces/Handler.md)

次のハンドラー

#### Returns

[`Handler`](../../Handler/interfaces/Handler.md)

このハンドラー（メソッドチェーン用）

#### Implementation of

[`Handler`](../../Handler/interfaces/Handler.md).[`setNext`](../../Handler/interfaces/Handler.md#setnext)

***

### getNext()

> **getNext**(): `null` \| [`Handler`](../../Handler/interfaces/Handler.md)

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:17

次のハンドラーを取得します

#### Returns

`null` \| [`Handler`](../../Handler/interfaces/Handler.md)

#### Implementation of

[`Handler`](../../Handler/interfaces/Handler.md).[`getNext`](../../Handler/interfaces/Handler.md#getnext)

***

### handle()

> **handle**(`ticket`): `string`

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:26

チケットを処理します

#### Parameters

##### ticket

[`SupportTicket`](../../Handler/interfaces/SupportTicket.md)

処理するチケット

#### Returns

`string`

処理結果のメッセージ

#### Implementation of

[`Handler`](../../Handler/interfaces/Handler.md).[`handle`](../../Handler/interfaces/Handler.md#handle)

***

### canHandle()

> `protected` **canHandle**(`ticket`): `boolean`

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:47

このハンドラーがチケットを処理できるか確認します

#### Parameters

##### ticket

[`SupportTicket`](../../Handler/interfaces/SupportTicket.md)

確認するチケット

#### Returns

`boolean`

処理可能な場合はtrue

***

### processTicket()

> `abstract` `protected` **processTicket**(`ticket`): `string`

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:58

チケットを実際に処理します
サブクラスで実装する必要があります

#### Parameters

##### ticket

[`SupportTicket`](../../Handler/interfaces/SupportTicket.md)

処理するチケット

#### Returns

`string`

処理結果のメッセージ

***

### getHandlePriority()

> `abstract` **getHandlePriority**(): [`Priority`](../../Handler/enumerations/Priority.md)

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:60

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../../Handler/enumerations/Priority.md)

#### Implementation of

[`Handler`](../../Handler/interfaces/Handler.md).[`getHandlePriority`](../../Handler/interfaces/Handler.md#gethandlepriority)

***

### getHandleCategory()

> `abstract` **getHandleCategory**(): `string`[]

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:61

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

#### Implementation of

[`Handler`](../../Handler/interfaces/Handler.md).[`getHandleCategory`](../../Handler/interfaces/Handler.md#gethandlecategory)

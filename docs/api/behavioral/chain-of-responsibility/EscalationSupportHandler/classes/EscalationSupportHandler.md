[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/chain-of-responsibility/EscalationSupportHandler](../README.md) / EscalationSupportHandler

# Class: EscalationSupportHandler

Defined in: behavioral/chain-of-responsibility/EscalationSupportHandler.ts:10

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Extends

- [`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md)

## Constructors

### new EscalationSupportHandler()

> **new EscalationSupportHandler**(): [`EscalationSupportHandler`](EscalationSupportHandler.md)

#### Returns

[`EscalationSupportHandler`](EscalationSupportHandler.md)

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`constructor`](../../AbstractHandler/classes/AbstractHandler.md#constructors)

## Properties

### nextHandler

> `protected` **nextHandler**: `null` \| [`Handler`](../../Handler/interfaces/Handler.md) = `null`

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:10

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`nextHandler`](../../AbstractHandler/classes/AbstractHandler.md#nexthandler)

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

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`setNext`](../../AbstractHandler/classes/AbstractHandler.md#setnext)

***

### getNext()

> **getNext**(): `null` \| [`Handler`](../../Handler/interfaces/Handler.md)

Defined in: behavioral/chain-of-responsibility/AbstractHandler.ts:17

次のハンドラーを取得します

#### Returns

`null` \| [`Handler`](../../Handler/interfaces/Handler.md)

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`getNext`](../../AbstractHandler/classes/AbstractHandler.md#getnext)

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

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`handle`](../../AbstractHandler/classes/AbstractHandler.md#handle)

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

#### Inherited from

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`canHandle`](../../AbstractHandler/classes/AbstractHandler.md#canhandle)

***

### processTicket()

> `protected` **processTicket**(`ticket`): `string`

Defined in: behavioral/chain-of-responsibility/EscalationSupportHandler.ts:21

チケットを実際に処理します
サブクラスで実装する必要があります

#### Parameters

##### ticket

[`SupportTicket`](../../Handler/interfaces/SupportTicket.md)

処理するチケット

#### Returns

`string`

処理結果のメッセージ

#### Overrides

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`processTicket`](../../AbstractHandler/classes/AbstractHandler.md#processticket)

***

### getHandlePriority()

> **getHandlePriority**(): [`Priority`](../../Handler/enumerations/Priority.md)

Defined in: behavioral/chain-of-responsibility/EscalationSupportHandler.ts:47

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../../Handler/enumerations/Priority.md)

#### Overrides

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`getHandlePriority`](../../AbstractHandler/classes/AbstractHandler.md#gethandlepriority)

***

### getHandleCategory()

> **getHandleCategory**(): `string`[]

Defined in: behavioral/chain-of-responsibility/EscalationSupportHandler.ts:51

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

#### Overrides

[`AbstractHandler`](../../AbstractHandler/classes/AbstractHandler.md).[`getHandleCategory`](../../AbstractHandler/classes/AbstractHandler.md#gethandlecategory)

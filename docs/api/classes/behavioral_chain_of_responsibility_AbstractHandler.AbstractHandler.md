[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/chain-of-responsibility/AbstractHandler](../modules/behavioral_chain_of_responsibility_AbstractHandler.md) / AbstractHandler

# Class: AbstractHandler

[behavioral/chain-of-responsibility/AbstractHandler](../modules/behavioral_chain_of_responsibility_AbstractHandler.md).AbstractHandler

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Hierarchy

- **`AbstractHandler`**

  ↳ [`EscalationSupportHandler`](behavioral_chain_of_responsibility_EscalationSupportHandler.EscalationSupportHandler.md)

  ↳ [`FirstLevelSupportHandler`](behavioral_chain_of_responsibility_FirstLevelSupportHandler.FirstLevelSupportHandler.md)

  ↳ [`SecondLevelSupportHandler`](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md)

## Implements

- [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

## Table of contents

### Constructors

- [constructor](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#constructor)

### Properties

- [nextHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#nexthandler)

### Methods

- [setNext](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#setnext)
- [getNext](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#getnext)
- [handle](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#handle)
- [canHandle](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#canhandle)
- [processTicket](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#processticket)
- [getHandlePriority](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#gethandlepriority)
- [getHandleCategory](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#gethandlecategory)

## Constructors

### constructor

• **new AbstractHandler**(): [`AbstractHandler`](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md)

#### Returns

[`AbstractHandler`](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md)

## Properties

### nextHandler

• `Protected` **nextHandler**: ``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md) = `null`

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:10

## Methods

### setNext

▸ **setNext**(`handler`): [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

次のハンドラーを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md) | 次のハンドラー |

#### Returns

[`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

このハンドラー（メソッドチェーン用）

#### Implementation of

[Handler](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md).[setNext](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md#setnext)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:12

___

### getNext

▸ **getNext**(): ``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

次のハンドラーを取得します

#### Returns

``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

#### Implementation of

[Handler](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md).[getNext](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md#getnext)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:17

___

### handle

▸ **handle**(`ticket`): `string`

チケットを処理します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | [`SupportTicket`](../interfaces/behavioral_chain_of_responsibility_Handler.SupportTicket.md) | 処理するチケット |

#### Returns

`string`

処理結果のメッセージ

#### Implementation of

[Handler](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md).[handle](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md#handle)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:26

___

### canHandle

▸ **canHandle**(`ticket`): `boolean`

このハンドラーがチケットを処理できるか確認します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | [`SupportTicket`](../interfaces/behavioral_chain_of_responsibility_Handler.SupportTicket.md) | 確認するチケット |

#### Returns

`boolean`

処理可能な場合はtrue

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:47

___

### processTicket

▸ **processTicket**(`ticket`): `string`

チケットを実際に処理します
サブクラスで実装する必要があります

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | [`SupportTicket`](../interfaces/behavioral_chain_of_responsibility_Handler.SupportTicket.md) | 処理するチケット |

#### Returns

`string`

処理結果のメッセージ

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:58

___

### getHandlePriority

▸ **getHandlePriority**(): [`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

#### Implementation of

[Handler](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md).[getHandlePriority](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md#gethandlepriority)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:60

___

### getHandleCategory

▸ **getHandleCategory**(): `string`[]

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

#### Implementation of

[Handler](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md).[getHandleCategory](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md#gethandlecategory)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:61

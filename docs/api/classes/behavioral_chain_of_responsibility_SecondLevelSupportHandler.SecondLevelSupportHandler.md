[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/chain-of-responsibility/SecondLevelSupportHandler](../modules/behavioral_chain_of_responsibility_SecondLevelSupportHandler.md) / SecondLevelSupportHandler

# Class: SecondLevelSupportHandler

[behavioral/chain-of-responsibility/SecondLevelSupportHandler](../modules/behavioral_chain_of_responsibility_SecondLevelSupportHandler.md).SecondLevelSupportHandler

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Hierarchy

- [`AbstractHandler`](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md)

  ↳ **`SecondLevelSupportHandler`**

## Table of contents

### Constructors

- [constructor](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#constructor)

### Properties

- [nextHandler](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#nexthandler)

### Methods

- [setNext](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#setnext)
- [getNext](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#getnext)
- [handle](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#handle)
- [canHandle](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#canhandle)
- [processTicket](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#processticket)
- [getHandlePriority](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#gethandlepriority)
- [getHandleCategory](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md#gethandlecategory)

## Constructors

### constructor

• **new SecondLevelSupportHandler**(): [`SecondLevelSupportHandler`](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md)

#### Returns

[`SecondLevelSupportHandler`](behavioral_chain_of_responsibility_SecondLevelSupportHandler.SecondLevelSupportHandler.md)

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[constructor](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#constructor)

## Properties

### nextHandler

• `Protected` **nextHandler**: ``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md) = `null`

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[nextHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#nexthandler)

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

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[setNext](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#setnext)

#### Defined in

behavioral/chain-of-responsibility/AbstractHandler.ts:12

___

### getNext

▸ **getNext**(): ``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

次のハンドラーを取得します

#### Returns

``null`` \| [`Handler`](../interfaces/behavioral_chain_of_responsibility_Handler.Handler.md)

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[getNext](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#getnext)

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

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[handle](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#handle)

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

#### Inherited from

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[canHandle](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#canhandle)

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

#### Overrides

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[processTicket](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#processticket)

#### Defined in

behavioral/chain-of-responsibility/SecondLevelSupportHandler.ts:19

___

### getHandlePriority

▸ **getHandlePriority**(): [`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

#### Overrides

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[getHandlePriority](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#gethandlepriority)

#### Defined in

behavioral/chain-of-responsibility/SecondLevelSupportHandler.ts:28

___

### getHandleCategory

▸ **getHandleCategory**(): `string`[]

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

#### Overrides

[AbstractHandler](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md).[getHandleCategory](behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md#gethandlecategory)

#### Defined in

behavioral/chain-of-responsibility/SecondLevelSupportHandler.ts:32

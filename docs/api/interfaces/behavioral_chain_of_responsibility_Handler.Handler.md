[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/chain-of-responsibility/Handler](../modules/behavioral_chain_of_responsibility_Handler.md) / Handler

# Interface: Handler

[behavioral/chain-of-responsibility/Handler](../modules/behavioral_chain_of_responsibility_Handler.md).Handler

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Implemented by

- [`AbstractHandler`](../classes/behavioral_chain_of_responsibility_AbstractHandler.AbstractHandler.md)

## Table of contents

### Methods

- [setNext](behavioral_chain_of_responsibility_Handler.Handler.md#setnext)
- [getNext](behavioral_chain_of_responsibility_Handler.Handler.md#getnext)
- [handle](behavioral_chain_of_responsibility_Handler.Handler.md#handle)
- [getHandlePriority](behavioral_chain_of_responsibility_Handler.Handler.md#gethandlepriority)
- [getHandleCategory](behavioral_chain_of_responsibility_Handler.Handler.md#gethandlecategory)

## Methods

### setNext

▸ **setNext**(`handler`): [`Handler`](behavioral_chain_of_responsibility_Handler.Handler.md)

次のハンドラーを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`Handler`](behavioral_chain_of_responsibility_Handler.Handler.md) | 次のハンドラー |

#### Returns

[`Handler`](behavioral_chain_of_responsibility_Handler.Handler.md)

このハンドラー（メソッドチェーン用）

#### Defined in

behavioral/chain-of-responsibility/Handler.ts:34

___

### getNext

▸ **getNext**(): ``null`` \| [`Handler`](behavioral_chain_of_responsibility_Handler.Handler.md)

次のハンドラーを取得します

#### Returns

``null`` \| [`Handler`](behavioral_chain_of_responsibility_Handler.Handler.md)

#### Defined in

behavioral/chain-of-responsibility/Handler.ts:39

___

### handle

▸ **handle**(`ticket`): `string`

サポートチケットを処理します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | [`SupportTicket`](behavioral_chain_of_responsibility_Handler.SupportTicket.md) | 処理するチケット |

#### Returns

`string`

処理結果のメッセージ

#### Defined in

behavioral/chain-of-responsibility/Handler.ts:46

___

### getHandlePriority

▸ **getHandlePriority**(): [`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../enums/behavioral_chain_of_responsibility_Handler.Priority.md)

#### Defined in

behavioral/chain-of-responsibility/Handler.ts:51

___

### getHandleCategory

▸ **getHandleCategory**(): `string`[]

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

#### Defined in

behavioral/chain-of-responsibility/Handler.ts:56

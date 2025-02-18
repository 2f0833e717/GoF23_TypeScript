[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/chain-of-responsibility/Handler](../README.md) / Handler

# Interface: Handler

Defined in: behavioral/chain-of-responsibility/Handler.ts:28

ハンドラーインターフェース

サポートチケットを処理するハンドラーの基本インターフェースを定義します。
Chain of Responsibilityパターンの中心となるインターフェースです。

## Methods

### setNext()

> **setNext**(`handler`): [`Handler`](Handler.md)

Defined in: behavioral/chain-of-responsibility/Handler.ts:34

次のハンドラーを設定します

#### Parameters

##### handler

[`Handler`](Handler.md)

次のハンドラー

#### Returns

[`Handler`](Handler.md)

このハンドラー（メソッドチェーン用）

***

### getNext()

> **getNext**(): `null` \| [`Handler`](Handler.md)

Defined in: behavioral/chain-of-responsibility/Handler.ts:39

次のハンドラーを取得します

#### Returns

`null` \| [`Handler`](Handler.md)

***

### handle()

> **handle**(`ticket`): `string`

Defined in: behavioral/chain-of-responsibility/Handler.ts:46

サポートチケットを処理します

#### Parameters

##### ticket

[`SupportTicket`](SupportTicket.md)

処理するチケット

#### Returns

`string`

処理結果のメッセージ

***

### getHandlePriority()

> **getHandlePriority**(): [`Priority`](../enumerations/Priority.md)

Defined in: behavioral/chain-of-responsibility/Handler.ts:51

このハンドラーが処理できるチケットの優先度を取得します

#### Returns

[`Priority`](../enumerations/Priority.md)

***

### getHandleCategory()

> **getHandleCategory**(): `string`[]

Defined in: behavioral/chain-of-responsibility/Handler.ts:56

このハンドラーが処理できるチケットのカテゴリを取得します

#### Returns

`string`[]

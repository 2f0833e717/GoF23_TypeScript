[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/command/Command](../README.md) / Command

# Interface: Command

Defined in: behavioral/command/Command.ts:7

コマンドインターフェース

すべてのコマンドが実装する必要のある基本インターフェースです。
コマンドの実行と取り消しの機能を定義します。

## Methods

### execute()

> **execute**(): `string`

Defined in: behavioral/command/Command.ts:12

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

***

### undo()

> **undo**(): `string`

Defined in: behavioral/command/Command.ts:18

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/command/Command.ts:23

コマンドの説明を取得します

#### Returns

`string`

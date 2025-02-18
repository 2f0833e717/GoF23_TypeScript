[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/command/SmartHomeController](../README.md) / SmartHomeController

# Class: SmartHomeController

Defined in: behavioral/command/SmartHomeController.ts:9

## Constructors

### new SmartHomeController()

> **new SmartHomeController**(): [`SmartHomeController`](SmartHomeController.md)

#### Returns

[`SmartHomeController`](SmartHomeController.md)

## Methods

### executeCommand()

> **executeCommand**(`command`): `string`

Defined in: behavioral/command/SmartHomeController.ts:18

コマンドを実行します

#### Parameters

##### command

[`Command`](../../Command/interfaces/Command.md)

実行するコマンド

#### Returns

`string`

実行結果のメッセージ

***

### undoLastCommand()

> **undoLastCommand**(): `string`

Defined in: behavioral/command/SmartHomeController.ts:28

最後に実行したコマンドを取り消します

#### Returns

`string`

取り消し結果のメッセージ

***

### redoLastCommand()

> **redoLastCommand**(): `string`

Defined in: behavioral/command/SmartHomeController.ts:43

取り消したコマンドをやり直します

#### Returns

`string`

やり直し結果のメッセージ

***

### getCommandHistory()

> **getCommandHistory**(): [`Command`](../../Command/interfaces/Command.md)[]

Defined in: behavioral/command/SmartHomeController.ts:58

コマンド履歴を取得します

#### Returns

[`Command`](../../Command/interfaces/Command.md)[]

コマンド履歴の配列

***

### getUndoHistory()

> **getUndoHistory**(): [`Command`](../../Command/interfaces/Command.md)[]

Defined in: behavioral/command/SmartHomeController.ts:66

取り消し履歴を取得します

#### Returns

[`Command`](../../Command/interfaces/Command.md)[]

取り消し履歴の配列

***

### clearHistory()

> **clearHistory**(): `void`

Defined in: behavioral/command/SmartHomeController.ts:73

コマンド履歴をクリアします

#### Returns

`void`

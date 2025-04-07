[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/SmartHomeController](../modules/behavioral_command_SmartHomeController.md) / SmartHomeController

# Class: SmartHomeController

[behavioral/command/SmartHomeController](../modules/behavioral_command_SmartHomeController.md).SmartHomeController

## Table of contents

### Constructors

- [constructor](behavioral_command_SmartHomeController.SmartHomeController.md#constructor)

### Methods

- [executeCommand](behavioral_command_SmartHomeController.SmartHomeController.md#executecommand)
- [undoLastCommand](behavioral_command_SmartHomeController.SmartHomeController.md#undolastcommand)
- [redoLastCommand](behavioral_command_SmartHomeController.SmartHomeController.md#redolastcommand)
- [getCommandHistory](behavioral_command_SmartHomeController.SmartHomeController.md#getcommandhistory)
- [getUndoHistory](behavioral_command_SmartHomeController.SmartHomeController.md#getundohistory)
- [clearHistory](behavioral_command_SmartHomeController.SmartHomeController.md#clearhistory)

## Constructors

### constructor

• **new SmartHomeController**(): [`SmartHomeController`](behavioral_command_SmartHomeController.SmartHomeController.md)

#### Returns

[`SmartHomeController`](behavioral_command_SmartHomeController.SmartHomeController.md)

## Methods

### executeCommand

▸ **executeCommand**(`command`): `string`

コマンドを実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`Command`](../interfaces/behavioral_command_Command.Command.md) | 実行するコマンド |

#### Returns

`string`

実行結果のメッセージ

#### Defined in

behavioral/command/SmartHomeController.ts:18

___

### undoLastCommand

▸ **undoLastCommand**(): `string`

最後に実行したコマンドを取り消します

#### Returns

`string`

取り消し結果のメッセージ

#### Defined in

behavioral/command/SmartHomeController.ts:28

___

### redoLastCommand

▸ **redoLastCommand**(): `string`

取り消したコマンドをやり直します

#### Returns

`string`

やり直し結果のメッセージ

#### Defined in

behavioral/command/SmartHomeController.ts:43

___

### getCommandHistory

▸ **getCommandHistory**(): [`Command`](../interfaces/behavioral_command_Command.Command.md)[]

コマンド履歴を取得します

#### Returns

[`Command`](../interfaces/behavioral_command_Command.Command.md)[]

コマンド履歴の配列

#### Defined in

behavioral/command/SmartHomeController.ts:58

___

### getUndoHistory

▸ **getUndoHistory**(): [`Command`](../interfaces/behavioral_command_Command.Command.md)[]

取り消し履歴を取得します

#### Returns

[`Command`](../interfaces/behavioral_command_Command.Command.md)[]

取り消し履歴の配列

#### Defined in

behavioral/command/SmartHomeController.ts:66

___

### clearHistory

▸ **clearHistory**(): `void`

コマンド履歴をクリアします

#### Returns

`void`

#### Defined in

behavioral/command/SmartHomeController.ts:73

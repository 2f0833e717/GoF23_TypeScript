[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/commands/LightCommands](../README.md) / LightPowerCommand

# Class: LightPowerCommand

Defined in: behavioral/command/commands/LightCommands.ts:12

ライトの電源を制御するコマンド

## Implements

- [`Command`](../../../Command/interfaces/Command.md)

## Constructors

### new LightPowerCommand()

> **new LightPowerCommand**(`light`, `targetState`): [`LightPowerCommand`](LightPowerCommand.md)

Defined in: behavioral/command/commands/LightCommands.ts:15

#### Parameters

##### light

[`SmartLight`](../../../devices/SmartLight/classes/SmartLight.md)

##### targetState

`boolean`

#### Returns

[`LightPowerCommand`](LightPowerCommand.md)

## Methods

### execute()

> **execute**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:27

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`execute`](../../../Command/interfaces/Command.md#execute)

***

### undo()

> **undo**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:32

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`undo`](../../../Command/interfaces/Command.md#undo)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:39

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`getDescription`](../../../Command/interfaces/Command.md#getdescription)

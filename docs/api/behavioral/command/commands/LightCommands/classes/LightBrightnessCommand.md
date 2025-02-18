[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/commands/LightCommands](../README.md) / LightBrightnessCommand

# Class: LightBrightnessCommand

Defined in: behavioral/command/commands/LightCommands.ts:47

ライトの明るさを制御するコマンド

## Implements

- [`Command`](../../../Command/interfaces/Command.md)

## Constructors

### new LightBrightnessCommand()

> **new LightBrightnessCommand**(`light`, `brightness`): [`LightBrightnessCommand`](LightBrightnessCommand.md)

Defined in: behavioral/command/commands/LightCommands.ts:50

#### Parameters

##### light

[`SmartLight`](../../../devices/SmartLight/classes/SmartLight.md)

##### brightness

`number`

#### Returns

[`LightBrightnessCommand`](LightBrightnessCommand.md)

## Methods

### execute()

> **execute**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:62

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`execute`](../../../Command/interfaces/Command.md#execute)

***

### undo()

> **undo**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:67

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`undo`](../../../Command/interfaces/Command.md#undo)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/command/commands/LightCommands.ts:74

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`getDescription`](../../../Command/interfaces/Command.md#getdescription)

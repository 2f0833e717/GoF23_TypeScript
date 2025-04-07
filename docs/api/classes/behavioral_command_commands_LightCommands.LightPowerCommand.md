[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/commands/LightCommands](../modules/behavioral_command_commands_LightCommands.md) / LightPowerCommand

# Class: LightPowerCommand

[behavioral/command/commands/LightCommands](../modules/behavioral_command_commands_LightCommands.md).LightPowerCommand

ライトの電源を制御するコマンド

## Implements

- [`Command`](../interfaces/behavioral_command_Command.Command.md)

## Table of contents

### Constructors

- [constructor](behavioral_command_commands_LightCommands.LightPowerCommand.md#constructor)

### Methods

- [execute](behavioral_command_commands_LightCommands.LightPowerCommand.md#execute)
- [undo](behavioral_command_commands_LightCommands.LightPowerCommand.md#undo)
- [getDescription](behavioral_command_commands_LightCommands.LightPowerCommand.md#getdescription)

## Constructors

### constructor

• **new LightPowerCommand**(`light`, `targetState`): [`LightPowerCommand`](behavioral_command_commands_LightCommands.LightPowerCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `light` | [`SmartLight`](behavioral_command_devices_SmartLight.SmartLight.md) |
| `targetState` | `boolean` |

#### Returns

[`LightPowerCommand`](behavioral_command_commands_LightCommands.LightPowerCommand.md)

#### Defined in

behavioral/command/commands/LightCommands.ts:15

## Methods

### execute

▸ **execute**(): `string`

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Implementation of

[Command](../interfaces/behavioral_command_Command.Command.md).[execute](../interfaces/behavioral_command_Command.Command.md#execute)

#### Defined in

behavioral/command/commands/LightCommands.ts:27

___

### undo

▸ **undo**(): `string`

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Implementation of

[Command](../interfaces/behavioral_command_Command.Command.md).[undo](../interfaces/behavioral_command_Command.Command.md#undo)

#### Defined in

behavioral/command/commands/LightCommands.ts:32

___

### getDescription

▸ **getDescription**(): `string`

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[Command](../interfaces/behavioral_command_Command.Command.md).[getDescription](../interfaces/behavioral_command_Command.Command.md#getdescription)

#### Defined in

behavioral/command/commands/LightCommands.ts:39

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/Command](../modules/behavioral_command_Command.md) / Command

# Interface: Command

[behavioral/command/Command](../modules/behavioral_command_Command.md).Command

コマンドインターフェース

すべてのコマンドが実装する必要のある基本インターフェースです。
コマンドの実行と取り消しの機能を定義します。

## Implemented by

- [`LightBrightnessCommand`](../classes/behavioral_command_commands_LightCommands.LightBrightnessCommand.md)
- [`LightPowerCommand`](../classes/behavioral_command_commands_LightCommands.LightPowerCommand.md)
- [`ThermostatModeCommand`](../classes/behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md)
- [`ThermostatTemperatureCommand`](../classes/behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md)

## Table of contents

### Methods

- [execute](behavioral_command_Command.Command.md#execute)
- [undo](behavioral_command_Command.Command.md#undo)
- [getDescription](behavioral_command_Command.Command.md#getdescription)

## Methods

### execute

▸ **execute**(): `string`

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Defined in

behavioral/command/Command.ts:12

___

### undo

▸ **undo**(): `string`

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Defined in

behavioral/command/Command.ts:18

___

### getDescription

▸ **getDescription**(): `string`

コマンドの説明を取得します

#### Returns

`string`

#### Defined in

behavioral/command/Command.ts:23

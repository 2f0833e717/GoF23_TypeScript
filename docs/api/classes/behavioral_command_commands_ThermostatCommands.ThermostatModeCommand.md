[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/commands/ThermostatCommands](../modules/behavioral_command_commands_ThermostatCommands.md) / ThermostatModeCommand

# Class: ThermostatModeCommand

[behavioral/command/commands/ThermostatCommands](../modules/behavioral_command_commands_ThermostatCommands.md).ThermostatModeCommand

サーモスタットのモードを制御するコマンド

## Implements

- [`Command`](../interfaces/behavioral_command_Command.Command.md)

## Table of contents

### Constructors

- [constructor](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md#constructor)

### Methods

- [execute](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md#execute)
- [undo](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md#undo)
- [getDescription](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md#getdescription)

## Constructors

### constructor

• **new ThermostatModeCommand**(`thermostat`, `mode`): [`ThermostatModeCommand`](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thermostat` | [`Thermostat`](behavioral_command_devices_Thermostat.Thermostat.md) |
| `mode` | ``"off"`` \| ``"heat"`` \| ``"cool"`` |

#### Returns

[`ThermostatModeCommand`](behavioral_command_commands_ThermostatCommands.ThermostatModeCommand.md)

#### Defined in

behavioral/command/commands/ThermostatCommands.ts:50

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

behavioral/command/commands/ThermostatCommands.ts:62

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

behavioral/command/commands/ThermostatCommands.ts:67

___

### getDescription

▸ **getDescription**(): `string`

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[Command](../interfaces/behavioral_command_Command.Command.md).[getDescription](../interfaces/behavioral_command_Command.Command.md#getdescription)

#### Defined in

behavioral/command/commands/ThermostatCommands.ts:74

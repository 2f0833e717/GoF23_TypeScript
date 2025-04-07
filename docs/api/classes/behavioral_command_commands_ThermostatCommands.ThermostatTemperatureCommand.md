[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/command/commands/ThermostatCommands](../modules/behavioral_command_commands_ThermostatCommands.md) / ThermostatTemperatureCommand

# Class: ThermostatTemperatureCommand

[behavioral/command/commands/ThermostatCommands](../modules/behavioral_command_commands_ThermostatCommands.md).ThermostatTemperatureCommand

サーモスタットの温度を制御するコマンド

## Implements

- [`Command`](../interfaces/behavioral_command_Command.Command.md)

## Table of contents

### Constructors

- [constructor](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md#constructor)

### Methods

- [execute](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md#execute)
- [undo](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md#undo)
- [getDescription](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md#getdescription)

## Constructors

### constructor

• **new ThermostatTemperatureCommand**(`thermostat`, `temperature`): [`ThermostatTemperatureCommand`](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thermostat` | [`Thermostat`](behavioral_command_devices_Thermostat.Thermostat.md) |
| `temperature` | `number` |

#### Returns

[`ThermostatTemperatureCommand`](behavioral_command_commands_ThermostatCommands.ThermostatTemperatureCommand.md)

#### Defined in

behavioral/command/commands/ThermostatCommands.ts:15

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

behavioral/command/commands/ThermostatCommands.ts:27

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

behavioral/command/commands/ThermostatCommands.ts:32

___

### getDescription

▸ **getDescription**(): `string`

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[Command](../interfaces/behavioral_command_Command.Command.md).[getDescription](../interfaces/behavioral_command_Command.Command.md#getdescription)

#### Defined in

behavioral/command/commands/ThermostatCommands.ts:39

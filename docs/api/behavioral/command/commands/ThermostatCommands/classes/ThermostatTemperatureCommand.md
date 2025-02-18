[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/commands/ThermostatCommands](../README.md) / ThermostatTemperatureCommand

# Class: ThermostatTemperatureCommand

Defined in: behavioral/command/commands/ThermostatCommands.ts:12

サーモスタットの温度を制御するコマンド

## Implements

- [`Command`](../../../Command/interfaces/Command.md)

## Constructors

### new ThermostatTemperatureCommand()

> **new ThermostatTemperatureCommand**(`thermostat`, `temperature`): [`ThermostatTemperatureCommand`](ThermostatTemperatureCommand.md)

Defined in: behavioral/command/commands/ThermostatCommands.ts:15

#### Parameters

##### thermostat

[`Thermostat`](../../../devices/Thermostat/classes/Thermostat.md)

##### temperature

`number`

#### Returns

[`ThermostatTemperatureCommand`](ThermostatTemperatureCommand.md)

## Methods

### execute()

> **execute**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:27

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`execute`](../../../Command/interfaces/Command.md#execute)

***

### undo()

> **undo**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:32

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`undo`](../../../Command/interfaces/Command.md#undo)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:39

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`getDescription`](../../../Command/interfaces/Command.md#getdescription)

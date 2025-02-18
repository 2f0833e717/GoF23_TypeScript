[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/command/commands/ThermostatCommands](../README.md) / ThermostatModeCommand

# Class: ThermostatModeCommand

Defined in: behavioral/command/commands/ThermostatCommands.ts:47

サーモスタットのモードを制御するコマンド

## Implements

- [`Command`](../../../Command/interfaces/Command.md)

## Constructors

### new ThermostatModeCommand()

> **new ThermostatModeCommand**(`thermostat`, `mode`): [`ThermostatModeCommand`](ThermostatModeCommand.md)

Defined in: behavioral/command/commands/ThermostatCommands.ts:50

#### Parameters

##### thermostat

[`Thermostat`](../../../devices/Thermostat/classes/Thermostat.md)

##### mode

`"heat"` | `"cool"` | `"off"`

#### Returns

[`ThermostatModeCommand`](ThermostatModeCommand.md)

## Methods

### execute()

> **execute**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:62

コマンドを実行します

#### Returns

`string`

実行結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`execute`](../../../Command/interfaces/Command.md#execute)

***

### undo()

> **undo**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:67

コマンドを取り消します（可能な場合）

#### Returns

`string`

取り消し結果のメッセージ

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`undo`](../../../Command/interfaces/Command.md#undo)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/command/commands/ThermostatCommands.ts:74

コマンドの説明を取得します

#### Returns

`string`

#### Implementation of

[`Command`](../../../Command/interfaces/Command.md).[`getDescription`](../../../Command/interfaces/Command.md#getdescription)

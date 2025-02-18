/**
 * サーモスタット制御コマンド
 * 
 * サーモスタットを制御するための各種コマンドを提供します。
 */
import { Command, CommandType, CommandState } from '../Command';
import { Thermostat } from '../devices/Thermostat';

/**
 * サーモスタットの温度を制御するコマンド
 */
export class ThermostatTemperatureCommand implements Command {
    private state: CommandState;

    constructor(
        private thermostat: Thermostat,
        private temperature: number
    ) {
        this.state = {
            type: CommandType.THERMOSTAT,
            timestamp: new Date(),
            executed: false,
            description: `${thermostat.getName()}の温度を${temperature}℃に設定する`
        };
    }

    execute(): string {
        this.state.executed = true;
        return this.thermostat.setTemperature(this.temperature);
    }

    undo(): string {
        if (!this.state.executed) {
            return `コマンドは実行されていません`;
        }
        return this.thermostat.restoreLastState();
    }

    getDescription(): string {
        return this.state.description;
    }
}

/**
 * サーモスタットのモードを制御するコマンド
 */
export class ThermostatModeCommand implements Command {
    private state: CommandState;

    constructor(
        private thermostat: Thermostat,
        private mode: 'heat' | 'cool' | 'off'
    ) {
        this.state = {
            type: CommandType.THERMOSTAT,
            timestamp: new Date(),
            executed: false,
            description: `${thermostat.getName()}のモードを${mode}に設定する`
        };
    }

    execute(): string {
        this.state.executed = true;
        return this.thermostat.setMode(this.mode);
    }

    undo(): string {
        if (!this.state.executed) {
            return `コマンドは実行されていません`;
        }
        return this.thermostat.restoreLastState();
    }

    getDescription(): string {
        return this.state.description;
    }
} 
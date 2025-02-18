/**
 * ライト制御コマンド
 * 
 * スマートライトを制御するための各種コマンドを提供します。
 */
import { Command, CommandType, CommandState } from '../Command';
import { SmartLight } from '../devices/SmartLight';

/**
 * ライトの電源を制御するコマンド
 */
export class LightPowerCommand implements Command {
    private state: CommandState;

    constructor(
        private light: SmartLight,
        private targetState: boolean
    ) {
        this.state = {
            type: CommandType.LIGHT,
            timestamp: new Date(),
            executed: false,
            description: `${light.getName()}の電源を${targetState ? 'オン' : 'オフ'}にする`
        };
    }

    execute(): string {
        this.state.executed = true;
        return this.targetState ? this.light.turnOn() : this.light.turnOff();
    }

    undo(): string {
        if (!this.state.executed) {
            return `コマンドは実行されていません`;
        }
        return this.light.restoreLastState();
    }

    getDescription(): string {
        return this.state.description;
    }
}

/**
 * ライトの明るさを制御するコマンド
 */
export class LightBrightnessCommand implements Command {
    private state: CommandState;

    constructor(
        private light: SmartLight,
        private brightness: number
    ) {
        this.state = {
            type: CommandType.LIGHT,
            timestamp: new Date(),
            executed: false,
            description: `${light.getName()}の明るさを${brightness}%に設定する`
        };
    }

    execute(): string {
        this.state.executed = true;
        return this.light.setBrightness(this.brightness);
    }

    undo(): string {
        if (!this.state.executed) {
            return `コマンドは実行されていません`;
        }
        return this.light.restoreBrightness();
    }

    getDescription(): string {
        return this.state.description;
    }
} 
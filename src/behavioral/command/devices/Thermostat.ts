/**
 * サーモスタット
 * 
 * 温度とモードを制御できるスマートサーモスタットを実装します。
 * 温度設定（16-32℃）と動作モード（heat/cool/off）の制御が可能です。
 */
import { SmartDevice } from './SmartDevice';

export class Thermostat extends SmartDevice {
    private _temperature: number = 22;
    private _lastTemperature: number = 22;
    private _mode: 'heat' | 'cool' | 'off' = 'off';
    private _lastMode: 'heat' | 'cool' | 'off' = 'off';

    /**
     * 温度を設定します
     * @param temp 温度（16-32℃）
     * @returns 操作結果のメッセージ
     */
    setTemperature(temp: number): string {
        if (temp < 16 || temp > 32) {
            throw new Error('温度は16℃から32℃の間で指定してください');
        }

        this._lastTemperature = this._temperature;
        this._temperature = temp;

        if (this._mode === 'off') {
            this._lastMode = this._mode;
            this._mode = this._temperature > this._lastTemperature ? 'heat' : 'cool';
            this.turnOn();
        }

        return `${this.getName()}の温度を${temp}℃に設定しました`;
    }

    /**
     * 動作モードを設定します
     * @param mode 動作モード（heat/cool/off）
     * @returns 操作結果のメッセージ
     */
    setMode(mode: 'heat' | 'cool' | 'off'): string {
        if (mode !== 'heat' && mode !== 'cool' && mode !== 'off') {
            throw new Error('無効なモードが指定されました');
        }

        this._lastMode = this._mode;
        this._mode = mode;

        if (mode === 'off') {
            this.turnOff();
        } else if (!this.isOn()) {
            this.turnOn();
        }

        return `${this.getName()}のモードを${mode}に設定しました`;
    }

    /**
     * 温度を取得します
     * @returns 現在の温度設定
     */
    getTemperature(): number {
        return this._temperature;
    }

    /**
     * 動作モードを取得します
     * @returns 現在の動作モード
     */
    getMode(): 'heat' | 'cool' | 'off' {
        return this._mode;
    }

    /**
     * 前回の設定に戻します
     * @returns 操作結果のメッセージ
     */
    restoreLastState(): string {
        const tempTemp = this._temperature;
        const tempMode = this._mode;

        this._temperature = this._lastTemperature;
        this._mode = this._lastMode;

        this._lastTemperature = tempTemp;
        this._lastMode = tempMode;

        if (this._mode === 'off') {
            this.turnOff();
        } else if (!this.isOn()) {
            this.turnOn();
        }

        return `${this.getName()}を前回の設定（${this._temperature}℃, ${this._mode}）に戻しました`;
    }

    /**
     * デバイスの状態を文字列で返します
     * @returns デバイスの状態を表す文字列
     */
    toString(): string {
        return `${this.getName()}: ${this.isOn() ? 'オン' : 'オフ'} (${this._temperature}℃, ${this._mode})`;
    }
} 
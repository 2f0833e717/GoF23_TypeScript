/**
 * スマートライト
 * 
 * 調光機能付きのスマートライトを実装します。
 * 電源のオン/オフと明るさの調整が可能です。
 */
import { SmartDevice } from './SmartDevice';

export class SmartLight extends SmartDevice {
    private _brightness: number = 100;
    private _lastBrightness: number = 100;
    private _lastState: boolean = false;

    /**
     * 明るさを設定します
     * @param level 明るさ（0-100）
     * @returns 操作結果のメッセージ
     */
    setBrightness(level: number): string {
        if (level < 0 || level > 100) {
            throw new Error('明るさは0から100の間で指定してください');
        }

        this._lastBrightness = this._brightness;
        this._brightness = level;

        if (level > 0 && !this.isOn()) {
            this.turnOn();
        } else if (level === 0 && this.isOn()) {
            this.turnOff();
        }

        return `${this.getName()}の明るさを${level}%に設定しました`;
    }

    /**
     * 明るさを取得します
     * @returns 現在の明るさ（0-100）
     */
    getBrightness(): number {
        return this._brightness;
    }

    /**
     * 前回の明るさに戻します
     * @returns 操作結果のメッセージ
     */
    restoreBrightness(): string {
        const temp = this._brightness;
        this._brightness = this._lastBrightness;
        this._lastBrightness = temp;
        return `${this.getName()}の明るさを${this._brightness}%に戻しました`;
    }

    /**
     * 前回の状態に戻します
     * @returns 操作結果のメッセージ
     */
    restoreLastState(): string {
        this._lastState = this.isOn();
        if (this._lastState) {
            return this.turnOff();
        } else {
            return this.turnOn();
        }
    }

    /**
     * デバイスの状態を文字列で返します
     * @returns デバイスの状態を表す文字列
     */
    toString(): string {
        return `${this.getName()}: ${this.isOn() ? 'オン' : 'オフ'} (明るさ: ${this._brightness}%)`;
    }
} 
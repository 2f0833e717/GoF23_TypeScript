/**
 * スマートデバイスの基底クラス
 * 
 * すべてのスマートデバイスの共通機能を提供します。
 */
export abstract class SmartDevice {
    private _isOn: boolean = false;
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    /**
     * デバイスの電源をオンにします
     * @returns 操作結果のメッセージ
     */
    turnOn(): string {
        this._isOn = true;
        return `${this._name}の電源をオンにしました`;
    }

    /**
     * デバイスの電源をオフにします
     * @returns 操作結果のメッセージ
     */
    turnOff(): string {
        this._isOn = false;
        return `${this._name}の電源をオフにしました`;
    }

    /**
     * デバイスの電源状態を取得します
     * @returns デバイスがオンの場合はtrue、オフの場合はfalse
     */
    isOn(): boolean {
        return this._isOn;
    }

    /**
     * デバイスの名前を取得します
     * @returns デバイスの名前
     */
    getName(): string {
        return this._name;
    }

    /**
     * 最後の状態に戻します
     * @returns 操作結果のメッセージ
     */
    abstract restoreLastState(): string;

    /**
     * デバイスの状態を文字列で返します
     * @returns デバイスの状態を表す文字列
     */
    abstract toString(): string;
} 
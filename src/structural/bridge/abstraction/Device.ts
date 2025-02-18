/**
 * デバイスの抽象化クラス
 * 
 * デバイスの基本的な操作を定義し、実装とのブリッジを提供します。
 * このクラスは実装クラスへの参照を保持し、操作を委譲します。
 */
import { DeviceImplementation } from '../implementation/DeviceImplementation';

export abstract class Device {
    constructor(protected implementation: DeviceImplementation) { }

    /**
     * デバイスの電源をオンにします
     */
    public turnOn(): void {
        this.implementation.turnOn();
    }

    /**
     * デバイスの電源をオフにします
     */
    public turnOff(): void {
        this.implementation.turnOff();
    }

    /**
     * デバイスの音量を設定します
     * @param volume 設定する音量（0-100）
     */
    public setVolume(volume: number): void {
        this.implementation.setVolume(volume);
    }

    /**
     * デバイスのチャンネルを設定します
     * @param channel 設定するチャンネル番号
     */
    public setChannel(channel: number): void {
        this.implementation.setChannel(channel);
    }

    /**
     * デバイスの電源状態を取得します
     * @returns デバイスが有効な場合はtrue
     */
    public isEnabled(): boolean {
        return this.implementation.isEnabled();
    }

    /**
     * デバイスの現在の音量を取得します
     * @returns 現在の音量（0-100）
     */
    public getVolume(): number {
        return this.implementation.getVolume();
    }

    /**
     * デバイスの現在のチャンネルを取得します
     * @returns 現在のチャンネル番号
     */
    public getChannel(): number {
        return this.implementation.getChannel();
    }

    /**
     * デバイス固有の操作を実行します
     * サブクラスで実装される必要があります
     */
    public abstract executeDeviceFunction(): void;
} 
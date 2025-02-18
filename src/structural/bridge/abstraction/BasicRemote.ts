/**
 * 基本的なリモコンクラス
 * 
 * デバイスの基本的な操作を提供するリモコンの実装です。
 * Deviceクラスを継承し、基本的なリモコン機能を実装します。
 */
import { Device } from './Device';
import { DeviceImplementation } from '../implementation/DeviceImplementation';

export class BasicRemote extends Device {
    constructor(implementation: DeviceImplementation) {
        super(implementation);
    }

    /**
     * デバイスの基本機能を実行します
     * 電源のオン/オフを切り替えます
     */
    public executeDeviceFunction(): void {
        if (this.isEnabled()) {
            this.turnOff();
        } else {
            this.turnOn();
        }
    }

    /**
     * 音量を上げます
     * @param step 上げる量（デフォルト: 10）
     */
    public volumeUp(step: number = 10): void {
        const currentVolume = this.getVolume();
        this.setVolume(currentVolume + step);
    }

    /**
     * 音量を下げます
     * @param step 下げる量（デフォルト: 10）
     */
    public volumeDown(step: number = 10): void {
        const currentVolume = this.getVolume();
        this.setVolume(currentVolume - step);
    }

    /**
     * チャンネルを進めます
     */
    public channelUp(): void {
        const currentChannel = this.getChannel();
        this.setChannel(currentChannel + 1);
    }

    /**
     * チャンネルを戻します
     */
    public channelDown(): void {
        const currentChannel = this.getChannel();
        if (currentChannel > 1) {
            this.setChannel(currentChannel - 1);
        }
    }
} 
/**
 * 基本的なリモコンの抽象クラス
 * 
 * デバイスの基本的な操作を提供します。
 */
import { Device } from '../Device';
import { Remote } from '../Remote';

export class BasicRemote implements Remote {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    turnOn(): void {
        this.device.enable();
    }

    turnOff(): void {
        this.device.disable();
    }

    isEnabled(): boolean {
        return this.device.isEnabled();
    }

    getVolume(): number {
        return this.device.getVolume();
    }

    setVolume(volume: number): void {
        this.device.setVolume(volume);
    }

    getChannel(): number {
        return this.device.getChannel();
    }

    setChannel(channel: number): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        if (channel < 1 || channel > 64) {
            return; // 範囲外のチャンネルは無視
        }
        try {
            this.device.setChannel(channel);
        } catch (error) {
            // その他のエラーは無視
        }
    }

    public volumeUp(): void {
        const volume = this.device.getVolume();
        const newVolume = Math.min(volume + 10, 100);
        this.device.setVolume(newVolume);
    }

    volumeDown(): void {
        const volume = this.device.getVolume();
        this.device.setVolume(Math.max(volume - 10, 0));
    }

    channelUp(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        const channel = this.device.getChannel();
        if (channel >= 64) {
            return; // 最大チャンネルに達している場合は無視
        }
        try {
            this.device.setChannel(channel + 1);
        } catch (error) {
            // その他のエラーは無視
        }
    }

    channelDown(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        const channel = this.device.getChannel();
        if (channel <= 1) {
            return; // 最小チャンネルに達している場合は無視
        }
        try {
            this.device.setChannel(channel - 1);
        } catch (error) {
            // その他のエラーは無視
        }
    }

    returnToPreviousChannel?(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        try {
            this.device.returnToPreviousChannel();
        } catch (error) {
            // 前のチャンネルがない場合のエラーは無視
        }
    }

    mute?(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        if (this.device.getVolume() > 0) {
            this.device.setVolume(0);
        }
    }

    /**
     * お気に入りチャンネルを追加します
     * デバイスの電源状態に関係なく追加できます
     * @param channel 追加するチャンネル
     */
    addToFavorites?(channel: number): void {
        try {
            this.device.addToFavorites(channel);
        } catch (error) {
            // チャンネル範囲外のエラーは無視
        }
    }

    cycleFavorites(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        this.device.cycleFavorites();
    }
} 
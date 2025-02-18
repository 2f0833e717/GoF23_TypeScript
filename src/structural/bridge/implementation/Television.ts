/**
 * テレビの具体的な実装クラス
 * 
 * DeviceImplementationインターフェースを実装し、
 * テレビ特有の機能を提供します。
 */
import { DeviceImplementation } from './DeviceImplementation';

export class Television implements DeviceImplementation {
    private enabled: boolean = false;
    private volume: number = 30;
    private channel: number = 1;

    turnOn(): void {
        this.enabled = true;
        console.log('テレビの電源をオンにしました');
    }

    turnOff(): void {
        this.enabled = false;
        console.log('テレビの電源をオフにしました');
    }

    setVolume(volume: number): void {
        if (volume < 0) {
            this.volume = 0;
        } else if (volume > 100) {
            this.volume = 100;
        } else {
            this.volume = volume;
        }
        console.log(`テレビの音量を${this.volume}に設定しました`);
    }

    setChannel(channel: number): void {
        if (channel < 1) {
            this.channel = 1;
        } else {
            this.channel = channel;
        }
        console.log(`テレビのチャンネルを${this.channel}に設定しました`);
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    getVolume(): number {
        return this.volume;
    }

    getChannel(): number {
        return this.channel;
    }
} 
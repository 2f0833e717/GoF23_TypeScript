/**
 * 高度なリモコンクラス
 * 
 * 基本的なリモコン機能に加えて、高度な操作を提供するリモコンの実装です。
 * BasicRemoteクラスを継承し、追加機能を実装します。
 */
import { BasicRemote } from './BasicRemote';
import { DeviceImplementation } from '../implementation/DeviceImplementation';

export class AdvancedRemote extends BasicRemote {
    private lastChannel: number = 1;
    private lastVolume: number = 0;
    private muteVolume: number = 0;

    constructor(implementation: DeviceImplementation) {
        super(implementation);
    }

    /**
     * デバイスの高度な機能を実行します
     * ミュート状態を切り替えます
     */
    public executeDeviceFunction(): void {
        this.toggleMute();
    }

    /**
     * ミュート状態を切り替えます
     */
    public toggleMute(): void {
        const currentVolume = this.getVolume();
        if (currentVolume > 0) {
            this.muteVolume = currentVolume;
            this.setVolume(0);
        } else {
            this.setVolume(this.muteVolume);
        }
    }

    /**
     * 前回のチャンネルに戻ります
     */
    public previousChannel(): void {
        const currentChannel = this.getChannel();
        this.setChannel(this.lastChannel);
        this.lastChannel = currentChannel;
    }

    /**
     * チャンネルを設定し、前回のチャンネルを記憶します
     * @param channel 設定するチャンネル番号
     */
    public setChannel(channel: number): void {
        this.lastChannel = this.getChannel();
        super.setChannel(channel);
    }

    /**
     * 音量を設定し、前回の音量を記憶します（ミュート以外の場合）
     * @param volume 設定する音量（0-100）
     */
    public setVolume(volume: number): void {
        if (volume > 0) {
            this.lastVolume = volume;
        }
        super.setVolume(volume);
    }

    /**
     * 指定したチャンネルに直接ジャンプします
     * @param channel ジャンプ先のチャンネル番号
     */
    public jumpToChannel(channel: number): void {
        if (channel > 0) {
            this.lastChannel = this.getChannel();
            this.setChannel(channel);
            console.log(`チャンネル${channel}に直接ジャンプしました`);
        }
    }
} 
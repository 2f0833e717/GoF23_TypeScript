/**
 * 高度なリモコンの抽象クラス
 * 
 * 基本的なリモコンの機能に加えて、以下の機能を提供します：
 * - ミュート機能
 * - お気に入りチャンネルの管理
 * - 前のチャンネルに戻る機能
 */
import { BasicRemote } from './BasicRemote';
import { Device } from '../Device';

export class AdvancedRemote extends BasicRemote {
    private previousVolume: number = 20;
    private isMuted: boolean = false;
    private readonly MAX_CHANNEL: number = 64;

    constructor(device: Device) {
        super(device);
    }

    /**
     * ミュートを切り替えます
     * デバイスの電源がONの状態でのみ動作します
     */
    mute(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        if (!this.isMuted) {
            this.previousVolume = this.device.getVolume();
            this.device.setVolume(0);
            this.isMuted = true;
        } else {
            this.device.setVolume(this.previousVolume);
            this.isMuted = false;
        }
    }

    /**
     * ミュートを切り替えます（toggleMuteのエイリアス）
     */
    toggleMute(): void {
        this.mute();
    }

    /**
     * 音量を設定します
     */
    setVolume(volume: number): void {
        super.setVolume(volume);
        if (volume > 0) {
            this.previousVolume = volume;
            this.isMuted = false;
        }
    }

    /**
     * 前のチャンネルに戻ります
     * デバイスの電源がONの状態でのみ動作します
     */
    returnToPreviousChannel(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        this.device.returnToPreviousChannel();
    }

    /**
     * 指定したチャンネルに直接移動します
     * デバイスの電源がONの状態でのみ動作します
     */
    jumpToChannel(channel: number): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        if (channel >= 1 && channel <= this.MAX_CHANNEL) {
            this.device.setChannel(channel);
        }
    }

    /**
     * お気に入りチャンネルを追加します
     * デバイスの電源状態に関係なく追加できます
     * @param channel 追加するチャンネル
     */
    addToFavorites(channel: number): void {
        if (channel >= 1 && channel <= this.MAX_CHANNEL) {
            this.device.addToFavorites(channel);
        }
    }

    /**
     * お気に入りチャンネルを削除します
     */
    removeFromFavorites(channel: number): void {
        this.device.removeFromFavorites(channel);
    }

    /**
     * お気に入りチャンネルの一覧を取得します
     */
    getFavorites(): number[] {
        return this.device.getFavorites();
    }

    /**
     * お気に入りチャンネルの一覧を取得します（getFavoritesのエイリアス）
     * @deprecated 代わりにgetFavoritesを使用してください
     */
    getFavoriteChannels(): number[] {
        return this.getFavorites();
    }

    /**
     * お気に入りチャンネルを順番に切り替えます
     * デバイスの電源がONの状態でのみ動作します
     */
    cycleFavorites(): void {
        if (!this.device.isEnabled()) {
            throw new Error('デバイスの電源がOFFです');
        }
        this.device.cycleFavorites();
    }
} 
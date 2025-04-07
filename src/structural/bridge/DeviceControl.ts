/**
 * デバイス制御システム
 * 
 * Bridgeパターンを使用して、デバイスの制御機能と実装を分離します。
 * - 異なるデバイスタイプのサポート
 * - 共通の制御インターフェース
 * - デバイス固有の実装
 * - 状態管理と監視
 */

/**
 * デバイスの実装インターフェース
 */
export interface DeviceImplementation {
    /**
     * 電源をONにします
     */
    turnOn(): void;

    /**
     * 電源をOFFにします
     */
    turnOff(): void;

    /**
     * 音量を設定します
     * @param volume 音量（0-100）
     */
    setVolume(volume: number): void;

    /**
     * チャンネルを設定します
     * @param channel チャンネル番号
     */
    setChannel(channel: number): void;

    /**
     * 現在の電源状態を取得します
     */
    isEnabled(): boolean;

    /**
     * 現在の音量を取得します
     */
    getVolume(): number;

    /**
     * 現在のチャンネルを取得します
     */
    getChannel(): number;

    /**
     * 前のチャンネルに戻ります
     */
    returnToPreviousChannel(): void;

    /**
     * お気に入りチャンネルを追加します
     */
    addToFavorites(channel: number): void;

    /**
     * お気に入りチャンネルを削除します
     * @param channel 削除するチャンネル番号
     */
    removeFromFavorites(channel: number): void;

    /**
     * お気に入りチャンネルの一覧を取得します
     */
    getFavorites(): number[];
}

/**
 * デバイス制御の抽象クラス
 */
export abstract class DeviceControl {
    constructor(protected implementation: DeviceImplementation) { }

    /**
     * デバイスの電源をトグルします
     */
    togglePower(): void {
        if (this.implementation.isEnabled()) {
            this.implementation.turnOff();
        } else {
            this.implementation.turnOn();
        }
    }

    /**
     * 音量を上げます
     */
    volumeUp(): void {
        const currentVolume = this.implementation.getVolume();
        this.implementation.setVolume(Math.min(currentVolume + 10, 100));
    }

    /**
     * 音量を下げます
     */
    volumeDown(): void {
        const currentVolume = this.implementation.getVolume();
        this.implementation.setVolume(Math.max(currentVolume - 10, 0));
    }

    /**
     * チャンネルを進めます
     */
    channelUp(): void {
        const currentChannel = this.implementation.getChannel();
        this.implementation.setChannel(currentChannel + 1);
    }

    /**
     * チャンネルを戻します
     */
    channelDown(): void {
        const currentChannel = this.implementation.getChannel();
        this.implementation.setChannel(Math.max(currentChannel - 1, 1));
    }

    /**
     * 特定のチャンネルに移動します
     * @param channel チャンネル番号
     */
    setChannel(channel: number): void {
        this.implementation.setChannel(channel);
    }
}

/**
 * 基本的なリモコン
 */
export class BasicRemote extends DeviceControl {
    constructor(implementation: DeviceImplementation) {
        super(implementation);
    }
}

/**
 * 高度なリモコン
 */
export class AdvancedRemote extends DeviceControl {
    private currentFavoriteIndex: number = -1;
    private previousVolume: number = 0;

    constructor(implementation: DeviceImplementation) {
        super(implementation);
        this.previousVolume = implementation.getVolume();
    }

    /**
     * デバイスをミュートします
     */
    mute(): void {
        if (this.implementation.getVolume() > 0) {
            this.previousVolume = this.implementation.getVolume();
            this.implementation.setVolume(0);
            console.log('ミュート設定');
        } else {
            this.implementation.setVolume(this.previousVolume);
            console.log('ミュート解除');
        }
    }

    /**
     * 前回のチャンネルに戻ります
     */
    returnToPreviousChannel(): void {
        this.implementation.returnToPreviousChannel();
    }

    /**
     * お気に入りチャンネルを追加します
     */
    addToFavorites(channel: number): void {
        this.implementation.addToFavorites(channel);
        console.log(`チャンネル${channel}をお気に入りに追加しました`);
    }

    /**
     * お気に入りチャンネルを巡回します
     */
    cycleFavorites(): void {
        const favorites = this.implementation.getFavorites();
        if (favorites.length === 0) {
            console.log('お気に入りチャンネルが設定されていません');
            return;
        }

        const currentChannel = this.implementation.getChannel();
        const currentIndex = favorites.indexOf(currentChannel);

        // 現在のチャンネルがお気に入りに含まれている場合
        if (currentIndex !== -1) {
            // 次のお気に入りチャンネルに移動
            this.currentFavoriteIndex = (currentIndex + 1) % favorites.length;
        } else {
            // 現在のチャンネルがお気に入りに含まれていない場合は最初のお気に入りチャンネルに移動
            this.currentFavoriteIndex = 0;
        }

        const channel = favorites[this.currentFavoriteIndex];
        this.implementation.setChannel(channel);
        console.log(`お気に入りチャンネル${channel}に移動しました`);
    }
} 
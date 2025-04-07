/**
 * テレビデバイスの実装クラス
 * 
 * 基本的なテレビの機能を提供します：
 * - 電源のON/OFF
 * - 音量調整（0-100）
 * - チャンネル選択（1-64）
 * - お気に入りチャンネル管理
 * - 前のチャンネルに戻る機能
 * 
 * @version 1.3.9
 * @since 1.0.0
 */
import { Device } from '../Device';

/**
 * ログの種類を定義する型
 */
type LogType = 'info' | 'error' | 'warning';

/**
 * チャンネル番号の型（1から64までの数値）
 */
type ChannelNumber = number;

/**
 * 音量レベルの型（0から100までの数値）
 */
type VolumeLevel = number;

/**
 * デバイスの定数を定義
 */
const DEVICE_CONSTANTS = {
    DEFAULT_VOLUME: 30,
    DEFAULT_CHANNEL: 1,
    MAX_CHANNEL: 64,
    MAX_FAVORITES: 10,
    MIN_VOLUME: 0,
    MAX_VOLUME: 100,
    SPECIAL_CHANNEL: 1,
} as const;

/**
 * エラーメッセージを定義
 */
const ERROR_MESSAGES = {
    ALREADY_ON: 'テレビは既にONになっています',
    ALREADY_OFF: 'テレビは既にOFFになっています',
    POWER_OFF: 'デバイスの電源がOFFです',
    INVALID_NUMBER: (name: string) => `${name}は数値で指定してください`,
    CHANNEL_OUT_OF_RANGE: (channel: number) =>
        `チャンネル${channel}は範囲外です（有効範囲: 1-${DEVICE_CONSTANTS.MAX_CHANNEL}）`,
    NO_PREVIOUS_CHANNEL: '有効な前のチャンネルがありません',
    FAVORITES_LIMIT: (max: number) => `お気に入りの登録数が上限（${max}）に達しています`,
    ALREADY_IN_FAVORITES: (channel: number) => `チャンネル${channel}は既にお気に入りに登録されています`,
    NOT_IN_FAVORITES: (channel: number) => `チャンネル${channel}はお気に入りに登録されていません`,
    NO_FAVORITES: 'お気に入りチャンネルが登録されていません',
    NO_OTHER_FAVORITES: 'チャンネル1以外のお気に入りチャンネルが登録されていません',
    CYCLING_ERROR: 'チャンネル巡回処理中にエラーが発生しました'
} as const;

export class Television implements Device {
    private enabled: boolean = false;
    private volume: VolumeLevel = DEVICE_CONSTANTS.DEFAULT_VOLUME;
    private channel: ChannelNumber = DEVICE_CONSTANTS.DEFAULT_CHANNEL;
    private previousChannel: ChannelNumber | null = null;
    private favorites: ChannelNumber[] = [];
    private isFirstCycleDone: boolean = false;

    /**
     * デバイスの状態変更をログに出力します
     * @param message ログメッセージ
     * @param type ログの種類
     */
    private log(message: string, type: LogType = 'info'): void {
        const timestamp = new Date().toISOString();
        const prefix = `[${timestamp}] [${type.toUpperCase()}] Television:`;
        console.log(`${prefix} ${message}`);
    }

    /**
     * 入力値が有効な数値かチェックします
     * @param value チェックする値
     * @param name パラメータ名
     * @throws {Error} 無効な値の場合
     */
    private validateNumber(value: number, name: string): void {
        if (typeof value !== 'number' || isNaN(value)) {
            const error = new Error(ERROR_MESSAGES.INVALID_NUMBER(name));
            this.log(error.message, 'error');
            throw error;
        }
    }

    /**
     * チャンネル番号が有効な範囲内かチェックします
     * @param channel チャンネル番号
     * @throws {Error} 範囲外の場合
     */
    private validateChannelRange(channel: number): void {
        if (channel < 1 || channel > DEVICE_CONSTANTS.MAX_CHANNEL) {
            const error = new Error(ERROR_MESSAGES.CHANNEL_OUT_OF_RANGE(channel));
            this.log(error.message, 'error');
            throw error;
        }
    }

    /**
     * デバイスの電源状態をチェックします
     * @throws {Error} 電源がOFFの場合
     */
    private validatePowerState(): void {
        if (!this.enabled) {
            const error = new Error(ERROR_MESSAGES.POWER_OFF);
            this.log(error.message, 'error');
            throw error;
        }
    }

    /**
     * お気に入りの登録数をチェックします
     * @throws {Error} 上限に達している場合
     */
    private validateFavoritesLimit(): void {
        if (this.favorites.length >= DEVICE_CONSTANTS.MAX_FAVORITES) {
            const error = new Error(ERROR_MESSAGES.FAVORITES_LIMIT(DEVICE_CONSTANTS.MAX_FAVORITES));
            this.log(error.message, 'error');
            throw error;
        }
    }

    enable(): void {
        if (this.enabled) {
            const error = new Error(ERROR_MESSAGES.ALREADY_ON);
            this.log(error.message, 'error');
            throw error;
        }
        this.enabled = true;
        this.log('テレビの電源をONにしました');
        this.logDeviceStatus();
    }

    /**
     * デバイスの現在の状態をログに出力します
     */
    private logDeviceStatus(): void {
        this.log(`現在のチャンネル: ${this.channel}`);
        this.log(`現在の音量: ${this.volume}`);
    }

    disable(): void {
        if (!this.enabled) {
            const error = new Error(ERROR_MESSAGES.ALREADY_OFF);
            this.log(error.message, 'error');
            throw error;
        }
        this.enabled = false;
        this.previousChannel = null;
        this.channel = DEVICE_CONSTANTS.DEFAULT_CHANNEL;
        this.isFirstCycleDone = false;
        this.log('テレビの電源をOFFにしました');
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    getVolume(): VolumeLevel {
        return this.volume;
    }

    setVolume(volume: VolumeLevel): void {
        this.validateNumber(volume, '音量');
        this.adjustVolumeToValidRange(volume);
    }

    /**
     * 音量を有効な範囲内に調整します
     * @param volume 設定する音量
     */
    private adjustVolumeToValidRange(volume: number): void {
        if (volume < DEVICE_CONSTANTS.MIN_VOLUME) {
            this.volume = DEVICE_CONSTANTS.MIN_VOLUME;
            this.log(`音量が下限を下回っているため、${DEVICE_CONSTANTS.MIN_VOLUME}に設定しました（指定値: ${volume}）`, 'warning');
        } else if (volume > DEVICE_CONSTANTS.MAX_VOLUME) {
            this.volume = DEVICE_CONSTANTS.MAX_VOLUME;
            this.log(`音量が上限を超えているため、${DEVICE_CONSTANTS.MAX_VOLUME}に設定しました（指定値: ${volume}）`, 'warning');
        } else {
            this.volume = volume;
            this.log(`音量を${volume}に設定しました`);
        }
    }

    getChannel(): ChannelNumber {
        return this.channel;
    }

    setChannel(channel: ChannelNumber): void {
        this.validatePowerState();
        this.validateNumber(channel, 'チャンネル');
        this.validateChannelRange(channel);
        this.updateChannel(channel);
    }

    /**
     * チャンネルを更新します
     * @param newChannel 新しいチャンネル
     */
    private updateChannel(newChannel: ChannelNumber): void {
        this.previousChannel = this.channel;
        this.channel = newChannel;
        this.log(`チャンネルを${newChannel}に変更しました`);
    }

    returnToPreviousChannel(): void {
        this.validatePowerState();
        this.validatePreviousChannel();
        this.swapChannels();
    }

    /**
     * 前のチャンネルが有効かチェックします
     * @throws {Error} 前のチャンネルが無効な場合
     */
    private validatePreviousChannel(): void {
        if (this.previousChannel === null) {
            const error = new Error(ERROR_MESSAGES.NO_PREVIOUS_CHANNEL);
            this.log(error.message, 'error');
            throw error;
        }
    }

    /**
     * 現在のチャンネルと前のチャンネルを入れ替えます
     */
    private swapChannels(): void {
        const temp = this.channel;
        this.channel = this.previousChannel!;
        this.previousChannel = temp;
        this.log(`前のチャンネル（${this.channel}）に戻りました`);
    }

    addToFavorites(channel: ChannelNumber): void {
        this.validateNumber(channel, 'チャンネル');
        this.validateChannelRange(channel);

        if (this.favorites.includes(channel)) {
            this.log(ERROR_MESSAGES.ALREADY_IN_FAVORITES(channel), 'warning');
            return;
        }

        this.validateFavoritesLimit();
        this.favorites.push(channel);
        this.log(`チャンネル${channel}をお気に入りに追加しました`);
    }

    removeFromFavorites(channel: ChannelNumber): void {
        this.validateNumber(channel, 'チャンネル');
        this.validateChannelExistsInFavorites(channel);
    }

    /**
     * チャンネルがお気に入りに存在するかチェックし、存在する場合は削除します
     * @param channel チャンネル番号
     */
    private validateChannelExistsInFavorites(channel: ChannelNumber): void {
        const index = this.favorites.indexOf(channel);
        if (index === -1) {
            this.log(ERROR_MESSAGES.NOT_IN_FAVORITES(channel), 'warning');
            return;
        }

        this.favorites.splice(index, 1);
        this.log(`チャンネル${channel}をお気に入りから削除しました`);
    }

    getFavorites(): ChannelNumber[] {
        return [...this.favorites];
    }

    /**
     * お気に入りチャンネルを巡回する
     * @throws {Error} デバイスの電源がOFFの場合、またはお気に入りが登録されていない場合
     */
    public cycleFavorites(): void {
        try {
            this.validatePowerState();

            // お気に入りの存在確認
            if (this.favorites.length === 0) {
                this.log(ERROR_MESSAGES.NO_FAVORITES, 'warning');
                return;
            }

            // 現在の状態をログ出力
            const favorites = this.getFavorites();
            this.log(`現在のお気に入りチャンネル一覧: ${favorites.join(', ')}`);
            this.log(`現在のチャンネル: ${this.channel}`);

            // 現在のチャンネルのインデックスを取得
            const currentChannel = this.channel;
            const currentIndex = favorites.indexOf(currentChannel);

            // お気に入りにないチャンネルを視聴中の場合
            if (currentIndex === -1) {
                // お気に入りの最初のチャンネルに移動
                const nextChannel = favorites[0];
                this.log(`お気に入りにないチャンネルから、最初のお気に入りチャンネル${nextChannel}に移動します`);
                this.setChannel(nextChannel);
                return;
            }

            // チャンネル1の特別な処理
            if (currentChannel === DEVICE_CONSTANTS.SPECIAL_CHANNEL && !this.isFirstCycleDone) {
                // 最初の巡回時はチャンネル1にとどまる
                this.log(`チャンネル1を視聴中で最初の巡回なので、同じチャンネルにとどまります`);
                this.isFirstCycleDone = true;
                return;
            }

            // 通常のお気に入りチャンネル巡回
            const nextIndex = (currentIndex + 1) % favorites.length;
            const nextChannel = favorites[nextIndex];
            this.log(`次のお気に入りチャンネル${nextChannel}に移動します`);
            this.setChannel(nextChannel);

        } catch (error: unknown) {
            if (error instanceof Error) {
                this.log(`${ERROR_MESSAGES.CYCLING_ERROR}: ${error.message}`, 'error');
            } else {
                this.log(ERROR_MESSAGES.CYCLING_ERROR, 'error');
            }
            throw error;
        }
    }
} 
/**
 * ラジオデバイスの実装クラス
 * 
 * 基本的なラジオの機能を提供します：
 * - 電源のON/OFF
 * - 音量調整（0-100）
 * - チャンネル選択（1-64）
 * - お気に入りチャンネル管理
 * - 前のチャンネルに戻る機能
 * - 周波数表示（76.0MHz-82.3MHz）
 */
import { Device } from '../Device';

export class Radio implements Device {
    private enabled: boolean = false;
    private volume: number = 20;
    private channel: number = 1;
    private previousChannel: number | null = null;
    private favorites: number[] = [];
    private readonly MAX_CHANNEL: number = 64;

    /**
     * デバイスの状態変更をログに出力します
     * @param message ログメッセージ
     */
    private log(message: string): void {
        console.log(message);
    }

    enable(): void {
        if (this.enabled) {
            throw new Error('ラジオは既にONになっています');
        }
        this.enabled = true;
        this.log('ラジオの電源をONにしました');
        this.log(`現在のチャンネル: ${this.channel}`);
        this.log(`現在の音量: ${this.volume}`);
    }

    disable(): void {
        if (!this.enabled) {
            throw new Error('ラジオは既にOFFになっています');
        }
        this.enabled = false;
        this.previousChannel = null;
        this.channel = 1;
        this.log('ラジオの電源をOFFにしました');
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        if (typeof volume !== 'number' || isNaN(volume)) {
            throw new Error('音量は数値で指定してください');
        }

        if (volume < 0) {
            this.volume = 0;
            this.log(`音量が下限を下回っているため、0に設定しました（指定値: ${volume}）`);
        } else if (volume > 100) {
            this.volume = 100;
            this.log(`音量が上限を超えているため、100に設定しました（指定値: ${volume}）`);
        } else {
            this.volume = volume;
            this.log(`ラジオの音量を${volume}に設定しました`);
        }
    }

    getChannel(): number {
        return this.channel;
    }

    setChannel(channel: number): void {
        if (!this.enabled) {
            throw new Error('デバイスの電源がOFFです');
        }

        if (typeof channel !== 'number' || isNaN(channel)) {
            throw new Error('チャンネルは数値で指定してください');
        }

        if (channel < 1 || channel > this.MAX_CHANNEL) {
            throw new Error(`チャンネル${channel}は範囲外です（有効範囲: 1-${this.MAX_CHANNEL}）`);
        }

        this.previousChannel = this.channel;
        this.channel = channel;
        this.log(`ラジオのチャンネルを${channel}に変更しました`);
    }

    returnToPreviousChannel(): void {
        if (!this.enabled) {
            throw new Error('デバイスの電源がOFFです');
        }

        if (this.previousChannel === null) {
            throw new Error('有効な前のチャンネルがありません');
        }
        const temp = this.channel;
        this.channel = this.previousChannel;
        this.previousChannel = temp;
        this.log(`前のチャンネル（${this.channel}）に戻りました`);
    }

    addToFavorites(channel: number): void {
        if (typeof channel !== 'number' || isNaN(channel)) {
            throw new Error('チャンネルは数値で指定してください');
        }

        if (channel < 1 || channel > this.MAX_CHANNEL) {
            throw new Error(`チャンネル${channel}は範囲外です（有効範囲: 1-${this.MAX_CHANNEL}）`);
        }

        if (!this.favorites.includes(channel)) {
            this.favorites.push(channel);
            this.log(`チャンネル${channel}をお気に入りに追加しました`);
        }
    }

    removeFromFavorites(channel: number): void {
        const index = this.favorites.indexOf(channel);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            this.log(`チャンネル${channel}をお気に入りから削除しました`);
        }
    }

    getFavorites(): number[] {
        return [...this.favorites];
    }

    /**
     * お気に入りチャンネルを巡回する
     * - デバイスの電源がOFFの場合はエラー
     * - お気に入りが空の場合はメッセージを表示
     * - チャンネル1がお気に入りにある場合は、常に最初に移動
     * - その後は追加順に巡回する
     * @throws {Error} デバイスの電源がOFFの場合
     */
    cycleFavorites(): void {
        if (!this.enabled) {
            throw new Error('デバイスの電源がOFFです');
        }

        if (this.favorites.length === 0) {
            this.log("お気に入りチャンネルが登録されていません");
            return;
        }

        // チャンネル1がお気に入りにある場合の特別処理
        if (this.favorites.includes(1)) {
            // 現在のチャンネルが1でない場合は1に移動
            if (this.channel !== 1) {
                this.setChannel(1);
                return;
            }
            // 現在のチャンネルが1の場合は、次のお気に入りに移動
            const nextFavorites = this.favorites.filter(ch => ch !== 1);
            if (nextFavorites.length > 0) {
                this.setChannel(nextFavorites[0]);
            }
            return;
        }

        // チャンネル1がお気に入りにない場合は通常の巡回
        const currentIndex = this.favorites.indexOf(this.channel);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % this.favorites.length;
        this.setChannel(this.favorites[nextIndex]);
    }

    /**
     * 現在のチャンネルに対応する周波数を返します
     * @returns 周波数（MHz）
     */
    getFrequency(): number {
        return 76.0 + (this.channel - 1) * 0.1;
    }
} 
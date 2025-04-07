/**
 * デバイスの具体的な実装
 * 
 * テレビとラジオの実装を提供します。
 * - 電源管理
 * - 音量制御
 * - チャンネル制御
 * - 状態管理
 */

import { DeviceImplementation } from './DeviceControl';

/**
 * テレビの実装
 */
export class Television implements DeviceImplementation {
    private enabled: boolean = false;
    private volume: number = 30;
    private channel: number = 1;
    private readonly maxChannel: number = 100;
    private readonly minChannel: number = 1;
    private favorites: number[] = [];
    private previousChannel: number = 1;

    turnOn(): void {
        this.enabled = true;
        console.log('テレビの電源をONにしました');
        console.log(`現在のチャンネル: ${this.channel}`);
        console.log(`現在の音量: ${this.volume}`);
    }

    turnOff(): void {
        this.enabled = false;
        console.log('テレビの電源をOFFにしました');
    }

    isEnabled(): boolean {
        return this.enabled;
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

    getVolume(): number {
        return this.volume;
    }

    setChannel(channel: number): void {
        if (channel < 1) {
            this.channel = 1;
        } else if (channel > this.maxChannel) {
            this.channel = 1;
        } else {
            this.channel = channel;
        }
        console.log(`テレビのチャンネルを${this.channel}に変更しました`);
    }

    getChannel(): number {
        return this.channel;
    }

    returnToPreviousChannel(): void {
        const temp = this.channel;
        this.channel = this.previousChannel;
        this.previousChannel = temp;
        console.log(`テレビのチャンネルを${this.channel}に戻しました`);
    }

    addToFavorites(channel: number): void {
        if (channel >= this.minChannel &&
            channel <= this.maxChannel &&
            !this.favorites.includes(channel)) {
            this.favorites.push(channel);
            this.favorites.sort((a, b) => a - b);
            console.log(`チャンネル${channel}をお気に入りに追加しました`);
        }
    }

    removeFromFavorites(channel: number): void {
        const index = this.favorites.indexOf(channel);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            console.log(`チャンネル${channel}をお気に入りから削除しました`);
        }
    }

    getFavorites(): number[] {
        return [...this.favorites];
    }
}

/**
 * ラジオの実装
 */
export class Radio implements DeviceImplementation {
    private enabled: boolean = false;
    private volume: number = 30;
    private channel: number = 24;
    private readonly minChannel: number = 1;
    private readonly maxChannel: number = 64;
    private favorites: number[] = [];
    private previousChannel: number = 24;

    turnOn(): void {
        this.enabled = true;
        console.log('ラジオの電源をONにしました');
        console.log(`現在の周波数: ${this.channel}MHz`);
        console.log(`現在の音量: ${this.volume}`);
    }

    turnOff(): void {
        this.enabled = false;
        console.log('ラジオの電源をOFFにしました');
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    setVolume(volume: number): void {
        if (volume < 0) {
            this.volume = 0;
        } else if (volume > 100) {
            this.volume = 100;
        } else {
            this.volume = volume;
        }
        console.log(`ラジオの音量を${this.volume}に設定しました`);
    }

    getVolume(): number {
        return this.volume;
    }

    setChannel(channel: number): void {
        this.previousChannel = this.channel;
        const frequency = this.minChannel + (channel - 1) * 0.5;
        if (frequency < this.minChannel) {
            this.channel = this.minChannel;
        } else if (frequency > this.maxChannel) {
            this.channel = this.minChannel;
        } else {
            this.channel = frequency;
        }
        console.log(`ラジオの周波数を${this.channel.toFixed(1)}MHzに変更しました`);
    }

    getChannel(): number {
        return Math.round((this.channel - this.minChannel) / 0.5) + 1;
    }

    returnToPreviousChannel(): void {
        const temp = this.channel;
        this.channel = this.previousChannel;
        this.previousChannel = temp;
        console.log(`ラジオのチャンネルを${this.channel}に戻しました`);
    }

    addToFavorites(channel: number): void {
        if (channel >= this.minChannel &&
            channel <= this.maxChannel &&
            !this.favorites.includes(channel)) {
            this.favorites.push(channel);
            this.favorites.sort((a, b) => a - b);
            console.log(`チャンネル${channel}をお気に入りに追加しました`);
        }
    }

    removeFromFavorites(channel: number): void {
        const index = this.favorites.indexOf(channel);
        if (index !== -1) {
            this.favorites.splice(index, 1);
            console.log(`チャンネル${channel}をお気に入りから削除しました`);
        }
    }

    getFavorites(): number[] {
        return [...this.favorites];
    }

    getFrequency(): number {
        return 76.0 + (this.channel - 1) * 0.5;
    }
} 
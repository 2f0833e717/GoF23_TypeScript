/**
 * リモコンのインターフェース
 * 
 * デバイスを操作するための基本的なメソッドを定義します。
 */
export interface Remote {
    turnOn(): void;
    turnOff(): void;
    isEnabled(): boolean;
    getVolume(): number;
    setVolume(volume: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
    volumeUp(): void;
    volumeDown(): void;
    channelUp(): void;
    channelDown(): void;

    returnToPreviousChannel?(): void;
    mute?(): void;
    addToFavorites?(channel: number): void;
    cycleFavorites?(): void;
} 
/**
 * デバイス実装のインターフェース
 * 
 * デバイスの基本的な操作を定義します。
 * 具象実装クラスはこのインターフェースを実装する必要があります。
 */
export interface DeviceImplementation {
    /**
     * デバイスの電源をオンにします
     */
    turnOn(): void;

    /**
     * デバイスの電源をオフにします
     */
    turnOff(): void;

    /**
     * デバイスの音量を設定します
     * @param volume 設定する音量（0-100）
     */
    setVolume(volume: number): void;

    /**
     * デバイスのチャンネルを設定します
     * @param channel 設定するチャンネル番号
     */
    setChannel(channel: number): void;

    /**
     * デバイスの電源状態を取得します
     * @returns デバイスが有効な場合はtrue
     */
    isEnabled(): boolean;

    /**
     * デバイスの現在の音量を取得します
     * @returns 現在の音量（0-100）
     */
    getVolume(): number;

    /**
     * デバイスの現在のチャンネルを取得します
     * @returns 現在のチャンネル番号
     */
    getChannel(): number;
} 
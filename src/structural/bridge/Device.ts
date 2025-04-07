/**
 * デバイスのインターフェース
 * 
 * デバイスの基本的な操作を定義します。
 * このインターフェースを実装することで、異なるデバイス間で共通の操作を提供します。
 */
export interface Device {
    /**
     * デバイスの電源をONにします
     * @throws {Error} デバイスが既にONの場合
     */
    enable(): void;

    /**
     * デバイスの電源をOFFにします
     * @throws {Error} デバイスが既にOFFの場合
     */
    disable(): void;

    /**
     * デバイスの電源状態を取得します
     * @returns デバイスがONの場合はtrue、OFFの場合はfalse
     */
    isEnabled(): boolean;

    /**
     * 現在の音量を取得します
     * @returns 音量（0-100）
     */
    getVolume(): number;

    /**
     * 音量を設定します
     * @param volume 設定する音量（0-100）
     * @throws {Error} 音量が数値でない場合
     */
    setVolume(volume: number): void;

    /**
     * 現在のチャンネルを取得します
     * @returns チャンネル番号（1-64）
     */
    getChannel(): number;

    /**
     * チャンネルを設定します
     * @param channel 設定するチャンネル番号（1-64）
     * @throws {Error} デバイスがOFFの場合、またはチャンネルが範囲外の場合
     */
    setChannel(channel: number): void;

    /**
     * 前のチャンネルに戻ります
     * @throws {Error} デバイスがOFFの場合、または前のチャンネルが存在しない場合
     */
    returnToPreviousChannel(): void;

    /**
     * チャンネルをお気に入りに追加します
     * @param channel お気に入りに追加するチャンネル番号（1-64）
     * @throws {Error} チャンネルが範囲外の場合
     */
    addToFavorites(channel: number): void;

    /**
     * チャンネルをお気に入りから削除します
     * @param channel お気に入りから削除するチャンネル番号
     */
    removeFromFavorites(channel: number): void;

    /**
     * お気に入りチャンネルの一覧を取得します
     * @returns お気に入りチャンネルの配列（昇順）
     */
    getFavorites(): number[];

    /**
     * 現在のチャンネルの周波数を取得します（ラジオのみ）
     * @returns 周波数（MHz）
     */
    getFrequency?(): number;

    /**
     * お気に入りチャンネルを順番に切り替えます
     * @throws {Error} デバイスがOFFの場合
     */
    cycleFavorites(): void;
} 
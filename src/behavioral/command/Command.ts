/**
 * コマンドインターフェース
 * 
 * すべてのコマンドが実装する必要のある基本インターフェースです。
 * コマンドの実行と取り消しの機能を定義します。
 */
export interface Command {
    /**
     * コマンドを実行します
     * @returns 実行結果のメッセージ
     */
    execute(): string;

    /**
     * コマンドを取り消します（可能な場合）
     * @returns 取り消し結果のメッセージ
     */
    undo(): string;

    /**
     * コマンドの説明を取得します
     */
    getDescription(): string;
}

/**
 * コマンドの種類
 */
export enum CommandType {
    LIGHT = 'LIGHT',
    THERMOSTAT = 'THERMOSTAT',
    SECURITY = 'SECURITY',
    AUDIO = 'AUDIO',
    SCENE = 'SCENE'
}

/**
 * コマンドの状態
 */
export interface CommandState {
    type: CommandType;
    timestamp: Date;
    executed: boolean;
    description: string;
} 
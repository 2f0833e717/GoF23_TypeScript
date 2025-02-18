/**
 * サポートチケットの優先度
 */
export enum Priority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT'
}

/**
 * サポートチケット
 */
export interface SupportTicket {
    id: string;
    priority: Priority;
    category: string;
    description: string;
    createdAt: Date;
}

/**
 * ハンドラーインターフェース
 * 
 * サポートチケットを処理するハンドラーの基本インターフェースを定義します。
 * Chain of Responsibilityパターンの中心となるインターフェースです。
 */
export interface Handler {
    /**
     * 次のハンドラーを設定します
     * @param handler 次のハンドラー
     * @returns このハンドラー（メソッドチェーン用）
     */
    setNext(handler: Handler): Handler;

    /**
     * 次のハンドラーを取得します
     */
    getNext(): Handler | null;

    /**
     * サポートチケットを処理します
     * @param ticket 処理するチケット
     * @returns 処理結果のメッセージ
     */
    handle(ticket: SupportTicket): string;

    /**
     * このハンドラーが処理できるチケットの優先度を取得します
     */
    getHandlePriority(): Priority;

    /**
     * このハンドラーが処理できるチケットのカテゴリを取得します
     */
    getHandleCategory(): string[];
} 
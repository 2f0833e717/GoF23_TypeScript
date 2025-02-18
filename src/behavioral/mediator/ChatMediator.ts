/**
 * チャットルームシステム
 * 
 * Mediatorパターンを使用して、ユーザー間のコミュニケーションを仲介します。
 * - ユーザー管理（参加、退出）
 * - メッセージの送受信
 * - 特定のユーザーへのプライベートメッセージ
 * - システムメッセージの配信
 */

/**
 * メッセージの種類
 */
export enum MessageType {
    CHAT = 'CHAT',           // 通常のチャットメッセージ
    PRIVATE = 'PRIVATE',     // プライベートメッセージ
    SYSTEM = 'SYSTEM',       // システムメッセージ
    STATUS = 'STATUS'        // ステータス更新
}

/**
 * メッセージインターフェース
 */
export interface Message {
    type: MessageType;
    from: string;
    to?: string;            // プライベートメッセージの場合の宛先
    content: string;
    timestamp: Date;
}

/**
 * チャットメディエーターインターフェース
 */
export interface ChatMediator {
    /**
     * ユーザーを追加します
     * @param user 追加するユーザー
     */
    addUser(user: ChatUser): void;

    /**
     * ユーザーを削除します
     * @param userId 削除するユーザーのID
     */
    removeUser(userId: string): void;

    /**
     * メッセージを送信します
     * @param message 送信するメッセージ
     */
    sendMessage(message: Message): void;

    /**
     * ユーザーのステータスが変更されたことを通知します
     * @param userId ステータスが変更されたユーザーのID
     * @param status 新しいステータス
     */
    notifyUserStatus(userId: string, status: string): void;
}

/**
 * チャットユーザー基底クラス
 */
export abstract class ChatUser {
    protected status: string = 'online';

    /**
     * コンストラクタ
     * @param id ユーザーID
     * @param name ユーザー名
     * @param mediator チャットメディエーター
     */
    constructor(
        private readonly id: string,
        private readonly name: string,
        protected mediator: ChatMediator
    ) { }

    /**
     * メッセージを送信します
     * @param content メッセージ内容
     * @param to 宛先ユーザーID（省略可）
     */
    send(content: string, to?: string): void {
        const message: Message = {
            type: to ? MessageType.PRIVATE : MessageType.CHAT,
            from: this.id,
            to,
            content,
            timestamp: new Date()
        };
        this.mediator.sendMessage(message);
    }

    /**
     * メッセージを受信します
     * @param message 受信したメッセージ
     */
    abstract receive(message: Message): void;

    /**
     * ステータスを設定します
     * @param status 新しいステータス
     */
    setStatus(status: string): void {
        this.status = status;
        this.mediator.notifyUserStatus(this.id, status);
    }

    /**
     * ユーザーIDを取得します
     */
    getId(): string {
        return this.id;
    }

    /**
     * ユーザー名を取得します
     */
    getName(): string {
        return this.name;
    }

    /**
     * ステータスを取得します
     */
    getStatus(): string {
        return this.status;
    }
} 
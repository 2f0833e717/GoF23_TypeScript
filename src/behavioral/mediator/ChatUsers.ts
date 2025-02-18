/**
 * チャットユーザーの具象クラス
 */
import { ChatUser, Message, MessageType } from './ChatMediator';

/**
 * 一般ユーザー
 */
export class RegularUser extends ChatUser {
    private messageHistory: Message[] = [];

    receive(message: Message): void {
        // プライベートメッセージの場合、送信者または宛先が自分の場合のみ受信
        if (message.type === MessageType.PRIVATE &&
            message.to !== this.getId() &&
            message.from !== this.getId()) {
            return;
        }

        // システムメッセージとステータス更新は常に受信
        if (message.type === MessageType.SYSTEM || message.type === MessageType.STATUS) {
            this.messageHistory.push(message);
            console.log(`${this.getName()} received system message: ${message.content}`);
            return;
        }

        // メッセージを履歴に追加
        this.messageHistory.push(message);

        // 自分が送信したメッセージは表示しない
        if (message.from === this.getId()) {
            return;
        }

        // その他のメッセージを受信
        const messageType = message.type === MessageType.PRIVATE ? 'private message' : 'message';
        console.log(`${this.getName()} received ${messageType}: ${message.content}`);
    }

    /**
     * メッセージ履歴を取得します
     */
    getMessageHistory(): Message[] {
        return [...this.messageHistory];
    }
}

/**
 * 管理者ユーザー
 */
export class AdminUser extends ChatUser {
    private messageHistory: Message[] = [];

    receive(message: Message): void {
        // 管理者はすべてのメッセージを受信
        this.messageHistory.push(message);

        // 自分が送信したメッセージは表示しない
        if (message.from === this.getId()) {
            return;
        }

        // システムメッセージとステータス更新
        if (message.type === MessageType.SYSTEM || message.type === MessageType.STATUS) {
            console.log(`Admin ${this.getName()} received system message: ${message.content}`);
            return;
        }

        // プライベートメッセージ
        if (message.type === MessageType.PRIVATE) {
            console.log(`Admin ${this.getName()} received private message: ${message.content}`);
            return;
        }

        // 通常のメッセージ
        console.log(`Admin ${this.getName()} received message: ${message.content}`);
    }

    /**
     * システムメッセージを送信します
     * @param content メッセージ内容
     */
    sendSystemMessage(content: string): void {
        const message: Message = {
            type: MessageType.SYSTEM,
            from: this.getId(),
            content,
            timestamp: new Date()
        };
        this.mediator.sendMessage(message);
    }

    /**
     * メッセージ履歴を取得します
     */
    getMessageHistory(): Message[] {
        return [...this.messageHistory];
    }

    /**
     * 特定のメッセージタイプの履歴を取得します
     * @param type メッセージタイプ
     */
    getMessageHistoryByType(type: MessageType): Message[] {
        return this.messageHistory.filter(message => message.type === type);
    }
} 
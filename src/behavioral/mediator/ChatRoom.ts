/**
 * チャットルーム
 * 
 * チャットメディエーターの具象クラスです。
 * ユーザー間のコミュニケーションを管理し、メッセージの配信を制御します。
 */
import { ChatMediator, ChatUser, Message, MessageType } from './ChatMediator';
import { AdminUser } from './ChatUsers';

export class ChatRoom implements ChatMediator {
    private users: Map<string, ChatUser> = new Map();
    private messageLog: Message[] = [];

    /**
     * ユーザーを追加します
     * @param user 追加するユーザー
     */
    addUser(user: ChatUser): void {
        if (this.users.has(user.getId())) {
            throw new Error(`ユーザー ${user.getId()} は既に存在します`);
        }

        this.users.set(user.getId(), user);
        this.broadcastSystemMessage(`${user.getName()} がチャットルームに参加しました`);
    }

    /**
     * ユーザーを削除します
     * @param userId 削除するユーザーのID
     */
    removeUser(userId: string): void {
        const user = this.users.get(userId);
        if (!user) {
            throw new Error(`ユーザー ${userId} が見つかりません`);
        }

        this.users.delete(userId);
        this.broadcastSystemMessage(`${user.getName()} がチャットルームを退出しました`);
    }

    /**
     * メッセージを送信します
     * @param message 送信するメッセージ
     */
    sendMessage(message: Message): void {
        // メッセージを記録
        this.messageLog.push(message);

        // 送信者の存在確認
        const sender = this.users.get(message.from);
        if (!sender) {
            throw new Error(`送信者 ${message.from} が見つかりません`);
        }

        // プライベートメッセージの場合
        if (message.type === MessageType.PRIVATE && message.to) {
            const receiver = this.users.get(message.to);
            if (!receiver) {
                throw new Error(`受信者 ${message.to} が見つかりません`);
            }
            // 送信者と受信者にメッセージを配信
            sender.receive(message);
            receiver.receive(message);
            // 管理者にも配信
            this.users.forEach(user => {
                if (user instanceof AdminUser) {
                    user.receive(message);
                }
            });
            return;
        }

        // システムメッセージまたは通常のメッセージの場合は全員に配信
        this.users.forEach(user => user.receive(message));
    }

    /**
     * ユーザーのステータスが変更されたことを通知します
     * @param userId ステータスが変更されたユーザーのID
     * @param status 新しいステータス
     */
    notifyUserStatus(userId: string, status: string): void {
        const user = this.users.get(userId);
        if (!user) {
            throw new Error(`ユーザー ${userId} が見つかりません`);
        }

        const statusMessage: Message = {
            type: MessageType.STATUS,
            from: userId,
            content: `${user.getName()} のステータスが "${status}" に変更されました`,
            timestamp: new Date()
        };

        this.messageLog.push(statusMessage);
        this.users.forEach(u => u.receive(statusMessage));
    }

    /**
     * システムメッセージを全員に配信します
     * @param content メッセージ内容
     */
    private broadcastSystemMessage(content: string): void {
        const message: Message = {
            type: MessageType.SYSTEM,
            from: 'SYSTEM',
            content,
            timestamp: new Date()
        };

        this.messageLog.push(message);
        this.users.forEach(user => user.receive(message));
    }

    /**
     * メッセージログを取得します
     */
    getMessageLog(): Message[] {
        return [...this.messageLog];
    }

    /**
     * 特定のメッセージタイプのログを取得します
     * @param type メッセージタイプ
     */
    getMessageLogByType(type: MessageType): Message[] {
        return this.messageLog.filter(message => message.type === type);
    }

    /**
     * 特定のユーザーのメッセージログを取得します
     * @param userId ユーザーID
     */
    getUserMessageLog(userId: string): Message[] {
        return this.messageLog.filter(message =>
            message.from === userId ||
            message.to === userId
        );
    }

    /**
     * 現在のユーザー一覧を取得します
     */
    getUsers(): Map<string, ChatUser> {
        return new Map(this.users);
    }
} 
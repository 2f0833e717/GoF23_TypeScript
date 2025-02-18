/**
 * チャットルームシステムのテスト
 */
import { ChatRoom } from '../../../src/behavioral/mediator/ChatRoom';
import { RegularUser, AdminUser } from '../../../src/behavioral/mediator/ChatUsers';
import { MessageType } from '../../../src/behavioral/mediator/ChatMediator';

describe('Mediator Pattern - Chat Room', () => {
    let chatRoom: ChatRoom;
    let user1: RegularUser;
    let user2: RegularUser;
    let admin: AdminUser;

    beforeEach(() => {
        chatRoom = new ChatRoom();
        user1 = new RegularUser('user1', '田中太郎', chatRoom);
        user2 = new RegularUser('user2', '山田花子', chatRoom);
        admin = new AdminUser('admin', '管理者', chatRoom);
    });

    describe('User Management', () => {
        test('should add users to chat room', () => {
            chatRoom.addUser(user1);
            chatRoom.addUser(user2);
            chatRoom.addUser(admin);

            const users = chatRoom.getUsers();
            expect(users.size).toBe(3);
            expect(users.get('user1')).toBe(user1);
            expect(users.get('user2')).toBe(user2);
            expect(users.get('admin')).toBe(admin);
        });

        test('should not add duplicate users', () => {
            chatRoom.addUser(user1);
            expect(() => chatRoom.addUser(user1)).toThrow('既に存在します');
        });

        test('should remove users from chat room', () => {
            chatRoom.addUser(user1);
            chatRoom.addUser(user2);

            chatRoom.removeUser('user1');
            const users = chatRoom.getUsers();
            expect(users.size).toBe(1);
            expect(users.has('user1')).toBe(false);
            expect(users.get('user2')).toBe(user2);
        });

        test('should throw error when removing non-existent user', () => {
            expect(() => chatRoom.removeUser('unknown')).toThrow('見つかりません');
        });
    });

    describe('Message Handling', () => {
        beforeEach(() => {
            chatRoom.addUser(user1);
            chatRoom.addUser(user2);
            chatRoom.addUser(admin);
        });

        test('should broadcast chat messages to all users', () => {
            user1.send('こんにちは、皆さん！');

            const messageLog = chatRoom.getMessageLog();
            expect(messageLog).toHaveLength(4); // 参加メッセージ3つ + チャットメッセージ1つ

            const chatMessages = chatRoom.getMessageLogByType(MessageType.CHAT);
            expect(chatMessages).toHaveLength(1);
            expect(chatMessages[0].content).toBe('こんにちは、皆さん！');
            expect(chatMessages[0].from).toBe('user1');
        });

        test('should handle private messages', () => {
            user1.send('プライベートメッセージです', 'user2');

            const user1Messages = user1.getMessageHistory();
            const user2Messages = user2.getMessageHistory();
            const adminMessages = admin.getMessageHistory();

            // user1（送信者）とuser2（受信者）のみがメッセージを受信
            expect(user1Messages.some(m => m.type === MessageType.PRIVATE)).toBe(true);
            expect(user2Messages.some(m => m.type === MessageType.PRIVATE)).toBe(true);

            // 管理者は全てのメッセージを受信
            expect(adminMessages.some(m => m.type === MessageType.PRIVATE)).toBe(true);
        });

        test('should handle system messages from admin', () => {
            admin.sendSystemMessage('システムメンテナンスを開始します');

            const systemMessages = chatRoom.getMessageLogByType(MessageType.SYSTEM);
            expect(systemMessages.some(m =>
                m.content === 'システムメンテナンスを開始します' &&
                m.from === 'admin'
            )).toBe(true);
        });

        test('should notify status changes', () => {
            user1.setStatus('away');

            const statusMessages = chatRoom.getMessageLogByType(MessageType.STATUS);
            expect(statusMessages.some(m =>
                m.content.includes('away') &&
                m.from === 'user1'
            )).toBe(true);
        });
    });

    describe('Message Logging', () => {
        beforeEach(() => {
            chatRoom.addUser(user1);
            chatRoom.addUser(user2);
            chatRoom.addUser(admin);
        });

        test('should maintain complete message history', () => {
            user1.send('メッセージ1');
            user2.send('メッセージ2');
            admin.sendSystemMessage('システムメッセージ');
            user1.setStatus('busy');

            const log = chatRoom.getMessageLog();
            expect(log.length).toBeGreaterThan(6); // 参加メッセージ3つ + 通常メッセージ2つ + システムメッセージ1つ + ステータス1つ
        });

        test('should filter messages by type', () => {
            user1.send('通常メッセージ');
            user1.send('プライベート', 'user2');
            admin.sendSystemMessage('システム通知');

            expect(chatRoom.getMessageLogByType(MessageType.CHAT)).toHaveLength(1);
            expect(chatRoom.getMessageLogByType(MessageType.PRIVATE)).toHaveLength(1);
            expect(chatRoom.getMessageLogByType(MessageType.SYSTEM)).toHaveLength(4); // 参加メッセージ3つ + システム通知1つ
        });

        test('should filter messages by user', () => {
            user1.send('メッセージ1');
            user2.send('メッセージ2');
            user1.send('プライベート', 'user2');

            const user1Log = chatRoom.getUserMessageLog('user1');
            expect(user1Log.some(m => m.content === 'メッセージ1')).toBe(true);
            expect(user1Log.some(m => m.content === 'プライベート')).toBe(true);
            expect(user1Log.some(m => m.content === 'メッセージ2')).toBe(false);
        });
    });
}); 
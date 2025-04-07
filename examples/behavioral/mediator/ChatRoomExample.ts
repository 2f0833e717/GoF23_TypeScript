/**
 * チャットルームシステム - Mediator パターン実装例
 * 
 * このサンプルは、Mediatorパターンを使用したチャットルームシステムの実装を示します。
 * チャットルームが中央のメディエーターとして機能し、異なるタイプのユーザー間の
 * コミュニケーションを仲介します。
 */

import { ChatRoom } from '../../src/behavioral/mediator/ChatRoom';
import { RegularUser, AdminUser } from '../../src/behavioral/mediator/ChatUsers';

export class ChatRoomExample {
    /**
     * チャットルームシステムの実行例
     */
    static run(): void {
        console.log('===== チャットルームシステム - Mediator パターン実装例 =====');
        
        // チャットルーム（メディエーター）を作成
        const chatRoom = new ChatRoom();
        
        // ユーザーを作成
        const alice = new RegularUser('user1', 'Alice', chatRoom);
        const bob = new RegularUser('user2', 'Bob', chatRoom);
        const charlie = new RegularUser('user3', 'Charlie', chatRoom);
        const admin = new AdminUser('admin1', 'Admin', chatRoom);
        
        // ユーザーをチャットルームに追加
        chatRoom.addUser(alice);
        chatRoom.addUser(bob);
        chatRoom.addUser(charlie);
        chatRoom.addUser(admin);
        
        console.log('\n--- 通常メッセージの送信 ---');
        alice.send('こんにちは、みなさん！');
        bob.send('やあ、Alice！');
        
        console.log('\n--- プライベートメッセージの送信 ---');
        alice.send('こっそり話があるんだけど...', 'user2'); // Bobにプライベートメッセージ
        
        console.log('\n--- 管理者によるシステムメッセージの送信 ---');
        admin.sendSystemMessage('サーバーメンテナンスが30分後に開始されます');
        
        console.log('\n--- ステータス変更の通知 ---');
        bob.setStatus('away');
        alice.setStatus('busy');
        
        console.log('\n--- Charlie の退出 ---');
        chatRoom.removeUser('user3');
        
        console.log('\n--- メッセージログの取得 ---');
        console.log('総メッセージ数:', chatRoom.getMessageLog().length);
    }
}

// 実行例
if (require.main === module) {
    ChatRoomExample.run();
} 
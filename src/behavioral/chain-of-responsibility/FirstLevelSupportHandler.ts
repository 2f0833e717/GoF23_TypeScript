/**
 * 一次サポート担当者
 * 
 * 基本的な問い合わせや一般的な質問を処理するハンドラーです。
 * 優先度が低いチケットを主に担当します。
 */
import { AbstractHandler } from './AbstractHandler';
import { Priority, SupportTicket } from './Handler';

export class FirstLevelSupportHandler extends AbstractHandler {
    private static readonly SUPPORTED_CATEGORIES = [
        'general',
        'account',
        'basic'
    ];

    protected processTicket(ticket: SupportTicket): string {
        console.log(`FirstLevelSupport: チケット ${ticket.id} を処理します`);
        console.log(`- 優先度: ${ticket.priority}`);
        console.log(`- カテゴリ: ${ticket.category}`);
        console.log(`- 内容: ${ticket.description}`);

        return `FirstLevelSupport: チケット ${ticket.id} を処理しました - 基本的なサポート対応を完了`;
    }

    getHandlePriority(): Priority {
        return Priority.LOW;
    }

    getHandleCategory(): string[] {
        return FirstLevelSupportHandler.SUPPORTED_CATEGORIES;
    }
} 
/**
 * 二次サポート担当者
 * 
 * 技術的な問題や複雑な質問を処理するハンドラーです。
 * 優先度が中程度のチケットを主に担当します。
 */
import { AbstractHandler } from './AbstractHandler';
import { Priority, SupportTicket } from './Handler';

export class SecondLevelSupportHandler extends AbstractHandler {
    private static readonly SUPPORTED_CATEGORIES = [
        'technical',
        'system',
        'network',
        'general',
        'account'
    ];

    protected processTicket(ticket: SupportTicket): string {
        console.log(`SecondLevelSupport: チケット ${ticket.id} を処理します`);
        console.log(`- 優先度: ${ticket.priority}`);
        console.log(`- カテゴリ: ${ticket.category}`);
        console.log(`- 内容: ${ticket.description}`);

        return `SecondLevelSupport: チケット ${ticket.id} を処理しました - 技術的な問題の解決を完了`;
    }

    getHandlePriority(): Priority {
        return Priority.MEDIUM;
    }

    getHandleCategory(): string[] {
        return SecondLevelSupportHandler.SUPPORTED_CATEGORIES;
    }
} 
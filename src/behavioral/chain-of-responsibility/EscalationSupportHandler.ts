/**
 * エスカレーション担当者
 * 
 * 緊急性の高い問題や重大な障害を処理するハンドラーです。
 * 優先度が高いチケットを主に担当します。
 */
import { AbstractHandler } from './AbstractHandler';
import { Priority, SupportTicket } from './Handler';

export class EscalationSupportHandler extends AbstractHandler {
    private static readonly SUPPORTED_CATEGORIES = [
        'emergency',
        'security',
        'system',
        'technical',
        'network',
        'general',
        'account'
    ];

    protected processTicket(ticket: SupportTicket): string {
        console.log(`EscalationSupport: チケット ${ticket.id} を処理します`);
        console.log(`- 優先度: ${ticket.priority}`);
        console.log(`- カテゴリ: ${ticket.category}`);
        console.log(`- 内容: ${ticket.description}`);

        if (ticket.priority === Priority.URGENT) {
            return this.handleUrgentCase(ticket);
        }

        return `EscalationSupport: チケット ${ticket.id} を処理しました - 重要度の高い問題の解決を完了`;
    }

    /**
     * 緊急案件を処理します
     * @param ticket 処理するチケット
     * @returns 処理結果のメッセージ
     */
    private handleUrgentCase(ticket: SupportTicket): string {
        console.log('緊急対応チームを編成します');
        console.log('関係部署に通知を送信します');
        console.log('経営陣に状況を報告します');

        return `EscalationSupport: 緊急チケット ${ticket.id} の対応を完了 - 緊急対応プロトコルを実行`;
    }

    getHandlePriority(): Priority {
        return Priority.URGENT;
    }

    getHandleCategory(): string[] {
        return EscalationSupportHandler.SUPPORTED_CATEGORIES;
    }
} 
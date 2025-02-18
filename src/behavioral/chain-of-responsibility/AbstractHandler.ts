/**
 * 抽象ハンドラー
 * 
 * ハンドラーの基本的な機能を実装する抽象クラスです。
 * 次のハンドラーへの参照を管理し、基本的な処理フローを提供します。
 */
import { Handler, SupportTicket, Priority } from './Handler';

export abstract class AbstractHandler implements Handler {
    protected nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    getNext(): Handler | null {
        return this.nextHandler;
    }

    /**
     * チケットを処理します
     * @param ticket 処理するチケット
     * @returns 処理結果のメッセージ
     */
    handle(ticket: SupportTicket): string {
        // このハンドラーで処理できるか確認
        if (this.canHandle(ticket)) {
            return this.processTicket(ticket);
        }

        // 次のハンドラーがあれば転送
        if (this.nextHandler) {
            console.log(`${this.constructor.name}: チケット ${ticket.id} を次のハンドラーに転送します`);
            return this.nextHandler.handle(ticket);
        }

        // 処理できるハンドラーがない
        return `${this.constructor.name}: チケット ${ticket.id} を処理できるハンドラーが見つかりませんでした`;
    }

    /**
     * このハンドラーがチケットを処理できるか確認します
     * @param ticket 確認するチケット
     * @returns 処理可能な場合はtrue
     */
    protected canHandle(ticket: SupportTicket): boolean {
        return this.getHandlePriority() >= ticket.priority &&
            this.getHandleCategory().includes(ticket.category);
    }

    /**
     * チケットを実際に処理します
     * サブクラスで実装する必要があります
     * @param ticket 処理するチケット
     * @returns 処理結果のメッセージ
     */
    protected abstract processTicket(ticket: SupportTicket): string;

    abstract getHandlePriority(): Priority;
    abstract getHandleCategory(): string[];
} 
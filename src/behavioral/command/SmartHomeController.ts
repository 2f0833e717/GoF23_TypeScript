/**
 * スマートホームコントローラー
 * 
 * スマートホームデバイスを制御するコマンドを実行・管理するコントローラーです。
 * コマンドの実行履歴を保持し、実行の取り消し（undo）機能を提供します。
 */
import { Command } from './Command';

export class SmartHomeController {
    private commandHistory: Command[] = [];
    private undoHistory: Command[] = [];

    /**
     * コマンドを実行します
     * @param command 実行するコマンド
     * @returns 実行結果のメッセージ
     */
    executeCommand(command: Command): string {
        const result = command.execute();
        this.commandHistory.push(command);
        return result;
    }

    /**
     * 最後に実行したコマンドを取り消します
     * @returns 取り消し結果のメッセージ
     */
    undoLastCommand(): string {
        const command = this.commandHistory.pop();
        if (!command) {
            return 'コマンド履歴が空です';
        }

        const result = command.undo();
        this.undoHistory.push(command);
        return result;
    }

    /**
     * 取り消したコマンドをやり直します
     * @returns やり直し結果のメッセージ
     */
    redoLastCommand(): string {
        const command = this.undoHistory.pop();
        if (!command) {
            return '取り消し履歴が空です';
        }

        const result = command.execute();
        this.commandHistory.push(command);
        return result;
    }

    /**
     * コマンド履歴を取得します
     * @returns コマンド履歴の配列
     */
    getCommandHistory(): Command[] {
        return [...this.commandHistory];
    }

    /**
     * 取り消し履歴を取得します
     * @returns 取り消し履歴の配列
     */
    getUndoHistory(): Command[] {
        return [...this.undoHistory];
    }

    /**
     * コマンド履歴をクリアします
     */
    clearHistory(): void {
        this.commandHistory = [];
        this.undoHistory = [];
    }
} 
/**
 * エディタの履歴管理システム
 * 
 * テキストエディタの状態履歴を管理し、Undo/Redo機能を提供します。
 * - 状態の保存
 * - 状態の復元
 * - Undo/Redo操作
 * - 履歴の分岐管理
 */

import { EditorMemento } from './EditorMemento';

/**
 * エディタの履歴を管理するクラス
 */
export class EditorHistory {
    private history: EditorMemento[] = [];
    private currentIndex: number = -1;

    /**
     * 現在の状態を保存します
     */
    save(memento: EditorMemento): void {
        // 現在の位置より後の履歴を削除
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }
        this.history.push(memento);
        this.currentIndex = this.history.length - 1;
    }

    /**
     * 前の状態に戻ります
     */
    undo(): EditorMemento | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    /**
     * 次の状態に進みます
     */
    redo(): EditorMemento | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }

    /**
     * 指定された位置の状態を取得します
     */
    getState(index: number): EditorMemento | null {
        if (index >= 0 && index < this.history.length) {
            this.currentIndex = index;
            return this.history[index];
        }
        return null;
    }

    /**
     * 履歴をクリアします
     */
    clear(): void {
        this.history = [];
        this.currentIndex = -1;
    }

    /**
     * 履歴のサイズを取得します
     */
    getHistorySize(): number {
        return this.history.length;
    }

    /**
     * 現在の履歴インデックスを取得します
     */
    getCurrentIndex(): number {
        return this.currentIndex;
    }
} 
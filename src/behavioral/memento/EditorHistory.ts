/**
 * エディタの履歴を管理するクラス
 * 
 * 複数の状態を保存し、元に戻す（Undo）や再実行（Redo）機能を提供します。
 */

import { EditorMemento } from './TextEditor';

export class EditorHistory {
    private history: EditorMemento[] = [];
    private currentIndex: number = -1;

    /**
     * 新しい状態を保存します
     * @param memento 保存する状態
     */
    push(memento: EditorMemento): void {
        // 現在位置より後の履歴を削除
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }

        this.history.push(memento);
        this.currentIndex++;
    }

    /**
     * 一つ前の状態を取得します（Undo）
     */
    undo(): EditorMemento | null {
        if (this.currentIndex <= 0) {
            return null;
        }
        this.currentIndex--;
        return this.history[this.currentIndex];
    }

    /**
     * 一つ後の状態を取得します（Redo）
     */
    redo(): EditorMemento | null {
        if (this.currentIndex >= this.history.length - 1) {
            return null;
        }
        this.currentIndex++;
        return this.history[this.currentIndex];
    }

    /**
     * 現在の履歴の位置を取得します
     */
    getCurrentIndex(): number {
        return this.currentIndex;
    }

    /**
     * 履歴の総数を取得します
     */
    getHistorySize(): number {
        return this.history.length;
    }

    /**
     * 特定の時点の状態を取得します
     * @param index インデックス
     */
    getStateAt(index: number): EditorMemento | null {
        if (index < 0 || index >= this.history.length) {
            return null;
        }
        return this.history[index];
    }

    /**
     * 履歴をクリアします
     */
    clear(): void {
        this.history = [];
        this.currentIndex = -1;
    }
} 
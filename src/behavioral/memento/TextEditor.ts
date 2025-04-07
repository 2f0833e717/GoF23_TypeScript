/**
 * テキストエディタシステム
 * 
 * Mementoパターンを使用して、テキストエディタの状態を保存・復元する機能を提供します。
 * - テキストの編集と保存
 * - カーソル位置の管理
 * - テキスト選択機能
 * - 状態の保存と復元
 * - Undo/Redo機能
 */

import { EditorMemento } from './EditorMemento';
import { EditorHistory } from './EditorHistory';
import { EditorState } from './EditorState';

/**
 * テキストエディタクラス
 */
export class TextEditor {
    private text: string = '';
    private cursorPosition: number = 0;
    private selectionStart: number = -1;
    private selectionEnd: number = -1;
    private history: EditorHistory;
    private initialState: boolean = true;

    constructor() {
        this.history = new EditorHistory();
        this.initialState = true;  // 初期状態フラグを設定
        this.saveState();  // 初期状態を保存
        this.initialState = false;  // フラグをリセット
    }

    /**
     * テキストを挿入します
     */
    insertText(text: string): void {
        // 選択範囲がある場合は、その部分を削除
        if (this.hasSelection()) {
            this.deleteSelectedText();
        }

        // テキストを挿入
        const before = this.text.substring(0, this.cursorPosition);
        const after = this.text.substring(this.cursorPosition);
        this.text = before + text + after;
        this.cursorPosition += text.length;

        // 状態を保存
        this.saveState();
    }

    /**
     * テキストを削除します
     * @param length 削除する文字数。正の値の場合はカーソルの右側の文字を、負の値の場合はカーソルの左側の文字を削除
     */
    deleteText(length: number = 1): void {
        if (this.hasSelection()) {
            this.deleteSelectedText();
            return;
        }

        if (length === 0) return;

        let textChanged = false;
        const currentText = this.text;

        if (length > 0) {
            // カーソルの右側の文字を削除
            if (this.cursorPosition < this.text.length) {
                const deleteLength = Math.min(length, this.text.length - this.cursorPosition);
                const startPos = this.cursorPosition;
                const endPos = this.cursorPosition + deleteLength;
                this.text = currentText.substring(0, startPos) +
                    currentText.substring(endPos);
                textChanged = true;
                console.log(`テキストを削除: 開始位置=${startPos}, 終了位置=${endPos}, 結果="${this.text}"`);
            }
        } else {
            // カーソルの左側の文字を削除（負の値の場合）
            const deleteLength = Math.min(Math.abs(length), this.cursorPosition);
            if (deleteLength > 0) {
                const startPos = this.cursorPosition - deleteLength;
                this.text = currentText.substring(0, startPos) +
                    currentText.substring(this.cursorPosition);
                this.cursorPosition = startPos;
                textChanged = true;
                console.log(`テキストを削除: 開始位置=${startPos}, 終了位置=${this.cursorPosition}, 結果="${this.text}"`);
            }
        }

        if (textChanged) {
            this.saveState();
        }
    }

    /**
     * カーソルを移動します
     * @param position 移動先の位置（0から文字列の長さまでの値）
     */
    moveCursor(position: number): void {
        const newPosition = Math.max(0, Math.min(position, this.text.length));
        if (this.cursorPosition !== newPosition) {
            this.cursorPosition = newPosition;
            this.clearSelection();
            console.log(`カーソル移動: 位置=${this.cursorPosition}, テキスト="${this.text}"`);
        }
    }

    /**
     * テキストを選択します
     */
    select(start: number, end: number): void {
        if (start < 0) start = 0;
        if (end > this.text.length) end = this.text.length;
        if (start > end) [start, end] = [end, start];

        this.selectionStart = start;
        this.selectionEnd = end;
        this.cursorPosition = end;
    }

    /**
     * 選択範囲をクリアします
     */
    clearSelection(): void {
        this.selectionStart = -1;
        this.selectionEnd = -1;
    }

    /**
     * 選択範囲があるかどうかを確認します
     */
    hasSelection(): boolean {
        return this.selectionStart !== -1 && this.selectionEnd !== -1;
    }

    /**
     * 選択されたテキストを削除します
     */
    private deleteSelectedText(): void {
        if (!this.hasSelection()) return;

        const start = Math.min(this.selectionStart, this.selectionEnd);
        const end = Math.max(this.selectionStart, this.selectionEnd);

        const before = this.text.substring(0, start);
        const after = this.text.substring(end);
        this.text = before + after;
        this.cursorPosition = start;
        this.clearSelection();
        this.saveState();
    }

    /**
     * 選択範囲を取得します
     */
    getSelection(): { start: number; end: number } {
        return {
            start: this.hasSelection() ? this.selectionStart : this.cursorPosition,
            end: this.hasSelection() ? this.selectionEnd : this.cursorPosition
        };
    }

    /**
     * 現在の状態を保存します
     */
    save(): EditorMemento {
        return this.saveState();
    }

    /**
     * 前の状態に戻ります
     */
    undo(): EditorMemento | null {
        const memento = this.history.undo();
        if (memento) {
            this.restoreState(memento);
            return memento;
        }
        return null;
    }

    /**
     * 次の状態に進みます
     */
    redo(): EditorMemento | null {
        const memento = this.history.redo();
        if (memento) {
            this.restoreState(memento);
            return memento;
        }
        return null;
    }

    /**
     * 状態を復元します
     */
    restore(memento: EditorMemento): void {
        if (!memento) return;
        this.restoreState(memento);
    }

    /**
     * 指定された位置の状態に移動します
     */
    goTo(index: number): void {
        const state = this.history.getState(index);
        if (state) {
            this.restoreState(state);
        }
    }

    /**
     * 現在のテキストを取得します
     */
    getText(): string {
        return this.text;
    }

    /**
     * カーソル位置を取得します
     */
    getCursorPosition(): number {
        return this.cursorPosition;
    }

    /**
     * 選択範囲の開始位置を取得します
     */
    getSelectionStart(): number {
        return this.selectionStart;
    }

    /**
     * 選択範囲の終了位置を取得します
     */
    getSelectionEnd(): number {
        return this.selectionEnd;
    }

    /**
     * 現在の状態を保存します（内部用）
     */
    private saveState(): EditorMemento {
        const state: EditorState = {
            text: this.text,
            cursorPosition: this.cursorPosition,
            selectionStart: this.selectionStart,
            selectionEnd: this.selectionEnd
        };
        const memento = new EditorMemento(state);
        this.history.save(memento);
        return memento;
    }

    /**
     * 状態を復元します
     */
    private restoreState(memento: EditorMemento): void {
        const state = memento.getState();
        this.text = state.text;
        this.cursorPosition = state.cursorPosition;
        this.selectionStart = state.selectionStart;
        this.selectionEnd = state.selectionEnd;
    }
} 
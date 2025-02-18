/**
 * テキストエディタ
 * 
 * テキストの編集、保存、復元機能を提供します。
 * Mementoパターンを使用して、エディタの状態を管理します。
 */

/**
 * エディタの状態を表すインターフェース
 */
export interface EditorState {
    content: string;
    cursorPosition: number;
    selectionStart: number;
    selectionEnd: number;
    timestamp: Date;
}

/**
 * エディタの状態を保存するメメント
 */
export class EditorMemento {
    constructor(private readonly state: EditorState) { }

    /**
     * 保存された状態を取得します
     */
    getState(): EditorState {
        return { ...this.state };
    }

    /**
     * 保存された時刻を取得します
     */
    getTimestamp(): Date {
        return new Date(this.state.timestamp.getTime());
    }
}

/**
 * テキストエディタクラス
 */
export class TextEditor {
    private content: string = '';
    private cursorPosition: number = 0;
    private selectionStart: number = 0;
    private selectionEnd: number = 0;

    /**
     * テキストを設定します
     * @param text 設定するテキスト
     */
    setText(text: string): void {
        this.content = text;
        this.cursorPosition = text.length;
        this.selectionStart = this.cursorPosition;
        this.selectionEnd = this.cursorPosition;
    }

    /**
     * カーソル位置を設定します
     * @param position カーソル位置
     */
    setCursor(position: number): void {
        if (position < 0 || position > this.content.length) {
            throw new Error('無効なカーソル位置です');
        }
        this.cursorPosition = position;
        this.selectionStart = position;
        this.selectionEnd = position;
    }

    /**
     * テキストを選択します
     * @param start 選択開始位置
     * @param end 選択終了位置
     */
    setSelection(start: number, end: number): void {
        if (start < 0 || end > this.content.length || start > end) {
            throw new Error('無効な選択範囲です');
        }
        this.selectionStart = start;
        this.selectionEnd = end;
        this.cursorPosition = end;
    }

    /**
     * 現在の状態を保存します
     */
    save(): EditorMemento {
        const state: EditorState = {
            content: this.content,
            cursorPosition: this.cursorPosition,
            selectionStart: this.selectionStart,
            selectionEnd: this.selectionEnd,
            timestamp: new Date()
        };
        return new EditorMemento(state);
    }

    /**
     * 状態を復元します
     * @param memento 復元する状態
     */
    restore(memento: EditorMemento): void {
        const state = memento.getState();
        this.content = state.content;
        this.cursorPosition = state.cursorPosition;
        this.selectionStart = state.selectionStart;
        this.selectionEnd = state.selectionEnd;
    }

    /**
     * 現在のテキストを取得します
     */
    getText(): string {
        return this.content;
    }

    /**
     * 現在のカーソル位置を取得します
     */
    getCursorPosition(): number {
        return this.cursorPosition;
    }

    /**
     * 現在の選択範囲を取得します
     */
    getSelection(): { start: number; end: number } {
        return {
            start: this.selectionStart,
            end: this.selectionEnd
        };
    }
} 
/**
 * エディタの状態を保存するメメントクラス
 * 
 * テキストエディタの特定時点の状態を保持します。
 * - テキスト内容
 * - カーソル位置
 * - 選択範囲
 */

import { EditorState } from './EditorState';

/**
 * エディタの状態を保存するメメントクラス
 */
export class EditorMemento {
    private state: EditorState;
    private timestamp: Date;

    constructor(state: EditorState) {
        this.state = { ...state };
        this.timestamp = new Date();
    }

    /**
     * 保存された状態を取得します
     */
    getState(): EditorState {
        return { ...this.state };
    }

    /**
     * 状態が保存された時刻を取得します
     */
    getTimestamp(): Date {
        return new Date(this.timestamp.getTime());
    }

    getText(): string {
        return this.state.text;
    }

    getCursorPosition(): number {
        return this.state.cursorPosition;
    }

    getSelectionStart(): number {
        return this.state.selectionStart;
    }

    getSelectionEnd(): number {
        return this.state.selectionEnd;
    }
} 
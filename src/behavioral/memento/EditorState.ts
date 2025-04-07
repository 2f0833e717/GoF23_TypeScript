/**
 * テキストエディタの状態を表すインターフェース
 */
export interface EditorState {
    text: string;
    cursorPosition: number;
    selectionStart: number;
    selectionEnd: number;
} 
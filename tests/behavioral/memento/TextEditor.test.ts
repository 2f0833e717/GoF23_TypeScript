/**
 * テキストエディタシステムのテスト
 */
import { TextEditor } from '../../../src/behavioral/memento/TextEditor';

describe('Memento Pattern - Text Editor', () => {
    let editor: TextEditor;

    beforeEach(() => {
        editor = new TextEditor();
    });

    describe('Basic Operations', () => {
        test('should handle text insertion and cursor movement', () => {
            editor.insertText('Hello');
            expect(editor.getText()).toBe('Hello');
            expect(editor.getCursorPosition()).toBe(5);

            editor.moveCursor(2);
            expect(editor.getCursorPosition()).toBe(2);

            editor.insertText(' World');
            expect(editor.getText()).toBe('He Worldllo');
            expect(editor.getCursorPosition()).toBe(8);
        });

        test('should handle text deletion', () => {
            editor.insertText('HelloWorld');
            editor.moveCursor(5);
            editor.deleteText(1);
            expect(editor.getText()).toBe('Helloorld');

            editor.deleteText(-1);
            expect(editor.getText()).toBe('Hellorld');
        });

        test('should handle text selection', () => {
            editor.insertText('Hello World');
            editor.select(0, 5);
            expect(editor.hasSelection()).toBe(true);
            expect(editor.getSelectionStart()).toBe(0);
            expect(editor.getSelectionEnd()).toBe(5);

            editor.insertText('Hi');
            expect(editor.getText()).toBe('Hi World');
            expect(editor.hasSelection()).toBe(false);
        });
    });

    describe('State Management', () => {
        test('should save and restore editor state', () => {
            editor.insertText('Hello');
            const memento1 = editor.save();

            editor.insertText(' World');
            const memento2 = editor.save();

            editor.insertText('!');
            const memento3 = editor.save();

            editor.restore(memento1);
            expect(editor.getText()).toBe('Hello');

            editor.restore(memento2);
            expect(editor.getText()).toBe('Hello World');

            editor.restore(memento3);
            expect(editor.getText()).toBe('Hello World!');
        });

        test('should handle undo/redo operations', () => {
            editor.insertText('Hello');
            editor.insertText(' World');
            editor.insertText('!');

            editor.undo();
            expect(editor.getText()).toBe('Hello World');

            editor.undo();
            expect(editor.getText()).toBe('Hello');

            editor.redo();
            expect(editor.getText()).toBe('Hello World');

            editor.redo();
            expect(editor.getText()).toBe('Hello World!');
        });

        test('should handle state navigation', () => {
            editor.insertText('Hello');
            editor.insertText(' World');
            editor.insertText('!');

            editor.goTo(1);
            expect(editor.getText()).toBe('Hello');

            editor.goTo(2);
            expect(editor.getText()).toBe('Hello World');

            editor.goTo(3);
            expect(editor.getText()).toBe('Hello World!');
        });
    });

    describe('Edge Cases', () => {
        test('should handle invalid restore operation', () => {
            editor.insertText('Hello');
            editor.restore(null as any);
            expect(editor.getText()).toBe('Hello');
        });

        test('should handle invalid goTo operation', () => {
            editor.insertText('Hello');
            editor.goTo(-1);
            expect(editor.getText()).toBe('Hello');
            editor.goTo(999);
            expect(editor.getText()).toBe('Hello');
        });

        test('should handle initial state', () => {
            expect(editor.getText()).toBe('');
            expect(editor.getCursorPosition()).toBe(0);
            expect(editor.getSelectionStart()).toBe(-1);
            expect(editor.getSelectionEnd()).toBe(-1);
        });

        test('should handle selection edge cases', () => {
            editor.insertText('Hello World');
            editor.select(-5, 15); // 範囲外の選択
            expect(editor.getSelectionStart()).toBe(0);
            expect(editor.getSelectionEnd()).toBe(11);

            editor.select(8, 3); // 逆順の選択
            expect(editor.getSelectionStart()).toBe(3);
            expect(editor.getSelectionEnd()).toBe(8);
        });
    });

    describe('Error Handling', () => {
        test('should handle deletion at text boundaries', () => {
            editor.insertText('Hello');
            editor.moveCursor(0);
            editor.deleteText(-1); // 先頭での後方削除
            expect(editor.getText()).toBe('Hello');

            editor.moveCursor(5);
            editor.deleteText(1); // 末尾での前方削除
            expect(editor.getText()).toBe('Hello');
        });

        test('should handle zero-length deletion', () => {
            editor.insertText('Hello');
            editor.moveCursor(2);
            editor.deleteText(0);
            expect(editor.getText()).toBe('Hello');
            expect(editor.getCursorPosition()).toBe(2);
        });

        test('should handle selection operations at boundaries', () => {
            editor.select(0, 0);
            expect(editor.hasSelection()).toBe(true);
            expect(editor.getSelectionStart()).toBe(0);
            expect(editor.getSelectionEnd()).toBe(0);

            editor.clearSelection();
            expect(editor.hasSelection()).toBe(false);
        });

        test('should handle undo/redo at boundaries', () => {
            expect(editor.undo()).toBeNull(); // 初期状態でのundo
            expect(editor.redo()).toBeNull(); // 初期状態でのredo

            editor.insertText('Hello');
            expect(editor.getText()).toBe('Hello');

            editor.undo();
            expect(editor.getText()).toBe('');

            editor.redo();
            expect(editor.getText()).toBe('Hello');
            expect(editor.redo()).toBeNull(); // これ以上redoできない
        });
    });
}); 
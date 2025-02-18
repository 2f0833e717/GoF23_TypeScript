import { TextEditor, EditorMemento } from '../../../src/behavioral/memento/TextEditor';
import { EditorHistory } from '../../../src/behavioral/memento/EditorHistory';

describe('Memento Pattern - Text Editor Tests', () => {
    let editor: TextEditor;
    let history: EditorHistory;

    beforeEach(() => {
        editor = new TextEditor();
        history = new EditorHistory();
    });

    describe('TextEditor', () => {
        test('テキストの設定と取得', () => {
            editor.setText('Hello, World!');
            expect(editor.getText()).toBe('Hello, World!');
            expect(editor.getCursorPosition()).toBe(13);
        });

        test('カーソル位置の設定', () => {
            editor.setText('Hello');
            editor.setCursor(2);
            expect(editor.getCursorPosition()).toBe(2);
        });

        test('無効なカーソル位置でエラー', () => {
            editor.setText('Hello');
            expect(() => editor.setCursor(-1)).toThrow('無効なカーソル位置です');
            expect(() => editor.setCursor(6)).toThrow('無効なカーソル位置です');
        });

        test('テキスト選択', () => {
            editor.setText('Hello, World!');
            editor.setSelection(0, 5);
            const selection = editor.getSelection();
            expect(selection.start).toBe(0);
            expect(selection.end).toBe(5);
            expect(editor.getCursorPosition()).toBe(5);
        });

        test('無効な選択範囲でエラー', () => {
            editor.setText('Hello');
            expect(() => editor.setSelection(-1, 3)).toThrow('無効な選択範囲です');
            expect(() => editor.setSelection(3, 6)).toThrow('無効な選択範囲です');
            expect(() => editor.setSelection(4, 2)).toThrow('無効な選択範囲です');
        });
    });

    describe('EditorHistory', () => {
        test('状態の保存と復元', () => {
            editor.setText('First State');
            history.push(editor.save());

            editor.setText('Second State');
            history.push(editor.save());

            editor.setText('Third State');
            history.push(editor.save());

            expect(history.getHistorySize()).toBe(3);
            expect(history.getCurrentIndex()).toBe(2);
        });

        test('Undoの実行', () => {
            editor.setText('First State');
            history.push(editor.save());

            editor.setText('Second State');
            history.push(editor.save());

            const memento = history.undo();
            if (memento) {
                editor.restore(memento);
                expect(editor.getText()).toBe('First State');
            }
            expect(history.getCurrentIndex()).toBe(0);
        });

        test('履歴が空の場合のUndo', () => {
            expect(history.undo()).toBeNull();
            expect(history.getCurrentIndex()).toBe(-1);
        });

        test('最初の状態でのUndo', () => {
            editor.setText('First State');
            history.push(editor.save());
            expect(history.undo()).toBeNull();
        });

        test('Redoの実行', () => {
            editor.setText('First State');
            history.push(editor.save());

            editor.setText('Second State');
            history.push(editor.save());

            let memento = history.undo();
            if (memento) {
                editor.restore(memento);
            }

            memento = history.redo();
            if (memento) {
                editor.restore(memento);
                expect(editor.getText()).toBe('Second State');
            }
            expect(history.getCurrentIndex()).toBe(1);
        });

        test('履歴が空の場合のRedo', () => {
            expect(history.redo()).toBeNull();
            expect(history.getCurrentIndex()).toBe(-1);
        });

        test('最後の状態でのRedo', () => {
            editor.setText('State');
            history.push(editor.save());
            expect(history.redo()).toBeNull();
        });

        test('履歴の制限', () => {
            editor.setText('First');
            history.push(editor.save());

            editor.setText('Second');
            history.push(editor.save());

            editor.setText('Third');
            history.push(editor.save());

            // Undoを実行して新しい状態を追加
            history.undo();
            editor.setText('New State');
            history.push(editor.save());

            // Third以降の履歴が削除されていることを確認
            expect(history.getHistorySize()).toBe(3);
            expect(editor.getText()).toBe('New State');
        });

        test('特定の時点の状態の取得', () => {
            editor.setText('First');
            history.push(editor.save());

            editor.setText('Second');
            history.push(editor.save());

            // 有効なインデックスでの取得
            const state = history.getStateAt(0);
            expect(state).not.toBeNull();
            if (state) {
                editor.restore(state);
                expect(editor.getText()).toBe('First');
            }

            // 無効なインデックスでの取得
            expect(history.getStateAt(-1)).toBeNull();
            expect(history.getStateAt(2)).toBeNull();
        });

        test('履歴のクリア', () => {
            editor.setText('First');
            history.push(editor.save());

            editor.setText('Second');
            history.push(editor.save());

            history.clear();
            expect(history.getHistorySize()).toBe(0);
            expect(history.getCurrentIndex()).toBe(-1);
            expect(history.undo()).toBeNull();
            expect(history.redo()).toBeNull();
        });

        test('タイムスタンプの保持', () => {
            const now = new Date();
            editor.setText('Test');
            history.push(editor.save());

            const state = history.getStateAt(0);
            expect(state).not.toBeNull();
            if (state) {
                const timestamp = state.getTimestamp();
                expect(timestamp.getTime()).toBeGreaterThanOrEqual(now.getTime());
            }
        });
    });
}); 
/**
 * Mementoパターンの使用例
 * 
 * テキストエディタの状態管理と履歴機能を示します。
 * - テキストの編集
 * - カーソル位置の管理
 * - テキスト選択
 * - 状態の保存と復元
 * - Undo/Redo機能
 */

import { TextEditor } from '../../../src/behavioral/memento/TextEditor';
import { EditorHistory } from '../../../src/behavioral/memento/EditorHistory';

export function runMementoExample(): void {
    console.log('Mementoパターンの実行例:');
    console.log('--------------------------------');

    const editor = new TextEditor();
    const history = new EditorHistory();

    // 1. 基本的なテキスト編集
    console.log('1. 基本的なテキスト編集:');
    editor.setText('こんにちは、世界！');
    history.push(editor.save());
    console.log(`テキスト: ${editor.getText()}`);
    console.log(`カーソル位置: ${editor.getCursorPosition()}`);
    console.log();

    // 2. テキストの選択
    console.log('2. テキストの選択:');
    editor.setSelection(0, 5);
    history.push(editor.save());
    const selection = editor.getSelection();
    console.log(`選択範囲: ${selection.start} から ${selection.end}`);
    console.log(`選択されたテキスト: ${editor.getText().substring(selection.start, selection.end)}`);
    console.log();

    // 3. テキストの変更と履歴の保存
    console.log('3. テキストの変更と履歴の保存:');
    editor.setText('Hello, World!');
    history.push(editor.save());
    console.log(`新しいテキスト: ${editor.getText()}`);
    console.log(`履歴数: ${history.getHistorySize()}`);
    console.log();

    // 4. Undoの実行
    console.log('4. Undoの実行:');
    const undoMemento = history.undo();
    if (undoMemento) {
        editor.restore(undoMemento);
        console.log(`Undo後のテキスト: ${editor.getText()}`);
        const undoSelection = editor.getSelection();
        console.log(`Undo後の選択範囲: ${undoSelection.start} から ${undoSelection.end}`);
    }
    console.log();

    // 5. Redoの実行
    console.log('5. Redoの実行:');
    const redoMemento = history.redo();
    if (redoMemento) {
        editor.restore(redoMemento);
        console.log(`Redo後のテキスト: ${editor.getText()}`);
    }
    console.log();

    // 6. 複数の変更を加える
    console.log('6. 複数の変更を加える:');
    editor.setText('First Version');
    history.push(editor.save());
    console.log('First Versionを保存');

    editor.setText('Second Version');
    history.push(editor.save());
    console.log('Second Versionを保存');

    editor.setText('Third Version');
    history.push(editor.save());
    console.log('Third Versionを保存');

    console.log(`現在の履歴数: ${history.getHistorySize()}`);
    console.log(`現在のインデックス: ${history.getCurrentIndex()}`);
    console.log();

    // 7. 履歴を遡る
    console.log('7. 履歴を遡る:');
    let memento = history.undo();
    if (memento) {
        editor.restore(memento);
        console.log(`1回目のUndo後: ${editor.getText()}`);
    }

    memento = history.undo();
    if (memento) {
        editor.restore(memento);
        console.log(`2回目のUndo後: ${editor.getText()}`);
    }

    // 8. 新しい変更を加える（履歴の分岐）
    console.log('\n8. 新しい変更を加える（履歴の分岐）:');
    editor.setText('New Branch');
    history.push(editor.save());
    console.log(`分岐後のテキスト: ${editor.getText()}`);
    console.log(`履歴数: ${history.getHistorySize()}`);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runMementoExample();
} 
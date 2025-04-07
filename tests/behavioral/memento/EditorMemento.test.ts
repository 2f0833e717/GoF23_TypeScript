/**
 * エディタの状態保存メメントのテスト
 */
import { EditorMemento } from '../../../src/behavioral/memento/EditorMemento';
import { EditorState } from '../../../src/behavioral/memento/EditorState';

describe('Editor Memento', () => {
    describe('State Management', () => {
        test('should store and retrieve state', () => {
            const state: EditorState = {
                text: 'Hello World',
                cursorPosition: 5,
                selectionStart: 0,
                selectionEnd: 5
            };

            const memento = new EditorMemento(state);
            const retrievedState = memento.getState();

            expect(retrievedState).toEqual(state);
            expect(retrievedState).not.toBe(state); // 異なるオブジェクトであることを確認
        });

        test('should store timestamp', () => {
            const state: EditorState = {
                text: 'Test',
                cursorPosition: 0,
                selectionStart: -1,
                selectionEnd: -1
            };

            const beforeCreate = new Date();
            const memento = new EditorMemento(state);
            const afterCreate = new Date();

            const timestamp = memento.getTimestamp();
            expect(timestamp.getTime()).toBeGreaterThanOrEqual(beforeCreate.getTime());
            expect(timestamp.getTime()).toBeLessThanOrEqual(afterCreate.getTime());
        });

        test('should provide individual state properties', () => {
            const state: EditorState = {
                text: 'Hello World',
                cursorPosition: 5,
                selectionStart: 0,
                selectionEnd: 5
            };

            const memento = new EditorMemento(state);

            expect(memento.getText()).toBe('Hello World');
            expect(memento.getCursorPosition()).toBe(5);
            expect(memento.getSelectionStart()).toBe(0);
            expect(memento.getSelectionEnd()).toBe(5);
        });

        test('should create deep copy of state', () => {
            const state: EditorState = {
                text: 'Test',
                cursorPosition: 0,
                selectionStart: -1,
                selectionEnd: -1
            };

            const memento = new EditorMemento(state);
            const retrievedState = memento.getState();

            // 元の状態を変更
            state.text = 'Modified';
            state.cursorPosition = 1;
            state.selectionStart = 0;
            state.selectionEnd = 1;

            // メメントの状態が変更されていないことを確認
            expect(retrievedState.text).toBe('Test');
            expect(retrievedState.cursorPosition).toBe(0);
            expect(retrievedState.selectionStart).toBe(-1);
            expect(retrievedState.selectionEnd).toBe(-1);
        });

        test('should handle empty state', () => {
            const state: EditorState = {
                text: '',
                cursorPosition: 0,
                selectionStart: -1,
                selectionEnd: -1
            };

            const memento = new EditorMemento(state);
            const retrievedState = memento.getState();

            expect(retrievedState.text).toBe('');
            expect(retrievedState.cursorPosition).toBe(0);
            expect(retrievedState.selectionStart).toBe(-1);
            expect(retrievedState.selectionEnd).toBe(-1);
        });

        test('should handle state with selection', () => {
            const state: EditorState = {
                text: 'Hello World',
                cursorPosition: 11,
                selectionStart: 0,
                selectionEnd: 11
            };

            const memento = new EditorMemento(state);

            expect(memento.getText()).toBe('Hello World');
            expect(memento.getSelectionStart()).toBe(0);
            expect(memento.getSelectionEnd()).toBe(11);
            expect(memento.getCursorPosition()).toBe(11);
        });
    });
}); 
/**
 * エディタの履歴管理システムのテスト
 */
import { EditorHistory } from '../../../src/behavioral/memento/EditorHistory';
import { EditorMemento } from '../../../src/behavioral/memento/EditorMemento';
import { EditorState } from '../../../src/behavioral/memento/EditorState';

describe('Editor History', () => {
    let history: EditorHistory;

    beforeEach(() => {
        history = new EditorHistory();
    });

    describe('Basic Operations', () => {
        test('should save and retrieve states', () => {
            const state1: EditorState = {
                text: 'Hello',
                cursorPosition: 5,
                selectionStart: -1,
                selectionEnd: -1
            };
            const state2: EditorState = {
                text: 'Hello World',
                cursorPosition: 11,
                selectionStart: -1,
                selectionEnd: -1
            };

            const memento1 = new EditorMemento(state1);
            const memento2 = new EditorMemento(state2);

            history.save(memento1);
            history.save(memento2);

            expect(history.getHistorySize()).toBe(2);
            expect(history.getCurrentIndex()).toBe(1);
        });

        test('should handle undo operations', () => {
            const states = [
                { text: 'First', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 },
                { text: 'Second', cursorPosition: 6, selectionStart: -1, selectionEnd: -1 },
                { text: 'Third', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 }
            ];

            states.forEach(state => history.save(new EditorMemento(state)));

            const undoState = history.undo();
            expect(undoState?.getText()).toBe('Second');
            expect(history.getCurrentIndex()).toBe(1);

            const undoState2 = history.undo();
            expect(undoState2?.getText()).toBe('First');
            expect(history.getCurrentIndex()).toBe(0);

            const undoState3 = history.undo();
            expect(undoState3).toBeNull();
            expect(history.getCurrentIndex()).toBe(0);
        });

        test('should handle redo operations', () => {
            const states = [
                { text: 'First', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 },
                { text: 'Second', cursorPosition: 6, selectionStart: -1, selectionEnd: -1 },
                { text: 'Third', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 }
            ];

            states.forEach(state => history.save(new EditorMemento(state)));
            history.undo(); // Third -> Second
            history.undo(); // Second -> First

            const redoState = history.redo();
            expect(redoState?.getText()).toBe('Second');
            expect(history.getCurrentIndex()).toBe(1);

            const redoState2 = history.redo();
            expect(redoState2?.getText()).toBe('Third');
            expect(history.getCurrentIndex()).toBe(2);

            const redoState3 = history.redo();
            expect(redoState3).toBeNull();
            expect(history.getCurrentIndex()).toBe(2);
        });

        test('should clear history', () => {
            const states = [
                { text: 'First', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 },
                { text: 'Second', cursorPosition: 6, selectionStart: -1, selectionEnd: -1 }
            ];

            states.forEach(state => history.save(new EditorMemento(state)));
            expect(history.getHistorySize()).toBe(2);

            history.clear();
            expect(history.getHistorySize()).toBe(0);
            expect(history.getCurrentIndex()).toBe(-1);
        });

        test('should handle direct state access', () => {
            const states = [
                { text: 'First', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 },
                { text: 'Second', cursorPosition: 6, selectionStart: -1, selectionEnd: -1 },
                { text: 'Third', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 }
            ];

            states.forEach(state => history.save(new EditorMemento(state)));

            const state0 = history.getState(0);
            expect(state0?.getText()).toBe('First');

            const state1 = history.getState(1);
            expect(state1?.getText()).toBe('Second');

            const state2 = history.getState(2);
            expect(state2?.getText()).toBe('Third');

            const invalidState = history.getState(3);
            expect(invalidState).toBeNull();
        });

        test('should handle new saves after undo', () => {
            const states = [
                { text: 'First', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 },
                { text: 'Second', cursorPosition: 6, selectionStart: -1, selectionEnd: -1 },
                { text: 'Third', cursorPosition: 5, selectionStart: -1, selectionEnd: -1 }
            ];

            states.forEach(state => history.save(new EditorMemento(state)));
            history.undo(); // Third -> Second

            const newState: EditorState = {
                text: 'New Branch',
                cursorPosition: 10,
                selectionStart: -1,
                selectionEnd: -1
            };
            history.save(new EditorMemento(newState));

            expect(history.getHistorySize()).toBe(3);
            expect(history.getCurrentIndex()).toBe(2);
            expect(history.getState(2)?.getText()).toBe('New Branch');
        });
    });
}); 
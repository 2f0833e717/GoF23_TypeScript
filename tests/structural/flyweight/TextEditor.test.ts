/**
 * フライウェイトパターンのテスト
 * 
 * テキストエディタの機能とメモリ効率をテストします。
 */
import { TextEditor } from '../../../src/structural/flyweight/TextEditor';
import { TextFormatFactory } from '../../../src/structural/flyweight/TextFormatFactory';

describe('Flyweight Pattern - Text Editor', () => {
    let editor: TextEditor;

    beforeEach(() => {
        editor = new TextEditor();
        TextFormatFactory.getInstance().clearCache();
    });

    describe('Text Formatting', () => {
        test('should add formatted text correctly', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            const texts = editor.getAllTexts();

            expect(texts).toHaveLength(1);
            expect(texts[0].getText()).toBe('Hello');
            expect(texts[0].getFormat().getFontFamily()).toBe('Arial');
            expect(texts[0].getFormat().getFontSize()).toBe(12);
            expect(texts[0].getFormat().getColor()).toBe('black');
            expect(texts[0].getFormat().getStyle()).toEqual(['bold']);
        });

        test('should reuse existing format', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            editor.addText('World', 'Arial', 12, 'black', ['bold']);

            // フォーマットは1つだけ作成されるはず
            expect(TextFormatFactory.getInstance().getFormatCount()).toBe(1);
        });

        test('should create new format for different styles', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            editor.addText('World', 'Arial', 12, 'red', ['bold']);

            // 異なるフォーマットは別々に作成される
            expect(TextFormatFactory.getInstance().getFormatCount()).toBe(2);
        });
    });

    describe('Memory Management', () => {
        test('should track memory usage correctly', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            const initialMemory = TextFormatFactory.getInstance().getTotalMemoryUsage();

            editor.addText('World', 'Arial', 12, 'black', ['bold']);
            const finalMemory = TextFormatFactory.getInstance().getTotalMemoryUsage();

            // 同じフォーマットを使用するので、フォーマットのメモリ使用量は変わらない
            expect(finalMemory).toBe(initialMemory);
        });

        test('should clear memory when editor is cleared', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            editor.addText('World', 'Times New Roman', 14, 'red', ['italic']);

            editor.clear();

            expect(TextFormatFactory.getInstance().getFormatCount()).toBe(0);
            expect(TextFormatFactory.getInstance().getTotalMemoryUsage()).toBe(0);
            expect(editor.getAllTexts()).toHaveLength(0);
        });
    });

    describe('Text Search', () => {
        test('should find texts by format', () => {
            const format1 = TextFormatFactory.getInstance().getTextFormat('Arial', 12, 'black', ['bold']);
            const format2 = TextFormatFactory.getInstance().getTextFormat('Times New Roman', 14, 'red', ['italic']);

            editor.addText('Hello', 'Arial', 12, 'black', ['bold']);
            editor.addText('World', 'Times New Roman', 14, 'red', ['italic']);
            editor.addText('Test', 'Arial', 12, 'black', ['bold']);

            const textsWithFormat1 = editor.findTextsByFormat(format1);
            expect(textsWithFormat1).toHaveLength(2);
            expect(textsWithFormat1.map(t => t.getText())).toEqual(['Hello', 'Test']);

            const textsWithFormat2 = editor.findTextsByFormat(format2);
            expect(textsWithFormat2).toHaveLength(1);
            expect(textsWithFormat2[0].getText()).toBe('World');
        });
    });

    describe('Style Handling', () => {
        test('should handle empty style array', () => {
            editor.addText('Hello', 'Arial', 12, 'black');
            const texts = editor.getAllTexts();
            expect(texts[0].getFormat().getStyle()).toEqual([]);
        });

        test('should handle multiple styles', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold', 'italic', 'underline']);
            const texts = editor.getAllTexts();
            expect(texts[0].getFormat().getStyle()).toEqual(['bold', 'italic', 'underline']);
        });

        test('should treat same styles in different order as equal', () => {
            editor.addText('Hello', 'Arial', 12, 'black', ['bold', 'italic']);
            editor.addText('World', 'Arial', 12, 'black', ['italic', 'bold']);

            // スタイルの順序が異なっても同じフォーマットとして扱われる
            expect(TextFormatFactory.getInstance().getFormatCount()).toBe(1);
        });
    });
}); 
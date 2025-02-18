/**
 * フライウェイトパターンの使用例
 * 
 * テキストエディタでのフォーマット共有による
 * メモリ効率化の例を示します。
 */
import { TextEditor } from '../../../src/structural/flyweight/TextEditor';

export function runFlyweightExample(): void {
    console.log('フライウェイトパターンの実行例:');
    console.log('--------------------------------');

    const editor = new TextEditor();

    // 1. 基本的なテキスト追加
    console.log('1. 基本的なテキストの追加:');
    editor.addText('こんにちは、世界！', 'Arial', 12, 'black', ['bold']);
    editor.addText('Hello, World!', 'Arial', 12, 'black', ['bold']);
    console.log();

    // 2. 異なるフォーマットのテキスト
    console.log('2. 異なるフォーマットのテキスト:');
    editor.addText('警告メッセージ', 'Arial', 14, 'red', ['bold', 'italic']);
    editor.addText('注意事項', 'Arial', 14, 'red', ['bold', 'italic']);
    console.log();

    // 3. 複数のスタイルを持つテキスト
    console.log('3. 複数のスタイルを持つテキスト:');
    editor.addText('重要な見出し', 'Times New Roman', 16, 'blue', ['bold', 'underline']);
    console.log();

    // 4. 同じフォーマットを使用する大量のテキスト
    console.log('4. 同じフォーマットを使用する大量のテキスト:');
    const words = ['TypeScript', 'デザインパターン', 'フライウェイト', 'メモリ効率', 'オブジェクト共有'];
    for (const word of words) {
        editor.addText(word, 'Courier New', 10, 'gray', ['monospace']);
    }
    console.log();

    // 5. エディタのクリア
    console.log('5. エディタのクリア:');
    editor.clear();
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runFlyweightExample();
} 
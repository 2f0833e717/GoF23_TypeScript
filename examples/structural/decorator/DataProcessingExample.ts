/**
 * デコレーターパターンの使用例
 * 
 * 基本的なデータソースに暗号化や圧縮などの機能を
 * 動的に追加する例を示します。
 */
import { FileDataSource } from '../../../src/structural/decorator/FileDataSource';
import { EncryptionDecorator } from '../../../src/structural/decorator/EncryptionDecorator';
import { CompressionDecorator } from '../../../src/structural/decorator/CompressionDecorator';

export function runDecoratorExample(): void {
    console.log('デコレーターパターンの実行例:');
    console.log('--------------------------------');

    // 基本的なデータソースの使用
    console.log('1. 基本的なファイルデータソース:');
    const source = new FileDataSource('example.txt');
    const originalData = '機密情報: TypeScriptでデザインパターンを学ぶ';
    source.writeData(originalData);
    console.log('読み込んだデータ:', source.readData());

    // 暗号化デコレーターの使用
    console.log('\n2. 暗号化デコレーター:');
    const encrypted = new EncryptionDecorator(source);
    encrypted.writeData(originalData);
    console.log('暗号化されたデータを読み込み:', encrypted.readData());

    // 圧縮デコレーターの使用
    console.log('\n3. 圧縮デコレーター:');
    const compressed = new CompressionDecorator(source);
    compressed.writeData(originalData);
    console.log('圧縮されたデータを読み込み:', compressed.readData());

    // 複数のデコレーターを組み合わせる
    console.log('\n4. 暗号化と圧縮を組み合わせ:');
    const encryptedAndCompressed = new CompressionDecorator(
        new EncryptionDecorator(source)
    );
    encryptedAndCompressed.writeData(originalData);
    console.log('暗号化・圧縮されたデータを読み込み:', encryptedAndCompressed.readData());

    // 異なる順序でデコレーターを適用
    console.log('\n5. 圧縮してから暗号化:');
    const compressedAndEncrypted = new EncryptionDecorator(
        new CompressionDecorator(source)
    );
    compressedAndEncrypted.writeData(originalData);
    console.log('圧縮・暗号化されたデータを読み込み:', compressedAndEncrypted.readData());
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runDecoratorExample();
} 
/**
 * デコレーターパターンのテスト
 * 
 * 基本的なデータソースと各デコレーターの機能をテストします。
 */
import { FileDataSource } from '../../../src/structural/decorator/FileDataSource';
import { EncryptionDecorator } from '../../../src/structural/decorator/EncryptionDecorator';
import { CompressionDecorator } from '../../../src/structural/decorator/CompressionDecorator';
import * as fs from 'fs';
import * as path from 'path';

describe('Decorator Pattern', () => {
    const testDataDir = path.join(process.cwd(), 'data');
    const testFilePath = path.join(testDataDir, 'test.txt');

    // ディレクトリを再帰的に削除する関数
    const removeDirectory = (dirPath: string) => {
        if (fs.existsSync(dirPath)) {
            fs.readdirSync(dirPath).forEach((file) => {
                const curPath = path.join(dirPath, file);
                if (fs.lstatSync(curPath).isDirectory()) {
                    removeDirectory(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(dirPath);
        }
    };

    beforeEach(() => {
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
        if (!fs.existsSync(testDataDir)) {
            fs.mkdirSync(testDataDir, { recursive: true });
        }
    });

    afterEach(() => {
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
        removeDirectory(testDataDir);
    });

    describe('FileDataSource', () => {
        test('should write and read data correctly', () => {
            const source = new FileDataSource('test.txt');
            const testData = 'Hello, World!';
            source.writeData(testData);
            expect(source.readData()).toBe(testData);
        });

        test('should return empty string when file does not exist', () => {
            const source = new FileDataSource('nonexistent.txt');
            expect(source.readData()).toBe('');
        });
    });

    describe('EncryptionDecorator', () => {
        test('should encrypt and decrypt data correctly', () => {
            const source = new FileDataSource('test.txt');
            const encrypted = new EncryptionDecorator(source);
            const testData = 'Secret message';
            encrypted.writeData(testData);
            expect(encrypted.readData()).toBe(testData);
        });

        test('should handle empty data correctly', () => {
            const source = new FileDataSource('test.txt');
            const encrypted = new EncryptionDecorator(source);
            encrypted.writeData('');
            expect(encrypted.readData()).toBe('');
        });
    });

    describe('CompressionDecorator', () => {
        test('should compress and decompress data correctly', () => {
            const source = new FileDataSource('test.txt');
            const compressed = new CompressionDecorator(source);
            const testData = 'This is a test message that should be compressed';
            compressed.writeData(testData);
            expect(compressed.readData()).toBe(testData);
        });

        test('should handle empty data correctly', () => {
            const source = new FileDataSource('test.txt');
            const compressed = new CompressionDecorator(source);
            compressed.writeData('');
            expect(compressed.readData()).toBe('');
        });
    });

    describe('Combined Decorators', () => {
        test('should work with multiple decorators', () => {
            const source = new FileDataSource('test.txt');
            const encrypted = new EncryptionDecorator(source);
            const compressed = new CompressionDecorator(encrypted);
            const testData = 'Message with multiple decorators';
            compressed.writeData(testData);
            expect(compressed.readData()).toBe(testData);
        });

        test('should handle decorators in different order', () => {
            const source = new FileDataSource('test.txt');
            const compressed = new CompressionDecorator(source);
            const encrypted = new EncryptionDecorator(compressed);
            const testData = 'Message with decorators in different order';
            encrypted.writeData(testData);
            expect(encrypted.readData()).toBe(testData);
        });
    });

    describe('Error Handling', () => {
        test('should handle compression errors', () => {
            const source = new FileDataSource('test.txt');
            const compression = new CompressionDecorator(source);

            // 無効なデータの圧縮
            expect(() => compression.writeData(null as any)).toThrow('データが無効です');
            expect(() => compression.writeData(undefined as any)).toThrow('データが無効です');
            compression.writeData('');  // 空文字列は許可

            // 無効なデータの解凍
            compression.writeData('test data');
            expect(() => compression.readData()).not.toThrow();
            source.writeData('invalid compressed data');
            expect(() => compression.readData()).toThrow();
        });

        test('should handle encryption errors', () => {
            const source = new FileDataSource('test.txt');
            const encryption = new EncryptionDecorator(source);

            // 無効なデータの暗号化
            expect(() => encryption.writeData(null as any)).toThrow('データが無効です');
            expect(() => encryption.writeData(undefined as any)).toThrow('データが無効です');
            encryption.writeData('');  // 空文字列は許可

            // 無効なデータの復号
            encryption.writeData('test data');
            expect(() => encryption.readData()).not.toThrow();
            source.writeData('invalid encrypted data');
            expect(() => encryption.readData()).toThrow();
        });

        test('should handle file operation errors', () => {
            const source = new FileDataSource('');
            expect(() => source.writeData('test')).toThrow();
            expect(() => source.readData()).toThrow();
        });
    });

    describe('Edge Cases', () => {
        test('should handle empty data with multiple decorators', () => {
            const source = new FileDataSource('test.txt');
            const compression = new CompressionDecorator(source);
            const encryption = new EncryptionDecorator(compression);

            // 空文字列の処理
            encryption.writeData('');
            expect(encryption.readData()).toBe('');

            // nullとundefinedの処理
            expect(() => encryption.writeData(null as any)).toThrow('データが無効です');
            expect(() => encryption.writeData(undefined as any)).toThrow('データが無効です');
        });

        test('should handle special characters', () => {
            const source = new FileDataSource('test.txt');
            const compression = new CompressionDecorator(source);
            const encryption = new EncryptionDecorator(compression);

            const specialChars = '!@#$%^&*()_+{}[]|\\:;"\'<>,.?/~`';
            encryption.writeData(specialChars);
            expect(encryption.readData()).toBe(specialChars);
        });

        test('should handle large data', () => {
            const source = new FileDataSource('test.txt');
            const compression = new CompressionDecorator(source);
            const encryption = new EncryptionDecorator(compression);

            const largeData = 'x'.repeat(1000000);
            encryption.writeData(largeData);
            expect(encryption.readData()).toBe(largeData);
        });
    });
}); 
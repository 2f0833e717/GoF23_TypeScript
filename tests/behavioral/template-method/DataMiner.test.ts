/**
 * Template Methodパターンのテスト
 * 
 * CSVとJSONのデータマイナーの機能をテストします。
 */
import { CSVDataMiner } from '../../../src/behavioral/template-method/CSVDataMiner';
import { JSONDataMiner } from '../../../src/behavioral/template-method/JSONDataMiner';
import { AnalysisResult } from '../../../src/behavioral/template-method/DataMiner';
import * as fs from 'fs';
import * as path from 'path';

describe('Template Method Pattern - Data Miner', () => {
    let testDataDir: string;
    let csvMiner: CSVDataMiner;
    let jsonMiner: JSONDataMiner;

    beforeAll(() => {
        // テストデータディレクトリのセットアップ
        testDataDir = path.join(process.cwd(), 'test_data');
        if (!fs.existsSync(testDataDir)) {
            fs.mkdirSync(testDataDir);
        }

        // CSVファイルの作成
        const csvContent = `name,age,score\nJohn,25,85\nJane,30,92\nBob,28,78`;
        fs.writeFileSync(path.join(testDataDir, 'test.csv'), csvContent);

        // JSONファイルの作成
        const jsonContent = {
            headers: ['name', 'age', 'score'],
            data: [
                { name: 'John', age: 25, score: 85 },
                { name: 'Jane', age: 30, score: 92 },
                { name: 'Bob', age: 28, score: 78 }
            ]
        };
        fs.writeFileSync(
            path.join(testDataDir, 'test.json'),
            JSON.stringify(jsonContent, null, 2)
        );
    });

    afterAll(() => {
        // テストファイルの削除
        try {
            const files = fs.readdirSync(testDataDir);
            files.forEach(file => {
                fs.unlinkSync(path.join(testDataDir, file));
            });
            fs.rmdirSync(testDataDir);
        } catch (error) {
            console.error('テストデータの削除中にエラーが発生しました:', error);
        }
    });

    beforeEach(() => {
        csvMiner = new CSVDataMiner();
        jsonMiner = new JSONDataMiner();
    });

    describe('CSVDataMiner', () => {
        test('should read and analyze CSV data', () => {
            const result = csvMiner.mine(path.join(testDataDir, 'test.csv'));

            expect(result.summary.totalRows).toBe(3);
            expect(result.summary.processedRows).toBe(3);
            expect(result.summary.skippedRows).toBe(0);
            expect(result.statistics).toHaveProperty('age_avg');
            expect(result.statistics).toHaveProperty('score_avg');
            expect(result.insights.length).toBeGreaterThan(0);
        });

        test('should handle invalid CSV data', () => {
            // 不正なCSVファイルの作成
            fs.writeFileSync(path.join(testDataDir, 'invalid.csv'), 'invalid,data\nincomplete');

            expect(() => {
                csvMiner.mine(path.join(testDataDir, 'invalid.csv'));
            }).toThrow('CSVデータの列数が不正です');

            fs.unlinkSync(path.join(testDataDir, 'invalid.csv'));
        });

        test('should cache results when enabled', () => {
            const source = path.join(testDataDir, 'test.csv');

            // 1回目の実行
            const firstResult = csvMiner.mine(source);

            // キャッシュされたデータを使用
            const secondResult = csvMiner.mine(source);

            // タイムスタンプを除外して比較
            expect(compareResults(secondResult, firstResult)).toBe(true);
        });
    });

    describe('JSONDataMiner', () => {
        test('should read and analyze JSON data', () => {
            const result = jsonMiner.mine(path.join(testDataDir, 'test.json'));

            expect(result.summary.totalRows).toBe(3);
            expect(result.summary.processedRows).toBe(3);
            expect(result.summary.skippedRows).toBe(0);
            expect(result.statistics).toHaveProperty('age_avg');
            expect(result.statistics).toHaveProperty('score_avg');
            expect(result.insights.length).toBeGreaterThan(0);
        });

        test('should handle invalid JSON data', () => {
            // 不正なJSONファイルの作成
            fs.writeFileSync(path.join(testDataDir, 'invalid.json'), '{ invalid json }');

            expect(() => {
                jsonMiner.mine(path.join(testDataDir, 'invalid.json'));
            }).toThrow();

            fs.unlinkSync(path.join(testDataDir, 'invalid.json'));
        });

        test('should generate meaningful insights', () => {
            const result = jsonMiner.mine(path.join(testDataDir, 'test.json'));

            expect(result.insights).toEqual(
                expect.arrayContaining([
                    expect.stringContaining('age'),
                    expect.stringContaining('score')
                ])
            );
        });
    });

    describe('Common Template Method Behavior', () => {
        test('should follow the same template process', () => {
            const csvResult = csvMiner.mine(path.join(testDataDir, 'test.csv'));
            const jsonResult = jsonMiner.mine(path.join(testDataDir, 'test.json'));

            // 両方のマイナーが同じ構造の結果を生成することを確認
            expect(Object.keys(csvResult)).toEqual(Object.keys(jsonResult));
            expect(Object.keys(csvResult.summary)).toEqual(Object.keys(jsonResult.summary));
            expect(csvResult.statistics).toHaveProperty('age_avg');
            expect(jsonResult.statistics).toHaveProperty('age_avg');
        });

        test('should handle non-existent files', () => {
            expect(() => {
                csvMiner.mine(path.join(testDataDir, 'nonexistent.csv'));
            }).toThrow();

            expect(() => {
                jsonMiner.mine(path.join(testDataDir, 'nonexistent.json'));
            }).toThrow();
        });
    });
});

/**
 * 解析結果を比較します（タイムスタンプを除く）
 * @param result1 比較する結果1
 * @param result2 比較する結果2
 * @returns 結果が同じ場合はtrue
 */
function compareResults(result1: AnalysisResult, result2: AnalysisResult): boolean {
    const { timestamp: timestamp1, ...rest1 } = result1;
    const { timestamp: timestamp2, ...rest2 } = result2;
    return JSON.stringify(rest1) === JSON.stringify(rest2);
} 
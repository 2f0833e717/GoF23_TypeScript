/**
 * Template Methodパターンの使用例
 * 
 * 異なる形式のデータファイルを解析し、
 * 統計情報と洞察を生成する例を示します。
 */
import { CSVDataMiner } from '../../../src/behavioral/template-method/CSVDataMiner';
import { JSONDataMiner } from '../../../src/behavioral/template-method/JSONDataMiner';
import * as fs from 'fs';
import * as path from 'path';

export function runTemplateMethodExample(): void {
    console.log('Template Methodパターンの実行例:');
    console.log('--------------------------------');

    const dataDir = path.join(process.cwd(), 'example_data');
    const csvFilePath = path.join(dataDir, 'sales.csv');
    const jsonFilePath = path.join(dataDir, 'sales.json');

    // テストデータディレクトリを作成
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    // CSVファイルを作成
    const csvContent = `product,quantity,price,total
Product A,10,1000,10000
Product B,5,2000,10000
Product C,8,1500,12000
Product D,12,800,9600
Product E,15,500,7500`;
    fs.writeFileSync(csvFilePath, csvContent);

    // JSONファイルを作成
    const jsonContent = {
        headers: ['product', 'quantity', 'price', 'total'],
        data: [
            { product: 'Product A', quantity: 10, price: 1000, total: 10000 },
            { product: 'Product B', quantity: 5, price: 2000, total: 10000 },
            { product: 'Product C', quantity: 8, price: 1500, total: 12000 },
            { product: 'Product D', quantity: 12, price: 800, total: 9600 },
            { product: 'Product E', quantity: 15, price: 500, total: 7500 }
        ]
    };
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonContent, null, 2));

    try {
        // 1. CSVデータの解析
        console.log('1. CSVデータの解析:');
        const csvMiner = new CSVDataMiner();
        const csvResult = csvMiner.mine(csvFilePath);

        console.log('\n集計結果:');
        console.log(`- 総行数: ${csvResult.summary.totalRows}`);
        console.log(`- 処理行数: ${csvResult.summary.processedRows}`);
        console.log(`- スキップ行数: ${csvResult.summary.skippedRows}`);

        console.log('\n統計情報:');
        Object.entries(csvResult.statistics).forEach(([key, value]) => {
            console.log(`- ${key}: ${value.toFixed(2)}`);
        });

        console.log('\n洞察:');
        csvResult.insights.forEach(insight => {
            console.log(`- ${insight}`);
        });

        // 2. JSONデータの解析
        console.log('\n2. JSONデータの解析:');
        const jsonMiner = new JSONDataMiner();
        const jsonResult = jsonMiner.mine(jsonFilePath);

        console.log('\n集計結果:');
        console.log(`- 総行数: ${jsonResult.summary.totalRows}`);
        console.log(`- 処理行数: ${jsonResult.summary.processedRows}`);
        console.log(`- スキップ行数: ${jsonResult.summary.skippedRows}`);

        console.log('\n統計情報:');
        Object.entries(jsonResult.statistics).forEach(([key, value]) => {
            console.log(`- ${key}: ${value.toFixed(2)}`);
        });

        console.log('\n洞察:');
        jsonResult.insights.forEach(insight => {
            console.log(`- ${insight}`);
        });

        // 3. キャッシュの動作確認
        console.log('\n3. キャッシュの動作確認:');
        console.log('2回目の解析（キャッシュから取得）:');

        console.log('\nCSVデータ:');
        const csvResult2 = csvMiner.mine(csvFilePath);
        console.log(`- 処理行数: ${csvResult2.summary.processedRows}`);

        console.log('\nJSONデータ:');
        const jsonResult2 = jsonMiner.mine(jsonFilePath);
        console.log(`- 処理行数: ${jsonResult2.summary.processedRows}`);

    } finally {
        // テストファイルを削除
        fs.unlinkSync(csvFilePath);
        fs.unlinkSync(jsonFilePath);
        fs.rmdirSync(dataDir);
    }

    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runTemplateMethodExample();
} 
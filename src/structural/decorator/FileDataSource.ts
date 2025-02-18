/**
 * ファイルデータソース
 * 
 * DataSourceインターフェースの具象実装です。
 * ファイルシステムを使用してデータの読み書きを行います。
 */
import { DataSource } from './DataSource';
import * as fs from 'fs';
import * as path from 'path';

export class FileDataSource implements DataSource {
    private filePath: string;

    /**
     * コンストラクタ
     * @param filename ファイル名
     */
    constructor(filename: string) {
        this.filePath = path.join(process.cwd(), 'data', filename);
        // データディレクトリが存在しない場合は作成
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
    }

    /**
     * ファイルにデータを書き込みます
     * @param data 書き込むデータ
     */
    writeData(data: string): void {
        try {
            fs.writeFileSync(this.filePath, data, 'utf8');
            console.log(`データを ${this.filePath} に書き込みました`);
        } catch (error) {
            throw new Error(`ファイルの書き込みに失敗しました: ${error}`);
        }
    }

    /**
     * ファイルからデータを読み込みます
     * @returns 読み込んだデータ
     */
    readData(): string {
        try {
            if (!fs.existsSync(this.filePath)) {
                return '';
            }
            const data = fs.readFileSync(this.filePath, 'utf8');
            console.log(`データを ${this.filePath} から読み込みました`);
            return data;
        } catch (error) {
            throw new Error(`ファイルの読み込みに失敗しました: ${error}`);
        }
    }
} 
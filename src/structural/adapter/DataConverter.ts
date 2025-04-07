/**
 * データ変換システム
 * 
 * Adapterパターンを使用して、異なるデータ形式間の変換を提供します。
 * - JSONとXML形式の相互変換
 * - CSVデータの変換
 * - カスタムデータ形式の対応
 * - データの検証と正規化
 */

/**
 * データ形式の種類
 */
export enum DataFormat {
    JSON = 'JSON',
    XML = 'XML',
    CSV = 'CSV'
}

/**
 * データ変換のターゲットインターフェース
 */
export interface DataTarget {
    /**
     * データを文字列形式で取得します
     */
    toString(): string;

    /**
     * データ形式を取得します
     */
    getFormat(): DataFormat;

    /**
     * データの検証を行います
     */
    validate(): boolean;
}

/**
 * JSON形式のデータを表すクラス
 */
export class JsonData implements DataTarget {
    private originalData: any;

    constructor(data: any) {
        this.originalData = data;
        this.validate();
    }

    toString(): string {
        return JSON.stringify(this.originalData, null, 2);
    }

    getFormat(): DataFormat {
        return DataFormat.JSON;
    }

    validate(): boolean {
        try {
            JSON.stringify(this.originalData);
            return true;
        } catch (error) {
            throw new Error('Invalid JSON data');
        }
    }

    /**
     * JSONデータを取得します
     */
    getData(): any {
        return this.originalData;
    }
}

/**
 * XML形式のデータを表すクラス
 */
export class XmlData implements DataTarget {
    constructor(private data: string) {
        this.validate();
    }

    toString(): string {
        return this.data;
    }

    getFormat(): DataFormat {
        return DataFormat.XML;
    }

    validate(): boolean {
        // 簡易的なXML検証
        if (!this.data.startsWith('<?xml') || !this.data.includes('</')) {
            throw new Error('Invalid XML data');
        }
        return true;
    }

    /**
     * XMLデータを取得します
     */
    getData(): string {
        return this.data;
    }
}

/**
 * CSV形式のデータを表すクラス
 */
export class CsvData implements DataTarget {
    constructor(private headers: string[], private rows: string[][]) {
        this.validate();
    }

    toString(): string {
        const headerLine = this.headers.join(',');
        const rowLines = this.rows.map(row => row.join(','));
        return [headerLine, ...rowLines].join('\n');
    }

    getFormat(): DataFormat {
        return DataFormat.CSV;
    }

    validate(): boolean {
        if (!this.headers.length) {
            throw new Error('CSV must have headers');
        }

        const headerCount = this.headers.length;
        for (const row of this.rows) {
            if (row.length !== headerCount) {
                throw new Error('CSV row length must match header length');
            }
        }
        return true;
    }

    /**
     * CSVデータを取得します
     */
    getData(): { headers: string[]; rows: string[][] } {
        return {
            headers: [...this.headers],
            rows: this.rows.map(row => [...row])
        };
    }
}

/**
 * データ変換アダプターのインターフェース
 */
export interface DataConverter {
    /**
     * データを変換します
     * @param data 変換元のデータ
     * @param targetFormat 変換先のデータ形式
     */
    convert(data: DataTarget, targetFormat: DataFormat): DataTarget;
}

/**
 * JSON-XML変換アダプター
 */
export class JsonXmlAdapter implements DataConverter {
    convert(data: DataTarget, targetFormat: DataFormat): DataTarget {
        if (data.getFormat() === DataFormat.JSON && targetFormat === DataFormat.XML) {
            return this.jsonToXml(data as JsonData);
        }
        if (data.getFormat() === DataFormat.XML && targetFormat === DataFormat.JSON) {
            return this.xmlToJson(data as XmlData);
        }
        throw new Error('Unsupported conversion');
    }

    private jsonToXml(data: JsonData): XmlData {
        const jsonData = data.getData();
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += this.objectToXml(jsonData, 'root');
        return new XmlData(xml);
    }

    private xmlToJson(data: XmlData): JsonData {
        const xml = data.getData();
        // 簡易的なXML解析（実際のプロジェクトでは適切なXMLパーサーを使用）
        const jsonData = this.parseXml(xml);
        return new JsonData(jsonData);
    }

    private objectToXml(obj: any, tagName: string): string {
        if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
            return `<${tagName}>${obj}</${tagName}>\n`;
        }

        let xml = `<${tagName}>\n`;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                xml += this.objectToXml(obj[key], key);
            }
        }
        xml += `</${tagName}>\n`;
        return xml;
    }

    private parseXml(xml: string): any {
        // 簡易的なXML解析（実際のプロジェクトでは適切なXMLパーサーを使用）
        const result: any = {};
        const matches = xml.match(/<(\w+)>(.*?)<\/\1>/g);
        if (matches) {
            matches.forEach(match => {
                const [, tag, value] = match.match(/<(\w+)>(.*?)<\/\1>/) || [];
                if (tag && value) {
                    result[tag] = value;
                }
            });
        }
        return result;
    }
}

/**
 * JSON-CSV変換アダプター
 */
export class JsonCsvAdapter implements DataConverter {
    convert(data: DataTarget, targetFormat: DataFormat): DataTarget {
        if (data.getFormat() === DataFormat.JSON && targetFormat === DataFormat.CSV) {
            return this.jsonToCsv(data as JsonData);
        } else if (data.getFormat() === DataFormat.CSV && targetFormat === DataFormat.JSON) {
            return this.csvToJson(data as CsvData);
        }
        throw new Error('Unsupported conversion');
    }

    /**
     * JSONデータをCSVデータに変換します
     */
    private jsonToCsv(data: JsonData): CsvData {
        const jsonData = data.getData();
        
        // 単一オブジェクトの場合は配列に変換
        if (!Array.isArray(jsonData)) {
            throw new Error('JSON data must be an array of objects');
        }

        if (jsonData.length === 0) {
            return new CsvData([], []);
        }

        // 最初の要素がオブジェクトでない場合はエラー
        if (typeof jsonData[0] !== 'object' || jsonData[0] === null) {
            throw new Error('JSON data must be an array of objects');
        }

        // ヘッダーを取得（最初のオブジェクトのキーを使用）
        const headers = Object.keys(jsonData[0]);

        // 各行のデータを変換
        const rows = jsonData.map((obj: { [key: string]: any }) => {
            return headers.map(header => {
                const value = obj[header];
                return value !== undefined ? String(value) : '';
            });
        });

        return new CsvData(headers, rows);
    }

    /**
     * CSVデータをJSONデータに変換します
     */
    private csvToJson(data: CsvData): JsonData {
        const { headers, rows } = data.getData();
        const jsonArray = rows.map(row => {
            const obj: { [key: string]: string } = {};
            headers.forEach((header, index) => {
                obj[header] = row[index];
            });
            return obj;
        });
        return new JsonData(jsonArray);
    }
} 
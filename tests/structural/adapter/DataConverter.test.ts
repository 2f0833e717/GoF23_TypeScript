/**
 * データ変換システムのテスト
 */
import {
    DataFormat,
    JsonData,
    XmlData,
    CsvData,
    JsonXmlAdapter,
    JsonCsvAdapter
} from '../../../src/structural/adapter/DataConverter';

describe('Adapter Pattern - Data Converter', () => {
    describe('Data Formats', () => {
        describe('JSON Data', () => {
            test('should create valid JSON data', () => {
                const data = new JsonData({ name: 'John', age: 30 });
                expect(data.getFormat()).toBe(DataFormat.JSON);
                expect(data.toString()).toBe(JSON.stringify({ name: 'John', age: 30 }, null, 2));
            });

            test('should throw error for invalid JSON data', () => {
                const circularObj: any = { a: 1 };
                circularObj.self = circularObj;
                expect(() => new JsonData(circularObj)).toThrow('Invalid JSON data');
            });
        });

        describe('XML Data', () => {
            test('should create valid XML data', () => {
                const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<root><name>John</name></root>';
                const data = new XmlData(xml);
                expect(data.getFormat()).toBe(DataFormat.XML);
                expect(data.toString()).toBe(xml);
            });

            test('should throw error for invalid XML data', () => {
                expect(() => new XmlData('invalid xml')).toThrow('Invalid XML data');
            });
        });

        describe('CSV Data', () => {
            test('should create valid CSV data', () => {
                const headers = ['name', 'age'];
                const rows = [['John', '30'], ['Jane', '25']];
                const data = new CsvData(headers, rows);
                expect(data.getFormat()).toBe(DataFormat.CSV);
                expect(data.toString()).toBe('name,age\nJohn,30\nJane,25');
            });

            test('should throw error for invalid CSV data', () => {
                const headers = ['name', 'age'];
                const rows = [['John'], ['Jane', '25']]; // 不正な行の長さ
                expect(() => new CsvData(headers, rows)).toThrow('CSV row length must match header length');
            });

            test('should throw error for empty headers', () => {
                expect(() => new CsvData([], [])).toThrow('CSV must have headers');
            });
        });
    });

    describe('JSON-XML Conversion', () => {
        const adapter = new JsonXmlAdapter();

        test('should convert JSON to XML', () => {
            const jsonData = new JsonData({
                person: {
                    name: 'John',
                    age: 30,
                    address: {
                        city: 'Tokyo',
                        country: 'Japan'
                    }
                }
            });

            const xmlData = adapter.convert(jsonData, DataFormat.XML) as XmlData;
            expect(xmlData.getFormat()).toBe(DataFormat.XML);
            expect(xmlData.toString()).toContain('<?xml version="1.0" encoding="UTF-8"?>');
            expect(xmlData.toString()).toContain('<person>');
            expect(xmlData.toString()).toContain('<name>John</name>');
            expect(xmlData.toString()).toContain('<age>30</age>');
            expect(xmlData.toString()).toContain('<city>Tokyo</city>');
            expect(xmlData.toString()).toContain('<country>Japan</country>');
        });

        test('should convert XML to JSON', () => {
            const xml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
<name>John</name>
<age>30</age>
</root>`;
            const xmlData = new XmlData(xml);

            const jsonData = adapter.convert(xmlData, DataFormat.JSON) as JsonData;
            expect(jsonData.getFormat()).toBe(DataFormat.JSON);
            const data = jsonData.getData();
            expect(data.name).toBe('John');
            expect(data.age).toBe('30');
        });

        test('should throw error for unsupported conversion', () => {
            const jsonData = new JsonData({ name: 'John' });
            expect(() => adapter.convert(jsonData, DataFormat.CSV)).toThrow('Unsupported conversion');
        });
    });

    describe('JSON-CSV Conversion', () => {
        const adapter = new JsonCsvAdapter();

        test('should convert JSON to CSV', () => {
            const jsonData = new JsonData([
                { name: 'John', age: 30, city: 'Tokyo' },
                { name: 'Jane', age: 25, city: 'Osaka' }
            ]);

            const csvData = adapter.convert(jsonData, DataFormat.CSV) as CsvData;
            expect(csvData.getFormat()).toBe(DataFormat.CSV);
            expect(csvData.toString()).toBe('name,age,city\nJohn,30,Tokyo\nJane,25,Osaka');
        });

        test('should convert CSV to JSON', () => {
            const headers = ['name', 'age', 'city'];
            const rows = [
                ['John', '30', 'Tokyo'],
                ['Jane', '25', 'Osaka']
            ];
            const csvData = new CsvData(headers, rows);

            const jsonData = adapter.convert(csvData, DataFormat.JSON) as JsonData;
            expect(jsonData.getFormat()).toBe(DataFormat.JSON);
            const data = jsonData.getData();
            expect(data).toHaveLength(2);
            expect(data[0]).toEqual({ name: 'John', age: '30', city: 'Tokyo' });
            expect(data[1]).toEqual({ name: 'Jane', age: '25', city: 'Osaka' });
        });

        test('should throw error for invalid JSON to CSV conversion', () => {
            const jsonData = new JsonData({ name: 'John' }); // オブジェクト（配列ではない）
            expect(() => adapter.convert(jsonData, DataFormat.CSV)).toThrow('JSON data must be an array of objects');
        });

        test('should throw error for unsupported conversion', () => {
            const csvData = new CsvData(['name'], [['John']]);
            expect(() => adapter.convert(csvData, DataFormat.XML)).toThrow('Unsupported conversion');
        });
    });
}); 
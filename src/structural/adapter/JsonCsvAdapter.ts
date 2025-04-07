/**
 * JSONデータをCSV形式に変換するアダプタークラス
 * 
 * - JSONデータは配列形式である必要があります
 * - 各要素はオブジェクトである必要があります
 * - 空の配列は許可されません
 */
export class JsonCsvAdapter {
    /**
     * JSONデータをCSV形式に変換します
     * @param jsonData JSON形式のデータ
     * @returns CSV形式の文字列
     * @throws Error 無効なJSONデータの場合
     */
    jsonToCsv(jsonData: any): string {
        if (!Array.isArray(jsonData)) {
            throw new Error('JSONデータは配列である必要があります');
        }

        if (jsonData.length === 0) {
            throw new Error('空の配列は許可されません');
        }

        const firstElement = jsonData[0];
        if (typeof firstElement !== 'object' || firstElement === null) {
            throw new Error('配列の要素はオブジェクトである必要があります');
        }

        const headers = Object.keys(firstElement);
        if (headers.length === 0) {
            throw new Error('オブジェクトは少なくとも1つのプロパティを持つ必要があります');
        }

        const csvRows = [headers.join(',')];

        for (const item of jsonData) {
            if (typeof item !== 'object' || item === null) {
                throw new Error('配列の要素はオブジェクトである必要があります');
            }
            const values = headers.map(header => {
                const value = item[header];
                if (typeof value === 'string' && value.includes(',')) {
                    return `"${value}"`;
                }
                return value !== undefined ? String(value) : '';
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }
} 
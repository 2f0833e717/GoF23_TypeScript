/**
 * 製品クラス
 * 
 * 複雑なオブジェクトを表現します。
 * このクラスは、様々なパーツから構成される複雑なオブジェクトを定義します。
 */
export class Product {
    private parts: string[] = [];

    /**
     * パーツを追加します
     * @param part 追加するパーツ
     */
    public add(part: string): void {
        this.parts.push(part);
    }

    /**
     * 製品の構成パーツを一覧表示します
     * @returns {string} パーツのリスト
     */
    public listParts(): string {
        return `製品のパーツ: ${this.parts.join(', ')}\n`;
    }
} 
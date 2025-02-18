/**
 * 製品のインターフェース
 * 
 * Factory Methodパターンで生成される製品のインターフェースを定義します。
 * すべての具象製品クラスはこのインターフェースを実装する必要があります。
 */
export interface Product {
    /**
     * 製品の操作を実行します
     * @returns {string} 操作の結果
     */
    operation(): string;
} 
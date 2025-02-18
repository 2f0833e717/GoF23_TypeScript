import { Product } from './Product';

/**
 * クリエイター
 * 
 * ファクトリーメソッドを宣言する抽象クラスです。
 * このクラスは、新しい製品オブジェクトを返すファクトリーメソッドのデフォルト実装も提供できます。
 */
export abstract class Creator {
    /**
     * ファクトリーメソッド
     * 
     * サブクラスで実装される必要があります。
     * @returns {Product} 生成された製品オブジェクト
     */
    protected abstract factoryMethod(): Product;

    /**
     * クリエイターのメインのビジネスロジック
     * 
     * ファクトリーメソッドを呼び出して製品オブジェクトを取得し、それを使用します。
     * @returns {string} 操作の結果
     */
    someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
} 
/**
 * 抽象製品A
 * 
 * 製品Aのインターフェースを宣言します。
 * すべての具象製品はこのインターフェースを実装する必要があります。
 */
export interface AbstractProductA {
    /**
     * 製品Aの操作を実行します
     * @returns {string} 操作の結果
     */
    operationA(): string;
}

/**
 * 抽象製品B
 * 
 * 製品Bのインターフェースを宣言します。
 * すべての具象製品はこのインターフェースを実装する必要があります。
 */
export interface AbstractProductB {
    /**
     * 製品Bの操作を実行します
     * @returns {string} 操作の結果
     */
    operationB(): string;

    /**
     * 製品Bと製品Aを組み合わせた操作を実行します
     * @param collaborator 協力する製品A
     * @returns {string} コラボレーションの結果
     */
    anotherOperationB(collaborator: AbstractProductA): string;
} 
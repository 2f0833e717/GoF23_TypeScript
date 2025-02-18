import { AbstractProductA, AbstractProductB } from './AbstractProducts';

/**
 * 具象製品A1
 * 
 * 製品Aのバリエーション1を実装します。
 */
export class ConcreteProductA1 implements AbstractProductA {
    /**
     * 製品A1の操作を実行します
     * @returns {string} 操作の結果
     */
    public operationA(): string {
        return 'The result of the product A1.';
    }
}

/**
 * 具象製品A2
 * 
 * 製品Aのバリエーション2を実装します。
 */
export class ConcreteProductA2 implements AbstractProductA {
    /**
     * 製品A2の操作を実行します
     * @returns {string} 操作の結果
     */
    public operationA(): string {
        return 'The result of the product A2.';
    }
}

/**
 * 具象製品B1
 * 
 * 製品Bのバリエーション1を実装します。
 */
export class ConcreteProductB1 implements AbstractProductB {
    /**
     * 製品B1の操作を実行します
     * @returns {string} 操作の結果
     */
    public operationB(): string {
        return 'The result of the product B1.';
    }

    /**
     * 製品B1と製品Aを組み合わせた操作を実行します
     * @param collaborator 協力する製品A
     * @returns {string} コラボレーションの結果
     */
    public anotherOperationB(collaborator: AbstractProductA): string {
        const result = collaborator.operationA();
        return `The result of the B1 collaborating with (${result})`;
    }
}

/**
 * 具象製品B2
 * 
 * 製品Bのバリエーション2を実装します。
 */
export class ConcreteProductB2 implements AbstractProductB {
    /**
     * 製品B2の操作を実行します
     * @returns {string} 操作の結果
     */
    public operationB(): string {
        return 'The result of the product B2.';
    }

    /**
     * 製品B2と製品Aを組み合わせた操作を実行します
     * @param collaborator 協力する製品A
     * @returns {string} コラボレーションの結果
     */
    public anotherOperationB(collaborator: AbstractProductA): string {
        const result = collaborator.operationA();
        return `The result of the B2 collaborating with (${result})`;
    }
} 
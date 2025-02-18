import { AbstractProductA, AbstractProductB } from './AbstractProducts';

/**
 * 抽象ファクトリー
 * 
 * 異なる抽象製品を生成するためのインターフェースを宣言します。
 */
export interface AbstractFactory {
    /**
     * 製品Aを生成します
     * @returns {AbstractProductA} 生成された製品A
     */
    createProductA(): AbstractProductA;

    /**
     * 製品Bを生成します
     * @returns {AbstractProductB} 生成された製品B
     */
    createProductB(): AbstractProductB;
} 
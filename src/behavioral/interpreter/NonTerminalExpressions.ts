/**
 * 非終端式
 * 
 * 演算子を表す非終端式を実装します。
 * これらは他の式を組み合わせて複雑な式を構築します。
 */
import { Expression, Context } from './Expression';

/**
 * 加算式
 * 2つの式の和を計算します。
 */
export class AddExpression implements Expression {
    /**
     * コンストラクタ
     * @param left 左辺の式
     * @param right 右辺の式
     */
    constructor(
        private readonly left: Expression,
        private readonly right: Expression
    ) { }

    interpret(context: Context): number {
        return this.left.interpret(context) + this.right.interpret(context);
    }

    toString(): string {
        return `(${this.left.toString()} + ${this.right.toString()})`;
    }
}

/**
 * 減算式
 * 2つの式の差を計算します。
 */
export class SubtractExpression implements Expression {
    /**
     * コンストラクタ
     * @param left 左辺の式
     * @param right 右辺の式
     */
    constructor(
        private readonly left: Expression,
        private readonly right: Expression
    ) { }

    interpret(context: Context): number {
        return this.left.interpret(context) - this.right.interpret(context);
    }

    toString(): string {
        return `(${this.left.toString()} - ${this.right.toString()})`;
    }
}

/**
 * 乗算式
 * 2つの式の積を計算します。
 */
export class MultiplyExpression implements Expression {
    /**
     * コンストラクタ
     * @param left 左辺の式
     * @param right 右辺の式
     */
    constructor(
        private readonly left: Expression,
        private readonly right: Expression
    ) { }

    interpret(context: Context): number {
        return this.left.interpret(context) * this.right.interpret(context);
    }

    toString(): string {
        return `(${this.left.toString()} * ${this.right.toString()})`;
    }
}

/**
 * 除算式
 * 2つの式の商を計算します。
 */
export class DivideExpression implements Expression {
    /**
     * コンストラクタ
     * @param left 左辺の式
     * @param right 右辺の式
     */
    constructor(
        private readonly left: Expression,
        private readonly right: Expression
    ) { }

    interpret(context: Context): number {
        const divisor = this.right.interpret(context);
        if (divisor === 0) {
            throw new Error('0による除算はできません');
        }
        return this.left.interpret(context) / divisor;
    }

    toString(): string {
        return `(${this.left.toString()} / ${this.right.toString()})`;
    }
} 
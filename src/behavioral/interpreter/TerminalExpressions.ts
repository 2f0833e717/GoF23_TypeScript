/**
 * 終端式
 * 
 * 数値と変数を表す終端式を実装します。
 * これらは式の最も基本的な構成要素となります。
 */
import { Expression, Context } from './Expression';

/**
 * 数値式
 * 具体的な数値を表現します。
 */
export class NumberExpression implements Expression {
    /**
     * コンストラクタ
     * @param value 数値
     */
    constructor(private readonly value: number) {}

    interpret(context: Context): number {
        return this.value;
    }

    toString(): string {
        return this.value.toString();
    }
}

/**
 * 変数式
 * 変数を表現します。
 */
export class VariableExpression implements Expression {
    /**
     * コンストラクタ
     * @param name 変数名
     */
    constructor(private readonly name: string) {}

    interpret(context: Context): number {
        return context.getVariable(this.name);
    }

    toString(): string {
        return this.name;
    }
} 
/**
 * Interpreterパターンの使用例
 * 
 * 数式の解析と評価を行う例を示します。
 * 四則演算と変数を含む式を解析し、結果を計算します。
 */
import { Context } from '../../../src/behavioral/interpreter/Expression';
import { ExpressionParser } from '../../../src/behavioral/interpreter/ExpressionParser';

export function runInterpreterExample(): void {
    console.log('Interpreterパターンの実行例:');
    console.log('--------------------------------');

    const context = new Context();
    const parser = new ExpressionParser();

    // 1. 基本的な四則演算
    console.log('1. 基本的な四則演算:');
    const expressions = [
        '2 + 3',
        '10 - 5',
        '4 * 3',
        '15 / 3'
    ];

    expressions.forEach(exp => {
        const expression = parser.parse(exp);
        console.log(`式: ${exp}`);
        console.log(`構文木: ${expression.toString()}`);
        console.log(`結果: ${expression.interpret(context)}`);
        console.log();
    });

    // 2. 演算子の優先順位
    console.log('2. 演算子の優先順位:');
    const complexExpressions = [
        '2 + 3 * 4',
        '(2 + 3) * 4',
        '10 - 2 * 3 + 4'
    ];

    complexExpressions.forEach(exp => {
        const expression = parser.parse(exp);
        console.log(`式: ${exp}`);
        console.log(`構文木: ${expression.toString()}`);
        console.log(`結果: ${expression.interpret(context)}`);
        console.log();
    });

    // 3. 変数を含む式
    console.log('3. 変数を含む式:');
    context.setVariable('x', 10);
    context.setVariable('y', 5);

    const variableExpressions = [
        'x + y',
        'x * y',
        '(x + y) * (x - y)',
        'x * y / 2 + 5'
    ];

    variableExpressions.forEach(exp => {
        const expression = parser.parse(exp);
        console.log(`式: ${exp}`);
        console.log(`変数: x = ${context.getVariable('x')}, y = ${context.getVariable('y')}`);
        console.log(`構文木: ${expression.toString()}`);
        console.log(`結果: ${expression.interpret(context)}`);
        console.log();
    });

    // 4. エラー処理
    console.log('4. エラー処理:');
    const invalidExpressions = [
        '2 + ',            // 不完全な式
        '(2 + 3',         // 閉じられていない括弧
        '2 @ 3',          // 不正な演算子
        'z + 1',          // 未定義の変数
        '5 / 0'           // ゼロ除算
    ];

    invalidExpressions.forEach(exp => {
        try {
            console.log(`式: ${exp}`);
            const expression = parser.parse(exp);
            expression.interpret(context);
        } catch (error) {
            console.log(`エラー: ${error.message}`);
        }
        console.log();
    });

    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runInterpreterExample();
} 
/**
 * Interpreterパターンのテスト
 * 
 * 数式の解析と評価機能をテストします。
 */
import { Context } from '../../../src/behavioral/interpreter/Expression';
import { NumberExpression, VariableExpression } from '../../../src/behavioral/interpreter/TerminalExpressions';
import { AddExpression, SubtractExpression, MultiplyExpression, DivideExpression } from '../../../src/behavioral/interpreter/NonTerminalExpressions';
import { ExpressionParser } from '../../../src/behavioral/interpreter/ExpressionParser';

describe('Interpreter Pattern', () => {
    let context: Context;
    let parser: ExpressionParser;

    beforeEach(() => {
        context = new Context();
        parser = new ExpressionParser();
    });

    describe('Terminal Expressions', () => {
        test('should evaluate number expression', () => {
            const expression = new NumberExpression(42);
            expect(expression.interpret(context)).toBe(42);
            expect(expression.toString()).toBe('42');
        });

        test('should evaluate variable expression', () => {
            context.setVariable('x', 10);
            const expression = new VariableExpression('x');
            expect(expression.interpret(context)).toBe(10);
            expect(expression.toString()).toBe('x');
        });

        test('should throw error for undefined variable', () => {
            const expression = new VariableExpression('y');
            expect(() => expression.interpret(context)).toThrow('変数 "y" が見つかりません');
        });
    });

    describe('Non-terminal Expressions', () => {
        test('should evaluate addition expression', () => {
            const expression = new AddExpression(
                new NumberExpression(5),
                new NumberExpression(3)
            );
            expect(expression.interpret(context)).toBe(8);
            expect(expression.toString()).toBe('(5 + 3)');
        });

        test('should evaluate subtraction expression', () => {
            const expression = new SubtractExpression(
                new NumberExpression(5),
                new NumberExpression(3)
            );
            expect(expression.interpret(context)).toBe(2);
            expect(expression.toString()).toBe('(5 - 3)');
        });

        test('should evaluate multiplication expression', () => {
            const expression = new MultiplyExpression(
                new NumberExpression(5),
                new NumberExpression(3)
            );
            expect(expression.interpret(context)).toBe(15);
            expect(expression.toString()).toBe('(5 * 3)');
        });

        test('should evaluate division expression', () => {
            const expression = new DivideExpression(
                new NumberExpression(6),
                new NumberExpression(2)
            );
            expect(expression.interpret(context)).toBe(3);
            expect(expression.toString()).toBe('(6 / 2)');
        });

        test('should throw error for division by zero', () => {
            const expression = new DivideExpression(
                new NumberExpression(5),
                new NumberExpression(0)
            );
            expect(() => expression.interpret(context)).toThrow('0による除算はできません');
        });
    });

    describe('Expression Parser', () => {
        test('should parse and evaluate simple expressions', () => {
            expect(parser.parse('2 + 3').interpret(context)).toBe(5);
            expect(parser.parse('5 - 3').interpret(context)).toBe(2);
            expect(parser.parse('4 * 2').interpret(context)).toBe(8);
            expect(parser.parse('8 / 2').interpret(context)).toBe(4);
        });

        test('should handle operator precedence', () => {
            expect(parser.parse('2 + 3 * 4').interpret(context)).toBe(14);
            expect(parser.parse('(2 + 3) * 4').interpret(context)).toBe(20);
            expect(parser.parse('10 - 2 * 3').interpret(context)).toBe(4);
        });

        test('should handle variables in expressions', () => {
            context.setVariable('x', 5);
            context.setVariable('y', 3);
            expect(parser.parse('x + y').interpret(context)).toBe(8);
            expect(parser.parse('x * y + 2').interpret(context)).toBe(17);
        });

        test('should handle complex expressions', () => {
            context.setVariable('a', 10);
            context.setVariable('b', 5);
            const expression = '(a + b) * (a - b) / 2';
            expect(parser.parse(expression).interpret(context)).toBe(37.5);

            // 計算過程の確認
            // (10 + 5) * (10 - 5) / 2
            // 15 * 5 / 2
            // 75 / 2
            // 37.5
        });

        test('should throw error for invalid expressions', () => {
            expect(() => parser.parse('2 +')).toThrow('式が不完全です');
            expect(() => parser.parse('(2 + 3')).toThrow('括弧が閉じられていません');
            expect(() => parser.parse('2 @ 3')).toThrow('不正なトークンです: @');
        });
    });
}); 
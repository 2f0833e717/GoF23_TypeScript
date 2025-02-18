/**
 * 式パーサー
 * 
 * 文字列で表現された数式を解析し、式オブジェクトのツリーを構築します。
 * 簡単な四則演算と変数を含む式を解析できます。
 */
import { Expression } from './Expression';
import { NumberExpression, VariableExpression } from './TerminalExpressions';
import { AddExpression, SubtractExpression, MultiplyExpression, DivideExpression } from './NonTerminalExpressions';

export class ExpressionParser {
    private tokens: string[] = [];
    private position: number = 0;

    /**
     * 数式を解析します
     * @param expression 解析する数式
     * @returns 式オブジェクト
     * @throws Error 式が不正な場合
     */
    parse(expression: string): Expression {
        // 式を字句解析してトークンに分割
        this.tokenize(expression);
        this.position = 0;

        if (this.tokens.length === 0) {
            throw new Error('式が空です');
        }

        // 式を解析
        const result = this.parseExpression();

        // 余分なトークンがないか確認
        if (this.position < this.tokens.length) {
            throw new Error(`予期しないトークンです: ${this.tokens[this.position]}`);
        }

        return result;
    }

    /**
     * 式を字句解析してトークンに分割します
     * @param expression 解析する式
     */
    private tokenize(expression: string): void {
        // 不正な文字をチェック
        const invalidChars = expression.match(/[^0-9a-zA-Z_+\-*/()\s.]/g);
        if (invalidChars) {
            throw new Error(`不正なトークンです: ${invalidChars[0]}`);
        }

        // 空白を除去し、演算子の前後にスペースを追加
        const normalized = expression
            .replace(/\s+/g, '')
            .replace(/([+\-*/()])/g, ' $1 ');

        // トークンに分割
        this.tokens = normalized.trim().split(/\s+/).filter(token => token.length > 0);

        // 不完全な式をチェック
        if (this.tokens.length > 0) {
            const lastToken = this.tokens[this.tokens.length - 1];
            if (['+', '-', '*', '/'].includes(lastToken)) {
                throw new Error('式が不完全です');
            }
        }
    }

    /**
     * 式を解析します
     */
    private parseExpression(): Expression {
        let left = this.parseTerm();

        while (this.position < this.tokens.length) {
            const operator = this.tokens[this.position];
            if (operator !== '+' && operator !== '-') {
                break;
            }

            this.position++;
            if (this.position >= this.tokens.length) {
                throw new Error('式が不完全です');
            }

            const right = this.parseTerm();

            if (operator === '+') {
                left = new AddExpression(left, right);
            } else {
                left = new SubtractExpression(left, right);
            }
        }

        return left;
    }

    /**
     * 項を解析します
     */
    private parseTerm(): Expression {
        let left = this.parseFactor();

        while (this.position < this.tokens.length) {
            const operator = this.tokens[this.position];
            if (operator !== '*' && operator !== '/') {
                break;
            }

            this.position++;
            if (this.position >= this.tokens.length) {
                throw new Error('式が不完全です');
            }

            const right = this.parseFactor();

            if (operator === '*') {
                left = new MultiplyExpression(left, right);
            } else {
                left = new DivideExpression(left, right);
            }
        }

        return left;
    }

    /**
     * 因子を解析します
     */
    private parseFactor(): Expression {
        if (this.position >= this.tokens.length) {
            throw new Error('式が不完全です');
        }

        const token = this.tokens[this.position];

        if (token === '(') {
            // 括弧内の式を解析
            this.position++;
            if (this.position >= this.tokens.length) {
                throw new Error('式が不完全です');
            }

            const expression = this.parseExpression();

            if (this.position >= this.tokens.length || this.tokens[this.position] !== ')') {
                throw new Error('括弧が閉じられていません');
            }

            this.position++;
            return expression;
        }

        this.position++;

        // 数値の場合
        if (/^-?\d+(\.\d+)?$/.test(token)) {
            return new NumberExpression(parseFloat(token));
        }

        // 変数の場合
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
            return new VariableExpression(token);
        }

        throw new Error(`不正なトークンです: ${token}`);
    }
} 
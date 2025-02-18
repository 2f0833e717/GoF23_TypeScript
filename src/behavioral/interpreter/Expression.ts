/**
 * 式インターフェース
 * 
 * 数式の解釈と評価を行うための基本インターフェースです。
 * すべての具象式クラスはこのインターフェースを実装する必要があります。
 */

/**
 * 式の評価コンテキスト
 * 変数の値を保持します。
 */
export class Context {
    private variables: Map<string, number> = new Map();

    /**
     * 変数に値を設定します
     * @param name 変数名
     * @param value 値
     */
    setVariable(name: string, value: number): void {
        this.variables.set(name, value);
    }

    /**
     * 変数の値を取得します
     * @param name 変数名
     * @returns 変数の値
     * @throws Error 変数が存在しない場合
     */
    getVariable(name: string): number {
        const value = this.variables.get(name);
        if (value === undefined) {
            throw new Error(`変数 "${name}" が見つかりません`);
        }
        return value;
    }
}

/**
 * 式インターフェース
 * すべての式はこのインターフェースを実装します。
 */
export interface Expression {
    /**
     * 式を評価します
     * @param context 評価コンテキスト
     * @returns 評価結果
     */
    interpret(context: Context): number;

    /**
     * 式を文字列として取得します
     */
    toString(): string;
} 
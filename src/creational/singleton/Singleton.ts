/**
 * シングルトンパターン
 * 
 * クラスのインスタンスが1つだけ存在することを保証し、
 * そのインスタンスへのグローバルなアクセスポイントを提供します。
 * 
 * @class Singleton
 */
export class Singleton {
    private static instance: Singleton | null = null;
    private data: string = '';

    /**
     * コンストラクタ
     * privateに設定することで、new演算子による直接のインスタンス化を防ぎます
     */
    private constructor() {
        // new.targetはコンストラクタが new 演算子で呼び出された場合に true となります
        if (Singleton.instance) {
            throw new Error('このクラスは new による直接のインスタンス化はできません。getInstance() を使用してください。');
        }
    }

    /**
     * シングルトンインスタンスを取得します
     * @returns {Singleton} シングルトンインスタンス
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * データを設定します
     * @param {string} data - 設定するデータ
     */
    public setData(data: string): void {
        this.data = data;
    }

    /**
     * データを取得します
     * @returns {string} 設定されているデータ
     */
    public getData(): string {
        return this.data;
    }
} 
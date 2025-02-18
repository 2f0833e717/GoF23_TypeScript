/**
 * イテレーターインターフェース
 * 
 * コレクションの要素を順番に走査するためのインターフェースを定義します。
 */
export interface Iterator<T> {
    /**
     * 次の要素が存在するかを確認します
     * @returns 次の要素が存在する場合はtrue
     */
    hasNext(): boolean;

    /**
     * 次の要素を取得します
     * @returns 次の要素
     * @throws Error 次の要素が存在しない場合
     */
    next(): T;

    /**
     * 現在の要素を取得します
     * @returns 現在の要素
     * @throws Error イテレーションが開始されていない場合
     */
    current(): T;

    /**
     * イテレーションをリセットします
     */
    reset(): void;
}

/**
 * 集約インターフェース
 * 
 * イテレーターを生成するためのインターフェースを定義します。
 */
export interface Aggregate<T> {
    /**
     * イテレーターを生成します
     * @returns 新しいイテレーター
     */
    createIterator(): Iterator<T>;
} 
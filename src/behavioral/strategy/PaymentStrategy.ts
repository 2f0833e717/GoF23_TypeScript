/**
 * 支払い方法のStrategyパターン
 * 
 * 異なる支払い方法をカプセル化し、実行時に切り替え可能な
 * アルゴリズムとして提供します。
 */

/**
 * 支払い情報のインターフェース
 */
export interface PaymentInfo {
    amount: number;           // 支払い金額
    currency: string;         // 通貨
    description: string;      // 支払いの説明
    timestamp: Date;          // 支払い時刻
}

/**
 * 支払い結果のインターフェース
 */
export interface PaymentResult {
    success: boolean;         // 支払い成功フラグ
    transactionId: string;    // 取引ID
    message: string;          // 結果メッセージ
    timestamp: Date;          // 処理時刻
}

/**
 * 支払い方法のインターフェース
 * 
 * すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。
 */
export interface PaymentStrategy {
    /**
     * 支払いを実行します
     * @param info 支払い情報
     * @returns 支払い結果
     */
    pay(info: PaymentInfo): PaymentResult;

    /**
     * 支払い方法の名前を取得します
     */
    getName(): string;

    /**
     * 支払い方法の説明を取得します
     */
    getDescription(): string;

    /**
     * この支払い方法が利用可能かを確認します
     */
    isAvailable(): boolean;
} 
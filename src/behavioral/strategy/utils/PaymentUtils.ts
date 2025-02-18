/**
 * 支払い処理のユーティリティ関数
 */

/**
 * トランザクションIDを生成します
 * @returns 生成されたトランザクションID
 */
export function generateTransactionId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `TRX-${timestamp}-${random}`.toUpperCase();
}

/**
 * 金額をフォーマットします
 * @param amount 金額
 * @param currency 通貨
 * @returns フォーマットされた金額文字列
 */
export function formatAmount(amount: number, currency: string): string {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

/**
 * 日時をフォーマットします
 * @param date 日時
 * @returns フォーマットされた日時文字列
 */
export function formatDateTime(date: Date): string {
    return new Intl.DateTimeFormat('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(date);
} 
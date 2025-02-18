/**
 * 支払い処理クラス
 * 
 * 支払い方法（Strategy）を使用して支払い処理を実行します。
 * コンテキストとして機能し、実行時に異なる支払い方法を切り替えることができます。
 */
import { PaymentStrategy, PaymentInfo, PaymentResult } from './PaymentStrategy';
import { formatAmount, formatDateTime } from './utils/PaymentUtils';

export class PaymentProcessor {
    private strategy: PaymentStrategy | null = null;
    private paymentHistory: PaymentResult[] = [];

    /**
     * 支払い方法を設定します
     * @param strategy 支払い方法
     */
    setPaymentStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
        console.log(`支払い方法を設定: ${strategy.getName()}`);
    }

    /**
     * 支払いを実行します
     * @param amount 金額
     * @param currency 通貨
     * @param description 説明
     * @returns 支払い結果
     * @throws Error 支払い方法が設定されていない場合
     */
    processPayment(amount: number, currency: string, description: string): PaymentResult {
        if (!this.strategy) {
            throw new Error('支払い方法が設定されていません');
        }

        if (!this.strategy.isAvailable()) {
            throw new Error(`${this.strategy.getName()}は現在利用できません`);
        }

        const paymentInfo: PaymentInfo = {
            amount,
            currency,
            description,
            timestamp: new Date()
        };

        console.log('支払い処理を開始します:');
        console.log(`金額: ${formatAmount(amount, currency)}`);
        console.log(`説明: ${description}`);
        console.log(`支払い方法: ${this.strategy.getDescription()}`);

        const result = this.strategy.pay(paymentInfo);
        this.paymentHistory.push(result);

        console.log('支払い処理が完了しました:');
        console.log(`取引ID: ${result.transactionId}`);
        console.log(`結果: ${result.success ? '成功' : '失敗'}`);
        console.log(`メッセージ: ${result.message}`);
        console.log(`処理日時: ${formatDateTime(result.timestamp)}`);

        return result;
    }

    /**
     * 現在の支払い方法を取得します
     */
    getCurrentStrategy(): PaymentStrategy | null {
        return this.strategy;
    }

    /**
     * 支払い履歴を取得します
     */
    getPaymentHistory(): PaymentResult[] {
        return [...this.paymentHistory];
    }

    /**
     * 支払い履歴をクリアします
     */
    clearHistory(): void {
        this.paymentHistory = [];
        console.log('支払い履歴をクリアしました');
    }
} 
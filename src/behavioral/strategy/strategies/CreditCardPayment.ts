/**
 * クレジットカード支払い
 * 
 * クレジットカードによる支払い処理を実装します。
 */
import { PaymentStrategy, PaymentInfo, PaymentResult } from '../PaymentStrategy';
import { generateTransactionId } from '../utils/PaymentUtils';

export interface CreditCardInfo {
    cardNumber: string;
    expiryMonth: number;
    expiryYear: number;
    cvv: string;
}

export class CreditCardPayment implements PaymentStrategy {
    private cardInfo: CreditCardInfo | null = null;

    constructor(cardInfo?: CreditCardInfo) {
        if (cardInfo) {
            this.setCardInfo(cardInfo);
        }
    }

    /**
     * カード情報を設定します
     * @param cardInfo カード情報
     */
    setCardInfo(cardInfo: CreditCardInfo): void {
        // 実際のアプリケーションでは、カード情報のバリデーションを行います
        this.cardInfo = cardInfo;
    }

    pay(info: PaymentInfo): PaymentResult {
        if (!this.cardInfo) {
            return {
                success: false,
                transactionId: generateTransactionId(),
                message: 'カード情報が設定されていません',
                timestamp: new Date()
            };
        }

        // 実際のアプリケーションでは、カード決済の処理を行います
        console.log(`クレジットカード決済を実行: ${info.amount}${info.currency}`);
        console.log(`カード番号: ${this.maskCardNumber(this.cardInfo.cardNumber)}`);

        return {
            success: true,
            transactionId: generateTransactionId(),
            message: 'クレジットカード決済が完了しました',
            timestamp: new Date()
        };
    }

    getName(): string {
        return 'クレジットカード';
    }

    getDescription(): string {
        if (this.cardInfo) {
            return `クレジットカード (${this.maskCardNumber(this.cardInfo.cardNumber)})`;
        }
        return 'クレジットカード';
    }

    isAvailable(): boolean {
        return this.cardInfo !== null;
    }

    /**
     * カード番号をマスクします
     * @param cardNumber カード番号
     * @returns マスクされたカード番号
     */
    private maskCardNumber(cardNumber: string): string {
        const last4Digits = cardNumber.slice(-4);
        return `****-****-****-${last4Digits}`;
    }
} 
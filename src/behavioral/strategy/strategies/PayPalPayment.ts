/**
 * PayPal支払い
 * 
 * PayPalによる支払い処理を実装します。
 */
import { PaymentStrategy, PaymentInfo, PaymentResult } from '../PaymentStrategy';
import { generateTransactionId } from '../utils/PaymentUtils';

export interface PayPalCredentials {
    email: string;
    token: string;
}

export class PayPalPayment implements PaymentStrategy {
    private credentials: PayPalCredentials | null = null;
    private isLoggedIn: boolean = false;

    constructor(credentials?: PayPalCredentials) {
        if (credentials) {
            this.login(credentials);
        }
    }

    /**
     * PayPalにログインします
     * @param credentials 認証情報
     */
    login(credentials: PayPalCredentials): void {
        // 実際のアプリケーションでは、PayPalのAPI認証を行います
        this.credentials = credentials;
        this.isLoggedIn = true;
        console.log(`PayPalにログイン: ${credentials.email}`);
    }

    /**
     * PayPalからログアウトします
     */
    logout(): void {
        this.credentials = null;
        this.isLoggedIn = false;
        console.log('PayPalからログアウトしました');
    }

    pay(info: PaymentInfo): PaymentResult {
        if (!this.isLoggedIn || !this.credentials) {
            return {
                success: false,
                transactionId: generateTransactionId(),
                message: 'PayPalにログインしていません',
                timestamp: new Date()
            };
        }

        // 実際のアプリケーションでは、PayPalのAPI呼び出しを行います
        console.log(`PayPal決済を実行: ${info.amount}${info.currency}`);
        console.log(`アカウント: ${this.credentials.email}`);

        return {
            success: true,
            transactionId: generateTransactionId(),
            message: 'PayPal決済が完了しました',
            timestamp: new Date()
        };
    }

    getName(): string {
        return 'PayPal';
    }

    getDescription(): string {
        if (this.credentials) {
            return `PayPal (${this.credentials.email})`;
        }
        return 'PayPal';
    }

    isAvailable(): boolean {
        return this.isLoggedIn && this.credentials !== null;
    }
} 
/**
 * 銀行振込支払い
 * 
 * 銀行振込による支払い処理を実装します。
 */
import { PaymentStrategy, PaymentInfo, PaymentResult } from '../PaymentStrategy';
import { generateTransactionId } from '../utils/PaymentUtils';

export interface BankAccountInfo {
    bankName: string;
    branchName: string;
    accountType: 'ordinary' | 'current';
    accountNumber: string;
    accountHolder: string;
}

export class BankTransferPayment implements PaymentStrategy {
    private readonly accountInfo: BankAccountInfo;

    constructor(accountInfo: BankAccountInfo) {
        this.accountInfo = accountInfo;
    }

    pay(info: PaymentInfo): PaymentResult {
        // 実際のアプリケーションでは、銀行APIとの連携や振込依頼の処理を行います
        console.log('銀行振込の処理を開始します:');
        console.log(`金額: ${info.amount}${info.currency}`);
        console.log('振込先口座情報:');
        console.log(`- 銀行名: ${this.accountInfo.bankName}`);
        console.log(`- 支店名: ${this.accountInfo.branchName}`);
        console.log(`- 口座種別: ${this.getAccountTypeJapanese()}`);
        console.log(`- 口座番号: ${this.accountInfo.accountNumber}`);
        console.log(`- 口座名義: ${this.accountInfo.accountHolder}`);

        return {
            success: true,
            transactionId: generateTransactionId(),
            message: '銀行振込の受付が完了しました',
            timestamp: new Date()
        };
    }

    getName(): string {
        return '銀行振込';
    }

    getDescription(): string {
        return `銀行振込 (${this.accountInfo.bankName} ${this.accountInfo.branchName})`;
    }

    isAvailable(): boolean {
        // 銀行振込は常に利用可能とします
        return true;
    }

    /**
     * 口座情報を取得します
     */
    getAccountInfo(): BankAccountInfo {
        return { ...this.accountInfo };
    }

    /**
     * 口座種別の日本語表記を取得します
     */
    private getAccountTypeJapanese(): string {
        return this.accountInfo.accountType === 'ordinary' ? '普通' : '当座';
    }
} 
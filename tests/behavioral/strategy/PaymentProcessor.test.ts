/**
 * Strategyパターンのテスト
 * 
 * 支払い処理システムのテストを行います。
 */
import { PaymentProcessor } from '../../../src/behavioral/strategy/PaymentProcessor';
import { CreditCardPayment, CreditCardInfo } from '../../../src/behavioral/strategy/strategies/CreditCardPayment';
import { PayPalPayment, PayPalCredentials } from '../../../src/behavioral/strategy/strategies/PayPalPayment';
import { BankTransferPayment, BankAccountInfo } from '../../../src/behavioral/strategy/strategies/BankTransferPayment';

describe('Strategy Pattern - Payment Processor', () => {
    let processor: PaymentProcessor;

    beforeEach(() => {
        processor = new PaymentProcessor();
    });

    describe('PaymentProcessor', () => {
        test('支払い方法が設定されていない場合はエラーが発生すること', () => {
            expect(() => {
                processor.processPayment(1000, 'JPY', 'テスト決済');
            }).toThrow('支払い方法が設定されていません');
        });

        test('支払い履歴の管理', () => {
            const bankAccount: BankAccountInfo = {
                bankName: 'テスト銀行',
                branchName: 'テスト支店',
                accountType: 'ordinary',
                accountNumber: '1234567',
                accountHolder: 'テスト太郎'
            };
            const strategy = new BankTransferPayment(bankAccount);

            processor.setPaymentStrategy(strategy);
            processor.processPayment(1000, 'JPY', 'テスト決済1');
            processor.processPayment(2000, 'JPY', 'テスト決済2');

            const history = processor.getPaymentHistory();
            expect(history).toHaveLength(2);
            expect(history[0].success).toBe(true);
            expect(history[1].success).toBe(true);

            processor.clearHistory();
            expect(processor.getPaymentHistory()).toHaveLength(0);
        });
    });

    describe('CreditCardPayment', () => {
        test('クレジットカード決済の実行', () => {
            const cardInfo: CreditCardInfo = {
                cardNumber: '4111111111111111',
                expiryMonth: 12,
                expiryYear: 2025,
                cvv: '123'
            };
            const strategy = new CreditCardPayment(cardInfo);

            processor.setPaymentStrategy(strategy);
            const result = processor.processPayment(5000, 'JPY', 'クレジットカード決済テスト');

            expect(result.success).toBe(true);
            expect(result.message).toContain('クレジットカード決済');
            expect(strategy.getDescription()).toContain('****-****-****-1111');
        });

        test('カード情報が設定されていない場合は決済が失敗すること', () => {
            const strategy = new CreditCardPayment();
            processor.setPaymentStrategy(strategy);

            expect(() => {
                processor.processPayment(5000, 'JPY', 'エラーテスト');
            }).toThrow('クレジットカードは現在利用できません');
        });
    });

    describe('PayPalPayment', () => {
        test('PayPal決済の実行', () => {
            const credentials: PayPalCredentials = {
                email: 'test@example.com',
                token: 'test-token'
            };
            const strategy = new PayPalPayment(credentials);

            processor.setPaymentStrategy(strategy);
            const result = processor.processPayment(3000, 'JPY', 'PayPal決済テスト');

            expect(result.success).toBe(true);
            expect(result.message).toContain('PayPal決済');
            expect(strategy.getDescription()).toContain('test@example.com');
        });

        test('ログアウト後は決済が失敗すること', () => {
            const credentials: PayPalCredentials = {
                email: 'test@example.com',
                token: 'test-token'
            };
            const strategy = new PayPalPayment(credentials);
            processor.setPaymentStrategy(strategy);

            strategy.logout();
            expect(() => {
                processor.processPayment(3000, 'JPY', 'エラーテスト');
            }).toThrow('PayPalは現在利用できません');
        });
    });

    describe('BankTransferPayment', () => {
        test('銀行振込の実行', () => {
            const bankAccount: BankAccountInfo = {
                bankName: 'テスト銀行',
                branchName: 'テスト支店',
                accountType: 'ordinary',
                accountNumber: '1234567',
                accountHolder: 'テスト太郎'
            };
            const strategy = new BankTransferPayment(bankAccount);

            processor.setPaymentStrategy(strategy);
            const result = processor.processPayment(100000, 'JPY', '銀行振込テスト');

            expect(result.success).toBe(true);
            expect(result.message).toContain('銀行振込');
            expect(strategy.getDescription()).toContain('テスト銀行');
            expect(strategy.getDescription()).toContain('テスト支店');
        });

        test('口座種別の日本語表示', () => {
            const ordinary: BankAccountInfo = {
                bankName: 'テスト銀行',
                branchName: 'テスト支店',
                accountType: 'ordinary',
                accountNumber: '1234567',
                accountHolder: 'テスト太郎'
            };
            const current: BankAccountInfo = {
                ...ordinary,
                accountType: 'current'
            };

            const ordinaryStrategy = new BankTransferPayment(ordinary);
            const currentStrategy = new BankTransferPayment(current);

            processor.setPaymentStrategy(ordinaryStrategy);
            let result = processor.processPayment(1000, 'JPY', '普通口座テスト');
            expect(result.success).toBe(true);

            processor.setPaymentStrategy(currentStrategy);
            result = processor.processPayment(1000, 'JPY', '当座口座テスト');
            expect(result.success).toBe(true);
        });
    });
}); 
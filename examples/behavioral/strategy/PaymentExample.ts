/**
 * Strategyパターンの使用例
 * 
 * 異なる支払い方法を実行時に切り替えながら、
 * 支払い処理を行う例を示します。
 */
import { PaymentProcessor } from '../../../src/behavioral/strategy/PaymentProcessor';
import { CreditCardPayment, CreditCardInfo } from '../../../src/behavioral/strategy/strategies/CreditCardPayment';
import { PayPalPayment, PayPalCredentials } from '../../../src/behavioral/strategy/strategies/PayPalPayment';
import { BankTransferPayment, BankAccountInfo } from '../../../src/behavioral/strategy/strategies/BankTransferPayment';
import { formatAmount } from '../../../src/behavioral/strategy/utils/PaymentUtils';

export function runStrategyExample(): void {
    console.log('Strategyパターンの実行例:');
    console.log('--------------------------------');

    const processor = new PaymentProcessor();

    // 1. クレジットカード決済
    console.log('1. クレジットカード決済:');
    const cardInfo: CreditCardInfo = {
        cardNumber: '4111111111111111',
        expiryMonth: 12,
        expiryYear: 2025,
        cvv: '123'
    };
    const creditCardPayment = new CreditCardPayment(cardInfo);
    processor.setPaymentStrategy(creditCardPayment);

    processor.processPayment(5000, 'JPY', 'クレジットカードでの商品購入');
    console.log();

    // 2. PayPal決済
    console.log('2. PayPal決済:');
    const credentials: PayPalCredentials = {
        email: 'customer@example.com',
        token: 'secure-token-123'
    };
    const paypalPayment = new PayPalPayment(credentials);
    processor.setPaymentStrategy(paypalPayment);

    processor.processPayment(3000, 'JPY', 'PayPalでのサービス料金');
    console.log();

    // 3. 銀行振込
    console.log('3. 銀行振込:');
    const bankAccount: BankAccountInfo = {
        bankName: '山田銀行',
        branchName: '東京支店',
        accountType: 'ordinary',
        accountNumber: '1234567',
        accountHolder: '山田商事株式会社'
    };
    const bankTransfer = new BankTransferPayment(bankAccount);
    processor.setPaymentStrategy(bankTransfer);

    processor.processPayment(100000, 'JPY', '契約金の支払い');
    console.log();

    // 4. 支払い履歴の表示
    console.log('4. 支払い履歴:');
    const history = processor.getPaymentHistory();
    history.forEach((result, index) => {
        console.log(`取引 ${index + 1}:`);
        console.log(`- 取引ID: ${result.transactionId}`);
        console.log(`- 状態: ${result.success ? '成功' : '失敗'}`);
        console.log(`- メッセージ: ${result.message}`);
        console.log();
    });

    // 5. エラーケース
    console.log('5. エラーケース:');

    // 5.1. カード情報なしでの決済
    console.log('5.1. カード情報なしでの決済:');
    const invalidCard = new CreditCardPayment();
    processor.setPaymentStrategy(invalidCard);
    processor.processPayment(1000, 'JPY', 'エラーテスト1');
    console.log();

    // 5.2. ログアウト後のPayPal決済
    console.log('5.2. ログアウト後のPayPal決済:');
    paypalPayment.logout();
    processor.setPaymentStrategy(paypalPayment);
    processor.processPayment(2000, 'JPY', 'エラーテスト2');
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runStrategyExample();
} 
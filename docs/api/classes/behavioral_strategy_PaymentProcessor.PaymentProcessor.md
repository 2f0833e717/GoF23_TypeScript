[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/strategy/PaymentProcessor](../modules/behavioral_strategy_PaymentProcessor.md) / PaymentProcessor

# Class: PaymentProcessor

[behavioral/strategy/PaymentProcessor](../modules/behavioral_strategy_PaymentProcessor.md).PaymentProcessor

## Table of contents

### Constructors

- [constructor](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#constructor)

### Methods

- [setPaymentStrategy](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#setpaymentstrategy)
- [processPayment](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#processpayment)
- [getCurrentStrategy](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#getcurrentstrategy)
- [getPaymentHistory](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#getpaymenthistory)
- [clearHistory](behavioral_strategy_PaymentProcessor.PaymentProcessor.md#clearhistory)

## Constructors

### constructor

• **new PaymentProcessor**(): [`PaymentProcessor`](behavioral_strategy_PaymentProcessor.PaymentProcessor.md)

#### Returns

[`PaymentProcessor`](behavioral_strategy_PaymentProcessor.PaymentProcessor.md)

## Methods

### setPaymentStrategy

▸ **setPaymentStrategy**(`strategy`): `void`

支払い方法を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strategy` | [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md) | 支払い方法 |

#### Returns

`void`

#### Defined in

behavioral/strategy/PaymentProcessor.ts:18

___

### processPayment

▸ **processPayment**(`amount`, `currency`, `description`): [`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払いを実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | 金額 |
| `currency` | `string` | 通貨 |
| `description` | `string` | 説明 |

#### Returns

[`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払い結果

**`Throws`**

Error 支払い方法が設定されていない場合

#### Defined in

behavioral/strategy/PaymentProcessor.ts:31

___

### getCurrentStrategy

▸ **getCurrentStrategy**(): ``null`` \| [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md)

現在の支払い方法を取得します

#### Returns

``null`` \| [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md)

#### Defined in

behavioral/strategy/PaymentProcessor.ts:67

___

### getPaymentHistory

▸ **getPaymentHistory**(): [`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)[]

支払い履歴を取得します

#### Returns

[`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)[]

#### Defined in

behavioral/strategy/PaymentProcessor.ts:74

___

### clearHistory

▸ **clearHistory**(): `void`

支払い履歴をクリアします

#### Returns

`void`

#### Defined in

behavioral/strategy/PaymentProcessor.ts:81

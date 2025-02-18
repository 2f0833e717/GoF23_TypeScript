[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/strategy/PaymentProcessor](../README.md) / PaymentProcessor

# Class: PaymentProcessor

Defined in: behavioral/strategy/PaymentProcessor.ts:10

## Constructors

### new PaymentProcessor()

> **new PaymentProcessor**(): [`PaymentProcessor`](PaymentProcessor.md)

#### Returns

[`PaymentProcessor`](PaymentProcessor.md)

## Methods

### setPaymentStrategy()

> **setPaymentStrategy**(`strategy`): `void`

Defined in: behavioral/strategy/PaymentProcessor.ts:18

支払い方法を設定します

#### Parameters

##### strategy

[`PaymentStrategy`](../../PaymentStrategy/interfaces/PaymentStrategy.md)

支払い方法

#### Returns

`void`

***

### processPayment()

> **processPayment**(`amount`, `currency`, `description`): [`PaymentResult`](../../PaymentStrategy/interfaces/PaymentResult.md)

Defined in: behavioral/strategy/PaymentProcessor.ts:31

支払いを実行します

#### Parameters

##### amount

`number`

金額

##### currency

`string`

通貨

##### description

`string`

説明

#### Returns

[`PaymentResult`](../../PaymentStrategy/interfaces/PaymentResult.md)

支払い結果

#### Throws

Error 支払い方法が設定されていない場合

***

### getCurrentStrategy()

> **getCurrentStrategy**(): `null` \| [`PaymentStrategy`](../../PaymentStrategy/interfaces/PaymentStrategy.md)

Defined in: behavioral/strategy/PaymentProcessor.ts:67

現在の支払い方法を取得します

#### Returns

`null` \| [`PaymentStrategy`](../../PaymentStrategy/interfaces/PaymentStrategy.md)

***

### getPaymentHistory()

> **getPaymentHistory**(): [`PaymentResult`](../../PaymentStrategy/interfaces/PaymentResult.md)[]

Defined in: behavioral/strategy/PaymentProcessor.ts:74

支払い履歴を取得します

#### Returns

[`PaymentResult`](../../PaymentStrategy/interfaces/PaymentResult.md)[]

***

### clearHistory()

> **clearHistory**(): `void`

Defined in: behavioral/strategy/PaymentProcessor.ts:81

支払い履歴をクリアします

#### Returns

`void`

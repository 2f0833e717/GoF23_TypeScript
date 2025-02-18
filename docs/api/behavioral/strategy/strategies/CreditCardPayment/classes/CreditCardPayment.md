[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/strategy/strategies/CreditCardPayment](../README.md) / CreditCardPayment

# Class: CreditCardPayment

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:16

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md)

## Constructors

### new CreditCardPayment()

> **new CreditCardPayment**(`cardInfo`?): [`CreditCardPayment`](CreditCardPayment.md)

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:19

#### Parameters

##### cardInfo?

[`CreditCardInfo`](../interfaces/CreditCardInfo.md)

#### Returns

[`CreditCardPayment`](CreditCardPayment.md)

## Methods

### setCardInfo()

> **setCardInfo**(`cardInfo`): `void`

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:29

カード情報を設定します

#### Parameters

##### cardInfo

[`CreditCardInfo`](../interfaces/CreditCardInfo.md)

カード情報

#### Returns

`void`

***

### pay()

> **pay**(`info`): [`PaymentResult`](../../../PaymentStrategy/interfaces/PaymentResult.md)

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:34

支払いを実行します

#### Parameters

##### info

[`PaymentInfo`](../../../PaymentStrategy/interfaces/PaymentInfo.md)

支払い情報

#### Returns

[`PaymentResult`](../../../PaymentStrategy/interfaces/PaymentResult.md)

支払い結果

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`pay`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#pay)

***

### getName()

> **getName**(): `string`

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:56

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getName`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getname)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:60

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getDescription`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getdescription)

***

### isAvailable()

> **isAvailable**(): `boolean`

Defined in: behavioral/strategy/strategies/CreditCardPayment.ts:67

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`isAvailable`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#isavailable)

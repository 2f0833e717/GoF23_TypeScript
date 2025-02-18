[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/strategy/strategies/PayPalPayment](../README.md) / PayPalPayment

# Class: PayPalPayment

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:14

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md)

## Constructors

### new PayPalPayment()

> **new PayPalPayment**(`credentials`?): [`PayPalPayment`](PayPalPayment.md)

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:18

#### Parameters

##### credentials?

[`PayPalCredentials`](../interfaces/PayPalCredentials.md)

#### Returns

[`PayPalPayment`](PayPalPayment.md)

## Methods

### login()

> **login**(`credentials`): `void`

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:28

PayPalにログインします

#### Parameters

##### credentials

[`PayPalCredentials`](../interfaces/PayPalCredentials.md)

認証情報

#### Returns

`void`

***

### logout()

> **logout**(): `void`

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:38

PayPalからログアウトします

#### Returns

`void`

***

### pay()

> **pay**(`info`): [`PaymentResult`](../../../PaymentStrategy/interfaces/PaymentResult.md)

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:44

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

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:66

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getName`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getname)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:70

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getDescription`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getdescription)

***

### isAvailable()

> **isAvailable**(): `boolean`

Defined in: behavioral/strategy/strategies/PayPalPayment.ts:77

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`isAvailable`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#isavailable)

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/strategy/strategies/BankTransferPayment](../README.md) / BankTransferPayment

# Class: BankTransferPayment

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:17

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md)

## Constructors

### new BankTransferPayment()

> **new BankTransferPayment**(`accountInfo`): [`BankTransferPayment`](BankTransferPayment.md)

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:20

#### Parameters

##### accountInfo

[`BankAccountInfo`](../interfaces/BankAccountInfo.md)

#### Returns

[`BankTransferPayment`](BankTransferPayment.md)

## Methods

### pay()

> **pay**(`info`): [`PaymentResult`](../../../PaymentStrategy/interfaces/PaymentResult.md)

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:24

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

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:43

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getName`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getname)

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:47

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`getDescription`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#getdescription)

***

### isAvailable()

> **isAvailable**(): `boolean`

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:51

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[`PaymentStrategy`](../../../PaymentStrategy/interfaces/PaymentStrategy.md).[`isAvailable`](../../../PaymentStrategy/interfaces/PaymentStrategy.md#isavailable)

***

### getAccountInfo()

> **getAccountInfo**(): [`BankAccountInfo`](../interfaces/BankAccountInfo.md)

Defined in: behavioral/strategy/strategies/BankTransferPayment.ts:59

口座情報を取得します

#### Returns

[`BankAccountInfo`](../interfaces/BankAccountInfo.md)

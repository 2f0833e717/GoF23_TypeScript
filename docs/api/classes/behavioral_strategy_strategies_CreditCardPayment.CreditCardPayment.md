[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/strategy/strategies/CreditCardPayment](../modules/behavioral_strategy_strategies_CreditCardPayment.md) / CreditCardPayment

# Class: CreditCardPayment

[behavioral/strategy/strategies/CreditCardPayment](../modules/behavioral_strategy_strategies_CreditCardPayment.md).CreditCardPayment

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md)

## Table of contents

### Constructors

- [constructor](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#constructor)

### Methods

- [setCardInfo](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#setcardinfo)
- [pay](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#pay)
- [getName](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#getname)
- [getDescription](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#getdescription)
- [isAvailable](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md#isavailable)

## Constructors

### constructor

• **new CreditCardPayment**(`cardInfo?`): [`CreditCardPayment`](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardInfo?` | [`CreditCardInfo`](../interfaces/behavioral_strategy_strategies_CreditCardPayment.CreditCardInfo.md) |

#### Returns

[`CreditCardPayment`](behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md)

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:19

## Methods

### setCardInfo

▸ **setCardInfo**(`cardInfo`): `void`

カード情報を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cardInfo` | [`CreditCardInfo`](../interfaces/behavioral_strategy_strategies_CreditCardPayment.CreditCardInfo.md) | カード情報 |

#### Returns

`void`

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:29

___

### pay

▸ **pay**(`info`): [`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払いを実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | [`PaymentInfo`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentInfo.md) | 支払い情報 |

#### Returns

[`PaymentResult`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払い結果

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[pay](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#pay)

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:34

___

### getName

▸ **getName**(): `string`

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getName](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getname)

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:56

___

### getDescription

▸ **getDescription**(): `string`

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getDescription](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getdescription)

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:60

___

### isAvailable

▸ **isAvailable**(): `boolean`

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[isAvailable](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#isavailable)

#### Defined in

behavioral/strategy/strategies/CreditCardPayment.ts:67

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/strategy/PaymentStrategy](../modules/behavioral_strategy_PaymentStrategy.md) / PaymentStrategy

# Interface: PaymentStrategy

[behavioral/strategy/PaymentStrategy](../modules/behavioral_strategy_PaymentStrategy.md).PaymentStrategy

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implemented by

- [`BankTransferPayment`](../classes/behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md)
- [`CreditCardPayment`](../classes/behavioral_strategy_strategies_CreditCardPayment.CreditCardPayment.md)
- [`PayPalPayment`](../classes/behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md)

## Table of contents

### Methods

- [pay](behavioral_strategy_PaymentStrategy.PaymentStrategy.md#pay)
- [getName](behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getname)
- [getDescription](behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getdescription)
- [isAvailable](behavioral_strategy_PaymentStrategy.PaymentStrategy.md#isavailable)

## Methods

### pay

▸ **pay**(`info`): [`PaymentResult`](behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払いを実行します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `info` | [`PaymentInfo`](behavioral_strategy_PaymentStrategy.PaymentInfo.md) | 支払い情報 |

#### Returns

[`PaymentResult`](behavioral_strategy_PaymentStrategy.PaymentResult.md)

支払い結果

#### Defined in

behavioral/strategy/PaymentStrategy.ts:39

___

### getName

▸ **getName**(): `string`

支払い方法の名前を取得します

#### Returns

`string`

#### Defined in

behavioral/strategy/PaymentStrategy.ts:44

___

### getDescription

▸ **getDescription**(): `string`

支払い方法の説明を取得します

#### Returns

`string`

#### Defined in

behavioral/strategy/PaymentStrategy.ts:49

___

### isAvailable

▸ **isAvailable**(): `boolean`

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Defined in

behavioral/strategy/PaymentStrategy.ts:54

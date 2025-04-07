[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/strategy/strategies/BankTransferPayment](../modules/behavioral_strategy_strategies_BankTransferPayment.md) / BankTransferPayment

# Class: BankTransferPayment

[behavioral/strategy/strategies/BankTransferPayment](../modules/behavioral_strategy_strategies_BankTransferPayment.md).BankTransferPayment

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md)

## Table of contents

### Constructors

- [constructor](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#constructor)

### Methods

- [pay](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#pay)
- [getName](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#getname)
- [getDescription](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#getdescription)
- [isAvailable](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#isavailable)
- [getAccountInfo](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md#getaccountinfo)

## Constructors

### constructor

• **new BankTransferPayment**(`accountInfo`): [`BankTransferPayment`](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountInfo` | [`BankAccountInfo`](../interfaces/behavioral_strategy_strategies_BankTransferPayment.BankAccountInfo.md) |

#### Returns

[`BankTransferPayment`](behavioral_strategy_strategies_BankTransferPayment.BankTransferPayment.md)

#### Defined in

behavioral/strategy/strategies/BankTransferPayment.ts:20

## Methods

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

behavioral/strategy/strategies/BankTransferPayment.ts:24

___

### getName

▸ **getName**(): `string`

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getName](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getname)

#### Defined in

behavioral/strategy/strategies/BankTransferPayment.ts:43

___

### getDescription

▸ **getDescription**(): `string`

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getDescription](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getdescription)

#### Defined in

behavioral/strategy/strategies/BankTransferPayment.ts:47

___

### isAvailable

▸ **isAvailable**(): `boolean`

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[isAvailable](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#isavailable)

#### Defined in

behavioral/strategy/strategies/BankTransferPayment.ts:51

___

### getAccountInfo

▸ **getAccountInfo**(): [`BankAccountInfo`](../interfaces/behavioral_strategy_strategies_BankTransferPayment.BankAccountInfo.md)

口座情報を取得します

#### Returns

[`BankAccountInfo`](../interfaces/behavioral_strategy_strategies_BankTransferPayment.BankAccountInfo.md)

#### Defined in

behavioral/strategy/strategies/BankTransferPayment.ts:59

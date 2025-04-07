[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/strategy/strategies/PayPalPayment](../modules/behavioral_strategy_strategies_PayPalPayment.md) / PayPalPayment

# Class: PayPalPayment

[behavioral/strategy/strategies/PayPalPayment](../modules/behavioral_strategy_strategies_PayPalPayment.md).PayPalPayment

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Implements

- [`PaymentStrategy`](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md)

## Table of contents

### Constructors

- [constructor](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#constructor)

### Methods

- [login](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#login)
- [logout](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#logout)
- [pay](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#pay)
- [getName](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#getname)
- [getDescription](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#getdescription)
- [isAvailable](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md#isavailable)

## Constructors

### constructor

• **new PayPalPayment**(`credentials?`): [`PayPalPayment`](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials?` | [`PayPalCredentials`](../interfaces/behavioral_strategy_strategies_PayPalPayment.PayPalCredentials.md) |

#### Returns

[`PayPalPayment`](behavioral_strategy_strategies_PayPalPayment.PayPalPayment.md)

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:18

## Methods

### login

▸ **login**(`credentials`): `void`

PayPalにログインします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials` | [`PayPalCredentials`](../interfaces/behavioral_strategy_strategies_PayPalPayment.PayPalCredentials.md) | 認証情報 |

#### Returns

`void`

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:28

___

### logout

▸ **logout**(): `void`

PayPalからログアウトします

#### Returns

`void`

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:38

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

behavioral/strategy/strategies/PayPalPayment.ts:44

___

### getName

▸ **getName**(): `string`

支払い方法の名前を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getName](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getname)

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:66

___

### getDescription

▸ **getDescription**(): `string`

支払い方法の説明を取得します

#### Returns

`string`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[getDescription](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#getdescription)

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:70

___

### isAvailable

▸ **isAvailable**(): `boolean`

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

#### Implementation of

[PaymentStrategy](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md).[isAvailable](../interfaces/behavioral_strategy_PaymentStrategy.PaymentStrategy.md#isavailable)

#### Defined in

behavioral/strategy/strategies/PayPalPayment.ts:77

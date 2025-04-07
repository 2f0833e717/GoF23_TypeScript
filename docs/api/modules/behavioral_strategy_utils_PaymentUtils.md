[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / behavioral/strategy/utils/PaymentUtils

# Module: behavioral/strategy/utils/PaymentUtils

## Table of contents

### Functions

- [generateTransactionId](behavioral_strategy_utils_PaymentUtils.md#generatetransactionid)
- [formatAmount](behavioral_strategy_utils_PaymentUtils.md#formatamount)
- [formatDateTime](behavioral_strategy_utils_PaymentUtils.md#formatdatetime)

## Functions

### generateTransactionId

▸ **generateTransactionId**(): `string`

トランザクションIDを生成します

#### Returns

`string`

生成されたトランザクションID

#### Defined in

behavioral/strategy/utils/PaymentUtils.ts:9

___

### formatAmount

▸ **formatAmount**(`amount`, `currency`): `string`

金額をフォーマットします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | 金額 |
| `currency` | `string` | 通貨 |

#### Returns

`string`

フォーマットされた金額文字列

#### Defined in

behavioral/strategy/utils/PaymentUtils.ts:21

___

### formatDateTime

▸ **formatDateTime**(`date`): `string`

日時をフォーマットします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 日時 |

#### Returns

`string`

フォーマットされた日時文字列

#### Defined in

behavioral/strategy/utils/PaymentUtils.ts:33

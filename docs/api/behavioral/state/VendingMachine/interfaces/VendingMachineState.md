[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/state/VendingMachine](../README.md) / VendingMachineState

# Interface: VendingMachineState

Defined in: behavioral/state/VendingMachine.ts:24

自動販売機の状態を表すインターフェース

## Methods

### insertMoney()

> **insertMoney**(`amount`): `string`

Defined in: behavioral/state/VendingMachine.ts:30

お金を投入します

#### Parameters

##### amount

`number`

投入金額

#### Returns

`string`

操作結果のメッセージ

***

### selectProduct()

> **selectProduct**(`productId`): `string`

Defined in: behavioral/state/VendingMachine.ts:37

商品を選択します

#### Parameters

##### productId

`string`

商品ID

#### Returns

`string`

操作結果のメッセージ

***

### dispenseChange()

> **dispenseChange**(): `string`

Defined in: behavioral/state/VendingMachine.ts:43

お釣りを返却します

#### Returns

`string`

操作結果のメッセージ

***

### getStateName()

> **getStateName**(): `string`

Defined in: behavioral/state/VendingMachine.ts:48

現在の状態名を取得します

#### Returns

`string`

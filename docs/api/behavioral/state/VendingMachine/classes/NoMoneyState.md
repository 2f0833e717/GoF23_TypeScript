[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/state/VendingMachine](../README.md) / NoMoneyState

# Class: NoMoneyState

Defined in: behavioral/state/VendingMachine.ts:167

お金が投入されていない状態

## Implements

- [`VendingMachineState`](../interfaces/VendingMachineState.md)

## Constructors

### new NoMoneyState()

> **new NoMoneyState**(`vendingMachine`): [`NoMoneyState`](NoMoneyState.md)

Defined in: behavioral/state/VendingMachine.ts:168

#### Parameters

##### vendingMachine

[`VendingMachine`](VendingMachine.md)

#### Returns

[`NoMoneyState`](NoMoneyState.md)

## Methods

### insertMoney()

> **insertMoney**(`amount`): `string`

Defined in: behavioral/state/VendingMachine.ts:170

お金を投入します

#### Parameters

##### amount

`number`

投入金額

#### Returns

`string`

操作結果のメッセージ

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`insertMoney`](../interfaces/VendingMachineState.md#insertmoney)

***

### selectProduct()

> **selectProduct**(`productId`): `string`

Defined in: behavioral/state/VendingMachine.ts:179

商品を選択します

#### Parameters

##### productId

`string`

商品ID

#### Returns

`string`

操作結果のメッセージ

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`selectProduct`](../interfaces/VendingMachineState.md#selectproduct)

***

### dispenseChange()

> **dispenseChange**(): `string`

Defined in: behavioral/state/VendingMachine.ts:183

お釣りを返却します

#### Returns

`string`

操作結果のメッセージ

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`dispenseChange`](../interfaces/VendingMachineState.md#dispensechange)

***

### getStateName()

> **getStateName**(): `string`

Defined in: behavioral/state/VendingMachine.ts:187

現在の状態名を取得します

#### Returns

`string`

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`getStateName`](../interfaces/VendingMachineState.md#getstatename)

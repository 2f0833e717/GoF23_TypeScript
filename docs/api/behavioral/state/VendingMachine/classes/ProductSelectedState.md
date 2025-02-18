[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/state/VendingMachine](../README.md) / ProductSelectedState

# Class: ProductSelectedState

Defined in: behavioral/state/VendingMachine.ts:239

商品が選択された状態

## Implements

- [`VendingMachineState`](../interfaces/VendingMachineState.md)

## Constructors

### new ProductSelectedState()

> **new ProductSelectedState**(`vendingMachine`): [`ProductSelectedState`](ProductSelectedState.md)

Defined in: behavioral/state/VendingMachine.ts:240

#### Parameters

##### vendingMachine

[`VendingMachine`](VendingMachine.md)

#### Returns

[`ProductSelectedState`](ProductSelectedState.md)

## Methods

### insertMoney()

> **insertMoney**(`amount`): `string`

Defined in: behavioral/state/VendingMachine.ts:242

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

Defined in: behavioral/state/VendingMachine.ts:246

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

Defined in: behavioral/state/VendingMachine.ts:250

お釣りを返却します

#### Returns

`string`

操作結果のメッセージ

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`dispenseChange`](../interfaces/VendingMachineState.md#dispensechange)

***

### getStateName()

> **getStateName**(): `string`

Defined in: behavioral/state/VendingMachine.ts:270

現在の状態名を取得します

#### Returns

`string`

#### Implementation of

[`VendingMachineState`](../interfaces/VendingMachineState.md).[`getStateName`](../interfaces/VendingMachineState.md#getstatename)

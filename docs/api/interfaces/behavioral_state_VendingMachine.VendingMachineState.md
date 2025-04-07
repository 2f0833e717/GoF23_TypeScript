[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md) / VendingMachineState

# Interface: VendingMachineState

[behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md).VendingMachineState

自動販売機の状態を表すインターフェース

## Implemented by

- [`HasMoneyState`](../classes/behavioral_state_VendingMachine.HasMoneyState.md)
- [`NoMoneyState`](../classes/behavioral_state_VendingMachine.NoMoneyState.md)
- [`ProductSelectedState`](../classes/behavioral_state_VendingMachine.ProductSelectedState.md)

## Table of contents

### Methods

- [insertMoney](behavioral_state_VendingMachine.VendingMachineState.md#insertmoney)
- [selectProduct](behavioral_state_VendingMachine.VendingMachineState.md#selectproduct)
- [dispenseChange](behavioral_state_VendingMachine.VendingMachineState.md#dispensechange)
- [getStateName](behavioral_state_VendingMachine.VendingMachineState.md#getstatename)

## Methods

### insertMoney

▸ **insertMoney**(`amount`): `string`

お金を投入します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | 投入金額 |

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/state/VendingMachine.ts:30

___

### selectProduct

▸ **selectProduct**(`productId`): `string`

商品を選択します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | 商品ID |

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/state/VendingMachine.ts:37

___

### dispenseChange

▸ **dispenseChange**(): `string`

お釣りを返却します

#### Returns

`string`

操作結果のメッセージ

#### Defined in

behavioral/state/VendingMachine.ts:43

___

### getStateName

▸ **getStateName**(): `string`

現在の状態名を取得します

#### Returns

`string`

#### Defined in

behavioral/state/VendingMachine.ts:48

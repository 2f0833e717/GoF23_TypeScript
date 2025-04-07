[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md) / HasMoneyState

# Class: HasMoneyState

[behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md).HasMoneyState

お金が投入された状態

## Implements

- [`VendingMachineState`](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md)

## Table of contents

### Constructors

- [constructor](behavioral_state_VendingMachine.HasMoneyState.md#constructor)

### Methods

- [insertMoney](behavioral_state_VendingMachine.HasMoneyState.md#insertmoney)
- [selectProduct](behavioral_state_VendingMachine.HasMoneyState.md#selectproduct)
- [dispenseChange](behavioral_state_VendingMachine.HasMoneyState.md#dispensechange)
- [getStateName](behavioral_state_VendingMachine.HasMoneyState.md#getstatename)

## Constructors

### constructor

• **new HasMoneyState**(`vendingMachine`): [`HasMoneyState`](behavioral_state_VendingMachine.HasMoneyState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendingMachine` | [`VendingMachine`](behavioral_state_VendingMachine.VendingMachine.md) |

#### Returns

[`HasMoneyState`](behavioral_state_VendingMachine.HasMoneyState.md)

#### Defined in

behavioral/state/VendingMachine.ts:196

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

#### Implementation of

[VendingMachineState](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md).[insertMoney](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md#insertmoney)

#### Defined in

behavioral/state/VendingMachine.ts:198

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

#### Implementation of

[VendingMachineState](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md).[selectProduct](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md#selectproduct)

#### Defined in

behavioral/state/VendingMachine.ts:207

___

### dispenseChange

▸ **dispenseChange**(): `string`

お釣りを返却します

#### Returns

`string`

操作結果のメッセージ

#### Implementation of

[VendingMachineState](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md).[dispenseChange](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md#dispensechange)

#### Defined in

behavioral/state/VendingMachine.ts:224

___

### getStateName

▸ **getStateName**(): `string`

現在の状態名を取得します

#### Returns

`string`

#### Implementation of

[VendingMachineState](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md).[getStateName](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md#getstatename)

#### Defined in

behavioral/state/VendingMachine.ts:231

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md) / VendingMachine

# Class: VendingMachine

[behavioral/state/VendingMachine](../modules/behavioral_state_VendingMachine.md).VendingMachine

自動販売機クラス

## Table of contents

### Constructors

- [constructor](behavioral_state_VendingMachine.VendingMachine.md#constructor)

### Methods

- [addProduct](behavioral_state_VendingMachine.VendingMachine.md#addproduct)
- [updateProductQuantity](behavioral_state_VendingMachine.VendingMachine.md#updateproductquantity)
- [getProduct](behavioral_state_VendingMachine.VendingMachine.md#getproduct)
- [getAllProducts](behavioral_state_VendingMachine.VendingMachine.md#getallproducts)
- [getInsertedAmount](behavioral_state_VendingMachine.VendingMachine.md#getinsertedamount)
- [setInsertedAmount](behavioral_state_VendingMachine.VendingMachine.md#setinsertedamount)
- [getSelectedProduct](behavioral_state_VendingMachine.VendingMachine.md#getselectedproduct)
- [setSelectedProduct](behavioral_state_VendingMachine.VendingMachine.md#setselectedproduct)
- [setState](behavioral_state_VendingMachine.VendingMachine.md#setstate)
- [getState](behavioral_state_VendingMachine.VendingMachine.md#getstate)
- [insertMoney](behavioral_state_VendingMachine.VendingMachine.md#insertmoney)
- [selectProduct](behavioral_state_VendingMachine.VendingMachine.md#selectproduct)
- [dispenseChange](behavioral_state_VendingMachine.VendingMachine.md#dispensechange)
- [getCurrentStateName](behavioral_state_VendingMachine.VendingMachine.md#getcurrentstatename)

## Constructors

### constructor

• **new VendingMachine**(): [`VendingMachine`](behavioral_state_VendingMachine.VendingMachine.md)

#### Returns

[`VendingMachine`](behavioral_state_VendingMachine.VendingMachine.md)

#### Defined in

behavioral/state/VendingMachine.ts:60

## Methods

### addProduct

▸ **addProduct**(`product`): `void`

商品を追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `product` | [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md) | 追加する商品 |

#### Returns

`void`

#### Defined in

behavioral/state/VendingMachine.ts:69

___

### updateProductQuantity

▸ **updateProductQuantity**(`productId`, `quantity`): `void`

商品の在庫を更新します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | 商品ID |
| `quantity` | `number` | 新しい在庫数 |

#### Returns

`void`

#### Defined in

behavioral/state/VendingMachine.ts:78

___

### getProduct

▸ **getProduct**(`productId`): `undefined` \| [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)

商品を取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | 商品ID |

#### Returns

`undefined` \| [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)

#### Defined in

behavioral/state/VendingMachine.ts:89

___

### getAllProducts

▸ **getAllProducts**(): [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)[]

全商品を取得します

#### Returns

[`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)[]

#### Defined in

behavioral/state/VendingMachine.ts:96

___

### getInsertedAmount

▸ **getInsertedAmount**(): `number`

投入金額を取得します

#### Returns

`number`

#### Defined in

behavioral/state/VendingMachine.ts:103

___

### setInsertedAmount

▸ **setInsertedAmount**(`amount`): `void`

投入金額を設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

behavioral/state/VendingMachine.ts:110

___

### getSelectedProduct

▸ **getSelectedProduct**(): ``null`` \| [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)

選択された商品を取得します

#### Returns

``null`` \| [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md)

#### Defined in

behavioral/state/VendingMachine.ts:117

___

### setSelectedProduct

▸ **setSelectedProduct**(`product`): `void`

選択された商品を設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | ``null`` \| [`Product`](../interfaces/behavioral_state_VendingMachine.Product.md) |

#### Returns

`void`

#### Defined in

behavioral/state/VendingMachine.ts:124

___

### setState

▸ **setState**(`state`): `void`

状態を変更します

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`VendingMachineState`](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md) |

#### Returns

`void`

#### Defined in

behavioral/state/VendingMachine.ts:131

___

### getState

▸ **getState**(): [`VendingMachineState`](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md)

現在の状態を取得します

#### Returns

[`VendingMachineState`](../interfaces/behavioral_state_VendingMachine.VendingMachineState.md)

#### Defined in

behavioral/state/VendingMachine.ts:138

___

### insertMoney

▸ **insertMoney**(`amount`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

#### Returns

`string`

#### Defined in

behavioral/state/VendingMachine.ts:144

___

### selectProduct

▸ **selectProduct**(`productId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productId` | `string` |

#### Returns

`string`

#### Defined in

behavioral/state/VendingMachine.ts:148

___

### dispenseChange

▸ **dispenseChange**(): `string`

#### Returns

`string`

#### Defined in

behavioral/state/VendingMachine.ts:152

___

### getCurrentStateName

▸ **getCurrentStateName**(): `string`

現在の状態名を取得します

#### Returns

`string`

#### Defined in

behavioral/state/VendingMachine.ts:159

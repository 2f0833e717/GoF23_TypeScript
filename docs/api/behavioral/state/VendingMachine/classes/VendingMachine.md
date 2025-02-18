[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/state/VendingMachine](../README.md) / VendingMachine

# Class: VendingMachine

Defined in: behavioral/state/VendingMachine.ts:54

自動販売機クラス

## Constructors

### new VendingMachine()

> **new VendingMachine**(): [`VendingMachine`](VendingMachine.md)

Defined in: behavioral/state/VendingMachine.ts:60

#### Returns

[`VendingMachine`](VendingMachine.md)

## Methods

### addProduct()

> **addProduct**(`product`): `void`

Defined in: behavioral/state/VendingMachine.ts:69

商品を追加します

#### Parameters

##### product

[`Product`](../interfaces/Product.md)

追加する商品

#### Returns

`void`

***

### updateProductQuantity()

> **updateProductQuantity**(`productId`, `quantity`): `void`

Defined in: behavioral/state/VendingMachine.ts:78

商品の在庫を更新します

#### Parameters

##### productId

`string`

商品ID

##### quantity

`number`

新しい在庫数

#### Returns

`void`

***

### getProduct()

> **getProduct**(`productId`): `undefined` \| [`Product`](../interfaces/Product.md)

Defined in: behavioral/state/VendingMachine.ts:89

商品を取得します

#### Parameters

##### productId

`string`

商品ID

#### Returns

`undefined` \| [`Product`](../interfaces/Product.md)

***

### getAllProducts()

> **getAllProducts**(): [`Product`](../interfaces/Product.md)[]

Defined in: behavioral/state/VendingMachine.ts:96

全商品を取得します

#### Returns

[`Product`](../interfaces/Product.md)[]

***

### getInsertedAmount()

> **getInsertedAmount**(): `number`

Defined in: behavioral/state/VendingMachine.ts:103

投入金額を取得します

#### Returns

`number`

***

### setInsertedAmount()

> **setInsertedAmount**(`amount`): `void`

Defined in: behavioral/state/VendingMachine.ts:110

投入金額を設定します

#### Parameters

##### amount

`number`

#### Returns

`void`

***

### getSelectedProduct()

> **getSelectedProduct**(): `null` \| [`Product`](../interfaces/Product.md)

Defined in: behavioral/state/VendingMachine.ts:117

選択された商品を取得します

#### Returns

`null` \| [`Product`](../interfaces/Product.md)

***

### setSelectedProduct()

> **setSelectedProduct**(`product`): `void`

Defined in: behavioral/state/VendingMachine.ts:124

選択された商品を設定します

#### Parameters

##### product

`null` | [`Product`](../interfaces/Product.md)

#### Returns

`void`

***

### setState()

> **setState**(`state`): `void`

Defined in: behavioral/state/VendingMachine.ts:131

状態を変更します

#### Parameters

##### state

[`VendingMachineState`](../interfaces/VendingMachineState.md)

#### Returns

`void`

***

### getState()

> **getState**(): [`VendingMachineState`](../interfaces/VendingMachineState.md)

Defined in: behavioral/state/VendingMachine.ts:138

現在の状態を取得します

#### Returns

[`VendingMachineState`](../interfaces/VendingMachineState.md)

***

### insertMoney()

> **insertMoney**(`amount`): `string`

Defined in: behavioral/state/VendingMachine.ts:144

#### Parameters

##### amount

`number`

#### Returns

`string`

***

### selectProduct()

> **selectProduct**(`productId`): `string`

Defined in: behavioral/state/VendingMachine.ts:148

#### Parameters

##### productId

`string`

#### Returns

`string`

***

### dispenseChange()

> **dispenseChange**(): `string`

Defined in: behavioral/state/VendingMachine.ts:152

#### Returns

`string`

***

### getCurrentStateName()

> **getCurrentStateName**(): `string`

Defined in: behavioral/state/VendingMachine.ts:159

現在の状態名を取得します

#### Returns

`string`

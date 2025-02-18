[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/strategy/PaymentStrategy](../README.md) / PaymentStrategy

# Interface: PaymentStrategy

Defined in: behavioral/strategy/PaymentStrategy.ts:33

支払い方法のインターフェース

すべての支払い方法の実装クラスはこのインターフェースに従う必要があります。

## Methods

### pay()

> **pay**(`info`): [`PaymentResult`](PaymentResult.md)

Defined in: behavioral/strategy/PaymentStrategy.ts:39

支払いを実行します

#### Parameters

##### info

[`PaymentInfo`](PaymentInfo.md)

支払い情報

#### Returns

[`PaymentResult`](PaymentResult.md)

支払い結果

***

### getName()

> **getName**(): `string`

Defined in: behavioral/strategy/PaymentStrategy.ts:44

支払い方法の名前を取得します

#### Returns

`string`

***

### getDescription()

> **getDescription**(): `string`

Defined in: behavioral/strategy/PaymentStrategy.ts:49

支払い方法の説明を取得します

#### Returns

`string`

***

### isAvailable()

> **isAvailable**(): `boolean`

Defined in: behavioral/strategy/PaymentStrategy.ts:54

この支払い方法が利用可能かを確認します

#### Returns

`boolean`

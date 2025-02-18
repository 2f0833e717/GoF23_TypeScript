[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/Expression](../README.md) / Context

# Class: Context

Defined in: behavioral/interpreter/Expression.ts:12

式の評価コンテキスト
変数の値を保持します。

## Constructors

### new Context()

> **new Context**(): [`Context`](Context.md)

#### Returns

[`Context`](Context.md)

## Methods

### setVariable()

> **setVariable**(`name`, `value`): `void`

Defined in: behavioral/interpreter/Expression.ts:20

変数に値を設定します

#### Parameters

##### name

`string`

変数名

##### value

`number`

値

#### Returns

`void`

***

### getVariable()

> **getVariable**(`name`): `number`

Defined in: behavioral/interpreter/Expression.ts:30

変数の値を取得します

#### Parameters

##### name

`string`

変数名

#### Returns

`number`

変数の値

#### Throws

Error 変数が存在しない場合

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/Expression](../README.md) / Expression

# Interface: Expression

Defined in: behavioral/interpreter/Expression.ts:43

式インターフェース
すべての式はこのインターフェースを実装します。

## Methods

### interpret()

> **interpret**(`context`): `number`

Defined in: behavioral/interpreter/Expression.ts:49

式を評価します

#### Parameters

##### context

[`Context`](../classes/Context.md)

評価コンテキスト

#### Returns

`number`

評価結果

***

### toString()

> **toString**(): `string`

Defined in: behavioral/interpreter/Expression.ts:54

式を文字列として取得します

#### Returns

`string`

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/TerminalExpressions](../README.md) / VariableExpression

# Class: VariableExpression

Defined in: behavioral/interpreter/TerminalExpressions.ts:33

変数式
変数を表現します。

## Implements

- [`Expression`](../../Expression/interfaces/Expression.md)

## Constructors

### new VariableExpression()

> **new VariableExpression**(`name`): [`VariableExpression`](VariableExpression.md)

Defined in: behavioral/interpreter/TerminalExpressions.ts:38

コンストラクタ

#### Parameters

##### name

`string`

変数名

#### Returns

[`VariableExpression`](VariableExpression.md)

## Methods

### interpret()

> **interpret**(`context`): `number`

Defined in: behavioral/interpreter/TerminalExpressions.ts:40

式を評価します

#### Parameters

##### context

[`Context`](../../Expression/classes/Context.md)

評価コンテキスト

#### Returns

`number`

評価結果

#### Implementation of

[`Expression`](../../Expression/interfaces/Expression.md).[`interpret`](../../Expression/interfaces/Expression.md#interpret)

***

### toString()

> **toString**(): `string`

Defined in: behavioral/interpreter/TerminalExpressions.ts:44

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[`Expression`](../../Expression/interfaces/Expression.md).[`toString`](../../Expression/interfaces/Expression.md#tostring)

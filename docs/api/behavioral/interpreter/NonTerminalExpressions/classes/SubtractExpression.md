[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/NonTerminalExpressions](../README.md) / SubtractExpression

# Class: SubtractExpression

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:37

減算式
2つの式の差を計算します。

## Implements

- [`Expression`](../../Expression/interfaces/Expression.md)

## Constructors

### new SubtractExpression()

> **new SubtractExpression**(`left`, `right`): [`SubtractExpression`](SubtractExpression.md)

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:43

コンストラクタ

#### Parameters

##### left

[`Expression`](../../Expression/interfaces/Expression.md)

左辺の式

##### right

[`Expression`](../../Expression/interfaces/Expression.md)

右辺の式

#### Returns

[`SubtractExpression`](SubtractExpression.md)

## Methods

### interpret()

> **interpret**(`context`): `number`

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:48

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

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:52

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[`Expression`](../../Expression/interfaces/Expression.md).[`toString`](../../Expression/interfaces/Expression.md#tostring)

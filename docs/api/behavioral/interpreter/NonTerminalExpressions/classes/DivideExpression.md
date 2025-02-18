[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/NonTerminalExpressions](../README.md) / DivideExpression

# Class: DivideExpression

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:85

除算式
2つの式の商を計算します。

## Implements

- [`Expression`](../../Expression/interfaces/Expression.md)

## Constructors

### new DivideExpression()

> **new DivideExpression**(`left`, `right`): [`DivideExpression`](DivideExpression.md)

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:91

コンストラクタ

#### Parameters

##### left

[`Expression`](../../Expression/interfaces/Expression.md)

左辺の式

##### right

[`Expression`](../../Expression/interfaces/Expression.md)

右辺の式

#### Returns

[`DivideExpression`](DivideExpression.md)

## Methods

### interpret()

> **interpret**(`context`): `number`

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:96

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

Defined in: behavioral/interpreter/NonTerminalExpressions.ts:104

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[`Expression`](../../Expression/interfaces/Expression.md).[`toString`](../../Expression/interfaces/Expression.md#tostring)

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/Expression](../modules/behavioral_interpreter_Expression.md) / Expression

# Interface: Expression

[behavioral/interpreter/Expression](../modules/behavioral_interpreter_Expression.md).Expression

式インターフェース
すべての式はこのインターフェースを実装します。

## Implemented by

- [`AddExpression`](../classes/behavioral_interpreter_NonTerminalExpressions.AddExpression.md)
- [`DivideExpression`](../classes/behavioral_interpreter_NonTerminalExpressions.DivideExpression.md)
- [`MultiplyExpression`](../classes/behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md)
- [`NumberExpression`](../classes/behavioral_interpreter_TerminalExpressions.NumberExpression.md)
- [`SubtractExpression`](../classes/behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md)
- [`VariableExpression`](../classes/behavioral_interpreter_TerminalExpressions.VariableExpression.md)

## Table of contents

### Methods

- [interpret](behavioral_interpreter_Expression.Expression.md#interpret)
- [toString](behavioral_interpreter_Expression.Expression.md#tostring)

## Methods

### interpret

▸ **interpret**(`context`): `number`

式を評価します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`Context`](../classes/behavioral_interpreter_Expression.Context.md) | 評価コンテキスト |

#### Returns

`number`

評価結果

#### Defined in

behavioral/interpreter/Expression.ts:49

___

### toString

▸ **toString**(): `string`

式を文字列として取得します

#### Returns

`string`

#### Defined in

behavioral/interpreter/Expression.ts:54

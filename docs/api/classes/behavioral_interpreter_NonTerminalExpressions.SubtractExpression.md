[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/NonTerminalExpressions](../modules/behavioral_interpreter_NonTerminalExpressions.md) / SubtractExpression

# Class: SubtractExpression

[behavioral/interpreter/NonTerminalExpressions](../modules/behavioral_interpreter_NonTerminalExpressions.md).SubtractExpression

減算式
2つの式の差を計算します。

## Implements

- [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md#constructor)

### Methods

- [interpret](behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md#interpret)
- [toString](behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md#tostring)

## Constructors

### constructor

• **new SubtractExpression**(`left`, `right`): [`SubtractExpression`](behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md) | 左辺の式 |
| `right` | [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md) | 右辺の式 |

#### Returns

[`SubtractExpression`](behavioral_interpreter_NonTerminalExpressions.SubtractExpression.md)

#### Defined in

behavioral/interpreter/NonTerminalExpressions.ts:43

## Methods

### interpret

▸ **interpret**(`context`): `number`

式を評価します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`Context`](behavioral_interpreter_Expression.Context.md) | 評価コンテキスト |

#### Returns

`number`

評価結果

#### Implementation of

[Expression](../interfaces/behavioral_interpreter_Expression.Expression.md).[interpret](../interfaces/behavioral_interpreter_Expression.Expression.md#interpret)

#### Defined in

behavioral/interpreter/NonTerminalExpressions.ts:48

___

### toString

▸ **toString**(): `string`

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[Expression](../interfaces/behavioral_interpreter_Expression.Expression.md).[toString](../interfaces/behavioral_interpreter_Expression.Expression.md#tostring)

#### Defined in

behavioral/interpreter/NonTerminalExpressions.ts:52

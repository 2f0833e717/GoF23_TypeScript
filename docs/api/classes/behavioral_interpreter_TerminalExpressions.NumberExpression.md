[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/TerminalExpressions](../modules/behavioral_interpreter_TerminalExpressions.md) / NumberExpression

# Class: NumberExpression

[behavioral/interpreter/TerminalExpressions](../modules/behavioral_interpreter_TerminalExpressions.md).NumberExpression

数値式
具体的な数値を表現します。

## Implements

- [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_TerminalExpressions.NumberExpression.md#constructor)

### Methods

- [interpret](behavioral_interpreter_TerminalExpressions.NumberExpression.md#interpret)
- [toString](behavioral_interpreter_TerminalExpressions.NumberExpression.md#tostring)

## Constructors

### constructor

• **new NumberExpression**(`value`): [`NumberExpression`](behavioral_interpreter_TerminalExpressions.NumberExpression.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 数値 |

#### Returns

[`NumberExpression`](behavioral_interpreter_TerminalExpressions.NumberExpression.md)

#### Defined in

behavioral/interpreter/TerminalExpressions.ts:18

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

behavioral/interpreter/TerminalExpressions.ts:20

___

### toString

▸ **toString**(): `string`

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[Expression](../interfaces/behavioral_interpreter_Expression.Expression.md).[toString](../interfaces/behavioral_interpreter_Expression.Expression.md#tostring)

#### Defined in

behavioral/interpreter/TerminalExpressions.ts:24

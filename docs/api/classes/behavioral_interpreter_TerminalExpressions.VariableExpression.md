[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/TerminalExpressions](../modules/behavioral_interpreter_TerminalExpressions.md) / VariableExpression

# Class: VariableExpression

[behavioral/interpreter/TerminalExpressions](../modules/behavioral_interpreter_TerminalExpressions.md).VariableExpression

変数式
変数を表現します。

## Implements

- [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_TerminalExpressions.VariableExpression.md#constructor)

### Methods

- [interpret](behavioral_interpreter_TerminalExpressions.VariableExpression.md#interpret)
- [toString](behavioral_interpreter_TerminalExpressions.VariableExpression.md#tostring)

## Constructors

### constructor

• **new VariableExpression**(`name`): [`VariableExpression`](behavioral_interpreter_TerminalExpressions.VariableExpression.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 変数名 |

#### Returns

[`VariableExpression`](behavioral_interpreter_TerminalExpressions.VariableExpression.md)

#### Defined in

behavioral/interpreter/TerminalExpressions.ts:38

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

behavioral/interpreter/TerminalExpressions.ts:40

___

### toString

▸ **toString**(): `string`

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[Expression](../interfaces/behavioral_interpreter_Expression.Expression.md).[toString](../interfaces/behavioral_interpreter_Expression.Expression.md#tostring)

#### Defined in

behavioral/interpreter/TerminalExpressions.ts:44

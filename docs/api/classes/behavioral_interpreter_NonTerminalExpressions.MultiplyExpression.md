[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/NonTerminalExpressions](../modules/behavioral_interpreter_NonTerminalExpressions.md) / MultiplyExpression

# Class: MultiplyExpression

[behavioral/interpreter/NonTerminalExpressions](../modules/behavioral_interpreter_NonTerminalExpressions.md).MultiplyExpression

乗算式
2つの式の積を計算します。

## Implements

- [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md#constructor)

### Methods

- [interpret](behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md#interpret)
- [toString](behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md#tostring)

## Constructors

### constructor

• **new MultiplyExpression**(`left`, `right`): [`MultiplyExpression`](behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md) | 左辺の式 |
| `right` | [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md) | 右辺の式 |

#### Returns

[`MultiplyExpression`](behavioral_interpreter_NonTerminalExpressions.MultiplyExpression.md)

#### Defined in

behavioral/interpreter/NonTerminalExpressions.ts:67

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

behavioral/interpreter/NonTerminalExpressions.ts:72

___

### toString

▸ **toString**(): `string`

式を文字列として取得します

#### Returns

`string`

#### Implementation of

[Expression](../interfaces/behavioral_interpreter_Expression.Expression.md).[toString](../interfaces/behavioral_interpreter_Expression.Expression.md#tostring)

#### Defined in

behavioral/interpreter/NonTerminalExpressions.ts:76

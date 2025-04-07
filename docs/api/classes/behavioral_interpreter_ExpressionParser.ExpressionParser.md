[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/ExpressionParser](../modules/behavioral_interpreter_ExpressionParser.md) / ExpressionParser

# Class: ExpressionParser

[behavioral/interpreter/ExpressionParser](../modules/behavioral_interpreter_ExpressionParser.md).ExpressionParser

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_ExpressionParser.ExpressionParser.md#constructor)

### Methods

- [parse](behavioral_interpreter_ExpressionParser.ExpressionParser.md#parse)

## Constructors

### constructor

• **new ExpressionParser**(): [`ExpressionParser`](behavioral_interpreter_ExpressionParser.ExpressionParser.md)

#### Returns

[`ExpressionParser`](behavioral_interpreter_ExpressionParser.ExpressionParser.md)

## Methods

### parse

▸ **parse**(`expression`): [`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

数式を解析します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` | 解析する数式 |

#### Returns

[`Expression`](../interfaces/behavioral_interpreter_Expression.Expression.md)

式オブジェクト

**`Throws`**

Error 式が不正な場合

#### Defined in

behavioral/interpreter/ExpressionParser.ts:21

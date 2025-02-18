[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/interpreter/ExpressionParser](../README.md) / ExpressionParser

# Class: ExpressionParser

Defined in: behavioral/interpreter/ExpressionParser.ts:11

## Constructors

### new ExpressionParser()

> **new ExpressionParser**(): [`ExpressionParser`](ExpressionParser.md)

#### Returns

[`ExpressionParser`](ExpressionParser.md)

## Methods

### parse()

> **parse**(`expression`): [`Expression`](../../Expression/interfaces/Expression.md)

Defined in: behavioral/interpreter/ExpressionParser.ts:21

数式を解析します

#### Parameters

##### expression

`string`

解析する数式

#### Returns

[`Expression`](../../Expression/interfaces/Expression.md)

式オブジェクト

#### Throws

Error 式が不正な場合

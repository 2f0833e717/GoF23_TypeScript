[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/interpreter/Expression](../modules/behavioral_interpreter_Expression.md) / Context

# Class: Context

[behavioral/interpreter/Expression](../modules/behavioral_interpreter_Expression.md).Context

式の評価コンテキスト
変数の値を保持します。

## Table of contents

### Constructors

- [constructor](behavioral_interpreter_Expression.Context.md#constructor)

### Methods

- [setVariable](behavioral_interpreter_Expression.Context.md#setvariable)
- [getVariable](behavioral_interpreter_Expression.Context.md#getvariable)

## Constructors

### constructor

• **new Context**(): [`Context`](behavioral_interpreter_Expression.Context.md)

#### Returns

[`Context`](behavioral_interpreter_Expression.Context.md)

## Methods

### setVariable

▸ **setVariable**(`name`, `value`): `void`

変数に値を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 変数名 |
| `value` | `number` | 値 |

#### Returns

`void`

#### Defined in

behavioral/interpreter/Expression.ts:20

___

### getVariable

▸ **getVariable**(`name`): `number`

変数の値を取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 変数名 |

#### Returns

`number`

変数の値

**`Throws`**

Error 変数が存在しない場合

#### Defined in

behavioral/interpreter/Expression.ts:30

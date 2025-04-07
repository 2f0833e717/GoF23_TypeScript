[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/FileSystem](../modules/structural_composite_FileSystem.md) / Permission

# Class: Permission

[structural/composite/FileSystem](../modules/structural_composite_FileSystem.md).Permission

パーミッション

## Table of contents

### Constructors

- [constructor](structural_composite_FileSystem.Permission.md#constructor)

### Properties

- [read](structural_composite_FileSystem.Permission.md#read)
- [write](structural_composite_FileSystem.Permission.md#write)
- [execute](structural_composite_FileSystem.Permission.md#execute)

### Methods

- [toString](structural_composite_FileSystem.Permission.md#tostring)
- [clone](structural_composite_FileSystem.Permission.md#clone)

## Constructors

### constructor

• **new Permission**(`read?`, `write?`, `execute?`): [`Permission`](structural_composite_FileSystem.Permission.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `read` | `boolean` | `true` |
| `write` | `boolean` | `true` |
| `execute` | `boolean` | `false` |

#### Returns

[`Permission`](structural_composite_FileSystem.Permission.md)

#### Defined in

structural/composite/FileSystem.ts:23

## Properties

### read

• **read**: `boolean` = `true`

#### Defined in

structural/composite/FileSystem.ts:24

___

### write

• **write**: `boolean` = `true`

#### Defined in

structural/composite/FileSystem.ts:25

___

### execute

• **execute**: `boolean` = `false`

#### Defined in

structural/composite/FileSystem.ts:26

## Methods

### toString

▸ **toString**(): `string`

パーミッションを文字列形式で取得します

#### Returns

`string`

#### Defined in

structural/composite/FileSystem.ts:32

___

### clone

▸ **clone**(): [`Permission`](structural_composite_FileSystem.Permission.md)

パーミッションをコピーします

#### Returns

[`Permission`](structural_composite_FileSystem.Permission.md)

#### Defined in

structural/composite/FileSystem.ts:39

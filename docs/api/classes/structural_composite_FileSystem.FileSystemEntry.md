[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/FileSystem](../modules/structural_composite_FileSystem.md) / FileSystemEntry

# Class: FileSystemEntry

[structural/composite/FileSystem](../modules/structural_composite_FileSystem.md).FileSystemEntry

ファイルシステムエントリの抽象クラス

## Hierarchy

- **`FileSystemEntry`**

  ↳ [`File`](structural_composite_FileSystem.File.md)

  ↳ [`Directory`](structural_composite_FileSystem.Directory.md)

## Table of contents

### Constructors

- [constructor](structural_composite_FileSystem.FileSystemEntry.md#constructor)

### Properties

- [parent](structural_composite_FileSystem.FileSystemEntry.md#parent)
- [created](structural_composite_FileSystem.FileSystemEntry.md#created)
- [modified](structural_composite_FileSystem.FileSystemEntry.md#modified)
- [permission](structural_composite_FileSystem.FileSystemEntry.md#permission)
- [name](structural_composite_FileSystem.FileSystemEntry.md#name)

### Methods

- [getType](structural_composite_FileSystem.FileSystemEntry.md#gettype)
- [getSize](structural_composite_FileSystem.FileSystemEntry.md#getsize)
- [getPath](structural_composite_FileSystem.FileSystemEntry.md#getpath)
- [getName](structural_composite_FileSystem.FileSystemEntry.md#getname)
- [setName](structural_composite_FileSystem.FileSystemEntry.md#setname)
- [getCreated](structural_composite_FileSystem.FileSystemEntry.md#getcreated)
- [getModified](structural_composite_FileSystem.FileSystemEntry.md#getmodified)
- [getPermission](structural_composite_FileSystem.FileSystemEntry.md#getpermission)
- [setPermission](structural_composite_FileSystem.FileSystemEntry.md#setpermission)
- [setParent](structural_composite_FileSystem.FileSystemEntry.md#setparent)
- [toString](structural_composite_FileSystem.FileSystemEntry.md#tostring)

## Constructors

### constructor

• **new FileSystemEntry**(`name`, `permission?`): [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `permission?` | [`Permission`](structural_composite_FileSystem.Permission.md) |

#### Returns

[`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

#### Defined in

structural/composite/FileSystem.ts:53

## Properties

### parent

• `Protected` **parent**: ``null`` \| [`Directory`](structural_composite_FileSystem.Directory.md) = `null`

#### Defined in

structural/composite/FileSystem.ts:48

___

### created

• `Protected` **created**: `Date`

#### Defined in

structural/composite/FileSystem.ts:49

___

### modified

• `Protected` **modified**: `Date`

#### Defined in

structural/composite/FileSystem.ts:50

___

### permission

• `Protected` **permission**: [`Permission`](structural_composite_FileSystem.Permission.md)

#### Defined in

structural/composite/FileSystem.ts:51

___

### name

• `Protected` **name**: `string`

#### Defined in

structural/composite/FileSystem.ts:54

## Methods

### getType

▸ **getType**(): [`FileSystemEntryType`](../enums/structural_composite_FileSystem.FileSystemEntryType.md)

エントリの種類を取得します

#### Returns

[`FileSystemEntryType`](../enums/structural_composite_FileSystem.FileSystemEntryType.md)

#### Defined in

structural/composite/FileSystem.ts:65

___

### getSize

▸ **getSize**(): `number`

エントリのサイズを取得します

#### Returns

`number`

#### Defined in

structural/composite/FileSystem.ts:70

___

### getPath

▸ **getPath**(): `string`

エントリの完全パスを取得します

#### Returns

`string`

#### Defined in

structural/composite/FileSystem.ts:75

___

### getName

▸ **getName**(): `string`

エントリ名を取得します

#### Returns

`string`

#### Defined in

structural/composite/FileSystem.ts:85

___

### setName

▸ **setName**(`name`): `void`

エントリ名を設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:92

___

### getCreated

▸ **getCreated**(): `Date`

作成日時を取得します

#### Returns

`Date`

#### Defined in

structural/composite/FileSystem.ts:103

___

### getModified

▸ **getModified**(): `Date`

更新日時を取得します

#### Returns

`Date`

#### Defined in

structural/composite/FileSystem.ts:110

___

### getPermission

▸ **getPermission**(): [`Permission`](structural_composite_FileSystem.Permission.md)

パーミッションを取得します

#### Returns

[`Permission`](structural_composite_FileSystem.Permission.md)

#### Defined in

structural/composite/FileSystem.ts:117

___

### setPermission

▸ **setPermission**(`permission`): `void`

パーミッションを設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | [`Permission`](structural_composite_FileSystem.Permission.md) |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:124

___

### setParent

▸ **setParent**(`parent`): `void`

親ディレクトリを設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`Directory`](structural_composite_FileSystem.Directory.md) |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:132

___

### toString

▸ **toString**(): `string`

エントリの情報を文字列形式で取得します

#### Returns

`string`

#### Defined in

structural/composite/FileSystem.ts:139

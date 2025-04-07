[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/FileSystem](../modules/structural_composite_FileSystem.md) / File

# Class: File

[structural/composite/FileSystem](../modules/structural_composite_FileSystem.md).File

ファイルクラス

## Hierarchy

- [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

  ↳ **`File`**

## Table of contents

### Constructors

- [constructor](structural_composite_FileSystem.File.md#constructor)

### Properties

- [parent](structural_composite_FileSystem.File.md#parent)
- [created](structural_composite_FileSystem.File.md#created)
- [modified](structural_composite_FileSystem.File.md#modified)
- [permission](structural_composite_FileSystem.File.md#permission)
- [name](structural_composite_FileSystem.File.md#name)

### Methods

- [getPath](structural_composite_FileSystem.File.md#getpath)
- [getName](structural_composite_FileSystem.File.md#getname)
- [setName](structural_composite_FileSystem.File.md#setname)
- [getCreated](structural_composite_FileSystem.File.md#getcreated)
- [getModified](structural_composite_FileSystem.File.md#getmodified)
- [getPermission](structural_composite_FileSystem.File.md#getpermission)
- [setPermission](structural_composite_FileSystem.File.md#setpermission)
- [setParent](structural_composite_FileSystem.File.md#setparent)
- [toString](structural_composite_FileSystem.File.md#tostring)
- [getType](structural_composite_FileSystem.File.md#gettype)
- [getSize](structural_composite_FileSystem.File.md#getsize)
- [getContent](structural_composite_FileSystem.File.md#getcontent)
- [setContent](structural_composite_FileSystem.File.md#setcontent)
- [appendContent](structural_composite_FileSystem.File.md#appendcontent)

## Constructors

### constructor

• **new File**(`name`, `content?`, `permission?`): [`File`](structural_composite_FileSystem.File.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `content` | `string` | `''` |
| `permission?` | [`Permission`](structural_composite_FileSystem.Permission.md) | `undefined` |

#### Returns

[`File`](structural_composite_FileSystem.File.md)

#### Overrides

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[constructor](structural_composite_FileSystem.FileSystemEntry.md#constructor)

#### Defined in

structural/composite/FileSystem.ts:148

## Properties

### parent

• `Protected` **parent**: ``null`` \| [`Directory`](structural_composite_FileSystem.Directory.md) = `null`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[parent](structural_composite_FileSystem.FileSystemEntry.md#parent)

#### Defined in

structural/composite/FileSystem.ts:48

___

### created

• `Protected` **created**: `Date`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[created](structural_composite_FileSystem.FileSystemEntry.md#created)

#### Defined in

structural/composite/FileSystem.ts:49

___

### modified

• `Protected` **modified**: `Date`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[modified](structural_composite_FileSystem.FileSystemEntry.md#modified)

#### Defined in

structural/composite/FileSystem.ts:50

___

### permission

• `Protected` **permission**: [`Permission`](structural_composite_FileSystem.Permission.md)

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[permission](structural_composite_FileSystem.FileSystemEntry.md#permission)

#### Defined in

structural/composite/FileSystem.ts:51

___

### name

• `Protected` **name**: `string`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[name](structural_composite_FileSystem.FileSystemEntry.md#name)

#### Defined in

structural/composite/FileSystem.ts:54

## Methods

### getPath

▸ **getPath**(): `string`

エントリの完全パスを取得します

#### Returns

`string`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getPath](structural_composite_FileSystem.FileSystemEntry.md#getpath)

#### Defined in

structural/composite/FileSystem.ts:75

___

### getName

▸ **getName**(): `string`

エントリ名を取得します

#### Returns

`string`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getName](structural_composite_FileSystem.FileSystemEntry.md#getname)

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

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[setName](structural_composite_FileSystem.FileSystemEntry.md#setname)

#### Defined in

structural/composite/FileSystem.ts:92

___

### getCreated

▸ **getCreated**(): `Date`

作成日時を取得します

#### Returns

`Date`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getCreated](structural_composite_FileSystem.FileSystemEntry.md#getcreated)

#### Defined in

structural/composite/FileSystem.ts:103

___

### getModified

▸ **getModified**(): `Date`

更新日時を取得します

#### Returns

`Date`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getModified](structural_composite_FileSystem.FileSystemEntry.md#getmodified)

#### Defined in

structural/composite/FileSystem.ts:110

___

### getPermission

▸ **getPermission**(): [`Permission`](structural_composite_FileSystem.Permission.md)

パーミッションを取得します

#### Returns

[`Permission`](structural_composite_FileSystem.Permission.md)

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getPermission](structural_composite_FileSystem.FileSystemEntry.md#getpermission)

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

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[setPermission](structural_composite_FileSystem.FileSystemEntry.md#setpermission)

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

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[setParent](structural_composite_FileSystem.FileSystemEntry.md#setparent)

#### Defined in

structural/composite/FileSystem.ts:132

___

### toString

▸ **toString**(): `string`

エントリの情報を文字列形式で取得します

#### Returns

`string`

#### Inherited from

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[toString](structural_composite_FileSystem.FileSystemEntry.md#tostring)

#### Defined in

structural/composite/FileSystem.ts:139

___

### getType

▸ **getType**(): [`FileSystemEntryType`](../enums/structural_composite_FileSystem.FileSystemEntryType.md)

エントリの種類を取得します

#### Returns

[`FileSystemEntryType`](../enums/structural_composite_FileSystem.FileSystemEntryType.md)

#### Overrides

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getType](structural_composite_FileSystem.FileSystemEntry.md#gettype)

#### Defined in

structural/composite/FileSystem.ts:156

___

### getSize

▸ **getSize**(): `number`

エントリのサイズを取得します

#### Returns

`number`

#### Overrides

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getSize](structural_composite_FileSystem.FileSystemEntry.md#getsize)

#### Defined in

structural/composite/FileSystem.ts:160

___

### getContent

▸ **getContent**(): `string`

ファイルの内容を取得します

#### Returns

`string`

#### Defined in

structural/composite/FileSystem.ts:167

___

### setContent

▸ **setContent**(`content`): `void`

ファイルの内容を設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:177

___

### appendContent

▸ **appendContent**(`content`): `void`

ファイルの内容を追加します

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:188

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/FileSystem](../modules/structural_composite_FileSystem.md) / Directory

# Class: Directory

[structural/composite/FileSystem](../modules/structural_composite_FileSystem.md).Directory

ディレクトリクラス

## Hierarchy

- [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

  ↳ **`Directory`**

## Table of contents

### Constructors

- [constructor](structural_composite_FileSystem.Directory.md#constructor)

### Properties

- [parent](structural_composite_FileSystem.Directory.md#parent)
- [created](structural_composite_FileSystem.Directory.md#created)
- [modified](structural_composite_FileSystem.Directory.md#modified)
- [permission](structural_composite_FileSystem.Directory.md#permission)
- [name](structural_composite_FileSystem.Directory.md#name)

### Methods

- [getPath](structural_composite_FileSystem.Directory.md#getpath)
- [getName](structural_composite_FileSystem.Directory.md#getname)
- [setName](structural_composite_FileSystem.Directory.md#setname)
- [getCreated](structural_composite_FileSystem.Directory.md#getcreated)
- [getModified](structural_composite_FileSystem.Directory.md#getmodified)
- [getPermission](structural_composite_FileSystem.Directory.md#getpermission)
- [setPermission](structural_composite_FileSystem.Directory.md#setpermission)
- [setParent](structural_composite_FileSystem.Directory.md#setparent)
- [toString](structural_composite_FileSystem.Directory.md#tostring)
- [getType](structural_composite_FileSystem.Directory.md#gettype)
- [getSize](structural_composite_FileSystem.Directory.md#getsize)
- [addEntry](structural_composite_FileSystem.Directory.md#addentry)
- [removeEntry](structural_composite_FileSystem.Directory.md#removeentry)
- [getEntry](structural_composite_FileSystem.Directory.md#getentry)
- [getEntries](structural_composite_FileSystem.Directory.md#getentries)
- [isEmpty](structural_composite_FileSystem.Directory.md#isempty)
- [getEntryCount](structural_composite_FileSystem.Directory.md#getentrycount)
- [setPermissionRecursive](structural_composite_FileSystem.Directory.md#setpermissionrecursive)

## Constructors

### constructor

• **new Directory**(`name`, `permission?`): [`Directory`](structural_composite_FileSystem.Directory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `permission?` | [`Permission`](structural_composite_FileSystem.Permission.md) |

#### Returns

[`Directory`](structural_composite_FileSystem.Directory.md)

#### Overrides

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[constructor](structural_composite_FileSystem.FileSystemEntry.md#constructor)

#### Defined in

structural/composite/FileSystem.ts:203

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

structural/composite/FileSystem.ts:210

___

### getSize

▸ **getSize**(): `number`

エントリのサイズを取得します

#### Returns

`number`

#### Overrides

[FileSystemEntry](structural_composite_FileSystem.FileSystemEntry.md).[getSize](structural_composite_FileSystem.FileSystemEntry.md#getsize)

#### Defined in

structural/composite/FileSystem.ts:214

___

### addEntry

▸ **addEntry**(`entry`): `void`

エントリを追加します

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md) |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:225

___

### removeEntry

▸ **removeEntry**(`name`): `void`

エントリを削除します

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:240

___

### getEntry

▸ **getEntry**(`name`): ``null`` \| [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

エントリを取得します

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)

#### Defined in

structural/composite/FileSystem.ts:256

___

### getEntries

▸ **getEntries**(): [`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)[]

すべてのエントリを取得します

#### Returns

[`FileSystemEntry`](structural_composite_FileSystem.FileSystemEntry.md)[]

#### Defined in

structural/composite/FileSystem.ts:266

___

### isEmpty

▸ **isEmpty**(): `boolean`

ディレクトリが空かどうかを確認します

#### Returns

`boolean`

#### Defined in

structural/composite/FileSystem.ts:276

___

### getEntryCount

▸ **getEntryCount**(): `number`

エントリ数を取得します

#### Returns

`number`

#### Defined in

structural/composite/FileSystem.ts:283

___

### setPermissionRecursive

▸ **setPermissionRecursive**(`permission`): `void`

再帰的にパーミッションを設定します

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | [`Permission`](structural_composite_FileSystem.Permission.md) |

#### Returns

`void`

#### Defined in

structural/composite/FileSystem.ts:290

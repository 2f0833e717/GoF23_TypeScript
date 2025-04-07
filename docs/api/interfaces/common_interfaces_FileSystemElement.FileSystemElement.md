[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [common/interfaces/FileSystemElement](../modules/common_interfaces_FileSystemElement.md) / FileSystemElement

# Interface: FileSystemElement

[common/interfaces/FileSystemElement](../modules/common_interfaces_FileSystemElement.md).FileSystemElement

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Hierarchy

- **`FileSystemElement`**

  ↳ [`FileSystemComponent`](common_interfaces_FileSystemComponent.FileSystemComponent.md)

## Implemented by

- [`Directory`](../classes/structural_composite_Directory.Directory.md)
- [`File`](../classes/structural_composite_File.File.md)
- [`SymbolicLink`](../classes/structural_composite_SymbolicLink.SymbolicLink.md)

## Table of contents

### Methods

- [getName](common_interfaces_FileSystemElement.FileSystemElement.md#getname)
- [getSize](common_interfaces_FileSystemElement.FileSystemElement.md#getsize)
- [getCreatedAt](common_interfaces_FileSystemElement.FileSystemElement.md#getcreatedat)
- [getModifiedAt](common_interfaces_FileSystemElement.FileSystemElement.md#getmodifiedat)
- [getParent](common_interfaces_FileSystemElement.FileSystemElement.md#getparent)
- [setParent](common_interfaces_FileSystemElement.FileSystemElement.md#setparent)
- [getPath](common_interfaces_FileSystemElement.FileSystemElement.md#getpath)
- [display](common_interfaces_FileSystemElement.FileSystemElement.md#display)
- [formatSize](common_interfaces_FileSystemElement.FileSystemElement.md#formatsize)
- [getTargetPath](common_interfaces_FileSystemElement.FileSystemElement.md#gettargetpath)
- [isValid](common_interfaces_FileSystemElement.FileSystemElement.md#isvalid)

## Methods

### getName

▸ **getName**(): `string`

要素の名前を取得します

#### Returns

`string`

#### Defined in

common/interfaces/FileSystemElement.ts:12

___

### getSize

▸ **getSize**(): `number`

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Defined in

common/interfaces/FileSystemElement.ts:17

___

### getCreatedAt

▸ **getCreatedAt**(): `Date`

要素の作成日時を取得します

#### Returns

`Date`

#### Defined in

common/interfaces/FileSystemElement.ts:22

___

### getModifiedAt

▸ **getModifiedAt**(): `Date`

要素の更新日時を取得します

#### Returns

`Date`

#### Defined in

common/interfaces/FileSystemElement.ts:27

___

### getParent

▸ **getParent**(): ``null`` \| [`FileSystemElement`](common_interfaces_FileSystemElement.FileSystemElement.md)

要素の親要素を取得します

#### Returns

``null`` \| [`FileSystemElement`](common_interfaces_FileSystemElement.FileSystemElement.md)

#### Defined in

common/interfaces/FileSystemElement.ts:32

___

### setParent

▸ **setParent**(`parent`): `void`

要素の親要素を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | ``null`` \| [`FileSystemElement`](common_interfaces_FileSystemElement.FileSystemElement.md) | 親要素 |

#### Returns

`void`

#### Defined in

common/interfaces/FileSystemElement.ts:38

___

### getPath

▸ **getPath**(): `string`

要素のパスを取得します

#### Returns

`string`

#### Defined in

common/interfaces/FileSystemElement.ts:43

___

### display

▸ **display**(`indent?`): `string`

要素の表示文字列を取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `indent?` | `number` | インデントレベル |

#### Returns

`string`

#### Defined in

common/interfaces/FileSystemElement.ts:49

___

### formatSize

▸ **formatSize**(`bytes`): `string`

サイズをフォーマットして表示します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `number` | バイト数 |

#### Returns

`string`

#### Defined in

common/interfaces/FileSystemElement.ts:55

___

### getTargetPath

▸ **getTargetPath**(): `string`

リンク先のパスを取得します（シンボリックリンクの場合）

#### Returns

`string`

#### Defined in

common/interfaces/FileSystemElement.ts:60

___

### isValid

▸ **isValid**(): `boolean`

リンクが有効かどうかを確認します（シンボリックリンクの場合）

#### Returns

`boolean`

#### Defined in

common/interfaces/FileSystemElement.ts:65

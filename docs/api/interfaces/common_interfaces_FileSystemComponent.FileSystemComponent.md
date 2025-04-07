[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [common/interfaces/FileSystemComponent](../modules/common_interfaces_FileSystemComponent.md) / FileSystemComponent

# Interface: FileSystemComponent

[common/interfaces/FileSystemComponent](../modules/common_interfaces_FileSystemComponent.md).FileSystemComponent

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Hierarchy

- [`FileSystemElement`](common_interfaces_FileSystemElement.FileSystemElement.md)

  ↳ **`FileSystemComponent`**

## Implemented by

- [`Directory`](../classes/structural_composite_Directory.Directory.md)
- [`File`](../classes/structural_composite_File.File.md)
- [`SymbolicLink`](../classes/structural_composite_SymbolicLink.SymbolicLink.md)

## Table of contents

### Methods

- [accept](common_interfaces_FileSystemComponent.FileSystemComponent.md#accept)
- [getName](common_interfaces_FileSystemComponent.FileSystemComponent.md#getname)
- [getSize](common_interfaces_FileSystemComponent.FileSystemComponent.md#getsize)
- [getCreatedAt](common_interfaces_FileSystemComponent.FileSystemComponent.md#getcreatedat)
- [getModifiedAt](common_interfaces_FileSystemComponent.FileSystemComponent.md#getmodifiedat)
- [getParent](common_interfaces_FileSystemComponent.FileSystemComponent.md#getparent)
- [setParent](common_interfaces_FileSystemComponent.FileSystemComponent.md#setparent)
- [getPath](common_interfaces_FileSystemComponent.FileSystemComponent.md#getpath)
- [display](common_interfaces_FileSystemComponent.FileSystemComponent.md#display)
- [formatSize](common_interfaces_FileSystemComponent.FileSystemComponent.md#formatsize)
- [getTargetPath](common_interfaces_FileSystemComponent.FileSystemComponent.md#gettargetpath)
- [isValid](common_interfaces_FileSystemComponent.FileSystemComponent.md#isvalid)

## Methods

### accept

▸ **accept**(`visitor`): `void`

Visitorを受け入れます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visitor` | [`FileSystemVisitor`](behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md) | 訪問者 |

#### Returns

`void`

#### Defined in

common/interfaces/FileSystemComponent.ts:15

___

### getName

▸ **getName**(): `string`

要素の名前を取得します

#### Returns

`string`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getName](common_interfaces_FileSystemElement.FileSystemElement.md#getname)

#### Defined in

common/interfaces/FileSystemComponent.ts:20

___

### getSize

▸ **getSize**(): `number`

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getSize](common_interfaces_FileSystemElement.FileSystemElement.md#getsize)

#### Defined in

common/interfaces/FileSystemComponent.ts:25

___

### getCreatedAt

▸ **getCreatedAt**(): `Date`

要素の作成日時を取得します

#### Returns

`Date`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getCreatedAt](common_interfaces_FileSystemElement.FileSystemElement.md#getcreatedat)

#### Defined in

common/interfaces/FileSystemComponent.ts:30

___

### getModifiedAt

▸ **getModifiedAt**(): `Date`

要素の更新日時を取得します

#### Returns

`Date`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getModifiedAt](common_interfaces_FileSystemElement.FileSystemElement.md#getmodifiedat)

#### Defined in

common/interfaces/FileSystemComponent.ts:35

___

### getParent

▸ **getParent**(): ``null`` \| [`FileSystemComponent`](common_interfaces_FileSystemComponent.FileSystemComponent.md)

要素の親要素を取得します

#### Returns

``null`` \| [`FileSystemComponent`](common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getParent](common_interfaces_FileSystemElement.FileSystemElement.md#getparent)

#### Defined in

common/interfaces/FileSystemComponent.ts:40

___

### setParent

▸ **setParent**(`parent`): `void`

要素の親要素を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | ``null`` \| [`FileSystemComponent`](common_interfaces_FileSystemComponent.FileSystemComponent.md) | 親要素 |

#### Returns

`void`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[setParent](common_interfaces_FileSystemElement.FileSystemElement.md#setparent)

#### Defined in

common/interfaces/FileSystemComponent.ts:46

___

### getPath

▸ **getPath**(): `string`

要素のパスを取得します

#### Returns

`string`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getPath](common_interfaces_FileSystemElement.FileSystemElement.md#getpath)

#### Defined in

common/interfaces/FileSystemComponent.ts:51

___

### display

▸ **display**(): `string`

要素の表示文字列を取得します

#### Returns

`string`

#### Overrides

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[display](common_interfaces_FileSystemElement.FileSystemElement.md#display)

#### Defined in

common/interfaces/FileSystemComponent.ts:56

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

#### Inherited from

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[formatSize](common_interfaces_FileSystemElement.FileSystemElement.md#formatsize)

#### Defined in

common/interfaces/FileSystemElement.ts:55

___

### getTargetPath

▸ **getTargetPath**(): `string`

リンク先のパスを取得します（シンボリックリンクの場合）

#### Returns

`string`

#### Inherited from

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[getTargetPath](common_interfaces_FileSystemElement.FileSystemElement.md#gettargetpath)

#### Defined in

common/interfaces/FileSystemElement.ts:60

___

### isValid

▸ **isValid**(): `boolean`

リンクが有効かどうかを確認します（シンボリックリンクの場合）

#### Returns

`boolean`

#### Inherited from

[FileSystemElement](common_interfaces_FileSystemElement.FileSystemElement.md).[isValid](common_interfaces_FileSystemElement.FileSystemElement.md#isvalid)

#### Defined in

common/interfaces/FileSystemElement.ts:65

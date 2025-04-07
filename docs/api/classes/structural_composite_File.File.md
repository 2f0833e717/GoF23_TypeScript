[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/File](../modules/structural_composite_File.md) / File

# Class: File

[structural/composite/File](../modules/structural_composite_File.md).File

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Implements

- [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)
- [`FileSystemElement`](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md)

## Table of contents

### Constructors

- [constructor](structural_composite_File.File.md#constructor)

### Methods

- [accept](structural_composite_File.File.md#accept)
- [getName](structural_composite_File.File.md#getname)
- [getSize](structural_composite_File.File.md#getsize)
- [getCreatedAt](structural_composite_File.File.md#getcreatedat)
- [getModifiedAt](structural_composite_File.File.md#getmodifiedat)
- [getParent](structural_composite_File.File.md#getparent)
- [setParent](structural_composite_File.File.md#setparent)
- [getPath](structural_composite_File.File.md#getpath)
- [updateContent](structural_composite_File.File.md#updatecontent)
- [display](structural_composite_File.File.md#display)
- [formatSize](structural_composite_File.File.md#formatsize)

## Constructors

### constructor

• **new File**(`name`, `size`): [`File`](structural_composite_File.File.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | ファイル名 |
| `size` | `number` | ファイルサイズ（バイト） |

#### Returns

[`File`](structural_composite_File.File.md)

#### Defined in

structural/composite/File.ts:25

## Methods

### accept

▸ **accept**(`visitor`): `void`

Visitorを受け入れます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visitor` | [`FileSystemVisitor`](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md) | 訪問者 |

#### Returns

`void`

#### Implementation of

[FileSystemComponent](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md).[accept](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md#accept)

#### Defined in

structural/composite/File.ts:36

___

### getName

▸ **getName**(): `string`

要素の名前を取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getName](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getname)

#### Defined in

structural/composite/File.ts:40

___

### getSize

▸ **getSize**(): `number`

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getSize](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getsize)

#### Defined in

structural/composite/File.ts:44

___

### getCreatedAt

▸ **getCreatedAt**(): `Date`

要素の作成日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getCreatedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getcreatedat)

#### Defined in

structural/composite/File.ts:48

___

### getModifiedAt

▸ **getModifiedAt**(): `Date`

要素の更新日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getModifiedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getmodifiedat)

#### Defined in

structural/composite/File.ts:52

___

### getParent

▸ **getParent**(): ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

要素の親要素を取得します

#### Returns

``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getParent](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getparent)

#### Defined in

structural/composite/File.ts:56

___

### setParent

▸ **setParent**(`parent`): `void`

要素の親要素を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md) | 親要素 |

#### Returns

`void`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[setParent](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#setparent)

#### Defined in

structural/composite/File.ts:60

___

### getPath

▸ **getPath**(): `string`

要素のパスを取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getPath](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getpath)

#### Defined in

structural/composite/File.ts:67

___

### updateContent

▸ **updateContent**(`size`): `void`

ファイルの内容を更新します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | 新しいファイルサイズ（バイト） |

#### Returns

`void`

#### Defined in

structural/composite/File.ts:75

___

### display

▸ **display**(): `string`

ファイルの表示文字列を取得します

#### Returns

`string`

フォーマットされた文字列

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[display](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#display)

#### Defined in

structural/composite/File.ts:87

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

フォーマットされたサイズ文字列

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[formatSize](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#formatsize)

#### Defined in

structural/composite/File.ts:98

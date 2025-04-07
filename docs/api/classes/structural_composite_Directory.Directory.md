[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/Directory](../modules/structural_composite_Directory.md) / Directory

# Class: Directory

[structural/composite/Directory](../modules/structural_composite_Directory.md).Directory

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Implements

- [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)
- [`FileSystemElement`](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md)

## Table of contents

### Constructors

- [constructor](structural_composite_Directory.Directory.md#constructor)

### Methods

- [accept](structural_composite_Directory.Directory.md#accept)
- [getName](structural_composite_Directory.Directory.md#getname)
- [getPath](structural_composite_Directory.Directory.md#getpath)
- [getParent](structural_composite_Directory.Directory.md#getparent)
- [setParent](structural_composite_Directory.Directory.md#setparent)
- [getCreatedAt](structural_composite_Directory.Directory.md#getcreatedat)
- [getModifiedAt](structural_composite_Directory.Directory.md#getmodifiedat)
- [getSize](structural_composite_Directory.Directory.md#getsize)
- [add](structural_composite_Directory.Directory.md#add)
- [remove](structural_composite_Directory.Directory.md#remove)
- [getChild](structural_composite_Directory.Directory.md#getchild)
- [getChildren](structural_composite_Directory.Directory.md#getchildren)
- [isEmpty](structural_composite_Directory.Directory.md#isempty)
- [display](structural_composite_Directory.Directory.md#display)
- [formatSize](structural_composite_Directory.Directory.md#formatsize)

## Constructors

### constructor

• **new Directory**(`name`): [`Directory`](structural_composite_Directory.Directory.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | ディレクトリ名 |

#### Returns

[`Directory`](structural_composite_Directory.Directory.md)

#### Defined in

structural/composite/Directory.ts:23

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

structural/composite/Directory.ts:31

___

### getName

▸ **getName**(): `string`

要素の名前を取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getName](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getname)

#### Defined in

structural/composite/Directory.ts:35

___

### getPath

▸ **getPath**(): `string`

要素のパスを取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getPath](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getpath)

#### Defined in

structural/composite/Directory.ts:39

___

### getParent

▸ **getParent**(): ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

要素の親要素を取得します

#### Returns

``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getParent](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getparent)

#### Defined in

structural/composite/Directory.ts:43

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

structural/composite/Directory.ts:47

___

### getCreatedAt

▸ **getCreatedAt**(): `Date`

要素の作成日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getCreatedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getcreatedat)

#### Defined in

structural/composite/Directory.ts:54

___

### getModifiedAt

▸ **getModifiedAt**(): `Date`

要素の更新日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getModifiedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getmodifiedat)

#### Defined in

structural/composite/Directory.ts:58

___

### getSize

▸ **getSize**(): `number`

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getSize](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getsize)

#### Defined in

structural/composite/Directory.ts:62

___

### add

▸ **add**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md) |

#### Returns

`void`

#### Defined in

structural/composite/Directory.ts:70

___

### remove

▸ **remove**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

structural/composite/Directory.ts:83

___

### getChild

▸ **getChild**(`name`): [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Defined in

structural/composite/Directory.ts:93

___

### getChildren

▸ **getChildren**(): [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)[]

#### Returns

[`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)[]

#### Defined in

structural/composite/Directory.ts:101

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

structural/composite/Directory.ts:105

___

### display

▸ **display**(): `string`

ディレクトリの表示文字列を取得します

#### Returns

`string`

フォーマットされた文字列

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[display](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#display)

#### Defined in

structural/composite/Directory.ts:113

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

structural/composite/Directory.ts:135

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/composite/SymbolicLink](../modules/structural_composite_SymbolicLink.md) / SymbolicLink

# Class: SymbolicLink

[structural/composite/SymbolicLink](../modules/structural_composite_SymbolicLink.md).SymbolicLink

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Implements

- [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)
- [`FileSystemElement`](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md)

## Table of contents

### Constructors

- [constructor](structural_composite_SymbolicLink.SymbolicLink.md#constructor)

### Methods

- [accept](structural_composite_SymbolicLink.SymbolicLink.md#accept)
- [getName](structural_composite_SymbolicLink.SymbolicLink.md#getname)
- [getSize](structural_composite_SymbolicLink.SymbolicLink.md#getsize)
- [getCreatedAt](structural_composite_SymbolicLink.SymbolicLink.md#getcreatedat)
- [getModifiedAt](structural_composite_SymbolicLink.SymbolicLink.md#getmodifiedat)
- [getParent](structural_composite_SymbolicLink.SymbolicLink.md#getparent)
- [setParent](structural_composite_SymbolicLink.SymbolicLink.md#setparent)
- [getPath](structural_composite_SymbolicLink.SymbolicLink.md#getpath)
- [getTarget](structural_composite_SymbolicLink.SymbolicLink.md#gettarget)
- [getTargetPath](structural_composite_SymbolicLink.SymbolicLink.md#gettargetpath)
- [setTarget](structural_composite_SymbolicLink.SymbolicLink.md#settarget)
- [isValid](structural_composite_SymbolicLink.SymbolicLink.md#isvalid)
- [display](structural_composite_SymbolicLink.SymbolicLink.md#display)
- [formatSize](structural_composite_SymbolicLink.SymbolicLink.md#formatsize)

## Constructors

### constructor

• **new SymbolicLink**(`name`, `target`): [`SymbolicLink`](structural_composite_SymbolicLink.SymbolicLink.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | リンク名 |
| `target` | ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md) | リンク先の要素 |

#### Returns

[`SymbolicLink`](structural_composite_SymbolicLink.SymbolicLink.md)

#### Defined in

structural/composite/SymbolicLink.ts:26

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

structural/composite/SymbolicLink.ts:37

___

### getName

▸ **getName**(): `string`

要素の名前を取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getName](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getname)

#### Defined in

structural/composite/SymbolicLink.ts:41

___

### getSize

▸ **getSize**(): `number`

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getSize](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getsize)

#### Defined in

structural/composite/SymbolicLink.ts:45

___

### getCreatedAt

▸ **getCreatedAt**(): `Date`

要素の作成日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getCreatedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getcreatedat)

#### Defined in

structural/composite/SymbolicLink.ts:49

___

### getModifiedAt

▸ **getModifiedAt**(): `Date`

要素の更新日時を取得します

#### Returns

`Date`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getModifiedAt](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getmodifiedat)

#### Defined in

structural/composite/SymbolicLink.ts:53

___

### getParent

▸ **getParent**(): ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

要素の親要素を取得します

#### Returns

``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getParent](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getparent)

#### Defined in

structural/composite/SymbolicLink.ts:57

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

structural/composite/SymbolicLink.ts:61

___

### getPath

▸ **getPath**(): `string`

要素のパスを取得します

#### Returns

`string`

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getPath](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#getpath)

#### Defined in

structural/composite/SymbolicLink.ts:68

___

### getTarget

▸ **getTarget**(): ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

リンク先の要素を取得します

#### Returns

``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md)

リンク先の要素

#### Defined in

structural/composite/SymbolicLink.ts:76

___

### getTargetPath

▸ **getTargetPath**(): `string`

リンク先のパスを取得します

#### Returns

`string`

リンク先のパス

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[getTargetPath](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#gettargetpath)

#### Defined in

structural/composite/SymbolicLink.ts:84

___

### setTarget

▸ **setTarget**(`target`): `void`

リンク先の要素を設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | ``null`` \| [`FileSystemComponent`](../interfaces/common_interfaces_FileSystemComponent.FileSystemComponent.md) | 新しいリンク先の要素 |

#### Returns

`void`

#### Defined in

structural/composite/SymbolicLink.ts:92

___

### isValid

▸ **isValid**(): `boolean`

シンボリックリンクが有効かどうかを確認します

#### Returns

`boolean`

リンクが有効な場合はtrue

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[isValid](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#isvalid)

#### Defined in

structural/composite/SymbolicLink.ts:104

___

### display

▸ **display**(): `string`

シンボリックリンクの表示文字列を取得します

#### Returns

`string`

フォーマットされた文字列

#### Implementation of

[FileSystemElement](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md).[display](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md#display)

#### Defined in

structural/composite/SymbolicLink.ts:112

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

structural/composite/SymbolicLink.ts:124

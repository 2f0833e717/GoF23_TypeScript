[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/visitor/visitors/FileSearcher](../modules/behavioral_visitor_visitors_FileSearcher.md) / FileSearcher

# Class: FileSearcher

[behavioral/visitor/visitors/FileSearcher](../modules/behavioral_visitor_visitors_FileSearcher.md).FileSearcher

ファイル検索を実行するVisitorクラス

## Implements

- [`FileSystemVisitor`](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md)

## Table of contents

### Constructors

- [constructor](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#constructor)

### Methods

- [visitFile](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#visitfile)
- [visitDirectory](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#visitdirectory)
- [visitSymbolicLink](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#visitsymboliclink)
- [getResult](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#getresult)
- [reset](behavioral_visitor_visitors_FileSearcher.FileSearcher.md#reset)

## Constructors

### constructor

• **new FileSearcher**(`criteria`): [`FileSearcher`](behavioral_visitor_visitors_FileSearcher.FileSearcher.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria` | [`SearchCriteria`](../interfaces/behavioral_visitor_visitors_FileSearcher.SearchCriteria.md) | 検索条件 |

#### Returns

[`FileSearcher`](behavioral_visitor_visitors_FileSearcher.FileSearcher.md)

**`Throws`**

検索条件が不正な場合

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:66

## Methods

### visitFile

▸ **visitFile**(`file`): `void`

ファイルを訪問し、検索条件に一致する場合は結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](structural_composite_File.File.md) | 訪問するファイル |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitFile](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitfile)

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:80

___

### visitDirectory

▸ **visitDirectory**(`directory`): `void`

ディレクトリを訪問し、検索条件に一致する場合は結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directory` | [`Directory`](structural_composite_Directory.Directory.md) | 訪問するディレクトリ |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitDirectory](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitdirectory)

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:96

___

### visitSymbolicLink

▸ **visitSymbolicLink**(`symlink`): `void`

シンボリックリンクを訪問し、検索条件に一致する場合は結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symlink` | [`SymbolicLink`](structural_composite_SymbolicLink.SymbolicLink.md) | 訪問するシンボリックリンク |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitSymbolicLink](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitsymboliclink)

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:117

___

### getResult

▸ **getResult**(): [`FileSystemElement`](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md)[]

検索結果を取得します

#### Returns

[`FileSystemElement`](../interfaces/common_interfaces_FileSystemElement.FileSystemElement.md)[]

検索条件に一致したファイルシステム要素の配列

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[getResult](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#getresult)

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:138

___

### reset

▸ **reset**(): `void`

検索をリセットします

#### Returns

`void`

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:188

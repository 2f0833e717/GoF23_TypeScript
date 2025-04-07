[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/visitor/visitors/FileStructureVisualizer](../modules/behavioral_visitor_visitors_FileStructureVisualizer.md) / FileStructureVisualizer

# Class: FileStructureVisualizer

[behavioral/visitor/visitors/FileStructureVisualizer](../modules/behavioral_visitor_visitors_FileStructureVisualizer.md).FileStructureVisualizer

ファイルシステムの階層構造を視覚化するVisitorクラス

## Implements

- [`FileSystemVisitor`](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md)

## Table of contents

### Constructors

- [constructor](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#constructor)

### Methods

- [setIndentSize](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#setindentsize)
- [visitFile](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#visitfile)
- [visitDirectory](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#visitdirectory)
- [visitSymbolicLink](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#visitsymboliclink)
- [getResult](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#getresult)
- [reset](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md#reset)

## Constructors

### constructor

• **new FileStructureVisualizer**(): [`FileStructureVisualizer`](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md)

#### Returns

[`FileStructureVisualizer`](behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md)

## Methods

### setIndentSize

▸ **setIndentSize**(`size`): `void`

インデントサイズを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | インデントサイズ（1以上の整数） |

#### Returns

`void`

**`Throws`**

サイズが1未満の場合

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:28

___

### visitFile

▸ **visitFile**(`file`): `void`

ファイルを訪問し、その情報を視覚化結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](structural_composite_File.File.md) | 訪問するファイル |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitFile](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitfile)

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:39

___

### visitDirectory

▸ **visitDirectory**(`directory`): `void`

ディレクトリを訪問し、その情報と子要素を視覚化結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directory` | [`Directory`](structural_composite_Directory.Directory.md) | 訪問するディレクトリ |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitDirectory](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitdirectory)

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:49

___

### visitSymbolicLink

▸ **visitSymbolicLink**(`symlink`): `void`

シンボリックリンクを訪問し、その情報を視覚化結果に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symlink` | [`SymbolicLink`](structural_composite_SymbolicLink.SymbolicLink.md) | 訪問するシンボリックリンク |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitSymbolicLink](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitsymboliclink)

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:75

___

### getResult

▸ **getResult**(): `string`

視覚化結果を取得します

#### Returns

`string`

フォーマットされたファイルシステム構造の文字列

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[getResult](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#getresult)

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:85

___

### reset

▸ **reset**(): `void`

視覚化結果をリセットします

#### Returns

`void`

#### Defined in

behavioral/visitor/visitors/FileStructureVisualizer.ts:119

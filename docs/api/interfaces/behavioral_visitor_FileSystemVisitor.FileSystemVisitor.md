[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/visitor/FileSystemVisitor](../modules/behavioral_visitor_FileSystemVisitor.md) / FileSystemVisitor

# Interface: FileSystemVisitor

[behavioral/visitor/FileSystemVisitor](../modules/behavioral_visitor_FileSystemVisitor.md).FileSystemVisitor

## Implemented by

- [`FileSearcher`](../classes/behavioral_visitor_visitors_FileSearcher.FileSearcher.md)
- [`FileStructureVisualizer`](../classes/behavioral_visitor_visitors_FileStructureVisualizer.FileStructureVisualizer.md)
- [`SizeCalculator`](../classes/behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md)

## Table of contents

### Methods

- [visitFile](behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitfile)
- [visitDirectory](behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitdirectory)
- [visitSymbolicLink](behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitsymboliclink)
- [getResult](behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#getresult)

## Methods

### visitFile

▸ **visitFile**(`file`): `void`

ファイルを訪問します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](../classes/structural_composite_File.File.md) | 訪問するファイル |

#### Returns

`void`

#### Defined in

behavioral/visitor/FileSystemVisitor.ts:17

___

### visitDirectory

▸ **visitDirectory**(`directory`): `void`

ディレクトリを訪問します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directory` | [`Directory`](../classes/structural_composite_Directory.Directory.md) | 訪問するディレクトリ |

#### Returns

`void`

#### Defined in

behavioral/visitor/FileSystemVisitor.ts:23

___

### visitSymbolicLink

▸ **visitSymbolicLink**(`symlink`): `void`

シンボリックリンクを訪問します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symlink` | [`SymbolicLink`](../classes/structural_composite_SymbolicLink.SymbolicLink.md) | 訪問するシンボリックリンク |

#### Returns

`void`

#### Defined in

behavioral/visitor/FileSystemVisitor.ts:29

___

### getResult

▸ **getResult**(): `any`

訪問結果を取得します

#### Returns

`any`

訪問結果

#### Defined in

behavioral/visitor/FileSystemVisitor.ts:35

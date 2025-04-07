[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/visitor/visitors/SizeCalculator](../modules/behavioral_visitor_visitors_SizeCalculator.md) / SizeCalculator

# Class: SizeCalculator

[behavioral/visitor/visitors/SizeCalculator](../modules/behavioral_visitor_visitors_SizeCalculator.md).SizeCalculator

ファイルシステム要素のサイズを計算するVisitorクラス

## Implements

- [`FileSystemVisitor`](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md)

## Table of contents

### Constructors

- [constructor](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#constructor)

### Methods

- [formatSize](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#formatsize)
- [visitFile](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#visitfile)
- [visitDirectory](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#visitdirectory)
- [visitSymbolicLink](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#visitsymboliclink)
- [getResult](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#getresult)
- [reset](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md#reset)

## Constructors

### constructor

• **new SizeCalculator**(): [`SizeCalculator`](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md)

#### Returns

[`SizeCalculator`](behavioral_visitor_visitors_SizeCalculator.SizeCalculator.md)

## Methods

### formatSize

▸ **formatSize**(`bytes`): `string`

サイズを人間が読みやすい形式に変換します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `number` | バイト数 |

#### Returns

`string`

フォーマットされたサイズ文字列（例: "1.5 KB"）

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:80

___

### visitFile

▸ **visitFile**(`file`): `void`

ファイルを訪問し、そのサイズを計算に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`File`](structural_composite_File.File.md) | 訪問するファイル |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitFile](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitfile)

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:25

___

### visitDirectory

▸ **visitDirectory**(`directory`): `void`

ディレクトリを訪問し、その配下の要素のサイズを計算します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directory` | [`Directory`](structural_composite_Directory.Directory.md) | 訪問するディレクトリ |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitDirectory](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitdirectory)

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:35

___

### visitSymbolicLink

▸ **visitSymbolicLink**(`symlink`): `void`

シンボリックリンクを訪問し、そのサイズを計算に追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symlink` | [`SymbolicLink`](structural_composite_SymbolicLink.SymbolicLink.md) | 訪問するシンボリックリンク |

#### Returns

`void`

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[visitSymbolicLink](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#visitsymboliclink)

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:53

___

### getResult

▸ **getResult**(): `number`

計算結果を取得します

#### Returns

`number`

合計サイズ

#### Implementation of

[FileSystemVisitor](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md).[getResult](../interfaces/behavioral_visitor_FileSystemVisitor.FileSystemVisitor.md#getresult)

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:63

___

### reset

▸ **reset**(): `void`

計算結果をリセットします

#### Returns

`void`

#### Defined in

behavioral/visitor/visitors/SizeCalculator.ts:70

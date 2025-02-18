[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/visitor/visitors/FileStructureVisualizer](../README.md) / FileStructureVisualizer

# Class: FileStructureVisualizer

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:15

ファイルシステムの階層構造を視覚化するVisitorクラス

## Implements

- [`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md)

## Constructors

### new FileStructureVisualizer()

> **new FileStructureVisualizer**(): [`FileStructureVisualizer`](FileStructureVisualizer.md)

#### Returns

[`FileStructureVisualizer`](FileStructureVisualizer.md)

## Methods

### setIndentSize()

> **setIndentSize**(`size`): `void`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:28

インデントサイズを設定します

#### Parameters

##### size

`number`

インデントサイズ（1以上の整数）

#### Returns

`void`

#### Throws

サイズが1未満の場合

***

### visitFile()

> **visitFile**(`file`): `void`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:39

ファイルを訪問し、その情報を視覚化結果に追加します

#### Parameters

##### file

[`File`](../../../../../structural/composite/File/classes/File.md)

訪問するファイル

#### Returns

`void`

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`visitFile`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#visitfile)

***

### visitDirectory()

> **visitDirectory**(`directory`): `void`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:49

ディレクトリを訪問し、その情報と子要素を視覚化結果に追加します

#### Parameters

##### directory

[`Directory`](../../../../../structural/composite/Directory/classes/Directory.md)

訪問するディレクトリ

#### Returns

`void`

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`visitDirectory`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#visitdirectory)

***

### visitSymbolicLink()

> **visitSymbolicLink**(`symlink`): `void`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:75

シンボリックリンクを訪問し、その情報を視覚化結果に追加します

#### Parameters

##### symlink

[`SymbolicLink`](../../../../../structural/composite/SymbolicLink/classes/SymbolicLink.md)

訪問するシンボリックリンク

#### Returns

`void`

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`visitSymbolicLink`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#visitsymboliclink)

***

### getResult()

> **getResult**(): `string`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:85

視覚化結果を取得します

#### Returns

`string`

フォーマットされたファイルシステム構造の文字列

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`getResult`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#getresult)

***

### reset()

> **reset**(): `void`

Defined in: behavioral/visitor/visitors/FileStructureVisualizer.ts:119

視覚化結果をリセットします

#### Returns

`void`

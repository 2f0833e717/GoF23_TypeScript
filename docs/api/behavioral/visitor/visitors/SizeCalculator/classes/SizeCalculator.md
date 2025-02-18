[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/visitor/visitors/SizeCalculator](../README.md) / SizeCalculator

# Class: SizeCalculator

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:15

ファイルシステム要素のサイズを計算するVisitorクラス

## Implements

- [`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md)

## Constructors

### new SizeCalculator()

> **new SizeCalculator**(): [`SizeCalculator`](SizeCalculator.md)

#### Returns

[`SizeCalculator`](SizeCalculator.md)

## Methods

### formatSize()

> `static` **formatSize**(`bytes`): `string`

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:85

サイズを人間が読みやすい形式に変換します

#### Parameters

##### bytes

`number`

バイト数

#### Returns

`string`

フォーマットされたサイズ文字列（例: "1.5 KB"）

***

### visitFile()

> **visitFile**(`file`): `void`

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:25

ファイルを訪問し、そのサイズを計算に追加します

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

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:35

ディレクトリを訪問し、その配下の要素のサイズを計算します

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

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:53

シンボリックリンクを訪問し、そのサイズを計算に追加します

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

> **getResult**(): `object`

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:63

計算結果を取得します

#### Returns

`object`

合計サイズとパスごとの詳細情報

##### totalSize

> **totalSize**: `number`

##### details

> **details**: `Map`\<`string`, `number`\>

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`getResult`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#getresult)

***

### reset()

> **reset**(): `void`

Defined in: behavioral/visitor/visitors/SizeCalculator.ts:75

計算結果をリセットします

#### Returns

`void`

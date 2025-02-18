[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/visitor/FileSystemVisitor](../README.md) / FileSystemVisitor

# Interface: FileSystemVisitor

Defined in: structural/visitor/FileSystemVisitor.ts:12

## Methods

### visitFile()

> **visitFile**(`file`): `void`

Defined in: structural/visitor/FileSystemVisitor.ts:17

ファイルを訪問します

#### Parameters

##### file

[`File`](../../../composite/File/classes/File.md)

訪問するファイル

#### Returns

`void`

***

### visitDirectory()

> **visitDirectory**(`directory`): `void`

Defined in: structural/visitor/FileSystemVisitor.ts:23

ディレクトリを訪問します

#### Parameters

##### directory

[`Directory`](../../../composite/Directory/classes/Directory.md)

訪問するディレクトリ

#### Returns

`void`

***

### visitSymbolicLink()

> **visitSymbolicLink**(`symlink`): `void`

Defined in: structural/visitor/FileSystemVisitor.ts:29

シンボリックリンクを訪問します

#### Parameters

##### symlink

[`SymbolicLink`](../../../composite/SymbolicLink/classes/SymbolicLink.md)

訪問するシンボリックリンク

#### Returns

`void`

***

### getResult()

> **getResult**(): `any`

Defined in: structural/visitor/FileSystemVisitor.ts:35

訪問結果を取得します

#### Returns

`any`

訪問結果

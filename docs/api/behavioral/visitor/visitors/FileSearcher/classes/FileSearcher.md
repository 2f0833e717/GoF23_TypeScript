[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/visitor/visitors/FileSearcher](../README.md) / FileSearcher

# Class: FileSearcher

Defined in: behavioral/visitor/visitors/FileSearcher.ts:56

ファイル検索を実行するVisitorクラス

## Implements

- [`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md)

## Constructors

### new FileSearcher()

> **new FileSearcher**(`criteria`): [`FileSearcher`](FileSearcher.md)

Defined in: behavioral/visitor/visitors/FileSearcher.ts:64

コンストラクタ

#### Parameters

##### criteria

[`SearchCriteria`](../interfaces/SearchCriteria.md)

検索条件

#### Returns

[`FileSearcher`](FileSearcher.md)

## Methods

### visitFile()

> **visitFile**(`file`): `void`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:72

ファイルを訪問し、検索条件に一致する場合は結果に追加します

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

Defined in: behavioral/visitor/visitors/FileSearcher.ts:82

ディレクトリを訪問し、検索条件に一致する場合は結果に追加します

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

Defined in: behavioral/visitor/visitors/FileSearcher.ts:92

シンボリックリンクを訪問し、検索条件に一致する場合は結果に追加します

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

> **getResult**(): [`FileSystemElement`](../../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md)[]

Defined in: behavioral/visitor/visitors/FileSearcher.ts:102

検索結果を取得します

#### Returns

[`FileSystemElement`](../../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md)[]

検索条件に一致したファイルシステム要素の配列

#### Implementation of

[`FileSystemVisitor`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md).[`getResult`](../../../FileSystemVisitor/interfaces/FileSystemVisitor.md#getresult)

***

### reset()

> **reset**(): `void`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:152

検索をリセットします

#### Returns

`void`

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [behavioral/visitor/visitors/FileSearcher](../README.md) / SearchCriteria

# Interface: SearchCriteria

Defined in: behavioral/visitor/visitors/FileSearcher.ts:16

検索条件を定義するインターフェース

## Properties

### name?

> `optional` **name**: `RegExp`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:20

ファイル名のパターン（正規表現）

***

### minSize?

> `optional` **minSize**: `number`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:25

最小サイズ（バイト）

***

### maxSize?

> `optional` **maxSize**: `number`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:30

最大サイズ（バイト）

***

### createdAfter?

> `optional` **createdAfter**: `Date`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:35

この日時以降に作成されたファイル

***

### createdBefore?

> `optional` **createdBefore**: `Date`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:40

この日時以前に作成されたファイル

***

### modifiedAfter?

> `optional` **modifiedAfter**: `Date`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:45

この日時以降に更新されたファイル

***

### modifiedBefore?

> `optional` **modifiedBefore**: `Date`

Defined in: behavioral/visitor/visitors/FileSearcher.ts:50

この日時以前に更新されたファイル

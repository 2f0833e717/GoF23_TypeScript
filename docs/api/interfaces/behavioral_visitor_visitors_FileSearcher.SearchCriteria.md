[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/visitor/visitors/FileSearcher](../modules/behavioral_visitor_visitors_FileSearcher.md) / SearchCriteria

# Interface: SearchCriteria

[behavioral/visitor/visitors/FileSearcher](../modules/behavioral_visitor_visitors_FileSearcher.md).SearchCriteria

検索条件を定義するインターフェース

## Table of contents

### Properties

- [name](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#name)
- [minSize](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#minsize)
- [maxSize](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#maxsize)
- [createdAfter](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#createdafter)
- [createdBefore](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#createdbefore)
- [modifiedAfter](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#modifiedafter)
- [modifiedBefore](behavioral_visitor_visitors_FileSearcher.SearchCriteria.md#modifiedbefore)

## Properties

### name

• `Optional` **name**: `RegExp`

ファイル名のパターン（正規表現）

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:20

___

### minSize

• `Optional` **minSize**: `number`

最小サイズ（バイト）

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:25

___

### maxSize

• `Optional` **maxSize**: `number`

最大サイズ（バイト）

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:30

___

### createdAfter

• `Optional` **createdAfter**: `Date`

この日時以降に作成されたファイル

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:35

___

### createdBefore

• `Optional` **createdBefore**: `Date`

この日時以前に作成されたファイル

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:40

___

### modifiedAfter

• `Optional` **modifiedAfter**: `Date`

この日時以降に更新されたファイル

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:45

___

### modifiedBefore

• `Optional` **modifiedBefore**: `Date`

この日時以前に更新されたファイル

#### Defined in

behavioral/visitor/visitors/FileSearcher.ts:50

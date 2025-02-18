[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/visitor/FileSystemElement](../README.md) / FileSystemElement

# Interface: FileSystemElement

Defined in: behavioral/visitor/FileSystemElement.ts:10

## Methods

### accept()

> **accept**(`visitor`): `void`

Defined in: behavioral/visitor/FileSystemElement.ts:15

Visitorを受け入れます

#### Parameters

##### visitor

[`FileSystemVisitor`](../../FileSystemVisitor/interfaces/FileSystemVisitor.md)

訪問者

#### Returns

`void`

***

### getName()

> **getName**(): `string`

Defined in: behavioral/visitor/FileSystemElement.ts:20

要素の名前を取得します

#### Returns

`string`

***

### getPath()

> **getPath**(): `string`

Defined in: behavioral/visitor/FileSystemElement.ts:25

要素のパスを取得します

#### Returns

`string`

***

### getSize()

> **getSize**(): `number`

Defined in: behavioral/visitor/FileSystemElement.ts:30

要素のサイズを取得します（バイト）

#### Returns

`number`

***

### getCreatedAt()

> **getCreatedAt**(): `Date`

Defined in: behavioral/visitor/FileSystemElement.ts:35

要素の作成日時を取得します

#### Returns

`Date`

***

### getModifiedAt()

> **getModifiedAt**(): `Date`

Defined in: behavioral/visitor/FileSystemElement.ts:40

要素の更新日時を取得します

#### Returns

`Date`

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: behavioral/visitor/FileSystemElement.ts:46

親要素を設定します

#### Parameters

##### parent

親要素

`null` | [`FileSystemElement`](FileSystemElement.md)

#### Returns

`void`

***

### getParent()

> **getParent**(): `null` \| [`FileSystemElement`](FileSystemElement.md)

Defined in: behavioral/visitor/FileSystemElement.ts:51

親要素を取得します

#### Returns

`null` \| [`FileSystemElement`](FileSystemElement.md)

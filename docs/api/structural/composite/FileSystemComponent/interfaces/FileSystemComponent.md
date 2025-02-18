[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/composite/FileSystemComponent](../README.md) / FileSystemComponent

# Interface: FileSystemComponent

Defined in: structural/composite/FileSystemComponent.ts:10

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Extends

- [`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md)

## Methods

### getTargetPath()?

> `optional` **getTargetPath**(): `string`

Defined in: common/interfaces/FileSystemElement.ts:60

リンク先のパスを取得します（シンボリックリンクの場合）

#### Returns

`string`

#### Inherited from

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getTargetPath`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#gettargetpath)

***

### isValid()?

> `optional` **isValid**(): `boolean`

Defined in: common/interfaces/FileSystemElement.ts:65

リンクが有効かどうかを確認します（シンボリックリンクの場合）

#### Returns

`boolean`

#### Inherited from

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`isValid`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#isvalid)

***

### accept()

> **accept**(`visitor`): `void`

Defined in: structural/composite/FileSystemComponent.ts:15

Visitorを受け入れます

#### Parameters

##### visitor

[`FileSystemVisitor`](../../../../behavioral/visitor/FileSystemVisitor/interfaces/FileSystemVisitor.md)

訪問者

#### Returns

`void`

***

### getName()

> **getName**(): `string`

Defined in: structural/composite/FileSystemComponent.ts:20

要素の名前を取得します

#### Returns

`string`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getName`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getname)

***

### getSize()

> **getSize**(): `number`

Defined in: structural/composite/FileSystemComponent.ts:25

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getSize`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getsize)

***

### getCreatedAt()

> **getCreatedAt**(): `Date`

Defined in: structural/composite/FileSystemComponent.ts:30

要素の作成日時を取得します

#### Returns

`Date`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getCreatedAt`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getcreatedat)

***

### getModifiedAt()

> **getModifiedAt**(): `Date`

Defined in: structural/composite/FileSystemComponent.ts:35

要素の更新日時を取得します

#### Returns

`Date`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getModifiedAt`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getmodifiedat)

***

### getParent()

> **getParent**(): `null` \| [`FileSystemComponent`](FileSystemComponent.md)

Defined in: structural/composite/FileSystemComponent.ts:40

要素の親要素を取得します

#### Returns

`null` \| [`FileSystemComponent`](FileSystemComponent.md)

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getParent`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getparent)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: structural/composite/FileSystemComponent.ts:46

要素の親要素を設定します

#### Parameters

##### parent

親要素

`null` | [`FileSystemComponent`](FileSystemComponent.md)

#### Returns

`void`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`setParent`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#setparent)

***

### getPath()

> **getPath**(): `string`

Defined in: structural/composite/FileSystemComponent.ts:51

要素のパスを取得します

#### Returns

`string`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`getPath`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#getpath)

***

### display()

> **display**(`indent`?): `string`

Defined in: structural/composite/FileSystemComponent.ts:57

要素の表示文字列を取得します

#### Parameters

##### indent?

`number`

インデントレベル

#### Returns

`string`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`display`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#display)

***

### formatSize()

> **formatSize**(`bytes`): `string`

Defined in: structural/composite/FileSystemComponent.ts:63

サイズをフォーマットして表示します

#### Parameters

##### bytes

`number`

バイト数

#### Returns

`string`

#### Overrides

[`FileSystemElement`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md).[`formatSize`](../../../../common/interfaces/FileSystemElement/interfaces/FileSystemElement.md#formatsize)

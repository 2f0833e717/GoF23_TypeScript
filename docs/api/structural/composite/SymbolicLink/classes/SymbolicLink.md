[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/composite/SymbolicLink](../README.md) / SymbolicLink

# Class: SymbolicLink

Defined in: structural/composite/SymbolicLink.ts:10

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Implements

- [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

## Constructors

### new SymbolicLink()

> **new SymbolicLink**(`name`, `target`): [`SymbolicLink`](SymbolicLink.md)

Defined in: structural/composite/SymbolicLink.ts:20

コンストラクタ

#### Parameters

##### name

`string`

リンク名

##### target

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

リンク先の要素

#### Returns

[`SymbolicLink`](SymbolicLink.md)

## Methods

### accept()

> **accept**(`visitor`): `void`

Defined in: structural/composite/SymbolicLink.ts:28

Visitorを受け入れます

#### Parameters

##### visitor

[`FileSystemVisitor`](../../../../behavioral/visitor/FileSystemVisitor/interfaces/FileSystemVisitor.md)

訪問者

#### Returns

`void`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`accept`](../../FileSystemComponent/interfaces/FileSystemComponent.md#accept)

***

### getName()

> **getName**(): `string`

Defined in: structural/composite/SymbolicLink.ts:32

要素の名前を取得します

#### Returns

`string`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getName`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getname)

***

### getSize()

> **getSize**(): `number`

Defined in: structural/composite/SymbolicLink.ts:36

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getSize`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getsize)

***

### getCreatedAt()

> **getCreatedAt**(): `Date`

Defined in: structural/composite/SymbolicLink.ts:40

要素の作成日時を取得します

#### Returns

`Date`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getCreatedAt`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getcreatedat)

***

### getModifiedAt()

> **getModifiedAt**(): `Date`

Defined in: structural/composite/SymbolicLink.ts:44

要素の更新日時を取得します

#### Returns

`Date`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getModifiedAt`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getmodifiedat)

***

### getParent()

> **getParent**(): `null` \| [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

Defined in: structural/composite/SymbolicLink.ts:48

要素の親要素を取得します

#### Returns

`null` \| [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getParent`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getparent)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: structural/composite/SymbolicLink.ts:52

要素の親要素を設定します

#### Parameters

##### parent

親要素

`null` | [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

#### Returns

`void`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`setParent`](../../FileSystemComponent/interfaces/FileSystemComponent.md#setparent)

***

### getPath()

> **getPath**(): `string`

Defined in: structural/composite/SymbolicLink.ts:56

要素のパスを取得します

#### Returns

`string`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getPath`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getpath)

***

### getTarget()

> **getTarget**(): [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

Defined in: structural/composite/SymbolicLink.ts:65

リンク先の要素を取得します

#### Returns

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

リンク先の要素

***

### getTargetPath()

> **getTargetPath**(): `string`

Defined in: structural/composite/SymbolicLink.ts:73

リンク先のパスを取得します

#### Returns

`string`

リンク先のパス

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getTargetPath`](../../FileSystemComponent/interfaces/FileSystemComponent.md#gettargetpath)

***

### setTarget()

> **setTarget**(`target`): `void`

Defined in: structural/composite/SymbolicLink.ts:81

リンク先の要素を設定します

#### Parameters

##### target

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

新しいリンク先の要素

#### Returns

`void`

***

### isValid()

> **isValid**(): `boolean`

Defined in: structural/composite/SymbolicLink.ts:90

シンボリックリンクが有効かどうかを確認します

#### Returns

`boolean`

リンクが有効な場合はtrue

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`isValid`](../../FileSystemComponent/interfaces/FileSystemComponent.md#isvalid)

***

### display()

> **display**(`indent`): `string`

Defined in: structural/composite/SymbolicLink.ts:99

シンボリックリンクの表示文字列を取得します

#### Parameters

##### indent

`number` = `0`

インデントレベル

#### Returns

`string`

フォーマットされた文字列

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`display`](../../FileSystemComponent/interfaces/FileSystemComponent.md#display)

***

### formatSize()

> **formatSize**(`bytes`): `string`

Defined in: structural/composite/SymbolicLink.ts:109

サイズを適切な単位に変換して表示します

#### Parameters

##### bytes

`number`

バイト数

#### Returns

`string`

フォーマットされたサイズ文字列

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`formatSize`](../../FileSystemComponent/interfaces/FileSystemComponent.md#formatsize)

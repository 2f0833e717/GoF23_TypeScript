[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/composite/Directory](../README.md) / Directory

# Class: Directory

Defined in: structural/composite/Directory.ts:10

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Implements

- [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

## Constructors

### new Directory()

> **new Directory**(`name`): [`Directory`](Directory.md)

Defined in: structural/composite/Directory.ts:20

コンストラクタ

#### Parameters

##### name

`string`

ディレクトリ名

#### Returns

[`Directory`](Directory.md)

## Methods

### accept()

> **accept**(`visitor`): `void`

Defined in: structural/composite/Directory.ts:25

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

Defined in: structural/composite/Directory.ts:29

要素の名前を取得します

#### Returns

`string`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getName`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getname)

***

### getSize()

> **getSize**(): `number`

Defined in: structural/composite/Directory.ts:33

要素のサイズを取得します（バイト単位）

#### Returns

`number`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getSize`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getsize)

***

### getCreatedAt()

> **getCreatedAt**(): `Date`

Defined in: structural/composite/Directory.ts:41

要素の作成日時を取得します

#### Returns

`Date`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getCreatedAt`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getcreatedat)

***

### getModifiedAt()

> **getModifiedAt**(): `Date`

Defined in: structural/composite/Directory.ts:45

要素の更新日時を取得します

#### Returns

`Date`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getModifiedAt`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getmodifiedat)

***

### getParent()

> **getParent**(): `null` \| [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

Defined in: structural/composite/Directory.ts:49

要素の親要素を取得します

#### Returns

`null` \| [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getParent`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getparent)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: structural/composite/Directory.ts:53

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

Defined in: structural/composite/Directory.ts:57

要素のパスを取得します

#### Returns

`string`

#### Implementation of

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md).[`getPath`](../../FileSystemComponent/interfaces/FileSystemComponent.md#getpath)

***

### add()

> **add**(`component`): `void`

Defined in: structural/composite/Directory.ts:67

子コンポーネントを追加します

#### Parameters

##### component

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

追加するコンポーネント

#### Returns

`void`

#### Throws

Error 同名のコンポーネントが既に存在する場合

***

### remove()

> **remove**(`name`): `void`

Defined in: structural/composite/Directory.ts:82

子コンポーネントを削除します

#### Parameters

##### name

`string`

削除するコンポーネントの名前

#### Returns

`void`

#### Throws

Error 指定された名前のコンポーネントが存在しない場合

***

### getChild()

> **getChild**(`name`): [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

Defined in: structural/composite/Directory.ts:98

指定された名前の子コンポーネントを取得します

#### Parameters

##### name

`string`

コンポーネントの名前

#### Returns

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)

子コンポーネント

#### Throws

Error 指定された名前のコンポーネントが存在しない場合

***

### getChildren()

> **getChildren**(): [`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)[]

Defined in: structural/composite/Directory.ts:109

すべての子コンポーネントを取得します

#### Returns

[`FileSystemComponent`](../../FileSystemComponent/interfaces/FileSystemComponent.md)[]

子コンポーネントの配列

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: structural/composite/Directory.ts:117

ディレクトリが空かどうかを確認します

#### Returns

`boolean`

ディレクトリが空の場合はtrue

***

### display()

> **display**(`indent`): `string`

Defined in: structural/composite/Directory.ts:126

ディレクトリの表示文字列を取得します

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

Defined in: structural/composite/Directory.ts:147

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

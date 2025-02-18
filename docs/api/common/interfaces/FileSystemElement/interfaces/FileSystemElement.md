[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [common/interfaces/FileSystemElement](../README.md) / FileSystemElement

# Interface: FileSystemElement

Defined in: common/interfaces/FileSystemElement.ts:8

ファイルシステム要素のインターフェース

ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
共通インターフェースを定義します。

## Extended by

- [`FileSystemComponent`](../../../../structural/composite/FileSystemComponent/interfaces/FileSystemComponent.md)

## Methods

### getName()

> **getName**(): `string`

Defined in: common/interfaces/FileSystemElement.ts:12

要素の名前を取得します

#### Returns

`string`

***

### getSize()

> **getSize**(): `number`

Defined in: common/interfaces/FileSystemElement.ts:17

要素のサイズを取得します（バイト単位）

#### Returns

`number`

***

### getCreatedAt()

> **getCreatedAt**(): `Date`

Defined in: common/interfaces/FileSystemElement.ts:22

要素の作成日時を取得します

#### Returns

`Date`

***

### getModifiedAt()

> **getModifiedAt**(): `Date`

Defined in: common/interfaces/FileSystemElement.ts:27

要素の更新日時を取得します

#### Returns

`Date`

***

### getParent()

> **getParent**(): `null` \| [`FileSystemElement`](FileSystemElement.md)

Defined in: common/interfaces/FileSystemElement.ts:32

要素の親要素を取得します

#### Returns

`null` \| [`FileSystemElement`](FileSystemElement.md)

***

### setParent()

> **setParent**(`parent`): `void`

Defined in: common/interfaces/FileSystemElement.ts:38

要素の親要素を設定します

#### Parameters

##### parent

親要素

`null` | [`FileSystemElement`](FileSystemElement.md)

#### Returns

`void`

***

### getPath()

> **getPath**(): `string`

Defined in: common/interfaces/FileSystemElement.ts:43

要素のパスを取得します

#### Returns

`string`

***

### display()

> **display**(`indent`?): `string`

Defined in: common/interfaces/FileSystemElement.ts:49

要素の表示文字列を取得します

#### Parameters

##### indent?

`number`

インデントレベル

#### Returns

`string`

***

### formatSize()

> **formatSize**(`bytes`): `string`

Defined in: common/interfaces/FileSystemElement.ts:55

サイズをフォーマットして表示します

#### Parameters

##### bytes

`number`

バイト数

#### Returns

`string`

***

### getTargetPath()?

> `optional` **getTargetPath**(): `string`

Defined in: common/interfaces/FileSystemElement.ts:60

リンク先のパスを取得します（シンボリックリンクの場合）

#### Returns

`string`

***

### isValid()?

> `optional` **isValid**(): `boolean`

Defined in: common/interfaces/FileSystemElement.ts:65

リンクが有効かどうかを確認します（シンボリックリンクの場合）

#### Returns

`boolean`

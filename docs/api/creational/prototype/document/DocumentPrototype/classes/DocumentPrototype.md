[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [creational/prototype/document/DocumentPrototype](../README.md) / DocumentPrototype

# Class: `abstract` DocumentPrototype

Defined in: creational/prototype/document/DocumentPrototype.ts:7

文書プロトタイプ

文書テンプレートの基底クラスです。
このクラスは、文書の基本構造とクローン機能を定義します。

## Extended by

- [`Report`](../../ConcreteDocuments/classes/Report.md)
- [`Contract`](../../ConcreteDocuments/classes/Contract.md)

## Constructors

### new DocumentPrototype()

> **new DocumentPrototype**(`title`, `content`, `author`): [`DocumentPrototype`](DocumentPrototype.md)

Defined in: creational/prototype/document/DocumentPrototype.ts:20

コンストラクタ

#### Parameters

##### title

`string`

タイトル

##### content

`string`

内容

##### author

`string`

作成者

#### Returns

[`DocumentPrototype`](DocumentPrototype.md)

## Properties

### title

> `protected` **title**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:8

***

### content

> `protected` **content**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:9

***

### author

> `protected` **author**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:10

***

### metadata

> `protected` **metadata**: `Map`\<`string`, `string`\>

Defined in: creational/prototype/document/DocumentPrototype.ts:11

***

### createdAt

> `protected` **createdAt**: `Date`

Defined in: creational/prototype/document/DocumentPrototype.ts:12

## Methods

### addMetadata()

> **addMetadata**(`key`, `value`): `void`

Defined in: creational/prototype/document/DocumentPrototype.ts:33

メタデータを追加します

#### Parameters

##### key

`string`

キー

##### value

`string`

値

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:41

文書の情報を文字列として取得します

#### Returns

`string`

文書情報

***

### clone()

> `abstract` **clone**(): [`DocumentPrototype`](DocumentPrototype.md)

Defined in: creational/prototype/document/DocumentPrototype.ts:59

文書をクローンします

#### Returns

[`DocumentPrototype`](DocumentPrototype.md)

クローンされた文書

***

### copyBasicProperties()

> `protected` **copyBasicProperties**(`target`): `void`

Defined in: creational/prototype/document/DocumentPrototype.ts:65

基本プロパティをコピーします

#### Parameters

##### target

[`DocumentPrototype`](DocumentPrototype.md)

コピー先のオブジェクト

#### Returns

`void`

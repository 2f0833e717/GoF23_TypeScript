[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/prototype/document/DocumentPrototype](../modules/creational_prototype_document_DocumentPrototype.md) / DocumentPrototype

# Class: DocumentPrototype

[creational/prototype/document/DocumentPrototype](../modules/creational_prototype_document_DocumentPrototype.md).DocumentPrototype

文書プロトタイプ

文書テンプレートの基底クラスです。
このクラスは、文書の基本構造とクローン機能を定義します。

## Hierarchy

- **`DocumentPrototype`**

  ↳ [`Report`](creational_prototype_document_ConcreteDocuments.Report.md)

  ↳ [`Contract`](creational_prototype_document_ConcreteDocuments.Contract.md)

## Table of contents

### Constructors

- [constructor](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#constructor)

### Properties

- [title](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#title)
- [content](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#content)
- [author](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#author)
- [metadata](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#metadata)
- [createdAt](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#createdat)

### Methods

- [addMetadata](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#addmetadata)
- [toString](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#tostring)
- [clone](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#clone)
- [copyBasicProperties](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#copybasicproperties)

## Constructors

### constructor

• **new DocumentPrototype**(`title`, `content`, `author`): [`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | タイトル |
| `content` | `string` | 内容 |
| `author` | `string` | 作成者 |

#### Returns

[`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:20

## Properties

### title

• `Protected` **title**: `string`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:8

___

### content

• `Protected` **content**: `string`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:9

___

### author

• `Protected` **author**: `string`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:10

___

### metadata

• `Protected` **metadata**: `Map`\<`string`, `string`\>

#### Defined in

creational/prototype/document/DocumentPrototype.ts:11

___

### createdAt

• `Protected` **createdAt**: `Date`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:12

## Methods

### addMetadata

▸ **addMetadata**(`key`, `value`): `void`

メタデータを追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | キー |
| `value` | `string` | 値 |

#### Returns

`void`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:33

___

### toString

▸ **toString**(): `string`

文書の情報を文字列として取得します

#### Returns

`string`

文書情報

#### Defined in

creational/prototype/document/DocumentPrototype.ts:41

___

### clone

▸ **clone**(): [`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

文書をクローンします

#### Returns

[`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

クローンされた文書

#### Defined in

creational/prototype/document/DocumentPrototype.ts:59

___

### copyBasicProperties

▸ **copyBasicProperties**(`target`): `void`

基本プロパティをコピーします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md) | コピー先のオブジェクト |

#### Returns

`void`

#### Defined in

creational/prototype/document/DocumentPrototype.ts:65

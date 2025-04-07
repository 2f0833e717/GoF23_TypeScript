[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/prototype/document/ConcreteDocuments](../modules/creational_prototype_document_ConcreteDocuments.md) / Report

# Class: Report

[creational/prototype/document/ConcreteDocuments](../modules/creational_prototype_document_ConcreteDocuments.md).Report

報告書

報告書テンプレートの具象クラスです。

## Hierarchy

- [`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

  ↳ **`Report`**

## Table of contents

### Constructors

- [constructor](creational_prototype_document_ConcreteDocuments.Report.md#constructor)

### Properties

- [title](creational_prototype_document_ConcreteDocuments.Report.md#title)
- [content](creational_prototype_document_ConcreteDocuments.Report.md#content)
- [author](creational_prototype_document_ConcreteDocuments.Report.md#author)
- [metadata](creational_prototype_document_ConcreteDocuments.Report.md#metadata)
- [createdAt](creational_prototype_document_ConcreteDocuments.Report.md#createdat)

### Methods

- [clone](creational_prototype_document_ConcreteDocuments.Report.md#clone)
- [addMetadata](creational_prototype_document_ConcreteDocuments.Report.md#addmetadata)
- [toString](creational_prototype_document_ConcreteDocuments.Report.md#tostring)
- [copyBasicProperties](creational_prototype_document_ConcreteDocuments.Report.md#copybasicproperties)

## Constructors

### constructor

• **new Report**(`title`, `content`, `author`, `department`): [`Report`](creational_prototype_document_ConcreteDocuments.Report.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | タイトル |
| `content` | `string` | 内容 |
| `author` | `string` | 作成者 |
| `department` | `string` | 部署 |

#### Returns

[`Report`](creational_prototype_document_ConcreteDocuments.Report.md)

#### Overrides

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[constructor](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#constructor)

#### Defined in

creational/prototype/document/ConcreteDocuments.ts:18

## Properties

### title

• `Protected` **title**: `string`

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[title](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#title)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:8

___

### content

• `Protected` **content**: `string`

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[content](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#content)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:9

___

### author

• `Protected` **author**: `string`

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[author](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#author)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:10

___

### metadata

• `Protected` **metadata**: `Map`\<`string`, `string`\>

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[metadata](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#metadata)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:11

___

### createdAt

• `Protected` **createdAt**: `Date`

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[createdAt](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#createdat)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:12

## Methods

### clone

▸ **clone**(): [`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

報告書をクローンします

#### Returns

[`DocumentPrototype`](creational_prototype_document_DocumentPrototype.DocumentPrototype.md)

クローンされた報告書

#### Overrides

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[clone](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#clone)

#### Defined in

creational/prototype/document/ConcreteDocuments.ts:29

___

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

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[addMetadata](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#addmetadata)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:33

___

### toString

▸ **toString**(): `string`

文書の情報を文字列として取得します

#### Returns

`string`

文書情報

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[toString](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#tostring)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:41

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

#### Inherited from

[DocumentPrototype](creational_prototype_document_DocumentPrototype.DocumentPrototype.md).[copyBasicProperties](creational_prototype_document_DocumentPrototype.DocumentPrototype.md#copybasicproperties)

#### Defined in

creational/prototype/document/DocumentPrototype.ts:65

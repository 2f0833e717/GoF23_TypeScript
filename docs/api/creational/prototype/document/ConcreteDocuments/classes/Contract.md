[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [creational/prototype/document/ConcreteDocuments](../README.md) / Contract

# Class: Contract

Defined in: creational/prototype/document/ConcreteDocuments.ts:41

契約書

契約書テンプレートの具象クラスです。

## Extends

- [`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md)

## Constructors

### new Contract()

> **new Contract**(`title`, `content`, `author`, `parties`, `expirationDate`): [`Contract`](Contract.md)

Defined in: creational/prototype/document/ConcreteDocuments.ts:53

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

##### parties

`string`[]

契約当事者

##### expirationDate

`Date`

有効期限

#### Returns

[`Contract`](Contract.md)

#### Overrides

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`constructor`](../../DocumentPrototype/classes/DocumentPrototype.md#constructors)

## Properties

### title

> `protected` **title**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:8

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`title`](../../DocumentPrototype/classes/DocumentPrototype.md#title-1)

***

### content

> `protected` **content**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:9

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`content`](../../DocumentPrototype/classes/DocumentPrototype.md#content-1)

***

### author

> `protected` **author**: `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:10

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`author`](../../DocumentPrototype/classes/DocumentPrototype.md#author-1)

***

### metadata

> `protected` **metadata**: `Map`\<`string`, `string`\>

Defined in: creational/prototype/document/DocumentPrototype.ts:11

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`metadata`](../../DocumentPrototype/classes/DocumentPrototype.md#metadata)

***

### createdAt

> `protected` **createdAt**: `Date`

Defined in: creational/prototype/document/DocumentPrototype.ts:12

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`createdAt`](../../DocumentPrototype/classes/DocumentPrototype.md#createdat)

## Methods

### clone()

> **clone**(): [`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md)

Defined in: creational/prototype/document/ConcreteDocuments.ts:72

契約書をクローンします

#### Returns

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md)

クローンされた契約書

#### Overrides

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`clone`](../../DocumentPrototype/classes/DocumentPrototype.md#clone)

***

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

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`addMetadata`](../../DocumentPrototype/classes/DocumentPrototype.md#addmetadata)

***

### toString()

> **toString**(): `string`

Defined in: creational/prototype/document/DocumentPrototype.ts:41

文書の情報を文字列として取得します

#### Returns

`string`

文書情報

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`toString`](../../DocumentPrototype/classes/DocumentPrototype.md#tostring)

***

### copyBasicProperties()

> `protected` **copyBasicProperties**(`target`): `void`

Defined in: creational/prototype/document/DocumentPrototype.ts:65

基本プロパティをコピーします

#### Parameters

##### target

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md)

コピー先のオブジェクト

#### Returns

`void`

#### Inherited from

[`DocumentPrototype`](../../DocumentPrototype/classes/DocumentPrototype.md).[`copyBasicProperties`](../../DocumentPrototype/classes/DocumentPrototype.md#copybasicproperties)

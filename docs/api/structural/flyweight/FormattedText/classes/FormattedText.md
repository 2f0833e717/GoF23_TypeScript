[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/flyweight/FormattedText](../README.md) / FormattedText

# Class: FormattedText

Defined in: structural/flyweight/FormattedText.ts:9

## Constructors

### new FormattedText()

> **new FormattedText**(`text`, `format`): [`FormattedText`](FormattedText.md)

Defined in: structural/flyweight/FormattedText.ts:15

コンストラクタ

#### Parameters

##### text

`string`

テキスト内容

##### format

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

テキストフォーマット

#### Returns

[`FormattedText`](FormattedText.md)

## Methods

### getText()

> **getText**(): `string`

Defined in: structural/flyweight/FormattedText.ts:23

テキスト内容を取得します

#### Returns

`string`

***

### getFormat()

> **getFormat**(): [`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

Defined in: structural/flyweight/FormattedText.ts:30

テキストフォーマットを取得します

#### Returns

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

***

### toString()

> **toString**(): `string`

Defined in: structural/flyweight/FormattedText.ts:37

フォーマット済みテキストを文字列として取得します

#### Returns

`string`

***

### getApproximateSize()

> **getApproximateSize**(): `number`

Defined in: structural/flyweight/FormattedText.ts:45

オブジェクトのメモリ使用量を計算します（概算）

#### Returns

`number`

メモリ使用量（バイト）

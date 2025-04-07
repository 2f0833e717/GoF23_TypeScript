[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/flyweight/FormattedText](../modules/structural_flyweight_FormattedText.md) / FormattedText

# Class: FormattedText

[structural/flyweight/FormattedText](../modules/structural_flyweight_FormattedText.md).FormattedText

## Table of contents

### Constructors

- [constructor](structural_flyweight_FormattedText.FormattedText.md#constructor)

### Methods

- [getText](structural_flyweight_FormattedText.FormattedText.md#gettext)
- [getFormat](structural_flyweight_FormattedText.FormattedText.md#getformat)
- [toString](structural_flyweight_FormattedText.FormattedText.md#tostring)
- [getApproximateSize](structural_flyweight_FormattedText.FormattedText.md#getapproximatesize)

## Constructors

### constructor

• **new FormattedText**(`text`, `format`): [`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | テキスト内容 |
| `format` | [`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md) | テキストフォーマット |

#### Returns

[`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)

#### Defined in

structural/flyweight/FormattedText.ts:15

## Methods

### getText

▸ **getText**(): `string`

テキスト内容を取得します

#### Returns

`string`

#### Defined in

structural/flyweight/FormattedText.ts:23

___

### getFormat

▸ **getFormat**(): [`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md)

テキストフォーマットを取得します

#### Returns

[`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md)

#### Defined in

structural/flyweight/FormattedText.ts:30

___

### toString

▸ **toString**(): `string`

フォーマット済みテキストを文字列として取得します

#### Returns

`string`

#### Defined in

structural/flyweight/FormattedText.ts:37

___

### getApproximateSize

▸ **getApproximateSize**(): `number`

オブジェクトのメモリ使用量を計算します（概算）

#### Returns

`number`

メモリ使用量（バイト）

#### Defined in

structural/flyweight/FormattedText.ts:45

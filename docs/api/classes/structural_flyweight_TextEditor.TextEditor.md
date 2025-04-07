[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/flyweight/TextEditor](../modules/structural_flyweight_TextEditor.md) / TextEditor

# Class: TextEditor

[structural/flyweight/TextEditor](../modules/structural_flyweight_TextEditor.md).TextEditor

## Table of contents

### Constructors

- [constructor](structural_flyweight_TextEditor.TextEditor.md#constructor)

### Methods

- [addText](structural_flyweight_TextEditor.TextEditor.md#addtext)
- [findTextsByFormat](structural_flyweight_TextEditor.TextEditor.md#findtextsbyformat)
- [getAllTexts](structural_flyweight_TextEditor.TextEditor.md#getalltexts)
- [clear](structural_flyweight_TextEditor.TextEditor.md#clear)

## Constructors

### constructor

• **new TextEditor**(): [`TextEditor`](structural_flyweight_TextEditor.TextEditor.md)

コンストラクタ

#### Returns

[`TextEditor`](structural_flyweight_TextEditor.TextEditor.md)

#### Defined in

structural/flyweight/TextEditor.ts:19

## Methods

### addText

▸ **addText**(`text`, `fontFamily`, `fontSize`, `color`, `style?`): `void`

フォーマット済みテキストを追加します

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | テキスト内容 |
| `fontFamily` | `string` | `undefined` | フォントファミリー |
| `fontSize` | `number` | `undefined` | フォントサイズ |
| `color` | `string` | `undefined` | フォントの色 |
| `style` | `string`[] | `[]` | フォントのスタイル |

#### Returns

`void`

#### Defined in

structural/flyweight/TextEditor.ts:31

___

### findTextsByFormat

▸ **findTextsByFormat**(`format`): [`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)[]

特定のフォーマットを使用しているテキストを検索します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | [`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md) | 検索するフォーマット |

#### Returns

[`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)[]

フォーマットに一致するテキストの配列

#### Defined in

structural/flyweight/TextEditor.ts:52

___

### getAllTexts

▸ **getAllTexts**(): [`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)[]

すべてのフォーマット済みテキストを取得します

#### Returns

[`FormattedText`](structural_flyweight_FormattedText.FormattedText.md)[]

#### Defined in

structural/flyweight/TextEditor.ts:59

___

### clear

▸ **clear**(): `void`

エディタをクリアします

#### Returns

`void`

#### Defined in

structural/flyweight/TextEditor.ts:78

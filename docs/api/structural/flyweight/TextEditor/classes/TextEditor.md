[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/flyweight/TextEditor](../README.md) / TextEditor

# Class: TextEditor

Defined in: structural/flyweight/TextEditor.ts:11

## Constructors

### new TextEditor()

> **new TextEditor**(): [`TextEditor`](TextEditor.md)

Defined in: structural/flyweight/TextEditor.ts:19

コンストラクタ

#### Returns

[`TextEditor`](TextEditor.md)

## Methods

### addText()

> **addText**(`text`, `fontFamily`, `fontSize`, `color`, `style`): `void`

Defined in: structural/flyweight/TextEditor.ts:31

フォーマット済みテキストを追加します

#### Parameters

##### text

`string`

テキスト内容

##### fontFamily

`string`

フォントファミリー

##### fontSize

`number`

フォントサイズ

##### color

`string`

フォントの色

##### style

`string`[] = `[]`

フォントのスタイル

#### Returns

`void`

***

### findTextsByFormat()

> **findTextsByFormat**(`format`): [`FormattedText`](../../FormattedText/classes/FormattedText.md)[]

Defined in: structural/flyweight/TextEditor.ts:52

特定のフォーマットを使用しているテキストを検索します

#### Parameters

##### format

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

検索するフォーマット

#### Returns

[`FormattedText`](../../FormattedText/classes/FormattedText.md)[]

フォーマットに一致するテキストの配列

***

### getAllTexts()

> **getAllTexts**(): [`FormattedText`](../../FormattedText/classes/FormattedText.md)[]

Defined in: structural/flyweight/TextEditor.ts:59

すべてのフォーマット済みテキストを取得します

#### Returns

[`FormattedText`](../../FormattedText/classes/FormattedText.md)[]

***

### clear()

> **clear**(): `void`

Defined in: structural/flyweight/TextEditor.ts:78

エディタをクリアします

#### Returns

`void`

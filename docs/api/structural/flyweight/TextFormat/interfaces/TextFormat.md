[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/flyweight/TextFormat](../README.md) / TextFormat

# Interface: TextFormat

Defined in: structural/flyweight/TextFormat.ts:7

テキストフォーマット

テキストの書式設定に関する共有可能な属性を定義します。
フライウェイトパターンの共有部分を表現します。

## Methods

### getFontFamily()

> **getFontFamily**(): `string`

Defined in: structural/flyweight/TextFormat.ts:11

フォントファミリーを取得します

#### Returns

`string`

***

### getFontSize()

> **getFontSize**(): `number`

Defined in: structural/flyweight/TextFormat.ts:16

フォントサイズを取得します

#### Returns

`number`

***

### getColor()

> **getColor**(): `string`

Defined in: structural/flyweight/TextFormat.ts:21

フォントの色を取得します

#### Returns

`string`

***

### getStyle()

> **getStyle**(): `string`[]

Defined in: structural/flyweight/TextFormat.ts:26

フォントのスタイル（太字、斜体など）を取得します

#### Returns

`string`[]

***

### toString()

> **toString**(): `string`

Defined in: structural/flyweight/TextFormat.ts:31

フォーマット情報を文字列として取得します

#### Returns

`string`

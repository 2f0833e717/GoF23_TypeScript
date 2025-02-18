[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/flyweight/ConcreteTextFormat](../README.md) / ConcreteTextFormat

# Class: ConcreteTextFormat

Defined in: structural/flyweight/ConcreteTextFormat.ts:9

テキストフォーマット

テキストの書式設定に関する共有可能な属性を定義します。
フライウェイトパターンの共有部分を表現します。

## Implements

- [`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

## Constructors

### new ConcreteTextFormat()

> **new ConcreteTextFormat**(`fontFamily`, `fontSize`, `color`, `style`): [`ConcreteTextFormat`](ConcreteTextFormat.md)

Defined in: structural/flyweight/ConcreteTextFormat.ts:17

コンストラクタ

#### Parameters

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

`string`[]

フォントのスタイル

#### Returns

[`ConcreteTextFormat`](ConcreteTextFormat.md)

## Methods

### getFontFamily()

> **getFontFamily**(): `string`

Defined in: structural/flyweight/ConcreteTextFormat.ts:24

フォントファミリーを取得します

#### Returns

`string`

#### Implementation of

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md).[`getFontFamily`](../../TextFormat/interfaces/TextFormat.md#getfontfamily)

***

### getFontSize()

> **getFontSize**(): `number`

Defined in: structural/flyweight/ConcreteTextFormat.ts:28

フォントサイズを取得します

#### Returns

`number`

#### Implementation of

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md).[`getFontSize`](../../TextFormat/interfaces/TextFormat.md#getfontsize)

***

### getColor()

> **getColor**(): `string`

Defined in: structural/flyweight/ConcreteTextFormat.ts:32

フォントの色を取得します

#### Returns

`string`

#### Implementation of

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md).[`getColor`](../../TextFormat/interfaces/TextFormat.md#getcolor)

***

### getStyle()

> **getStyle**(): `string`[]

Defined in: structural/flyweight/ConcreteTextFormat.ts:36

フォントのスタイル（太字、斜体など）を取得します

#### Returns

`string`[]

#### Implementation of

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md).[`getStyle`](../../TextFormat/interfaces/TextFormat.md#getstyle)

***

### toString()

> **toString**(): `string`

Defined in: structural/flyweight/ConcreteTextFormat.ts:40

フォーマット情報を文字列として取得します

#### Returns

`string`

#### Implementation of

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md).[`toString`](../../TextFormat/interfaces/TextFormat.md#tostring)

***

### getApproximateSize()

> **getApproximateSize**(): `number`

Defined in: structural/flyweight/ConcreteTextFormat.ts:49

オブジェクトのメモリ使用量を計算します（概算）

#### Returns

`number`

メモリ使用量（バイト）

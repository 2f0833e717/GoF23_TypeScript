[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/flyweight/ConcreteTextFormat](../modules/structural_flyweight_ConcreteTextFormat.md) / ConcreteTextFormat

# Class: ConcreteTextFormat

[structural/flyweight/ConcreteTextFormat](../modules/structural_flyweight_ConcreteTextFormat.md).ConcreteTextFormat

テキストフォーマット

テキストの書式設定に関する共有可能な属性を定義します。
フライウェイトパターンの共有部分を表現します。

## Implements

- [`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md)

## Table of contents

### Constructors

- [constructor](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#constructor)

### Methods

- [getFontFamily](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#getfontfamily)
- [getFontSize](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#getfontsize)
- [getColor](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#getcolor)
- [getStyle](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#getstyle)
- [toString](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#tostring)
- [getApproximateSize](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md#getapproximatesize)

## Constructors

### constructor

• **new ConcreteTextFormat**(`fontFamily`, `fontSize`, `color`, `style`): [`ConcreteTextFormat`](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fontFamily` | `string` | フォントファミリー |
| `fontSize` | `number` | フォントサイズ |
| `color` | `string` | フォントの色 |
| `style` | `string`[] | フォントのスタイル |

#### Returns

[`ConcreteTextFormat`](structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:17

## Methods

### getFontFamily

▸ **getFontFamily**(): `string`

フォントファミリーを取得します

#### Returns

`string`

#### Implementation of

[TextFormat](../interfaces/structural_flyweight_TextFormat.TextFormat.md).[getFontFamily](../interfaces/structural_flyweight_TextFormat.TextFormat.md#getfontfamily)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:24

___

### getFontSize

▸ **getFontSize**(): `number`

フォントサイズを取得します

#### Returns

`number`

#### Implementation of

[TextFormat](../interfaces/structural_flyweight_TextFormat.TextFormat.md).[getFontSize](../interfaces/structural_flyweight_TextFormat.TextFormat.md#getfontsize)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:28

___

### getColor

▸ **getColor**(): `string`

フォントの色を取得します

#### Returns

`string`

#### Implementation of

[TextFormat](../interfaces/structural_flyweight_TextFormat.TextFormat.md).[getColor](../interfaces/structural_flyweight_TextFormat.TextFormat.md#getcolor)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:32

___

### getStyle

▸ **getStyle**(): `string`[]

フォントのスタイル（太字、斜体など）を取得します

#### Returns

`string`[]

#### Implementation of

[TextFormat](../interfaces/structural_flyweight_TextFormat.TextFormat.md).[getStyle](../interfaces/structural_flyweight_TextFormat.TextFormat.md#getstyle)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:36

___

### toString

▸ **toString**(): `string`

フォーマット情報を文字列として取得します

#### Returns

`string`

#### Implementation of

[TextFormat](../interfaces/structural_flyweight_TextFormat.TextFormat.md).[toString](../interfaces/structural_flyweight_TextFormat.TextFormat.md#tostring)

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:40

___

### getApproximateSize

▸ **getApproximateSize**(): `number`

オブジェクトのメモリ使用量を計算します（概算）

#### Returns

`number`

メモリ使用量（バイト）

#### Defined in

structural/flyweight/ConcreteTextFormat.ts:49

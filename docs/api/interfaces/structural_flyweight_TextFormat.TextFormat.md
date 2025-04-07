[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/flyweight/TextFormat](../modules/structural_flyweight_TextFormat.md) / TextFormat

# Interface: TextFormat

[structural/flyweight/TextFormat](../modules/structural_flyweight_TextFormat.md).TextFormat

テキストフォーマット

テキストの書式設定に関する共有可能な属性を定義します。
フライウェイトパターンの共有部分を表現します。

## Implemented by

- [`ConcreteTextFormat`](../classes/structural_flyweight_ConcreteTextFormat.ConcreteTextFormat.md)

## Table of contents

### Methods

- [getFontFamily](structural_flyweight_TextFormat.TextFormat.md#getfontfamily)
- [getFontSize](structural_flyweight_TextFormat.TextFormat.md#getfontsize)
- [getColor](structural_flyweight_TextFormat.TextFormat.md#getcolor)
- [getStyle](structural_flyweight_TextFormat.TextFormat.md#getstyle)
- [toString](structural_flyweight_TextFormat.TextFormat.md#tostring)

## Methods

### getFontFamily

▸ **getFontFamily**(): `string`

フォントファミリーを取得します

#### Returns

`string`

#### Defined in

structural/flyweight/TextFormat.ts:11

___

### getFontSize

▸ **getFontSize**(): `number`

フォントサイズを取得します

#### Returns

`number`

#### Defined in

structural/flyweight/TextFormat.ts:16

___

### getColor

▸ **getColor**(): `string`

フォントの色を取得します

#### Returns

`string`

#### Defined in

structural/flyweight/TextFormat.ts:21

___

### getStyle

▸ **getStyle**(): `string`[]

フォントのスタイル（太字、斜体など）を取得します

#### Returns

`string`[]

#### Defined in

structural/flyweight/TextFormat.ts:26

___

### toString

▸ **toString**(): `string`

フォーマット情報を文字列として取得します

#### Returns

`string`

#### Defined in

structural/flyweight/TextFormat.ts:31

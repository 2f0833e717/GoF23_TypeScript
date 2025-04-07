[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/flyweight/TextFormatFactory](../modules/structural_flyweight_TextFormatFactory.md) / TextFormatFactory

# Class: TextFormatFactory

[structural/flyweight/TextFormatFactory](../modules/structural_flyweight_TextFormatFactory.md).TextFormatFactory

## Table of contents

### Methods

- [getInstance](structural_flyweight_TextFormatFactory.TextFormatFactory.md#getinstance)
- [getTextFormat](structural_flyweight_TextFormatFactory.TextFormatFactory.md#gettextformat)
- [getFormatCount](structural_flyweight_TextFormatFactory.TextFormatFactory.md#getformatcount)
- [getTotalMemoryUsage](structural_flyweight_TextFormatFactory.TextFormatFactory.md#gettotalmemoryusage)
- [clearCache](structural_flyweight_TextFormatFactory.TextFormatFactory.md#clearcache)

## Methods

### getInstance

▸ **getInstance**(): [`TextFormatFactory`](structural_flyweight_TextFormatFactory.TextFormatFactory.md)

ファクトリーのインスタンスを取得します

#### Returns

[`TextFormatFactory`](structural_flyweight_TextFormatFactory.TextFormatFactory.md)

#### Defined in

structural/flyweight/TextFormatFactory.ts:23

___

### getTextFormat

▸ **getTextFormat**(`fontFamily`, `fontSize`, `color`, `style?`): [`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md)

テキストフォーマットを取得または作成します

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fontFamily` | `string` | `undefined` | フォントファミリー |
| `fontSize` | `number` | `undefined` | フォントサイズ |
| `color` | `string` | `undefined` | フォントの色 |
| `style` | `string`[] | `[]` | フォントのスタイル |

#### Returns

[`TextFormat`](../interfaces/structural_flyweight_TextFormat.TextFormat.md)

テキストフォーマット

#### Defined in

structural/flyweight/TextFormatFactory.ts:38

___

### getFormatCount

▸ **getFormatCount**(): `number`

現在のフォーマット数を取得します

#### Returns

`number`

#### Defined in

structural/flyweight/TextFormatFactory.ts:68

___

### getTotalMemoryUsage

▸ **getTotalMemoryUsage**(): `number`

推定メモリ使用量を取得します

#### Returns

`number`

#### Defined in

structural/flyweight/TextFormatFactory.ts:75

___

### clearCache

▸ **clearCache**(): `void`

キャッシュをクリアします

#### Returns

`void`

#### Defined in

structural/flyweight/TextFormatFactory.ts:94

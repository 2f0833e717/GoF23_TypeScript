[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/flyweight/TextFormatFactory](../README.md) / TextFormatFactory

# Class: TextFormatFactory

Defined in: structural/flyweight/TextFormatFactory.ts:10

## Methods

### getInstance()

> `static` **getInstance**(): [`TextFormatFactory`](TextFormatFactory.md)

Defined in: structural/flyweight/TextFormatFactory.ts:23

ファクトリーのインスタンスを取得します

#### Returns

[`TextFormatFactory`](TextFormatFactory.md)

***

### getTextFormat()

> **getTextFormat**(`fontFamily`, `fontSize`, `color`, `style`): [`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

Defined in: structural/flyweight/TextFormatFactory.ts:38

テキストフォーマットを取得または作成します

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

`string`[] = `[]`

フォントのスタイル

#### Returns

[`TextFormat`](../../TextFormat/interfaces/TextFormat.md)

テキストフォーマット

***

### getFormatCount()

> **getFormatCount**(): `number`

Defined in: structural/flyweight/TextFormatFactory.ts:68

現在のフォーマット数を取得します

#### Returns

`number`

***

### getTotalMemoryUsage()

> **getTotalMemoryUsage**(): `number`

Defined in: structural/flyweight/TextFormatFactory.ts:75

推定メモリ使用量を取得します

#### Returns

`number`

***

### clearCache()

> **clearCache**(): `void`

Defined in: structural/flyweight/TextFormatFactory.ts:94

キャッシュをクリアします

#### Returns

`void`

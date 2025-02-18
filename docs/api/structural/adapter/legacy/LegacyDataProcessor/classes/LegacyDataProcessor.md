[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/adapter/legacy/LegacyDataProcessor](../README.md) / LegacyDataProcessor

# Class: LegacyDataProcessor

Defined in: structural/adapter/legacy/LegacyDataProcessor.ts:13

## Constructors

### new LegacyDataProcessor()

> **new LegacyDataProcessor**(): [`LegacyDataProcessor`](LegacyDataProcessor.md)

Defined in: structural/adapter/legacy/LegacyDataProcessor.ts:16

#### Returns

[`LegacyDataProcessor`](LegacyDataProcessor.md)

## Methods

### saveInLegacyFormat()

> **saveInLegacyFormat**(`data`): `void`

Defined in: structural/adapter/legacy/LegacyDataProcessor.ts:24

レガシー形式でデータを保存

#### Parameters

##### data

[`LegacyData`](../interfaces/LegacyData.md)

保存するデータ

#### Returns

`void`

***

### getInLegacyFormat()

> **getInLegacyFormat**(`id`): `undefined` \| [`LegacyData`](../interfaces/LegacyData.md)

Defined in: structural/adapter/legacy/LegacyDataProcessor.ts:34

レガシー形式でデータを取得

#### Parameters

##### id

`number`

データID

#### Returns

`undefined` \| [`LegacyData`](../interfaces/LegacyData.md)

レガシー形式のデータ

***

### getAllInLegacyFormat()

> **getAllInLegacyFormat**(): [`LegacyData`](../interfaces/LegacyData.md)[]

Defined in: structural/adapter/legacy/LegacyDataProcessor.ts:42

レガシー形式で全データを取得

#### Returns

[`LegacyData`](../interfaces/LegacyData.md)[]

レガシー形式のデータ配列

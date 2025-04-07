[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/legacy/LegacyDataProcessor](../modules/structural_adapter_legacy_LegacyDataProcessor.md) / LegacyDataProcessor

# Class: LegacyDataProcessor

[structural/adapter/legacy/LegacyDataProcessor](../modules/structural_adapter_legacy_LegacyDataProcessor.md).LegacyDataProcessor

## Table of contents

### Constructors

- [constructor](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md#constructor)

### Methods

- [saveInLegacyFormat](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md#saveinlegacyformat)
- [getInLegacyFormat](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md#getinlegacyformat)
- [getAllInLegacyFormat](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md#getallinlegacyformat)

## Constructors

### constructor

• **new LegacyDataProcessor**(): [`LegacyDataProcessor`](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md)

#### Returns

[`LegacyDataProcessor`](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md)

#### Defined in

structural/adapter/legacy/LegacyDataProcessor.ts:16

## Methods

### saveInLegacyFormat

▸ **saveInLegacyFormat**(`data`): `void`

レガシー形式でデータを保存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`LegacyData`](../interfaces/structural_adapter_legacy_LegacyDataProcessor.LegacyData.md) | 保存するデータ |

#### Returns

`void`

#### Defined in

structural/adapter/legacy/LegacyDataProcessor.ts:24

___

### getInLegacyFormat

▸ **getInLegacyFormat**(`id`): `undefined` \| [`LegacyData`](../interfaces/structural_adapter_legacy_LegacyDataProcessor.LegacyData.md)

レガシー形式でデータを取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | データID |

#### Returns

`undefined` \| [`LegacyData`](../interfaces/structural_adapter_legacy_LegacyDataProcessor.LegacyData.md)

レガシー形式のデータ

#### Defined in

structural/adapter/legacy/LegacyDataProcessor.ts:34

___

### getAllInLegacyFormat

▸ **getAllInLegacyFormat**(): [`LegacyData`](../interfaces/structural_adapter_legacy_LegacyDataProcessor.LegacyData.md)[]

レガシー形式で全データを取得

#### Returns

[`LegacyData`](../interfaces/structural_adapter_legacy_LegacyDataProcessor.LegacyData.md)[]

レガシー形式のデータ配列

#### Defined in

structural/adapter/legacy/LegacyDataProcessor.ts:42

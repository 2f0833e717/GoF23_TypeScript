[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/modern/ModernDataProcessor](../modules/structural_adapter_modern_ModernDataProcessor.md) / ModernDataProcessor

# Class: ModernDataProcessor

[structural/adapter/modern/ModernDataProcessor](../modules/structural_adapter_modern_ModernDataProcessor.md).ModernDataProcessor

## Implements

- [`IModernDataProcessor`](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md#constructor)

### Methods

- [save](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md#save)
- [get](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md#get)
- [getAll](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md#getall)

## Constructors

### constructor

• **new ModernDataProcessor**(): [`ModernDataProcessor`](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md)

#### Returns

[`ModernDataProcessor`](structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md)

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:26

## Methods

### save

▸ **save**(`data`): `Promise`\<`void`\>

データを保存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md) | 保存するデータ |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[save](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#save)

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:34

___

### get

▸ **get**(`identifier`): `Promise`\<``null`` \| [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

データを取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | データ識別子 |

#### Returns

`Promise`\<``null`` \| [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

データオブジェクト

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[get](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#get)

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:50

___

### getAll

▸ **getAll**(): `Promise`\<[`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

全データを取得

#### Returns

`Promise`\<[`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

データオブジェクトの配列

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[getAll](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#getall)

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:59

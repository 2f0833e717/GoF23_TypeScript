[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/modern/ModernDataProcessor](../modules/structural_adapter_modern_ModernDataProcessor.md) / IModernDataProcessor

# Interface: IModernDataProcessor

[structural/adapter/modern/ModernDataProcessor](../modules/structural_adapter_modern_ModernDataProcessor.md).IModernDataProcessor

## Implemented by

- [`LegacyToModernAdapter`](../classes/structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md)
- [`ModernDataProcessor`](../classes/structural_adapter_modern_ModernDataProcessor.ModernDataProcessor.md)

## Table of contents

### Methods

- [save](structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#save)
- [get](structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#get)
- [getAll](structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#getall)

## Methods

### save

▸ **save**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ModernData`](structural_adapter_modern_ModernDataProcessor.ModernData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:18

___

### get

▸ **get**(`identifier`): `Promise`\<``null`` \| [`ModernData`](structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |

#### Returns

`Promise`\<``null`` \| [`ModernData`](structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:19

___

### getAll

▸ **getAll**(): `Promise`\<[`ModernData`](structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

#### Returns

`Promise`\<[`ModernData`](structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

#### Defined in

structural/adapter/modern/ModernDataProcessor.ts:20

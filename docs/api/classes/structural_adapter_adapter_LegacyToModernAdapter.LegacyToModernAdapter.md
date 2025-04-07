[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/adapter/LegacyToModernAdapter](../modules/structural_adapter_adapter_LegacyToModernAdapter.md) / LegacyToModernAdapter

# Class: LegacyToModernAdapter

[structural/adapter/adapter/LegacyToModernAdapter](../modules/structural_adapter_adapter_LegacyToModernAdapter.md).LegacyToModernAdapter

## Implements

- [`IModernDataProcessor`](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md#constructor)

### Methods

- [save](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md#save)
- [get](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md#get)
- [getAll](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md#getall)

## Constructors

### constructor

• **new LegacyToModernAdapter**(`legacyProcessor`): [`LegacyToModernAdapter`](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `legacyProcessor` | [`LegacyDataProcessor`](structural_adapter_legacy_LegacyDataProcessor.LegacyDataProcessor.md) |

#### Returns

[`LegacyToModernAdapter`](structural_adapter_adapter_LegacyToModernAdapter.LegacyToModernAdapter.md)

#### Defined in

structural/adapter/adapter/LegacyToModernAdapter.ts:12

## Methods

### save

▸ **save**(`data`): `Promise`\<`void`\>

モダンなインターフェースでデータを保存

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md) | モダンなデータ |

#### Returns

`Promise`\<`void`\>

**`Throws`**

Error 無効な識別子の場合

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[save](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#save)

#### Defined in

structural/adapter/adapter/LegacyToModernAdapter.ts:70

___

### get

▸ **get**(`identifier`): `Promise`\<``null`` \| [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

モダンなインターフェースでデータを取得

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `identifier` | `string` | データ識別子 |

#### Returns

`Promise`\<``null`` \| [`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)\>

モダンなデータ

**`Throws`**

Error 無効な識別子の場合

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[get](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#get)

#### Defined in

structural/adapter/adapter/LegacyToModernAdapter.ts:81

___

### getAll

▸ **getAll**(): `Promise`\<[`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

モダンなインターフェースで全データを取得

#### Returns

`Promise`\<[`ModernData`](../interfaces/structural_adapter_modern_ModernDataProcessor.ModernData.md)[]\>

モダンなデータの配列

#### Implementation of

[IModernDataProcessor](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md).[getAll](../interfaces/structural_adapter_modern_ModernDataProcessor.IModernDataProcessor.md#getall)

#### Defined in

structural/adapter/adapter/LegacyToModernAdapter.ts:94

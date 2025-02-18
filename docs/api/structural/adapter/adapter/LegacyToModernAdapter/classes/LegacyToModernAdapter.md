[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/adapter/adapter/LegacyToModernAdapter](../README.md) / LegacyToModernAdapter

# Class: LegacyToModernAdapter

Defined in: structural/adapter/adapter/LegacyToModernAdapter.ts:9

## Implements

- [`IModernDataProcessor`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md)

## Constructors

### new LegacyToModernAdapter()

> **new LegacyToModernAdapter**(`legacyProcessor`): [`LegacyToModernAdapter`](LegacyToModernAdapter.md)

Defined in: structural/adapter/adapter/LegacyToModernAdapter.ts:12

#### Parameters

##### legacyProcessor

[`LegacyDataProcessor`](../../../legacy/LegacyDataProcessor/classes/LegacyDataProcessor.md)

#### Returns

[`LegacyToModernAdapter`](LegacyToModernAdapter.md)

## Methods

### save()

> **save**(`data`): `Promise`\<`void`\>

Defined in: structural/adapter/adapter/LegacyToModernAdapter.ts:70

モダンなインターフェースでデータを保存

#### Parameters

##### data

[`ModernData`](../../../modern/ModernDataProcessor/interfaces/ModernData.md)

モダンなデータ

#### Returns

`Promise`\<`void`\>

#### Throws

Error 無効な識別子の場合

#### Implementation of

[`IModernDataProcessor`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md).[`save`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md#save)

***

### get()

> **get**(`identifier`): `Promise`\<`null` \| [`ModernData`](../../../modern/ModernDataProcessor/interfaces/ModernData.md)\>

Defined in: structural/adapter/adapter/LegacyToModernAdapter.ts:81

モダンなインターフェースでデータを取得

#### Parameters

##### identifier

`string`

データ識別子

#### Returns

`Promise`\<`null` \| [`ModernData`](../../../modern/ModernDataProcessor/interfaces/ModernData.md)\>

モダンなデータ

#### Throws

Error 無効な識別子の場合

#### Implementation of

[`IModernDataProcessor`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md).[`get`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md#get)

***

### getAll()

> **getAll**(): `Promise`\<[`ModernData`](../../../modern/ModernDataProcessor/interfaces/ModernData.md)[]\>

Defined in: structural/adapter/adapter/LegacyToModernAdapter.ts:94

モダンなインターフェースで全データを取得

#### Returns

`Promise`\<[`ModernData`](../../../modern/ModernDataProcessor/interfaces/ModernData.md)[]\>

モダンなデータの配列

#### Implementation of

[`IModernDataProcessor`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md).[`getAll`](../../../modern/ModernDataProcessor/interfaces/IModernDataProcessor.md#getall)

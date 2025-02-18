[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/adapter/modern/ModernDataProcessor](../README.md) / ModernDataProcessor

# Class: ModernDataProcessor

Defined in: structural/adapter/modern/ModernDataProcessor.ts:23

## Implements

- [`IModernDataProcessor`](../interfaces/IModernDataProcessor.md)

## Constructors

### new ModernDataProcessor()

> **new ModernDataProcessor**(): [`ModernDataProcessor`](ModernDataProcessor.md)

Defined in: structural/adapter/modern/ModernDataProcessor.ts:26

#### Returns

[`ModernDataProcessor`](ModernDataProcessor.md)

## Methods

### save()

> **save**(`data`): `Promise`\<`void`\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:34

データを保存

#### Parameters

##### data

[`ModernData`](../interfaces/ModernData.md)

保存するデータ

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IModernDataProcessor`](../interfaces/IModernDataProcessor.md).[`save`](../interfaces/IModernDataProcessor.md#save)

***

### get()

> **get**(`identifier`): `Promise`\<`null` \| [`ModernData`](../interfaces/ModernData.md)\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:50

データを取得

#### Parameters

##### identifier

`string`

データ識別子

#### Returns

`Promise`\<`null` \| [`ModernData`](../interfaces/ModernData.md)\>

データオブジェクト

#### Implementation of

[`IModernDataProcessor`](../interfaces/IModernDataProcessor.md).[`get`](../interfaces/IModernDataProcessor.md#get)

***

### getAll()

> **getAll**(): `Promise`\<[`ModernData`](../interfaces/ModernData.md)[]\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:59

全データを取得

#### Returns

`Promise`\<[`ModernData`](../interfaces/ModernData.md)[]\>

データオブジェクトの配列

#### Implementation of

[`IModernDataProcessor`](../interfaces/IModernDataProcessor.md).[`getAll`](../interfaces/IModernDataProcessor.md#getall)

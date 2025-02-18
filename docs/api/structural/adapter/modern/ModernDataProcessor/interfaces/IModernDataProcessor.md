[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../../README.md) / [structural/adapter/modern/ModernDataProcessor](../README.md) / IModernDataProcessor

# Interface: IModernDataProcessor

Defined in: structural/adapter/modern/ModernDataProcessor.ts:17

## Methods

### save()

> **save**(`data`): `Promise`\<`void`\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:18

#### Parameters

##### data

[`ModernData`](ModernData.md)

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`identifier`): `Promise`\<`null` \| [`ModernData`](ModernData.md)\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:19

#### Parameters

##### identifier

`string`

#### Returns

`Promise`\<`null` \| [`ModernData`](ModernData.md)\>

***

### getAll()

> **getAll**(): `Promise`\<[`ModernData`](ModernData.md)[]\>

Defined in: structural/adapter/modern/ModernDataProcessor.ts:20

#### Returns

`Promise`\<[`ModernData`](ModernData.md)[]\>

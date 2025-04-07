[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / JsonCsvAdapter

# Class: JsonCsvAdapter

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).JsonCsvAdapter

JSON-CSV変換アダプター

## Implements

- [`DataConverter`](../interfaces/structural_adapter_DataConverter.DataConverter.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_DataConverter.JsonCsvAdapter.md#constructor)

### Methods

- [convert](structural_adapter_DataConverter.JsonCsvAdapter.md#convert)

## Constructors

### constructor

• **new JsonCsvAdapter**(): [`JsonCsvAdapter`](structural_adapter_DataConverter.JsonCsvAdapter.md)

#### Returns

[`JsonCsvAdapter`](structural_adapter_DataConverter.JsonCsvAdapter.md)

## Methods

### convert

▸ **convert**(`data`, `targetFormat`): [`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md)

データを変換します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md) | 変換元のデータ |
| `targetFormat` | [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md) | 変換先のデータ形式 |

#### Returns

[`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md)

#### Implementation of

[DataConverter](../interfaces/structural_adapter_DataConverter.DataConverter.md).[convert](../interfaces/structural_adapter_DataConverter.DataConverter.md#convert)

#### Defined in

structural/adapter/DataConverter.ts:226

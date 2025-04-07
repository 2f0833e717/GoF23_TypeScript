[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / DataConverter

# Interface: DataConverter

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).DataConverter

データ変換アダプターのインターフェース

## Implemented by

- [`JsonCsvAdapter`](../classes/structural_adapter_DataConverter.JsonCsvAdapter.md)
- [`JsonXmlAdapter`](../classes/structural_adapter_DataConverter.JsonXmlAdapter.md)

## Table of contents

### Methods

- [convert](structural_adapter_DataConverter.DataConverter.md#convert)

## Methods

### convert

▸ **convert**(`data`, `targetFormat`): [`DataTarget`](structural_adapter_DataConverter.DataTarget.md)

データを変換します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`DataTarget`](structural_adapter_DataConverter.DataTarget.md) | 変換元のデータ |
| `targetFormat` | [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md) | 変換先のデータ形式 |

#### Returns

[`DataTarget`](structural_adapter_DataConverter.DataTarget.md)

#### Defined in

structural/adapter/DataConverter.ts:160

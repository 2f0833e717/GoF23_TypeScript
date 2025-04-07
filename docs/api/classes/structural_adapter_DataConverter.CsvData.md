[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / CsvData

# Class: CsvData

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).CsvData

CSV形式のデータを表すクラス

## Implements

- [`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_DataConverter.CsvData.md#constructor)

### Methods

- [toString](structural_adapter_DataConverter.CsvData.md#tostring)
- [getFormat](structural_adapter_DataConverter.CsvData.md#getformat)
- [validate](structural_adapter_DataConverter.CsvData.md#validate)
- [getData](structural_adapter_DataConverter.CsvData.md#getdata)

## Constructors

### constructor

• **new CsvData**(`headers`, `rows`): [`CsvData`](structural_adapter_DataConverter.CsvData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `string`[] |
| `rows` | `string`[][] |

#### Returns

[`CsvData`](structural_adapter_DataConverter.CsvData.md)

#### Defined in

structural/adapter/DataConverter.ts:112

## Methods

### toString

▸ **toString**(): `string`

データを文字列形式で取得します

#### Returns

`string`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[toString](../interfaces/structural_adapter_DataConverter.DataTarget.md#tostring)

#### Defined in

structural/adapter/DataConverter.ts:116

___

### getFormat

▸ **getFormat**(): [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

データ形式を取得します

#### Returns

[`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[getFormat](../interfaces/structural_adapter_DataConverter.DataTarget.md#getformat)

#### Defined in

structural/adapter/DataConverter.ts:122

___

### validate

▸ **validate**(): `boolean`

データの検証を行います

#### Returns

`boolean`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[validate](../interfaces/structural_adapter_DataConverter.DataTarget.md#validate)

#### Defined in

structural/adapter/DataConverter.ts:126

___

### getData

▸ **getData**(): `Object`

CSVデータを取得します

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `headers` | `string`[] |
| `rows` | `string`[][] |

#### Defined in

structural/adapter/DataConverter.ts:143

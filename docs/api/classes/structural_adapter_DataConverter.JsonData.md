[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / JsonData

# Class: JsonData

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).JsonData

JSON形式のデータを表すクラス

## Implements

- [`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_DataConverter.JsonData.md#constructor)

### Methods

- [toString](structural_adapter_DataConverter.JsonData.md#tostring)
- [getFormat](structural_adapter_DataConverter.JsonData.md#getformat)
- [validate](structural_adapter_DataConverter.JsonData.md#validate)
- [getData](structural_adapter_DataConverter.JsonData.md#getdata)

## Constructors

### constructor

• **new JsonData**(`data`): [`JsonData`](structural_adapter_DataConverter.JsonData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`JsonData`](structural_adapter_DataConverter.JsonData.md)

#### Defined in

structural/adapter/DataConverter.ts:46

## Methods

### toString

▸ **toString**(): `string`

データを文字列形式で取得します

#### Returns

`string`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[toString](../interfaces/structural_adapter_DataConverter.DataTarget.md#tostring)

#### Defined in

structural/adapter/DataConverter.ts:51

___

### getFormat

▸ **getFormat**(): [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

データ形式を取得します

#### Returns

[`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[getFormat](../interfaces/structural_adapter_DataConverter.DataTarget.md#getformat)

#### Defined in

structural/adapter/DataConverter.ts:55

___

### validate

▸ **validate**(): `boolean`

データの検証を行います

#### Returns

`boolean`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[validate](../interfaces/structural_adapter_DataConverter.DataTarget.md#validate)

#### Defined in

structural/adapter/DataConverter.ts:59

___

### getData

▸ **getData**(): `any`

JSONデータを取得します

#### Returns

`any`

#### Defined in

structural/adapter/DataConverter.ts:71

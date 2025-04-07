[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / XmlData

# Class: XmlData

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).XmlData

XML形式のデータを表すクラス

## Implements

- [`DataTarget`](../interfaces/structural_adapter_DataConverter.DataTarget.md)

## Table of contents

### Constructors

- [constructor](structural_adapter_DataConverter.XmlData.md#constructor)

### Methods

- [toString](structural_adapter_DataConverter.XmlData.md#tostring)
- [getFormat](structural_adapter_DataConverter.XmlData.md#getformat)
- [validate](structural_adapter_DataConverter.XmlData.md#validate)
- [getData](structural_adapter_DataConverter.XmlData.md#getdata)

## Constructors

### constructor

• **new XmlData**(`data`): [`XmlData`](structural_adapter_DataConverter.XmlData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`XmlData`](structural_adapter_DataConverter.XmlData.md)

#### Defined in

structural/adapter/DataConverter.ts:80

## Methods

### toString

▸ **toString**(): `string`

データを文字列形式で取得します

#### Returns

`string`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[toString](../interfaces/structural_adapter_DataConverter.DataTarget.md#tostring)

#### Defined in

structural/adapter/DataConverter.ts:84

___

### getFormat

▸ **getFormat**(): [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

データ形式を取得します

#### Returns

[`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[getFormat](../interfaces/structural_adapter_DataConverter.DataTarget.md#getformat)

#### Defined in

structural/adapter/DataConverter.ts:88

___

### validate

▸ **validate**(): `boolean`

データの検証を行います

#### Returns

`boolean`

#### Implementation of

[DataTarget](../interfaces/structural_adapter_DataConverter.DataTarget.md).[validate](../interfaces/structural_adapter_DataConverter.DataTarget.md#validate)

#### Defined in

structural/adapter/DataConverter.ts:92

___

### getData

▸ **getData**(): `string`

XMLデータを取得します

#### Returns

`string`

#### Defined in

structural/adapter/DataConverter.ts:103

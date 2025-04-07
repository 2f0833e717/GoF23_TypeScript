[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md) / DataTarget

# Interface: DataTarget

[structural/adapter/DataConverter](../modules/structural_adapter_DataConverter.md).DataTarget

データ変換のターゲットインターフェース

## Implemented by

- [`CsvData`](../classes/structural_adapter_DataConverter.CsvData.md)
- [`JsonData`](../classes/structural_adapter_DataConverter.JsonData.md)
- [`XmlData`](../classes/structural_adapter_DataConverter.XmlData.md)

## Table of contents

### Methods

- [toString](structural_adapter_DataConverter.DataTarget.md#tostring)
- [getFormat](structural_adapter_DataConverter.DataTarget.md#getformat)
- [validate](structural_adapter_DataConverter.DataTarget.md#validate)

## Methods

### toString

▸ **toString**(): `string`

データを文字列形式で取得します

#### Returns

`string`

#### Defined in

structural/adapter/DataConverter.ts:27

___

### getFormat

▸ **getFormat**(): [`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

データ形式を取得します

#### Returns

[`DataFormat`](../enums/structural_adapter_DataConverter.DataFormat.md)

#### Defined in

structural/adapter/DataConverter.ts:32

___

### validate

▸ **validate**(): `boolean`

データの検証を行います

#### Returns

`boolean`

#### Defined in

structural/adapter/DataConverter.ts:37

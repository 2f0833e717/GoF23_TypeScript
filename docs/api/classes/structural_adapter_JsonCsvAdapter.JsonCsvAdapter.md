[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/adapter/JsonCsvAdapter](../modules/structural_adapter_JsonCsvAdapter.md) / JsonCsvAdapter

# Class: JsonCsvAdapter

[structural/adapter/JsonCsvAdapter](../modules/structural_adapter_JsonCsvAdapter.md).JsonCsvAdapter

JSONデータをCSV形式に変換するアダプタークラス

- JSONデータは配列形式である必要があります
- 各要素はオブジェクトである必要があります
- 空の配列は許可されません

## Table of contents

### Constructors

- [constructor](structural_adapter_JsonCsvAdapter.JsonCsvAdapter.md#constructor)

### Methods

- [jsonToCsv](structural_adapter_JsonCsvAdapter.JsonCsvAdapter.md#jsontocsv)

## Constructors

### constructor

• **new JsonCsvAdapter**(): [`JsonCsvAdapter`](structural_adapter_JsonCsvAdapter.JsonCsvAdapter.md)

#### Returns

[`JsonCsvAdapter`](structural_adapter_JsonCsvAdapter.JsonCsvAdapter.md)

## Methods

### jsonToCsv

▸ **jsonToCsv**(`jsonData`): `string`

JSONデータをCSV形式に変換します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonData` | `any` | JSON形式のデータ |

#### Returns

`string`

CSV形式の文字列

**`Throws`**

Error 無効なJSONデータの場合

#### Defined in

structural/adapter/JsonCsvAdapter.ts:15

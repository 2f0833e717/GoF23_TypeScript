[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/decorator/DataSource](../modules/structural_decorator_DataSource.md) / DataSource

# Interface: DataSource

[structural/decorator/DataSource](../modules/structural_decorator_DataSource.md).DataSource

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Implemented by

- [`DataSourceDecorator`](../classes/structural_decorator_DataSourceDecorator.DataSourceDecorator.md)
- [`FileDataSource`](../classes/structural_decorator_FileDataSource.FileDataSource.md)

## Table of contents

### Methods

- [writeData](structural_decorator_DataSource.DataSource.md#writedata)
- [readData](structural_decorator_DataSource.DataSource.md#readdata)

## Methods

### writeData

▸ **writeData**(`data`): `void`

データを書き込みます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 書き込むデータ |

#### Returns

`void`

#### Defined in

structural/decorator/DataSource.ts:12

___

### readData

▸ **readData**(): `string`

データを読み込みます

#### Returns

`string`

読み込んだデータ

#### Defined in

structural/decorator/DataSource.ts:18

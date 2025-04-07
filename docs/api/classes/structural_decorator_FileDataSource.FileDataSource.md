[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/decorator/FileDataSource](../modules/structural_decorator_FileDataSource.md) / FileDataSource

# Class: FileDataSource

[structural/decorator/FileDataSource](../modules/structural_decorator_FileDataSource.md).FileDataSource

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Implements

- [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md)

## Table of contents

### Constructors

- [constructor](structural_decorator_FileDataSource.FileDataSource.md#constructor)

### Methods

- [writeData](structural_decorator_FileDataSource.FileDataSource.md#writedata)
- [readData](structural_decorator_FileDataSource.FileDataSource.md#readdata)

## Constructors

### constructor

• **new FileDataSource**(`filename`): [`FileDataSource`](structural_decorator_FileDataSource.FileDataSource.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | ファイル名 |

#### Returns

[`FileDataSource`](structural_decorator_FileDataSource.FileDataSource.md)

#### Defined in

structural/decorator/FileDataSource.ts:18

## Methods

### writeData

▸ **writeData**(`data`): `void`

ファイルにデータを書き込みます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 書き込むデータ |

#### Returns

`void`

#### Implementation of

[DataSource](../interfaces/structural_decorator_DataSource.DataSource.md).[writeData](../interfaces/structural_decorator_DataSource.DataSource.md#writedata)

#### Defined in

structural/decorator/FileDataSource.ts:31

___

### readData

▸ **readData**(): `string`

ファイルからデータを読み込みます

#### Returns

`string`

読み込んだデータ

#### Implementation of

[DataSource](../interfaces/structural_decorator_DataSource.DataSource.md).[readData](../interfaces/structural_decorator_DataSource.DataSource.md#readdata)

#### Defined in

structural/decorator/FileDataSource.ts:44

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/decorator/DataSourceDecorator](../modules/structural_decorator_DataSourceDecorator.md) / DataSourceDecorator

# Class: DataSourceDecorator

[structural/decorator/DataSourceDecorator](../modules/structural_decorator_DataSourceDecorator.md).DataSourceDecorator

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Hierarchy

- **`DataSourceDecorator`**

  ↳ [`CompressionDecorator`](structural_decorator_CompressionDecorator.CompressionDecorator.md)

  ↳ [`EncryptionDecorator`](structural_decorator_EncryptionDecorator.EncryptionDecorator.md)

## Implements

- [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md)

## Table of contents

### Constructors

- [constructor](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#constructor)

### Properties

- [wrappee](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#wrappee)

### Methods

- [writeData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#writedata)
- [readData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#readdata)

## Constructors

### constructor

• **new DataSourceDecorator**(`wrappee`): [`DataSourceDecorator`](structural_decorator_DataSourceDecorator.DataSourceDecorator.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrappee` | [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md) | ラップするデータソース |

#### Returns

[`DataSourceDecorator`](structural_decorator_DataSourceDecorator.DataSourceDecorator.md)

#### Defined in

structural/decorator/DataSourceDecorator.ts:15

## Properties

### wrappee

• `Protected` **wrappee**: [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md)

ラップするデータソース

#### Defined in

structural/decorator/DataSourceDecorator.ts:15

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

#### Implementation of

[DataSource](../interfaces/structural_decorator_DataSource.DataSource.md).[writeData](../interfaces/structural_decorator_DataSource.DataSource.md#writedata)

#### Defined in

structural/decorator/DataSourceDecorator.ts:21

___

### readData

▸ **readData**(): `string`

データを読み込みます

#### Returns

`string`

読み込んだデータ

#### Implementation of

[DataSource](../interfaces/structural_decorator_DataSource.DataSource.md).[readData](../interfaces/structural_decorator_DataSource.DataSource.md#readdata)

#### Defined in

structural/decorator/DataSourceDecorator.ts:29

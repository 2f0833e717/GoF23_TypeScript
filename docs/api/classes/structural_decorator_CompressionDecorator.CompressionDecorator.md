[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/decorator/CompressionDecorator](../modules/structural_decorator_CompressionDecorator.md) / CompressionDecorator

# Class: CompressionDecorator

[structural/decorator/CompressionDecorator](../modules/structural_decorator_CompressionDecorator.md).CompressionDecorator

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Hierarchy

- [`DataSourceDecorator`](structural_decorator_DataSourceDecorator.DataSourceDecorator.md)

  ↳ **`CompressionDecorator`**

## Table of contents

### Constructors

- [constructor](structural_decorator_CompressionDecorator.CompressionDecorator.md#constructor)

### Properties

- [wrappee](structural_decorator_CompressionDecorator.CompressionDecorator.md#wrappee)

### Methods

- [writeData](structural_decorator_CompressionDecorator.CompressionDecorator.md#writedata)
- [readData](structural_decorator_CompressionDecorator.CompressionDecorator.md#readdata)

## Constructors

### constructor

• **new CompressionDecorator**(`wrappee`): [`CompressionDecorator`](structural_decorator_CompressionDecorator.CompressionDecorator.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrappee` | [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md) | ラップするデータソース |

#### Returns

[`CompressionDecorator`](structural_decorator_CompressionDecorator.CompressionDecorator.md)

#### Inherited from

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[constructor](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#constructor)

#### Defined in

structural/decorator/DataSourceDecorator.ts:15

## Properties

### wrappee

• `Protected` **wrappee**: [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md)

ラップするデータソース

#### Inherited from

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[wrappee](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#wrappee)

#### Defined in

structural/decorator/DataSourceDecorator.ts:15

## Methods

### writeData

▸ **writeData**(`data`): `void`

データを圧縮して書き込みます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 書き込むデータ |

#### Returns

`void`

#### Overrides

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[writeData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#writedata)

#### Defined in

structural/decorator/CompressionDecorator.ts:14

___

### readData

▸ **readData**(): `string`

データを読み込んで解凍します

#### Returns

`string`

解凍されたデータ

#### Overrides

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[readData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#readdata)

#### Defined in

structural/decorator/CompressionDecorator.ts:36

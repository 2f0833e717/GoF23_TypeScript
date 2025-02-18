[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/decorator/DataSourceDecorator](../README.md) / DataSourceDecorator

# Class: DataSourceDecorator

Defined in: structural/decorator/DataSourceDecorator.ts:10

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Extended by

- [`CompressionDecorator`](../../CompressionDecorator/classes/CompressionDecorator.md)
- [`EncryptionDecorator`](../../EncryptionDecorator/classes/EncryptionDecorator.md)

## Implements

- [`DataSource`](../../DataSource/interfaces/DataSource.md)

## Constructors

### new DataSourceDecorator()

> **new DataSourceDecorator**(`wrappee`): [`DataSourceDecorator`](DataSourceDecorator.md)

Defined in: structural/decorator/DataSourceDecorator.ts:15

コンストラクタ

#### Parameters

##### wrappee

[`DataSource`](../../DataSource/interfaces/DataSource.md)

ラップするデータソース

#### Returns

[`DataSourceDecorator`](DataSourceDecorator.md)

## Properties

### wrappee

> `protected` **wrappee**: [`DataSource`](../../DataSource/interfaces/DataSource.md)

Defined in: structural/decorator/DataSourceDecorator.ts:15

ラップするデータソース

## Methods

### writeData()

> **writeData**(`data`): `void`

Defined in: structural/decorator/DataSourceDecorator.ts:21

データを書き込みます

#### Parameters

##### data

`string`

書き込むデータ

#### Returns

`void`

#### Implementation of

[`DataSource`](../../DataSource/interfaces/DataSource.md).[`writeData`](../../DataSource/interfaces/DataSource.md#writedata)

***

### readData()

> **readData**(): `string`

Defined in: structural/decorator/DataSourceDecorator.ts:29

データを読み込みます

#### Returns

`string`

読み込んだデータ

#### Implementation of

[`DataSource`](../../DataSource/interfaces/DataSource.md).[`readData`](../../DataSource/interfaces/DataSource.md#readdata)

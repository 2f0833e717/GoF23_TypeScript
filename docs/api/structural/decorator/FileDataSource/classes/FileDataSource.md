[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/decorator/FileDataSource](../README.md) / FileDataSource

# Class: FileDataSource

Defined in: structural/decorator/FileDataSource.ts:11

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Implements

- [`DataSource`](../../DataSource/interfaces/DataSource.md)

## Constructors

### new FileDataSource()

> **new FileDataSource**(`filename`): [`FileDataSource`](FileDataSource.md)

Defined in: structural/decorator/FileDataSource.ts:18

コンストラクタ

#### Parameters

##### filename

`string`

ファイル名

#### Returns

[`FileDataSource`](FileDataSource.md)

## Methods

### writeData()

> **writeData**(`data`): `void`

Defined in: structural/decorator/FileDataSource.ts:31

ファイルにデータを書き込みます

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

Defined in: structural/decorator/FileDataSource.ts:44

ファイルからデータを読み込みます

#### Returns

`string`

読み込んだデータ

#### Implementation of

[`DataSource`](../../DataSource/interfaces/DataSource.md).[`readData`](../../DataSource/interfaces/DataSource.md#readdata)

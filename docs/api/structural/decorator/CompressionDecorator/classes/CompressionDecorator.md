[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/decorator/CompressionDecorator](../README.md) / CompressionDecorator

# Class: CompressionDecorator

Defined in: structural/decorator/CompressionDecorator.ts:9

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Extends

- [`DataSourceDecorator`](../../DataSourceDecorator/classes/DataSourceDecorator.md)

## Constructors

### new CompressionDecorator()

> **new CompressionDecorator**(`wrappee`): [`CompressionDecorator`](CompressionDecorator.md)

Defined in: structural/decorator/DataSourceDecorator.ts:15

コンストラクタ

#### Parameters

##### wrappee

[`DataSource`](../../DataSource/interfaces/DataSource.md)

ラップするデータソース

#### Returns

[`CompressionDecorator`](CompressionDecorator.md)

#### Inherited from

[`DataSourceDecorator`](../../DataSourceDecorator/classes/DataSourceDecorator.md).[`constructor`](../../DataSourceDecorator/classes/DataSourceDecorator.md#constructors)

## Properties

### wrappee

> `protected` **wrappee**: [`DataSource`](../../DataSource/interfaces/DataSource.md)

Defined in: structural/decorator/DataSourceDecorator.ts:15

ラップするデータソース

#### Inherited from

[`DataSourceDecorator`](../../DataSourceDecorator/classes/DataSourceDecorator.md).[`wrappee`](../../DataSourceDecorator/classes/DataSourceDecorator.md#wrappee-1)

## Methods

### writeData()

> **writeData**(`data`): `void`

Defined in: structural/decorator/CompressionDecorator.ts:14

データを圧縮して書き込みます

#### Parameters

##### data

`string`

書き込むデータ

#### Returns

`void`

#### Overrides

[`DataSourceDecorator`](../../DataSourceDecorator/classes/DataSourceDecorator.md).[`writeData`](../../DataSourceDecorator/classes/DataSourceDecorator.md#writedata)

***

### readData()

> **readData**(): `string`

Defined in: structural/decorator/CompressionDecorator.ts:23

データを読み込んで解凍します

#### Returns

`string`

解凍されたデータ

#### Overrides

[`DataSourceDecorator`](../../DataSourceDecorator/classes/DataSourceDecorator.md).[`readData`](../../DataSourceDecorator/classes/DataSourceDecorator.md#readdata)

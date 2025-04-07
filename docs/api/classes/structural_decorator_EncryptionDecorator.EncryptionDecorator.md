[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/decorator/EncryptionDecorator](../modules/structural_decorator_EncryptionDecorator.md) / EncryptionDecorator

# Class: EncryptionDecorator

[structural/decorator/EncryptionDecorator](../modules/structural_decorator_EncryptionDecorator.md).EncryptionDecorator

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Hierarchy

- [`DataSourceDecorator`](structural_decorator_DataSourceDecorator.DataSourceDecorator.md)

  ↳ **`EncryptionDecorator`**

## Table of contents

### Constructors

- [constructor](structural_decorator_EncryptionDecorator.EncryptionDecorator.md#constructor)

### Properties

- [wrappee](structural_decorator_EncryptionDecorator.EncryptionDecorator.md#wrappee)

### Methods

- [writeData](structural_decorator_EncryptionDecorator.EncryptionDecorator.md#writedata)
- [readData](structural_decorator_EncryptionDecorator.EncryptionDecorator.md#readdata)

## Constructors

### constructor

• **new EncryptionDecorator**(`wrappee`): [`EncryptionDecorator`](structural_decorator_EncryptionDecorator.EncryptionDecorator.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrappee` | [`DataSource`](../interfaces/structural_decorator_DataSource.DataSource.md) | ラップするデータソース |

#### Returns

[`EncryptionDecorator`](structural_decorator_EncryptionDecorator.EncryptionDecorator.md)

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

データを暗号化して書き込みます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 書き込むデータ |

#### Returns

`void`

#### Overrides

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[writeData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#writedata)

#### Defined in

structural/decorator/EncryptionDecorator.ts:18

___

### readData

▸ **readData**(): `string`

データを読み込んで復号化します

#### Returns

`string`

復号化されたデータ

#### Overrides

[DataSourceDecorator](structural_decorator_DataSourceDecorator.DataSourceDecorator.md).[readData](structural_decorator_DataSourceDecorator.DataSourceDecorator.md#readdata)

#### Defined in

structural/decorator/EncryptionDecorator.ts:40

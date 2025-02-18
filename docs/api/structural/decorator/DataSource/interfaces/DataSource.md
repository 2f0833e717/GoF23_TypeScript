[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/decorator/DataSource](../README.md) / DataSource

# Interface: DataSource

Defined in: structural/decorator/DataSource.ts:7

データソースインターフェース

データの読み書きの基本操作を定義します。
このインターフェースは、具象コンポーネントとデコレーターの両方で実装されます。

## Methods

### writeData()

> **writeData**(`data`): `void`

Defined in: structural/decorator/DataSource.ts:12

データを書き込みます

#### Parameters

##### data

`string`

書き込むデータ

#### Returns

`void`

***

### readData()

> **readData**(): `string`

Defined in: structural/decorator/DataSource.ts:18

データを読み込みます

#### Returns

`string`

読み込んだデータ

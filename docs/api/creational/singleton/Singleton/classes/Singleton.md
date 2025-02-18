[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/singleton/Singleton](../README.md) / Singleton

# Class: Singleton

Defined in: creational/singleton/Singleton.ts:9

シングルトンパターン

クラスのインスタンスが1つだけ存在することを保証し、
そのインスタンスへのグローバルなアクセスポイントを提供します。

 Singleton

## Methods

### getInstance()

> `static` **getInstance**(): [`Singleton`](Singleton.md)

Defined in: creational/singleton/Singleton.ts:28

シングルトンインスタンスを取得します

#### Returns

[`Singleton`](Singleton.md)

シングルトンインスタンス

***

### setData()

> **setData**(`data`): `void`

Defined in: creational/singleton/Singleton.ts:39

データを設定します

#### Parameters

##### data

`string`

設定するデータ

#### Returns

`void`

***

### getData()

> **getData**(): `string`

Defined in: creational/singleton/Singleton.ts:47

データを取得します

#### Returns

`string`

設定されているデータ

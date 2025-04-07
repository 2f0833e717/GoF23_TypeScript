[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/singleton/Singleton](../modules/creational_singleton_Singleton.md) / Singleton

# Class: Singleton

[creational/singleton/Singleton](../modules/creational_singleton_Singleton.md).Singleton

シングルトンパターン

クラスのインスタンスが1つだけ存在することを保証し、
そのインスタンスへのグローバルなアクセスポイントを提供します。

## Table of contents

### Methods

- [getInstance](creational_singleton_Singleton.Singleton.md#getinstance)
- [setData](creational_singleton_Singleton.Singleton.md#setdata)
- [getData](creational_singleton_Singleton.Singleton.md#getdata)

## Methods

### getInstance

▸ **getInstance**(): [`Singleton`](creational_singleton_Singleton.Singleton.md)

シングルトンインスタンスを取得します

#### Returns

[`Singleton`](creational_singleton_Singleton.Singleton.md)

シングルトンインスタンス

#### Defined in

creational/singleton/Singleton.ts:28

___

### setData

▸ **setData**(`data`): `void`

データを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | 設定するデータ |

#### Returns

`void`

#### Defined in

creational/singleton/Singleton.ts:39

___

### getData

▸ **getData**(): `string`

データを取得します

#### Returns

`string`

設定されているデータ

#### Defined in

creational/singleton/Singleton.ts:47

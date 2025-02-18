[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/iterator/Iterator](../README.md) / Iterator

# Interface: Iterator\<T\>

Defined in: behavioral/iterator/Iterator.ts:6

イテレーターインターフェース

コレクションの要素を順番に走査するためのインターフェースを定義します。

## Type Parameters

• **T**

## Methods

### hasNext()

> **hasNext**(): `boolean`

Defined in: behavioral/iterator/Iterator.ts:11

次の要素が存在するかを確認します

#### Returns

`boolean`

次の要素が存在する場合はtrue

***

### next()

> **next**(): `T`

Defined in: behavioral/iterator/Iterator.ts:18

次の要素を取得します

#### Returns

`T`

次の要素

#### Throws

Error 次の要素が存在しない場合

***

### current()

> **current**(): `T`

Defined in: behavioral/iterator/Iterator.ts:25

現在の要素を取得します

#### Returns

`T`

現在の要素

#### Throws

Error イテレーションが開始されていない場合

***

### reset()

> **reset**(): `void`

Defined in: behavioral/iterator/Iterator.ts:30

イテレーションをリセットします

#### Returns

`void`

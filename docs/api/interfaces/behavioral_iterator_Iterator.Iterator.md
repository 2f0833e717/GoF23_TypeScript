[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/iterator/Iterator](../modules/behavioral_iterator_Iterator.md) / Iterator

# Interface: Iterator\<T\>

[behavioral/iterator/Iterator](../modules/behavioral_iterator_Iterator.md).Iterator

イテレーターインターフェース

コレクションの要素を順番に走査するためのインターフェースを定義します。

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [hasNext](behavioral_iterator_Iterator.Iterator.md#hasnext)
- [next](behavioral_iterator_Iterator.Iterator.md#next)
- [current](behavioral_iterator_Iterator.Iterator.md#current)
- [reset](behavioral_iterator_Iterator.Iterator.md#reset)

## Methods

### hasNext

▸ **hasNext**(): `boolean`

次の要素が存在するかを確認します

#### Returns

`boolean`

次の要素が存在する場合はtrue

#### Defined in

behavioral/iterator/Iterator.ts:11

___

### next

▸ **next**(): `T`

次の要素を取得します

#### Returns

`T`

次の要素

**`Throws`**

Error 次の要素が存在しない場合

#### Defined in

behavioral/iterator/Iterator.ts:18

___

### current

▸ **current**(): `T`

現在の要素を取得します

#### Returns

`T`

現在の要素

**`Throws`**

Error イテレーションが開始されていない場合

#### Defined in

behavioral/iterator/Iterator.ts:25

___

### reset

▸ **reset**(): `void`

イテレーションをリセットします

#### Returns

`void`

#### Defined in

behavioral/iterator/Iterator.ts:30

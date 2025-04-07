[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/iterator/Iterator](../modules/behavioral_iterator_Iterator.md) / Aggregate

# Interface: Aggregate\<T\>

[behavioral/iterator/Iterator](../modules/behavioral_iterator_Iterator.md).Aggregate

集約インターフェース

イテレーターを生成するためのインターフェースを定義します。

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Playlist`](../classes/behavioral_iterator_MusicPlaylist.Playlist.md)

## Table of contents

### Methods

- [createIterator](behavioral_iterator_Iterator.Aggregate.md#createiterator)

## Methods

### createIterator

▸ **createIterator**(): [`Iterator`](behavioral_iterator_Iterator.Iterator.md)\<`T`\>

イテレーターを生成します

#### Returns

[`Iterator`](behavioral_iterator_Iterator.Iterator.md)\<`T`\>

新しいイテレーター

#### Defined in

behavioral/iterator/Iterator.ts:43

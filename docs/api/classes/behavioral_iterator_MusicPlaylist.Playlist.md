[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/iterator/MusicPlaylist](../modules/behavioral_iterator_MusicPlaylist.md) / Playlist

# Class: Playlist

[behavioral/iterator/MusicPlaylist](../modules/behavioral_iterator_MusicPlaylist.md).Playlist

プレイリストを表すクラス

## Implements

- [`Aggregate`](../interfaces/behavioral_iterator_Iterator.Aggregate.md)\<[`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md)\>

## Table of contents

### Constructors

- [constructor](behavioral_iterator_MusicPlaylist.Playlist.md#constructor)

### Methods

- [addTrack](behavioral_iterator_MusicPlaylist.Playlist.md#addtrack)
- [removeTrack](behavioral_iterator_MusicPlaylist.Playlist.md#removetrack)
- [getLength](behavioral_iterator_MusicPlaylist.Playlist.md#getlength)
- [createIterator](behavioral_iterator_MusicPlaylist.Playlist.md#createiterator)
- [createShuffleIterator](behavioral_iterator_MusicPlaylist.Playlist.md#createshuffleiterator)

## Constructors

### constructor

• **new Playlist**(): [`Playlist`](behavioral_iterator_MusicPlaylist.Playlist.md)

#### Returns

[`Playlist`](behavioral_iterator_MusicPlaylist.Playlist.md)

## Methods

### addTrack

▸ **addTrack**(`track`): `void`

プレイリストに曲を追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `track` | [`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md) | 追加する曲 |

#### Returns

`void`

#### Defined in

behavioral/iterator/MusicPlaylist.ts:33

___

### removeTrack

▸ **removeTrack**(`id`): `void`

プレイリストから曲を削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 削除する曲のID |

#### Returns

`void`

#### Defined in

behavioral/iterator/MusicPlaylist.ts:41

___

### getLength

▸ **getLength**(): `number`

プレイリストの曲数を取得します

#### Returns

`number`

#### Defined in

behavioral/iterator/MusicPlaylist.ts:48

___

### createIterator

▸ **createIterator**(): [`Iterator`](../interfaces/behavioral_iterator_Iterator.Iterator.md)\<[`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md)\>

通常の順序でイテレーターを生成します

#### Returns

[`Iterator`](../interfaces/behavioral_iterator_Iterator.Iterator.md)\<[`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md)\>

#### Implementation of

[Aggregate](../interfaces/behavioral_iterator_Iterator.Aggregate.md).[createIterator](../interfaces/behavioral_iterator_Iterator.Aggregate.md#createiterator)

#### Defined in

behavioral/iterator/MusicPlaylist.ts:55

___

### createShuffleIterator

▸ **createShuffleIterator**(): [`Iterator`](../interfaces/behavioral_iterator_Iterator.Iterator.md)\<[`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md)\>

シャッフル順でイテレーターを生成します

#### Returns

[`Iterator`](../interfaces/behavioral_iterator_Iterator.Iterator.md)\<[`Track`](../interfaces/behavioral_iterator_MusicPlaylist.Track.md)\>

#### Defined in

behavioral/iterator/MusicPlaylist.ts:62

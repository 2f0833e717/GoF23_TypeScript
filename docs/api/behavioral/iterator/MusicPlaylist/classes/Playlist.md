[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/iterator/MusicPlaylist](../README.md) / Playlist

# Class: Playlist

Defined in: behavioral/iterator/MusicPlaylist.ts:26

プレイリストを表すクラス

## Implements

- [`Aggregate`](../../Iterator/interfaces/Aggregate.md)\<[`Track`](../interfaces/Track.md)\>

## Constructors

### new Playlist()

> **new Playlist**(): [`Playlist`](Playlist.md)

#### Returns

[`Playlist`](Playlist.md)

## Methods

### addTrack()

> **addTrack**(`track`): `void`

Defined in: behavioral/iterator/MusicPlaylist.ts:33

プレイリストに曲を追加します

#### Parameters

##### track

[`Track`](../interfaces/Track.md)

追加する曲

#### Returns

`void`

***

### removeTrack()

> **removeTrack**(`id`): `void`

Defined in: behavioral/iterator/MusicPlaylist.ts:41

プレイリストから曲を削除します

#### Parameters

##### id

`string`

削除する曲のID

#### Returns

`void`

***

### getLength()

> **getLength**(): `number`

Defined in: behavioral/iterator/MusicPlaylist.ts:48

プレイリストの曲数を取得します

#### Returns

`number`

***

### createIterator()

> **createIterator**(): [`Iterator`](../../Iterator/interfaces/Iterator.md)\<[`Track`](../interfaces/Track.md)\>

Defined in: behavioral/iterator/MusicPlaylist.ts:55

通常の順序でイテレーターを生成します

#### Returns

[`Iterator`](../../Iterator/interfaces/Iterator.md)\<[`Track`](../interfaces/Track.md)\>

#### Implementation of

[`Aggregate`](../../Iterator/interfaces/Aggregate.md).[`createIterator`](../../Iterator/interfaces/Aggregate.md#createiterator)

***

### createShuffleIterator()

> **createShuffleIterator**(): [`Iterator`](../../Iterator/interfaces/Iterator.md)\<[`Track`](../interfaces/Track.md)\>

Defined in: behavioral/iterator/MusicPlaylist.ts:62

シャッフル順でイテレーターを生成します

#### Returns

[`Iterator`](../../Iterator/interfaces/Iterator.md)\<[`Track`](../interfaces/Track.md)\>

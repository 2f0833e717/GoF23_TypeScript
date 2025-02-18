/**
 * 音楽プレイリストシステムのテスト
 */
import { Track, Playlist } from '../../../src/behavioral/iterator/MusicPlaylist';

describe('Iterator Pattern - Music Playlist', () => {
    let playlist: Playlist;
    let tracks: Track[];

    beforeEach(() => {
        playlist = new Playlist();
        tracks = [
            { id: '1', title: '春の歌', artist: '山田花子', duration: 180 },
            { id: '2', title: '夏の歌', artist: '田中太郎', duration: 210 },
            { id: '3', title: '秋の歌', artist: '佐藤次郎', duration: 195 },
            { id: '4', title: '冬の歌', artist: '鈴木三郎', duration: 225 }
        ];
        tracks.forEach(track => playlist.addTrack(track));
    });

    describe('Playlist Management', () => {
        test('should add tracks to playlist', () => {
            expect(playlist.getLength()).toBe(4);
        });

        test('should remove track from playlist', () => {
            playlist.removeTrack('2');
            expect(playlist.getLength()).toBe(3);
        });
    });

    describe('Normal Iterator', () => {
        test('should iterate through tracks in order', () => {
            const iterator = playlist.createIterator();
            const iteratedTracks: Track[] = [];

            while (iterator.hasNext()) {
                iteratedTracks.push(iterator.next());
            }

            expect(iteratedTracks).toHaveLength(4);
            expect(iteratedTracks[0]).toEqual(tracks[0]);
            expect(iteratedTracks[1]).toEqual(tracks[1]);
            expect(iteratedTracks[2]).toEqual(tracks[2]);
            expect(iteratedTracks[3]).toEqual(tracks[3]);
        });

        test('should get current track', () => {
            const iterator = playlist.createIterator();
            iterator.next(); // 最初の曲に移動
            expect(iterator.current()).toEqual(tracks[0]);
        });

        test('should throw error when accessing current before iteration starts', () => {
            const iterator = playlist.createIterator();
            expect(() => iterator.current()).toThrow('イテレーションが開始されていません');
        });

        test('should throw error when next is called at the end', () => {
            const iterator = playlist.createIterator();
            while (iterator.hasNext()) {
                iterator.next();
            }
            expect(() => iterator.next()).toThrow('プレイリストの最後に到達しました');
        });

        test('should reset iterator', () => {
            const iterator = playlist.createIterator();
            while (iterator.hasNext()) {
                iterator.next();
            }
            iterator.reset();
            expect(iterator.hasNext()).toBe(true);
            expect(iterator.next()).toEqual(tracks[0]);
        });
    });

    describe('Shuffle Iterator', () => {
        test('should iterate through all tracks in random order', () => {
            const iterator = playlist.createShuffleIterator();
            const iteratedTracks: Track[] = [];

            while (iterator.hasNext()) {
                iteratedTracks.push(iterator.next());
            }

            // 長さは同じ
            expect(iteratedTracks).toHaveLength(tracks.length);

            // すべての曲が含まれている
            tracks.forEach(track => {
                expect(iteratedTracks.some(t => t.id === track.id)).toBe(true);
            });

            // 順序が異なる可能性がある
            const isShuffled = iteratedTracks.some((track, index) => track !== tracks[index]);
            expect(isShuffled).toBe(true);
        });
    });
}); 
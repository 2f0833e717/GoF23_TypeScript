/**
 * 音楽プレイリストシステム
 * 
 * イテレーターパターンを使用して、音楽プレイリストの要素を順番に走査する機能を提供します。
 * - プレイリストの作成と管理
 * - 曲の追加と削除
 * - プレイリストの順次再生
 * - シャッフル再生
 */

import { Iterator, Aggregate } from './Iterator';

/**
 * 音楽トラックを表すインターフェース
 */
export interface Track {
    id: string;
    title: string;
    artist: string;
    duration: number; // 秒単位
}

/**
 * プレイリストを表すクラス
 */
export class Playlist implements Aggregate<Track> {
    private tracks: Track[] = [];

    /**
     * プレイリストに曲を追加します
     * @param track 追加する曲
     */
    addTrack(track: Track): void {
        this.tracks.push(track);
    }

    /**
     * プレイリストから曲を削除します
     * @param id 削除する曲のID
     */
    removeTrack(id: string): void {
        this.tracks = this.tracks.filter(track => track.id !== id);
    }

    /**
     * プレイリストの曲数を取得します
     */
    getLength(): number {
        return this.tracks.length;
    }

    /**
     * 通常の順序でイテレーターを生成します
     */
    createIterator(): Iterator<Track> {
        return new PlaylistIterator(this.tracks);
    }

    /**
     * シャッフル順でイテレーターを生成します
     */
    createShuffleIterator(): Iterator<Track> {
        // Fisher-Yatesシャッフルアルゴリズムを使用
        const shuffledTracks = [...this.tracks];
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        return new PlaylistIterator(shuffledTracks);
    }
}

/**
 * プレイリストのイテレーターを表すクラス
 */
class PlaylistIterator implements Iterator<Track> {
    private currentIndex: number = -1;

    constructor(private tracks: Track[]) { }

    hasNext(): boolean {
        return this.currentIndex < this.tracks.length - 1;
    }

    next(): Track {
        if (!this.hasNext()) {
            throw new Error('プレイリストの最後に到達しました');
        }
        this.currentIndex++;
        return this.tracks[this.currentIndex];
    }

    current(): Track {
        if (this.currentIndex < 0) {
            throw new Error('イテレーションが開始されていません');
        }
        if (this.currentIndex >= this.tracks.length) {
            throw new Error('プレイリストの最後に到達しました');
        }
        return this.tracks[this.currentIndex];
    }

    reset(): void {
        this.currentIndex = -1;
    }
} 
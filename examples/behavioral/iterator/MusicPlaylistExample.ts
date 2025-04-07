/**
 * 音楽プレイリスト - Iterator パターン実装例
 * 
 * このサンプルは、Iteratorパターンを使用した音楽プレイリストシステムの実装を示します。
 * プレイリストの要素（音楽トラック）を順番に走査する機能を提供し、
 * 通常再生とシャッフル再生の2種類のイテレーションをサポートします。
 */

import { Playlist, Track } from '../../src/behavioral/iterator/MusicPlaylist';

export class MusicPlaylistExample {
    /**
     * 音楽プレイリストシステムの実行例
     */
    static run(): void {
        console.log('===== 音楽プレイリスト - Iterator パターン実装例 =====');
        
        // プレイリストの作成
        const playlist = new Playlist();
        
        // トラックの追加
        const tracks: Track[] = [
            { id: '001', title: '夜に駆ける', artist: 'YOASOBI', duration: 258 },
            { id: '002', title: 'Lemon', artist: '米津玄師', duration: 255 },
            { id: '003', title: '紅蓮華', artist: 'LiSA', duration: 237 },
            { id: '004', title: 'マリーゴールド', artist: 'あいみょん', duration: 240 },
            { id: '005', title: '炎', artist: 'LiSA', duration: 270 }
        ];
        
        tracks.forEach(track => playlist.addTrack(track));
        console.log(`プレイリストに${playlist.getLength()}曲を追加しました。`);
        
        // 通常の順序でイテレーション
        console.log('\n--- 通常再生 ---');
        const iterator = playlist.createIterator();
        
        while (iterator.hasNext()) {
            const track = iterator.next();
            console.log(`再生中: ${track.title} - ${track.artist} (${formatDuration(track.duration)})`);
        }
        
        // シャッフル順でイテレーション
        console.log('\n--- シャッフル再生 ---');
        const shuffleIterator = playlist.createShuffleIterator();
        
        while (shuffleIterator.hasNext()) {
            const track = shuffleIterator.next();
            console.log(`再生中: ${track.title} - ${track.artist} (${formatDuration(track.duration)})`);
        }
        
        // 曲の削除
        console.log('\n--- 曲の削除 ---');
        playlist.removeTrack('003');
        console.log(`1曲削除しました。現在のプレイリスト: ${playlist.getLength()}曲`);
        
        // 再度イテレーション
        console.log('\n--- 削除後の再生 ---');
        const newIterator = playlist.createIterator();
        newIterator.reset();
        
        while (newIterator.hasNext()) {
            const track = newIterator.next();
            console.log(`再生中: ${track.title} - ${track.artist} (${formatDuration(track.duration)})`);
        }
    }
}

/**
 * 秒数を「分:秒」形式にフォーマットする関数
 * @param seconds 秒数
 * @returns フォーマットされた時間
 */
function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// 実行例
if (require.main === module) {
    MusicPlaylistExample.run();
} 
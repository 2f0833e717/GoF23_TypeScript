/**
 * ファサードパターンの使用例
 * 
 * 複雑なビデオ変換システムをシンプルなインターフェースで
 * 使用する例を示します。
 */
import { VideoConverter } from '../../../src/structural/facade/VideoConverter';

export function runFacadeExample(): void {
    console.log('ファサードパターンの実行例:');
    console.log('--------------------------------');

    const converter = new VideoConverter();

    // MP4からOGGへの変換
    console.log('1. MP4からOGGへの変換:');
    console.log('入力: lecture.mp4');
    const result1 = converter.convert('lecture.mp4', 'ogg');
    console.log('出力:', result1);
    console.log();

    // OGGからMP4への変換
    console.log('2. OGGからMP4への変換:');
    console.log('入力: music.ogg');
    const result2 = converter.convert('music.ogg', 'mp4');
    console.log('出力:', result2);
    console.log();

    // 同じフォーマット間の変換
    console.log('3. MP4からMP4への変換（再エンコード）:');
    console.log('入力: movie.mp4');
    const result3 = converter.convert('movie.mp4', 'mp4');
    console.log('出力:', result3);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runFacadeExample();
} 
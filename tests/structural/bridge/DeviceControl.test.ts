/**
 * デバイス制御システムのテスト
 */
import { BasicRemote } from '../../../src/structural/bridge/abstraction/BasicRemote';
import { AdvancedRemote } from '../../../src/structural/bridge/abstraction/AdvancedRemote';
import { Television } from '../../../src/structural/bridge/implementation/Television';
import { Radio } from '../../../src/structural/bridge/implementation/Radio';

describe('Bridge Pattern - Device Control', () => {
    describe('Basic Remote with Television', () => {
        let tv: Television;
        let remote: BasicRemote;

        beforeEach(() => {
            tv = new Television();
            remote = new BasicRemote(tv);
        });

        test('should control power', () => {
            expect(tv.isEnabled()).toBe(false);
            remote.turnOn();
            expect(tv.isEnabled()).toBe(true);
            remote.turnOff();
            expect(tv.isEnabled()).toBe(false);
        });

        test('should control volume', () => {
            remote.turnOn();
            expect(tv.getVolume()).toBe(30);
            remote.volumeUp();
            expect(tv.getVolume()).toBe(40);
            remote.volumeDown();
            expect(tv.getVolume()).toBe(30);
        });

        test('should control channel', () => {
            remote.turnOn();
            expect(tv.getChannel()).toBe(1);
            remote.channelUp();
            expect(tv.getChannel()).toBe(2);
            remote.channelDown();
            expect(tv.getChannel()).toBe(1);
            remote.setChannel(50);
            expect(tv.getChannel()).toBe(50);
        });

        test('should handle volume limits', () => {
            remote.turnOn();
            for (let i = 0; i < 15; i++) {
                remote.volumeUp();
            }
            expect(tv.getVolume()).toBe(100);
            for (let i = 0; i < 15; i++) {
                remote.volumeDown();
            }
            expect(tv.getVolume()).toBe(0);
        });

        test('should handle direct volume and channel setting', () => {
            remote.turnOn();

            // 音量の直接設定
            remote.setVolume(50);
            expect(tv.getVolume()).toBe(50);

            // チャンネルの直接設定
            remote.setChannel(15);
            expect(tv.getChannel()).toBe(15);
        });

        test('should handle optional operations', () => {
            remote.turnOn();

            // 前のチャンネルに戻る
            remote.setChannel(10);
            remote.setChannel(20);
            remote.returnToPreviousChannel?.();
            expect(tv.getChannel()).toBe(10);

            // ミュート
            remote.setVolume(50);
            remote.mute?.();
            expect(tv.getVolume()).toBe(0);

            // お気に入り
            remote.addToFavorites?.(5);
            expect(tv.getFavorites()).toContain(5);
        });

        test('should handle channel limits', () => {
            remote.turnOn();
            // 最小チャンネル以下の設定
            remote.setChannel(0);
            expect(tv.getChannel()).toBe(1);  // 変更されないことを確認

            // 最大チャンネル以上の設定
            remote.setChannel(1000);
            expect(tv.getChannel()).toBe(1);  // 変更されないことを確認
        });

        test('should handle previous channel operations', () => {
            remote.turnOn();
            // 初期状態での前のチャンネルへの移動（エラーは無視される）
            remote.returnToPreviousChannel?.();
            expect(tv.getChannel()).toBe(1);  // 変更されないことを確認

            // 通常の前のチャンネルへの移動
            remote.setChannel(10);
            remote.setChannel(20);
            remote.returnToPreviousChannel?.();
            expect(tv.getChannel()).toBe(10);
            remote.returnToPreviousChannel?.();
            expect(tv.getChannel()).toBe(20);
        });

        test('should handle favorite channels', () => {
            remote.turnOn();
            // 無効なチャンネルのお気に入り追加（エラーは無視される）
            remote.addToFavorites?.(0);
            remote.addToFavorites?.(1000);
            expect(tv.getFavorites()).toEqual([]);

            // 有効なチャンネルのお気に入り追加
            remote.addToFavorites?.(5);
            remote.addToFavorites?.(10);
            remote.addToFavorites?.(15);
            expect(tv.getFavorites()).toEqual([5, 10, 15]);

            // 重複するチャンネルのお気に入り追加
            remote.addToFavorites?.(5);
            expect(tv.getFavorites()).toEqual([5, 10, 15]);
        });

        test('should handle favorite channels cycling', () => {
            remote.turnOn();

            // お気に入りが空の場合の動作確認
            remote.cycleFavorites?.();
            expect(tv.getChannel()).toBe(1); // デフォルトチャンネルのまま

            // お気に入りチャンネルを追加
            remote.addToFavorites?.(5);
            remote.addToFavorites?.(10);
            remote.addToFavorites?.(15);

            // お気に入りチャンネルの巡回
            remote.cycleFavorites?.();
            expect(tv.getChannel()).toBe(5);
            remote.cycleFavorites?.();
            expect(tv.getChannel()).toBe(10);
            remote.cycleFavorites?.();
            expect(tv.getChannel()).toBe(15);
            remote.cycleFavorites?.();
            expect(tv.getChannel()).toBe(5); // 最初に戻る

            // 電源OFFの状態での動作確認
            remote.turnOff();
            expect(() => remote.cycleFavorites?.()).toThrow('デバイスの電源がOFFです');
            expect(tv.isEnabled()).toBe(false);
            expect(tv.getChannel()).toBe(1); // チャンネルは変更されない
        });
    });

    describe('Advanced Remote with Radio', () => {
        let radio: Radio;
        let remote: AdvancedRemote;

        beforeEach(() => {
            radio = new Radio();
            remote = new AdvancedRemote(radio);
        });

        test('should control power', () => {
            expect(radio.isEnabled()).toBe(false);
            remote.turnOn();
            expect(radio.isEnabled()).toBe(true);
            remote.turnOff();
            expect(radio.isEnabled()).toBe(false);
        });

        test('should control volume with mute', () => {
            remote.turnOn();
            expect(radio.getVolume()).toBe(20);
            remote.volumeUp();
            expect(radio.getVolume()).toBe(30);
            remote.mute();
            expect(radio.getVolume()).toBe(0);
        });

        test('should control channel with previous channel feature', () => {
            remote.turnOn();
            remote.setChannel(10); // 82.0MHz
            remote.setChannel(20); // 87.0MHz
            remote.returnToPreviousChannel();
            expect(radio.getChannel()).toBe(10);
            remote.returnToPreviousChannel();
            expect(radio.getChannel()).toBe(20);
        });

        test('should handle favorite channels', () => {
            remote.turnOn();
            remote.addToFavorites(5);  // 79.0MHz
            remote.addToFavorites(10); // 82.0MHz
            remote.addToFavorites(15); // 84.5MHz

            remote.cycleFavorites();
            expect(radio.getChannel()).toBe(5);
            remote.cycleFavorites();
            expect(radio.getChannel()).toBe(10);
            remote.cycleFavorites();
            expect(radio.getChannel()).toBe(15);
            remote.cycleFavorites();
            expect(radio.getChannel()).toBe(5);
        });

        test('should handle empty favorites', () => {
            remote.turnOn();
            remote.cycleFavorites(); // お気に入りが空の場合
            expect(radio.getChannel()).toBe(1); // デフォルトチャンネル
        });

        test('should handle frequency limits', () => {
            remote.turnOn();
            remote.setChannel(1);  // 76.0MHz
            expect(radio.getFrequency()).toBe(76.0);
            remote.setChannel(100); // 範囲外のチャンネル
            expect(radio.getChannel()).toBe(1); // チャンネルは変更されないことを確認
            expect(radio.getFrequency()).toBe(76.0);
        });
    });

    describe('Cross-device compatibility', () => {
        test('should work with TV and Advanced Remote', () => {
            const tv = new Television();
            const remote = new AdvancedRemote(tv);

            remote.turnOn();
            expect(tv.isEnabled()).toBe(true);
            remote.mute();
            expect(tv.getVolume()).toBe(0);
            remote.addToFavorites(1);
            remote.addToFavorites(2);
            expect(tv.getFavorites()).toEqual([1, 2]); // お気に入りの順序を確認
            remote.cycleFavorites(); // 最初のお気に入りチャンネルに移動
            expect(tv.getChannel()).toBe(1); // 最初のお気に入りチャンネル（1）に移動
            remote.cycleFavorites(); // 次のお気に入りチャンネルに移動
            expect(tv.getChannel()).toBe(2); // 次のお気に入りチャンネル（2）に移動
        });

        test('should work with Radio and Basic Remote', () => {
            const radio = new Radio();
            const remote = new BasicRemote(radio);

            remote.turnOn();
            expect(radio.isEnabled()).toBe(true);
            remote.volumeUp();
            expect(radio.getVolume()).toBe(30);  // 20 + 10 = 30
            remote.setChannel(5);
            expect(radio.getChannel()).toBe(5);
        });
    });

    describe('Error Handling', () => {
        describe('Basic Remote', () => {
            let tv: Television;
            let remote: BasicRemote;

            beforeEach(() => {
                tv = new Television();
                remote = new BasicRemote(tv);
            });

            test('should handle device power state errors', () => {
                // デバイスがOFFの状態でのチャンネル操作
                expect(() => remote.setChannel(10)).toThrow('デバイスの電源がOFFです');
                expect(() => remote.channelUp()).toThrow('デバイスの電源がOFFです');
                expect(() => remote.channelDown()).toThrow('デバイスの電源がOFFです');
                expect(() => remote.returnToPreviousChannel?.()).toThrow('デバイスの電源がOFFです');
                expect(() => remote.mute?.()).toThrow('デバイスの電源がOFFです');
                expect(() => remote.addToFavorites?.(5)).not.toThrow(); // お気に入りの追加は電源状態に依存しない
                expect(() => remote.cycleFavorites()).toThrow('デバイスの電源がOFFです');

                // デバイスをONにしてエラーが発生しないことを確認
                remote.turnOn();
                expect(() => remote.setChannel(10)).not.toThrow();
                expect(() => remote.channelUp()).not.toThrow();
                expect(() => remote.channelDown()).not.toThrow();
                expect(() => remote.addToFavorites?.(5)).not.toThrow();
            });

            test('should handle invalid channel operations', () => {
                remote.turnOn();

                // 無効なチャンネル値の設定
                remote.setChannel(0);  // 範囲外の値は無視される
                expect(tv.getChannel()).toBe(1);

                remote.setChannel(65); // 範囲外の値は無視される
                expect(tv.getChannel()).toBe(1);

                // チャンネル上限での操作
                remote.setChannel(64);
                remote.channelUp(); // 上限を超えようとする操作は無視される
                expect(tv.getChannel()).toBe(64);

                // チャンネル下限での操作
                remote.setChannel(1);
                remote.channelDown(); // 下限を下回ろうとする操作は無視される
                expect(tv.getChannel()).toBe(1);
            });

            test('should handle previous channel errors', () => {
                remote.turnOn();

                // 前のチャンネルが設定されていない状態での操作
                expect(() => remote.returnToPreviousChannel?.()).not.toThrow();
                expect(tv.getChannel()).toBe(1);

                // 正常な前のチャンネルへの移動
                remote.setChannel(10);
                remote.setChannel(20);
                expect(() => remote.returnToPreviousChannel?.()).not.toThrow();
                expect(tv.getChannel()).toBe(10);
            });
        });

        describe('Advanced Remote', () => {
            let tv: Television;
            let remote: AdvancedRemote;

            beforeEach(() => {
                tv = new Television();
                remote = new AdvancedRemote(tv);
            });

            test('should handle device power state differently', () => {
                // デバイスがOFFの状態でもお気に入りチャンネルを追加できる
                expect(() => remote.addToFavorites(5)).not.toThrow();
                expect(tv.getFavorites()).toContain(5);

                // cycleFavoritesはデバイスがONの状態でのみ動作する
                expect(() => remote.cycleFavorites()).toThrow('デバイスの電源がOFFです');

                // デバイスをONにしてエラーが発生しないことを確認
                remote.turnOn();
                expect(() => remote.cycleFavorites()).not.toThrow();
            });
        });

        describe('Radio Error Handling', () => {
            let radio: Radio;
            let remote: AdvancedRemote;

            beforeEach(() => {
                radio = new Radio();
                remote = new AdvancedRemote(radio);
            });

            test('should handle power state errors', () => {
                // 既にOFFの状態でOFFにする
                expect(radio.isEnabled()).toBe(false);
                expect(() => radio.disable()).toThrow('ラジオは既にOFFになっています');

                // 電源をONにする
                radio.enable();
                expect(radio.isEnabled()).toBe(true);

                // 既にONの状態でONにする
                expect(() => radio.enable()).toThrow('ラジオは既にONになっています');
            });

            test('should handle volume errors', () => {
                radio.enable();
                expect(radio.getVolume()).toBe(20);

                // 無効な音量値を設定
                expect(() => radio.setVolume(NaN)).toThrow('音量は数値で指定してください');
                expect(() => radio.setVolume(-1)).not.toThrow();
                expect(radio.getVolume()).toBe(0);
                expect(() => radio.setVolume(101)).not.toThrow();
                expect(radio.getVolume()).toBe(100);
            });

            test('should handle channel errors', () => {
                radio.enable();

                // 無効なチャンネル値を設定
                expect(() => radio.setChannel(NaN)).toThrow('チャンネルは数値で指定してください');
                expect(() => radio.setChannel(0)).toThrow('チャンネル0は範囲外です（有効範囲: 1-64）');
                expect(() => radio.setChannel(65)).toThrow('チャンネル65は範囲外です（有効範囲: 1-64）');
            });

            test('should handle favorite channel errors', () => {
                radio.enable();

                // 無効なお気に入りチャンネルを追加
                expect(() => radio.addToFavorites(NaN)).toThrow('チャンネルは数値で指定してください');
                expect(() => radio.addToFavorites(0)).toThrow('チャンネル0は範囲外です（有効範囲: 1-64）');
                expect(() => radio.addToFavorites(65)).toThrow('チャンネル65は範囲外です（有効範囲: 1-64）');

                // 重複するお気に入りチャンネルを追加
                radio.addToFavorites(5);
                expect(() => radio.addToFavorites(5)).not.toThrow();
                expect(radio.getFavorites()).toEqual([5]);
            });

            test('should handle previous channel errors', () => {
                radio.enable();

                // 前のチャンネルが設定されていない状態で戻る
                expect(() => radio.returnToPreviousChannel()).toThrow('有効な前のチャンネルがありません');

                // チャンネルを変更して戻る
                radio.setChannel(10);
                radio.setChannel(20);
                expect(() => radio.returnToPreviousChannel()).not.toThrow();
                expect(radio.getChannel()).toBe(10);
            });

            test('should handle favorite channel operations', () => {
                radio.enable();

                // お気に入りチャンネルの追加と削除
                radio.addToFavorites(5);
                expect(radio.getFavorites()).toContain(5);
                radio.removeFromFavorites(5);
                expect(radio.getFavorites()).not.toContain(5);

                // 存在しないお気に入りチャンネルの削除
                expect(() => radio.removeFromFavorites(10)).not.toThrow();

                // お気に入りチャンネルの巡回
                radio.addToFavorites(5);
                radio.addToFavorites(10);
                radio.cycleFavorites();
                expect(radio.getChannel()).toBe(5);
                radio.cycleFavorites();
                expect(radio.getChannel()).toBe(10);
            });

            test('should handle channel cycling errors', () => {
                radio.enable();

                // お気に入りが空の状態での巡回
                expect(() => radio.cycleFavorites()).not.toThrow();
                expect(radio.getChannel()).toBe(1);

                // お気に入りチャンネルを追加して巡回
                radio.addToFavorites(5);
                radio.addToFavorites(10);
                radio.cycleFavorites();
                expect(radio.getChannel()).toBe(5);

                // 電源OFFでの巡回
                radio.disable();
                expect(() => radio.cycleFavorites()).toThrow('デバイスの電源がOFFです');
            });
        });

        describe('Television Error Handling', () => {
            let tv: Television;
            let remote: AdvancedRemote;

            beforeEach(() => {
                tv = new Television();
                remote = new AdvancedRemote(tv);
            });

            test('should handle power state errors', () => {
                // 既にOFFの状態でOFFにする
                expect(() => tv.disable()).toThrow('テレビは既にOFFになっています');

                // 電源をONにする
                tv.enable();
                expect(tv.isEnabled()).toBe(true);

                // 既にONの状態でONにする
                expect(() => tv.enable()).toThrow('テレビは既にONになっています');
            });

            test('should handle favorite channel operations', () => {
                tv.enable();

                // お気に入りチャンネルの追加と削除
                tv.addToFavorites(5);
                expect(tv.getFavorites()).toContain(5);
                tv.removeFromFavorites(5);
                expect(tv.getFavorites()).not.toContain(5);

                // 存在しないお気に入りチャンネルの削除
                expect(() => tv.removeFromFavorites(10)).not.toThrow();

                // お気に入りチャンネルの巡回
                tv.addToFavorites(5);
                tv.addToFavorites(10);
                tv.cycleFavorites();
                expect(tv.getChannel()).toBe(5);
                tv.cycleFavorites();
                expect(tv.getChannel()).toBe(10);
            });

            test('should handle channel cycling errors', () => {
                tv.enable();

                // お気に入りが空の状態での巡回
                expect(() => tv.cycleFavorites()).not.toThrow();
                expect(tv.getChannel()).toBe(1);

                // お気に入りチャンネルを追加して巡回
                tv.addToFavorites(5);
                tv.addToFavorites(10);
                tv.cycleFavorites();
                expect(tv.getChannel()).toBe(5);

                // 電源OFFでの巡回
                tv.disable();
                expect(() => tv.cycleFavorites()).toThrow('デバイスの電源がOFFです');
            });
        });
    });

    describe('Advanced Remote Mute Function', () => {
        let tv: Television;
        let remote: AdvancedRemote;

        beforeEach(() => {
            tv = new Television();
            remote = new AdvancedRemote(tv);
            remote.turnOn();
        });

        test('should handle mute operations', () => {
            // 初期音量を設定
            remote.setVolume(50);
            expect(tv.getVolume()).toBe(50);

            // ミュート
            remote.mute();
            expect(tv.getVolume()).toBe(0);

            // ミュート解除
            remote.mute();
            expect(tv.getVolume()).toBe(50);

            // 音量0の状態でのミュート
            remote.setVolume(0);
            remote.mute();
            expect(tv.getVolume()).toBe(0);
        });

        test('should handle mute state after volume change', () => {
            // ミュート状態を設定
            remote.setVolume(50);
            remote.mute();
            expect(tv.getVolume()).toBe(0);

            // ミュート中に音量を変更
            remote.setVolume(75);
            expect(tv.getVolume()).toBe(75);

            // 再度ミュート
            remote.mute();
            expect(tv.getVolume()).toBe(0);
        });
    });

    describe('Advanced Remote with Television', () => {
        let tv: Television;
        let remote: AdvancedRemote;

        beforeEach(() => {
            tv = new Television();
            remote = new AdvancedRemote(tv);
            remote.turnOn();
        });

        test('should maintain favorite channels order', () => {
            // お気に入りチャンネルを追加（順序の確認）
            remote.addToFavorites(5);
            remote.addToFavorites(2);
            remote.addToFavorites(10);
            expect(tv.getFavorites()).toEqual([5, 2, 10]); // 追加順が保持されること

            // お気に入りチャンネルの巡回（追加順での巡回）
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5); // 最初に追加したチャンネル
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(2); // 2番目に追加したチャンネル
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(10); // 3番目に追加したチャンネル
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5); // 最初に戻る
        });

        test('should handle channel 1 in favorites correctly', () => {
            // チャンネル1を含むお気に入りの設定
            remote.addToFavorites(1);
            remote.addToFavorites(5);
            expect(tv.getFavorites()).toEqual([1, 5]);

            // チャンネル1からの巡回
            expect(tv.getChannel()).toBe(1); // 初期状態
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(1); // 1がお気に入りにあるので1のまま
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5); // 次のお気に入りに移動
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(1); // 最初に戻る
        });

        test('should handle multiple cycles consistently', () => {
            // 複数のお気に入りを設定
            remote.addToFavorites(3);
            remote.addToFavorites(7);
            remote.addToFavorites(12);
            expect(tv.getFavorites()).toEqual([3, 7, 12]);

            // 複数回の巡回
            for (let i = 0; i < 2; i++) {
                remote.cycleFavorites();
                expect(tv.getChannel()).toBe(3);
                remote.cycleFavorites();
                expect(tv.getChannel()).toBe(7);
                remote.cycleFavorites();
                expect(tv.getChannel()).toBe(12);
            }
        });

        test('should handle non-favorite channel correctly', () => {
            // お気に入りを設定
            remote.addToFavorites(5);
            remote.addToFavorites(10);
            expect(tv.getFavorites()).toEqual([5, 10]);

            // お気に入りにないチャンネルに移動
            remote.setChannel(3);
            expect(tv.getChannel()).toBe(3);

            // お気に入りにないチャンネルからの巡回
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5); // 最初のお気に入りに移動
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(10); // 次のお気に入りに移動
        });
    });
}); 
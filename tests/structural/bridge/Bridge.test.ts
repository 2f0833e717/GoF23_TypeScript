/**
 * ブリッジパターンのテスト
 * 
 * デバイスの実装とリモコンの抽象化の組み合わせをテストします。
 */
import { Television } from '../../../src/structural/bridge/implementation/Television';
import { Radio } from '../../../src/structural/bridge/implementation/Radio';
import { BasicRemote } from '../../../src/structural/bridge/abstraction/BasicRemote';
import { AdvancedRemote } from '../../../src/structural/bridge/abstraction/AdvancedRemote';

describe('Bridge Pattern', () => {
    describe('BasicRemote', () => {
        it('デバイスの電源を制御できること', () => {
            const device = new Television();
            const remote = new BasicRemote(device);

            expect(remote.isEnabled()).toBe(false);
            remote.turnOn();
            expect(remote.isEnabled()).toBe(true);
            remote.turnOff();
            expect(remote.isEnabled()).toBe(false);
        });

        it('音量を制御できること', () => {
            const device = new Television();
            const remote = new BasicRemote(device);

            remote.turnOn();
            const initialVolume = remote.getVolume();
            remote.volumeUp();
            expect(remote.getVolume()).toBe(initialVolume + 10);
            remote.volumeDown();
            expect(remote.getVolume()).toBe(initialVolume);
        });

        it('チャンネルを制御できること', () => {
            const device = new Television();
            const remote = new BasicRemote(device);

            remote.turnOn();
            const initialChannel = remote.getChannel();
            remote.channelUp();
            expect(remote.getChannel()).toBe(initialChannel + 1);
            remote.channelDown();
            expect(remote.getChannel()).toBe(initialChannel);
        });
    });

    describe('AdvancedRemote', () => {
        it('ミュートを切り替えられること', () => {
            const device = new Television();
            const remote = new AdvancedRemote(device);

            remote.turnOn();
            const initialVolume = remote.getVolume();
            remote.toggleMute();
            expect(remote.getVolume()).toBe(0);
            remote.toggleMute();
            expect(remote.getVolume()).toBe(initialVolume);
        });

        it('前のチャンネルに戻れること', () => {
            const device = new Television();
            const remote = new AdvancedRemote(device);

            remote.turnOn();
            remote.setChannel(10);
            remote.setChannel(5);
            remote.returnToPreviousChannel();
            expect(remote.getChannel()).toBe(10);
            remote.returnToPreviousChannel();
            expect(remote.getChannel()).toBe(5);
        });

        it('指定したチャンネルに直接ジャンプできること', () => {
            const device = new Television();
            const remote = new AdvancedRemote(device);

            remote.turnOn();
            remote.jumpToChannel(15);
            expect(remote.getChannel()).toBe(15);
            remote.jumpToChannel(0); // should not change channel
            expect(remote.getChannel()).toBe(15);
        });

        it('音量の範囲が制限されること', () => {
            const device = new Television();
            const remote = new AdvancedRemote(device);

            remote.turnOn();
            remote.setVolume(-10);
            expect(remote.getVolume()).toBe(0);
            remote.setVolume(150);
            expect(remote.getVolume()).toBe(100);
        });

        test('お気に入りチャンネル機能が動作すること', () => {
            const tv = new Television();
            const remote = new AdvancedRemote(tv);

            // お気に入りチャンネルの追加はデバイスの電源状態に依存しない
            remote.addToFavorites(5);
            remote.addToFavorites(10);
            remote.addToFavorites(15);

            expect(remote.getFavoriteChannels()).toEqual([5, 10, 15]);

            // cycleFavoritesを使用する前にデバイスの電源をONにする
            remote.turnOn();

            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5);
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(10);
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(15);

            remote.removeFromFavorites(10);
            expect(remote.getFavoriteChannels()).toEqual([5, 15]);

            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(5); // 最初のお気に入りチャンネルから始まる
            remote.cycleFavorites();
            expect(tv.getChannel()).toBe(15); // 次のお気に入りチャンネルに移動
        });
    });

    describe('Device Implementation', () => {
        it('異なるデバイスで同じリモコンが動作すること', () => {
            const tv = new Television();
            const radio = new Radio();
            const basicRemote = new BasicRemote(tv);
            const advancedRemote = new AdvancedRemote(radio);

            basicRemote.turnOn();
            expect(basicRemote.isEnabled()).toBe(true);
            advancedRemote.turnOn();
            expect(advancedRemote.isEnabled()).toBe(true);

            // 音量制御
            basicRemote.setVolume(50);
            advancedRemote.setVolume(50);
            expect(basicRemote.getVolume()).toBe(50);
            expect(advancedRemote.getVolume()).toBe(50);
        });
    });

    describe('Radio Implementation', () => {
        let radio: Radio;
        let remote: AdvancedRemote;

        beforeEach(() => {
            radio = new Radio();
            remote = new AdvancedRemote(radio);
        });

        it('ラジオの電源操作が適切に動作すること', () => {
            expect(radio.isEnabled()).toBe(false);
            radio.enable();
            expect(radio.isEnabled()).toBe(true);
            radio.disable();
            expect(radio.isEnabled()).toBe(false);
        });

        it('ラジオの基本機能が動作すること', () => {
            expect(radio.isEnabled()).toBe(false);
            radio.enable();
            expect(radio.isEnabled()).toBe(true);
            expect(radio.getVolume()).toBe(20); // デフォルト音量
            expect(radio.getChannel()).toBe(1); // デフォルトチャンネル
        });

        it('ラジオの音量制御が適切に動作すること', () => {
            radio.enable();
            radio.setVolume(50);
            expect(radio.getVolume()).toBe(50);

            // 音量の上限と下限のテスト
            radio.setVolume(150);
            expect(radio.getVolume()).toBe(100);
            radio.setVolume(-10);
            expect(radio.getVolume()).toBe(0);
        });

        it('ラジオのチャンネル制御が適切に動作すること', () => {
            radio.enable();
            radio.setChannel(15);
            expect(radio.getChannel()).toBe(15);

            // 無効なチャンネルの設定を試みる
            expect(() => radio.setChannel(0)).toThrow('チャンネル0は範囲外です（有効範囲: 1-64）');
            expect(radio.getChannel()).toBe(15); // 変更されないこと
        });

        it('前のチャンネルに戻る機能が動作すること', () => {
            radio.enable();
            radio.setChannel(10);
            radio.setChannel(20);
            radio.returnToPreviousChannel();
            expect(radio.getChannel()).toBe(10);
            radio.returnToPreviousChannel();
            expect(radio.getChannel()).toBe(20);
        });

        it('お気に入りチャンネル機能が適切に動作すること', () => {
            radio.enable();

            // お気に入りの追加
            radio.addToFavorites(5);
            radio.addToFavorites(10);
            radio.addToFavorites(15);

            // 無効なチャンネルの追加を試みる
            expect(() => radio.addToFavorites(0)).toThrow('チャンネル0は範囲外です（有効範囲: 1-64）');
            expect(() => radio.addToFavorites(65)).toThrow('チャンネル65は範囲外です（有効範囲: 1-64）');

            // お気に入りのサイクル
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(5);
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(10);
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(15);
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(5);
        });

        it('お気に入りが空の場合のcycleFavoritesの動作', () => {
            radio.enable();
            const initialChannel = radio.getChannel();
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(initialChannel); // チャンネルが変更されないこと
        });

        it('同じチャンネルを重複してお気に入りに追加できないこと', () => {
            radio.enable();
            radio.addToFavorites(5);
            radio.addToFavorites(5);
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(5);
            radio.cycleFavorites();
            expect(radio.getChannel()).toBe(5); // 重複して追加されていないこと
        });
    });
}); 
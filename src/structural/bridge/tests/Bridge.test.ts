/**
 * ブリッジパターンのテスト
 * 
 * デバイスの実装とリモコンの抽象化の組み合わせをテストします。
 */
import { Television } from '../implementation/Television';
import { Radio } from '../implementation/Radio';
import { BasicRemote } from '../abstraction/BasicRemote';
import { AdvancedRemote } from '../abstraction/AdvancedRemote';

describe('Bridge Pattern', () => {
    describe('Basic Remote with Television', () => {
        let tv: Television;
        let remote: BasicRemote;

        beforeEach(() => {
            tv = new Television();
            remote = new BasicRemote(tv);
        });

        test('should turn TV on and off', () => {
            expect(remote.isEnabled()).toBe(false);
            remote.executeDeviceFunction();
            expect(remote.isEnabled()).toBe(true);
            remote.executeDeviceFunction();
            expect(remote.isEnabled()).toBe(false);
        });

        test('should control volume', () => {
            remote.turnOn();
            const initialVolume = remote.getVolume();
            remote.volumeUp();
            expect(remote.getVolume()).toBe(initialVolume + 10);
            remote.volumeDown();
            expect(remote.getVolume()).toBe(initialVolume);
        });

        test('should control channels', () => {
            remote.turnOn();
            const initialChannel = remote.getChannel();
            remote.channelUp();
            expect(remote.getChannel()).toBe(initialChannel + 1);
            remote.channelDown();
            expect(remote.getChannel()).toBe(initialChannel);
        });
    });

    describe('Advanced Remote with Radio', () => {
        let radio: Radio;
        let remote: AdvancedRemote;

        beforeEach(() => {
            radio = new Radio();
            remote = new AdvancedRemote(radio);
        });

        test('should toggle mute', () => {
            remote.turnOn();
            const initialVolume = remote.getVolume();
            remote.executeDeviceFunction(); // toggleMute
            expect(remote.getVolume()).toBe(0);
            remote.executeDeviceFunction(); // toggleMute again
            expect(remote.getVolume()).toBe(initialVolume);
        });

        test('should remember previous channel', () => {
            remote.turnOn();
            remote.setChannel(5);
            remote.setChannel(10);
            remote.previousChannel();
            expect(remote.getChannel()).toBe(5);
            remote.previousChannel();
            expect(remote.getChannel()).toBe(10);
        });

        test('should jump to specific channel', () => {
            remote.turnOn();
            remote.jumpToChannel(15);
            expect(remote.getChannel()).toBe(15);
            remote.jumpToChannel(0); // should not change channel
            expect(remote.getChannel()).toBe(15);
        });

        test('should handle volume limits', () => {
            remote.turnOn();
            remote.setVolume(-10);
            expect(remote.getVolume()).toBe(0);
            remote.setVolume(150);
            expect(remote.getVolume()).toBe(100);
        });
    });

    describe('Cross-device compatibility', () => {
        test('should work with different device implementations', () => {
            const tv = new Television();
            const radio = new Radio();
            const basicRemote = new BasicRemote(tv);
            const advancedRemote = new AdvancedRemote(radio);

            // Both remotes should work with their respective devices
            basicRemote.turnOn();
            expect(basicRemote.isEnabled()).toBe(true);
            advancedRemote.turnOn();
            expect(advancedRemote.isEnabled()).toBe(true);

            // Volume and channel controls should work on both
            basicRemote.setVolume(50);
            advancedRemote.setVolume(50);
            expect(basicRemote.getVolume()).toBe(50);
            expect(advancedRemote.getVolume()).toBe(50);
        });
    });
}); 
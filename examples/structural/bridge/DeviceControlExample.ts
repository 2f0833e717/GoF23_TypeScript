/**
 * Bridgeパターンの使用例
 * 
 * デバイスとリモコンの組み合わせを示します。
 */
import { Television } from '../../../src/structural/bridge/implementation/Television';
import { Radio } from '../../../src/structural/bridge/implementation/Radio';
import { BasicRemote } from '../../../src/structural/bridge/abstraction/BasicRemote';
import { AdvancedRemote } from '../../../src/structural/bridge/abstraction/AdvancedRemote';

/**
 * Bridgeパターンを使用したデバイス制御の例
 */
export class DeviceControlExample {
  /**
   * サンプルの実行
   */
  public static run(): void {
    // テレビの操作
    const tv = new Television();
    const basicRemote = new BasicRemote(tv);

    console.log('基本的なリモコンでテレビを操作:');
    basicRemote.turnOn();
    basicRemote.setVolume(50);
    basicRemote.channelUp();
    basicRemote.channelDown();
    basicRemote.turnOff();

    // ラジオの操作
    const radio = new Radio();
    const advancedRemote = new AdvancedRemote(radio);

    console.log('\n高度なリモコンでラジオを操作:');
    advancedRemote.turnOn();
    advancedRemote.setVolume(70);
    advancedRemote.setChannel(10);
    advancedRemote.setChannel(5);
    advancedRemote.returnToPreviousChannel(); // チャンネル10に戻る
    advancedRemote.toggleMute(); // ミュート
    advancedRemote.toggleMute(); // ミュート解除
    advancedRemote.turnOff();

    // デバイスの切り替え例
    console.log('\nデバイスの切り替え:');
    const tvAdvanced = new AdvancedRemote(tv);
    tvAdvanced.turnOn();
    tvAdvanced.setVolume(40);
    tvAdvanced.jumpToChannel(7);
    tvAdvanced.toggleMute();
    tvAdvanced.toggleMute();
    tvAdvanced.turnOff();
  }
}

// サンプル実行用のスクリプト
if (require.main === module) {
  DeviceControlExample.run();
} 
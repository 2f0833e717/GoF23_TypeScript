/**
 * ブリッジパターンの使用例
 * 
 * 異なるデバイス（テレビとラジオ）に対して、
 * 異なる種類のリモコン（基本的なリモコンと高度なリモコン）を
 * 使用する例を示します。
 */
import { Television } from '../implementation/Television';
import { Radio } from '../implementation/Radio';
import { BasicRemote } from '../abstraction/BasicRemote';
import { AdvancedRemote } from '../abstraction/AdvancedRemote';

// テレビの基本的なリモコン操作の例
console.log('テレビの基本的なリモコン操作:');
const tv = new Television();
const basicRemote = new BasicRemote(tv);

basicRemote.turnOn();
basicRemote.setVolume(50);
basicRemote.channelUp();
basicRemote.channelUp();
basicRemote.volumeDown();
basicRemote.turnOff();

console.log('\nラジオの高度なリモコン操作:');
const radio = new Radio();
const advancedRemote = new AdvancedRemote(radio);

advancedRemote.turnOn();
advancedRemote.setVolume(30);
advancedRemote.jumpToChannel(5);
advancedRemote.jumpToChannel(10);
advancedRemote.previousChannel(); // チャンネル5に戻る
advancedRemote.executeDeviceFunction(); // ミュート
advancedRemote.executeDeviceFunction(); // ミュート解除
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
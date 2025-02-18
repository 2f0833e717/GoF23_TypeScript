import { Creator } from '../../../src/creational/factory-method/Creator';
import { ConcreteCreatorA, ConcreteCreatorB } from '../../../src/creational/factory-method/ConcreteCreator';

/**
 * クライアントコード
 * 
 * クリエイターのタイプに応じて異なる製品を生成し、それらを使用する方法を示します。
 * @param creator 使用するクリエイター
 */
function clientCode(creator: Creator) {
    console.log('Client: 私はクリエイターのクラスを知りませんが、それでも動作します...');
    console.log(creator.someOperation());
}

console.log('アプリケーション: ConcreteCreatorA で起動');
clientCode(new ConcreteCreatorA());
console.log('');

console.log('アプリケーション: ConcreteCreatorB で起動');
clientCode(new ConcreteCreatorB()); 
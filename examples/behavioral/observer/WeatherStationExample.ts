/**
 * Observerパターンの使用例
 * 
 * 天気観測システムを使用して、気象データの変更を監視し、
 * 異なる形式でデータを表示する例を示します。
 */

import { WeatherStation } from '../../../src/behavioral/observer/WeatherStation';
import { CurrentConditionsDisplay, StatisticsDisplay, ForecastDisplay } from '../../../src/behavioral/observer/WeatherDisplays';

export function runObserverExample(): void {
    console.log('Observerパターンの実行例:');
    console.log('--------------------------------');

    // 天気観測所とディスプレイの作成
    const weatherStation = new WeatherStation();
    const currentDisplay = new CurrentConditionsDisplay();
    const statisticsDisplay = new StatisticsDisplay();
    const forecastDisplay = new ForecastDisplay();

    // オブザーバーの登録
    console.log('1. オブザーバーの登録:');
    weatherStation.registerObserver(currentDisplay);
    weatherStation.registerObserver(statisticsDisplay);
    weatherStation.registerObserver(forecastDisplay);
    console.log(`登録済みオブザーバー数: ${weatherStation.getObserverCount()}`);
    console.log();

    // 最初の気象データ
    console.log('2. 最初の気象データ:');
    weatherStation.setMeasurements(25.5, 65.0, 1013.2);
    console.log(currentDisplay.display());
    console.log();
    console.log(statisticsDisplay.display());
    console.log();
    console.log(forecastDisplay.display());
    console.log();

    // 気象データの変化（気圧上昇）
    console.log('3. 気象データの変化（気圧上昇）:');
    weatherStation.setMeasurements(26.8, 62.5, 1015.5);
    console.log(currentDisplay.display());
    console.log();
    console.log(statisticsDisplay.display());
    console.log();
    console.log(forecastDisplay.display());
    console.log();

    // 気象データの変化（気圧下降）
    console.log('4. 気象データの変化（気圧下降）:');
    weatherStation.setMeasurements(24.2, 70.0, 1011.8);
    console.log(currentDisplay.display());
    console.log();
    console.log(statisticsDisplay.display());
    console.log();
    console.log(forecastDisplay.display());
    console.log();

    // オブザーバーの削除
    console.log('5. オブザーバーの削除:');
    weatherStation.removeObserver(forecastDisplay);
    console.log(`残りのオブザーバー数: ${weatherStation.getObserverCount()}`);

    // 新しいデータ（削除したオブザーバーには通知されない）
    weatherStation.setMeasurements(23.5, 68.5, 1012.0);
    console.log('\n現在のディスプレイの状態:');
    console.log(currentDisplay.display());
    console.log();
    console.log(statisticsDisplay.display());
    console.log();
    console.log('天気予報ディスプレイ（更新されていない）:');
    console.log(forecastDisplay.display());
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runObserverExample();
} 
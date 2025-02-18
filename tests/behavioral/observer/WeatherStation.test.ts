import { WeatherStation } from '../../../src/behavioral/observer/WeatherStation';
import { CurrentConditionsDisplay, StatisticsDisplay, ForecastDisplay } from '../../../src/behavioral/observer/WeatherDisplays';

describe('Observer Pattern - Weather Station Tests', () => {
    let weatherStation: WeatherStation;
    let currentDisplay: CurrentConditionsDisplay;
    let statisticsDisplay: StatisticsDisplay;
    let forecastDisplay: ForecastDisplay;

    beforeEach(() => {
        weatherStation = new WeatherStation();
        currentDisplay = new CurrentConditionsDisplay();
        statisticsDisplay = new StatisticsDisplay();
        forecastDisplay = new ForecastDisplay();
    });

    describe('WeatherStation', () => {
        test('オブザーバーの登録と削除', () => {
            expect(weatherStation.getObserverCount()).toBe(0);

            weatherStation.registerObserver(currentDisplay);
            expect(weatherStation.getObserverCount()).toBe(1);

            weatherStation.registerObserver(statisticsDisplay);
            expect(weatherStation.getObserverCount()).toBe(2);

            weatherStation.removeObserver(currentDisplay);
            expect(weatherStation.getObserverCount()).toBe(1);
        });

        test('重複するオブザーバーの登録を防止', () => {
            weatherStation.registerObserver(currentDisplay);
            weatherStation.registerObserver(currentDisplay);
            expect(weatherStation.getObserverCount()).toBe(1);
        });

        test('気象データの設定と取得', () => {
            weatherStation.setMeasurements(25.5, 65.0, 1012.5);
            const data = weatherStation.getMeasurements();

            expect(data.temperature).toBe(25.5);
            expect(data.humidity).toBe(65.0);
            expect(data.pressure).toBe(1012.5);
            expect(data.timestamp).toBeInstanceOf(Date);
        });
    });

    describe('CurrentConditionsDisplay', () => {
        test('現在の気象状況の表示', () => {
            expect(currentDisplay.display()).toBe('気象データがありません');

            weatherStation.registerObserver(currentDisplay);
            weatherStation.setMeasurements(25.5, 65.0, 1012.5);

            const display = currentDisplay.display();
            expect(display).toContain('25.5°C');
            expect(display).toContain('65.0%');
            expect(display).toContain('1012.5hPa');
        });
    });

    describe('StatisticsDisplay', () => {
        test('統計情報の表示', () => {
            expect(statisticsDisplay.display()).toBe('統計データがありません');

            weatherStation.registerObserver(statisticsDisplay);
            weatherStation.setMeasurements(25.5, 65.0, 1012.5);
            weatherStation.setMeasurements(26.5, 70.0, 1011.5);
            weatherStation.setMeasurements(24.5, 60.0, 1013.5);

            const display = statisticsDisplay.display();
            expect(display).toContain('平均25.5°C');
            expect(display).toContain('最高26.5°C');
            expect(display).toContain('最低24.5°C');
            expect(display).toContain('データ数: 3件');
        });

        test('データ制限の確認', () => {
            weatherStation.registerObserver(statisticsDisplay);

            // 101個のデータを追加
            for (let i = 0; i < 101; i++) {
                weatherStation.setMeasurements(20 + i, 60 + i, 1010 + i);
            }

            const display = statisticsDisplay.display();
            expect(display).toContain('データ数: 100件');
        });

        test('統計データのクリア', () => {
            weatherStation.registerObserver(statisticsDisplay);
            weatherStation.setMeasurements(25.5, 65.0, 1012.5);

            statisticsDisplay.clear();
            expect(statisticsDisplay.display()).toBe('統計データがありません');
        });
    });

    describe('ForecastDisplay', () => {
        test('天気予報の表示', () => {
            weatherStation.registerObserver(forecastDisplay);

            // 気圧上昇
            weatherStation.setMeasurements(25.5, 65.0, 1012.5);
            weatherStation.setMeasurements(25.5, 65.0, 1014.5);
            let display = forecastDisplay.display();
            expect(display).toContain('上昇中');
            expect(display).toContain('天気は回復傾向です');

            // 気圧下降
            weatherStation.setMeasurements(25.5, 65.0, 1010.5);
            display = forecastDisplay.display();
            expect(display).toContain('下降中');
            expect(display).toContain('天気は下り坂です');

            // 気圧安定
            weatherStation.setMeasurements(25.5, 65.0, 1010.5);
            display = forecastDisplay.display();
            expect(display).toContain('安定');
            expect(display).toContain('天気は安定しています');
        });
    });
}); 
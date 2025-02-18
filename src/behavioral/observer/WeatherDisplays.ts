/**
 * 気象データディスプレイ
 * 
 * 異なる形式で気象データを表示する各種ディスプレイを実装します。
 */

import { Observer, WeatherData } from './WeatherStation';

/**
 * 現在の気象状況ディスプレイ
 */
export class CurrentConditionsDisplay implements Observer {
    private currentData: WeatherData | null = null;

    update(data: WeatherData): void {
        this.currentData = { ...data };
    }

    /**
     * 現在の気象状況を表示します
     */
    display(): string {
        if (!this.currentData) {
            return '気象データがありません';
        }

        return `現在の気象状況:
温度: ${this.currentData.temperature.toFixed(1)}°C
湿度: ${this.currentData.humidity.toFixed(1)}%
気圧: ${this.currentData.pressure.toFixed(1)}hPa
観測時刻: ${this.currentData.timestamp.toLocaleString()}`;
    }
}

/**
 * 統計情報ディスプレイ
 */
export class StatisticsDisplay implements Observer {
    private temperatureData: number[] = [];
    private humidityData: number[] = [];
    private pressureData: number[] = [];

    update(data: WeatherData): void {
        this.temperatureData.push(data.temperature);
        this.humidityData.push(data.humidity);
        this.pressureData.push(data.pressure);

        // データ数を制限（直近100件のみ保持）
        if (this.temperatureData.length > 100) {
            this.temperatureData.shift();
            this.humidityData.shift();
            this.pressureData.shift();
        }
    }

    /**
     * 統計情報を表示します
     */
    display(): string {
        if (this.temperatureData.length === 0) {
            return '統計データがありません';
        }

        return `気象統計情報:
温度: 平均${this.average(this.temperatureData).toFixed(1)}°C (最高${Math.max(...this.temperatureData).toFixed(1)}°C, 最低${Math.min(...this.temperatureData).toFixed(1)}°C)
湿度: 平均${this.average(this.humidityData).toFixed(1)}% (最高${Math.max(...this.humidityData).toFixed(1)}%, 最低${Math.min(...this.humidityData).toFixed(1)}%)
気圧: 平均${this.average(this.pressureData).toFixed(1)}hPa (最高${Math.max(...this.pressureData).toFixed(1)}hPa, 最低${Math.min(...this.pressureData).toFixed(1)}hPa)
データ数: ${this.temperatureData.length}件`;
    }

    /**
     * 平均値を計算します
     */
    private average(data: number[]): number {
        return data.reduce((sum, value) => sum + value, 0) / data.length;
    }

    /**
     * 統計データをクリアします
     */
    clear(): void {
        this.temperatureData = [];
        this.humidityData = [];
        this.pressureData = [];
    }
}

/**
 * 天気予報ディスプレイ
 */
export class ForecastDisplay implements Observer {
    private lastPressure: number = 1013.25;
    private currentPressure: number = 1013.25;

    update(data: WeatherData): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = data.pressure;
    }

    /**
     * 天気予報を表示します
     */
    display(): string {
        const forecast = this.predictWeather();
        const trend = this.currentPressure > this.lastPressure ? '上昇中' :
            this.currentPressure < this.lastPressure ? '下降中' : '安定';

        return `天気予報:
気圧: ${this.currentPressure.toFixed(1)}hPa (${trend})
予想: ${forecast}`;
    }

    /**
     * 気圧の変化から天気を予測します
     */
    private predictWeather(): string {
        const pressureDiff = this.currentPressure - this.lastPressure;

        if (pressureDiff > 1) {
            return '天気は回復傾向です';
        } else if (pressureDiff < -1) {
            return '天気は下り坂です';
        } else {
            return '天気は安定しています';
        }
    }
} 
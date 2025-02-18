/**
 * 天気観測システム
 * 
 * Observerパターンを使用して、天気データの変更を監視し、
 * 複数のディスプレイに自動的に通知する機能を提供します。
 */

/**
 * 気象データを表すインターフェース
 */
export interface WeatherData {
    temperature: number;    // 温度（摂氏）
    humidity: number;       // 湿度（%）
    pressure: number;       // 気圧（hPa）
    timestamp: Date;        // 観測時刻
}

/**
 * オブザーバーインターフェース
 */
export interface Observer {
    /**
     * 更新通知を受け取ります
     * @param data 気象データ
     */
    update(data: WeatherData): void;
}

/**
 * サブジェクトインターフェース
 */
export interface Subject {
    /**
     * オブザーバーを登録します
     * @param observer 登録するオブザーバー
     */
    registerObserver(observer: Observer): void;

    /**
     * オブザーバーを削除します
     * @param observer 削除するオブザーバー
     */
    removeObserver(observer: Observer): void;

    /**
     * すべてのオブザーバーに通知します
     */
    notifyObservers(): void;
}

/**
 * 天気観測所クラス
 */
export class WeatherStation implements Subject {
    private observers: Set<Observer> = new Set();
    private currentData: WeatherData;

    constructor() {
        this.currentData = {
            temperature: 0,
            humidity: 0,
            pressure: 1013.25,
            timestamp: new Date()
        };
    }

    /**
     * 気象データを設定します
     * @param temperature 温度
     * @param humidity 湿度
     * @param pressure 気圧
     */
    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.currentData = {
            temperature,
            humidity,
            pressure,
            timestamp: new Date()
        };
        this.notifyObservers();
    }

    /**
     * 現在の気象データを取得します
     */
    getMeasurements(): WeatherData {
        return { ...this.currentData };
    }

    registerObserver(observer: Observer): void {
        this.observers.add(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers.delete(observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            observer.update(this.currentData);
        });
    }

    /**
     * 登録されているオブザーバーの数を取得します
     */
    getObserverCount(): number {
        return this.observers.size;
    }
} 
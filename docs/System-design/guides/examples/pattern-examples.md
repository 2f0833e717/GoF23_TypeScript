# パターン実装例

このドキュメントには、各デザインパターンのアーキテクチャ的な実装例と設計原則が含まれています。より詳細な実装は各パターンのドキュメントを参照してください。

## 1. 生成パターン

### 1.1 Singleton

#### 基本実装（設定管理システム）

```typescript
class ConfigManager {
  private static instance: ConfigManager | null = null;
  private config: Map<string, unknown> = new Map();

  private constructor() {
    if (new.target) {
      throw new Error('シングルトンインスタンスの直接生成は禁止されています');
    }
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public set<T>(key: string, value: T): void {
    this.config.set(key, value);
  }

  public get<T>(key: string): T | undefined {
    return this.config.get(key) as T;
  }

  public reset(): void {
    this.config.clear();
  }
}
```

#### スレッドセーフな実装

```typescript
class ThreadSafeConfigManager {
  private static instance: ThreadSafeConfigManager | null = null;
  private static readonly lock = new AsyncLock();
  private config: Map<string, unknown> = new Map();

  private constructor() {}

  public static async getInstance(): Promise<ThreadSafeConfigManager> {
    if (!ThreadSafeConfigManager.instance) {
      await ThreadSafeConfigManager.lock.acquire();
      try {
        if (!ThreadSafeConfigManager.instance) {
          ThreadSafeConfigManager.instance = new ThreadSafeConfigManager();
        }
      } finally {
        ThreadSafeConfigManager.lock.release();
      }
    }
    return ThreadSafeConfigManager.instance;
  }

  public async set<T>(key: string, value: T): Promise<void> {
    await ThreadSafeConfigManager.lock.acquire();
    try {
      this.config.set(key, value);
    } finally {
      ThreadSafeConfigManager.lock.release();
    }
  }

  public async get<T>(key: string): Promise<T | undefined> {
    await ThreadSafeConfigManager.lock.acquire();
    try {
      return this.config.get(key) as T;
    } finally {
      ThreadSafeConfigManager.lock.release();
    }
  }
}
```

#### テスト例

```typescript
describe('ConfigManager', () => {
  beforeEach(() => {
    ConfigManager.getInstance().reset();
  });

  it('シングルトンインスタンスを作成できる', () => {
    const instance1 = ConfigManager.getInstance();
    const instance2 = ConfigManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('直接インスタンス化するとエラーになる', () => {
    expect(() => new ConfigManager()).toThrow();
  });

  it('設定値を保存・取得できる', () => {
    const config = ConfigManager.getInstance();
    config.set('apiKey', 'test-key');
    expect(config.get('apiKey')).toBe('test-key');
  });
});
```

### 1.2 Factory Method

#### インターフェースとベースクラス（ドキュメント生成システム）

```typescript
interface IDocument {
  id: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
  render(): string;
  export(): Buffer;
}

abstract class DocumentCreator {
  abstract createDocument(type: string): IDocument;

  public generateDocument(type: string, title: string, content: string): IDocument {
    const document = this.createDocument(type);
    document.title = title;
    document.content = content;
    return document;
  }
}
```

#### 具象クラス

```typescript
class PDFDocument implements IDocument {
  public id: string;
  public title: string;
  public content: string;
  public metadata: Record<string, unknown>;

  constructor() {
    this.id = uuidv4();
    this.metadata = {};
  }

  public render(): string {
    return `PDF Document: ${this.title}\n${this.content}`;
  }

  public export(): Buffer {
    // PDFライブラリを使用して実際のPDFを生成
    return Buffer.from(this.render());
  }
}

class PDFDocumentCreator extends DocumentCreator {
  public createDocument(type: string): IDocument {
    switch (type) {
      case 'simple':
        return new SimplePDFDocument();
      case 'rich':
        return new RichPDFDocument();
      default:
        throw new Error(`未対応のドキュメントタイプ: ${type}`);
    }
  }
}
```

## 2. 構造パターン

### 2.1 Adapter

#### インターフェース定義（データ変換システム）

```typescript
interface ILegacyData {
  rawData: string;
  format: string;
  processData(): string;
}

interface IModernData {
  data: unknown;
  type: string;
  transform(): Promise<string>;
}
```

#### アダプターの実装

```typescript
class LegacyToModernAdapter implements IModernData {
  constructor(private legacyData: ILegacyData) {}

  public get data(): unknown {
    return JSON.parse(this.legacyData.rawData);
  }

  public get type(): string {
    return this.legacyData.format;
  }

  public async transform(): Promise<string> {
    const processed = this.legacyData.processData();
    return this.modernizeData(processed);
  }

  private async modernizeData(data: string): Promise<string> {
    // データ形式の変換処理
    const modernized = await someModernizationProcess(data);
    return modernized;
  }
}
```

## 3. 振る舞いパターン

### 3.1 Observer

#### インターフェース定義（天気観測システム）

```typescript
interface IWeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface IWeatherSubject {
  attach(observer: IWeatherObserver): void;
  detach(observer: IWeatherObserver): void;
  notify(): void;
}
```

#### 具象クラス

```typescript
class WeatherStation implements IWeatherSubject {
  private observers: Set<IWeatherObserver> = new Set();
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  public attach(observer: IWeatherObserver): void {
    this.observers.add(observer);
  }

  public detach(observer: IWeatherObserver): void {
    this.observers.delete(observer);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }
}

class TemperatureDisplay implements IWeatherObserver {
  private readonly displayId: string;

  constructor(displayId: string) {
    this.displayId = displayId;
  }

  public update(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    console.log(
      `Display ${this.displayId}: Temperature: ${temperature}°C, ` +
      `Humidity: ${humidity}%, Pressure: ${pressure}hPa`
    );
  }
}
```

より詳細なコード例や実装ガイダンスは、各パターンの個別ドキュメントを参照してください。 
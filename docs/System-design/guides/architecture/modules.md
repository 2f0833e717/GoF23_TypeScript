# モジュール構成

## 1. コアモジュール

### 1.1 共通インターフェース
```mermaid
classDiagram
    direction TB
    
    class IModule {
        +init()
        +dispose()
        +getState()
    }
    
    class IModuleRegistry {
        +register(module)
        +unregister(module)
        +getModule(moduleId)
        +getAllModules()
    }
    
    class IModuleConfig {
        +id
        +dependencies
        +options
        +getOption(key, defaultValue)
        +setOption(key, value)
    }
    
    IModule ..> IModuleConfig : uses
    IModuleRegistry "1" o-- "many" IModule : manages
    
    note for IModule "すべてのモジュールの基底インターフェース"
    note for IModuleRegistry "モジュールの登録と管理"
    note for IModuleConfig "モジュールの設定と依存関係定義"
```

### 1.2 ユーティリティ
共通ユーティリティモジュールは、プロジェクト全体で再利用可能な機能を提供します。

```typescript
// ファイル操作
export namespace FileUtils {
    export function readJsonFile<T>(path: string): Promise<T>;
    export function writeJsonFile<T>(path: string, data: T): Promise<void>;
    export function exists(path: string): Promise<boolean>;
}

// 文字列処理
export namespace StringUtils {
    export function toCamelCase(value: string): string;
    export function toSnakeCase(value: string): string;
    export function toKebabCase(value: string): string;
    export function formatTemplate(template: string, params: Record<string, string>): string;
}

// 日付処理
export namespace DateUtils {
    export function format(date: Date, format: string): string;
    export function parse(dateString: string, format: string): Date;
    export function addDays(date: Date, days: number): Date;
}

// 型変換
export namespace ConversionUtils {
    export function toNumber(value: unknown): number;
    export function toBoolean(value: unknown): boolean;
    export function toArray<T>(value: T | T[]): T[];
}

// バリデーション
export namespace ValidationUtils {
    export function isEmail(value: string): boolean;
    export function isNumeric(value: string): boolean;
    export function isAlphanumeric(value: string): boolean;
    export function hasMinLength(value: string, minLength: number): boolean;
}
```

### 1.3 型定義
```typescript
// 基本結果型
export type Result<T, E = Error> = {
    success: boolean;
    data?: T;
    error?: E;
};

// Optional型
export type Optional<T> = T | null | undefined;

// イベント型定義
export type EventType = 'create' | 'update' | 'delete' | 'load' | 'error';

// イベントリスナー
export interface EventListener<T = any> {
    (data: T): void | Promise<void>;
}

// イベントエミッタ
export interface EventEmitter {
    on<T>(event: EventType, listener: EventListener<T>): void;
    off<T>(event: EventType, listener: EventListener<T>): void;
    emit<T>(event: EventType, data: T): void;
}

// 設定型定義
export interface Config {
    debug: boolean;
    logLevel: 'info' | 'warn' | 'error' | 'debug';
    maxRetries: number;
    timeout: number;
}

// 識別子付きエンティティインターフェース
export interface Entity<T = string> {
    id: T;
}
```

## 2. パターンモジュール

### 2.1 生成パターン

#### Factory Method パターン
```mermaid
classDiagram
    class Creator
    class ConcreteCreator
```

#### Factory Method パターン
```mermaid
graph TD
    Creator["Creator"]
    ConcreteCreator["ConcreteCreator"]
    Product["Product"]
    ConcreteProduct["ConcreteProduct"]
    
    Creator-->|継承|ConcreteCreator
    Product-->|継承|ConcreteProduct
    ConcreteCreator-.->|生成|ConcreteProduct
```

#### Abstract Factory パターン
```mermaid
classDiagram
    class AbstractFactory
    class ConcreteFactory
```

#### Abstract Factory パターン
```mermaid
graph TD
    AbstractFactory["AbstractFactory"]
    ConcreteFactory["ConcreteFactory"]
    ProductA["ProductA"]
    ProductB["ProductB"]
    
    AbstractFactory-->|継承|ConcreteFactory
    ConcreteFactory-.->|生成|ProductA
    ConcreteFactory-.->|生成|ProductB
```

#### Builder パターン
```mermaid
classDiagram
    class Director
    class Builder
```

#### Builder パターン
```mermaid
graph TD
    Director["Director"]
    Builder["Builder"]
    ConcreteBuilder["ConcreteBuilder"]
    Product["Product"]
    
    Builder-->|継承|ConcreteBuilder
    Director-->|利用|Builder
    ConcreteBuilder-.->|構築|Product
```

#### Singleton パターン
```mermaid
classDiagram
    class Singleton {
        -instance: Singleton
        -constructor()
        +getInstance() Singleton
    }
    
    Singleton ..> Singleton : returns
```

#### Prototype パターン
```mermaid
classDiagram
    class Prototype {
        +clone()
    }
    class ConcretePrototype {
        +clone()
    }
    
    Prototype <|-- ConcretePrototype
    ConcretePrototype ..> ConcretePrototype : creates copy
```

### 2.2 構造パターン
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TD
    subgraph "Composite"
        A1[Component] -->|継承| B1[Composite]
        A1 -->|継承| C1[Leaf]
        B1 -->|contains| A1
    end
    
    subgraph "Decorator"
        A2[Component] -->|実装| B2[ConcreteComponent]
        A2 -->|継承| C2[Decorator]
        C2 -->|実装| D2[ConcreteDecorator]
        C2 -->|contains| A2
    end
    
    subgraph "Proxy"
        A3[Subject] -->|実装| B3[RealSubject]
        A3 -->|実装| C3[Proxy]
        C3 -.->|refers to| B3
    end
    
    subgraph "Adapter"
        A4[Target] -->|実装| B4[Adapter]
        B4 -.->|uses| C4[Adaptee]
    end
    
    subgraph "Bridge"
        A5[Abstraction] -->|継承| B5[RefinedAbstraction] 
        A5 -.->|uses| C5[Implementor]
        C5 -->|実装| D5[ConcreteImplementor]
    end
    
    subgraph "Flyweight"
        A6[Flyweight] -->|実装| B6[ConcreteFlyweight]
        C6[FlyweightFactory] -.->|creates| B6
        C6 -.->|manages| B6
    end
    
    subgraph "Facade"
        A7[Facade] -.->|uses| B7[SubsystemA]
        A7 -.->|uses| C7[SubsystemB]
        A7 -.->|uses| D7[SubsystemC]
    end
```

### 2.3 振る舞いパターン
```mermaid
classDiagram
    %% Observer
    class Subject {
        +attach(observer)
        +detach(observer)
        +notify()
    }
    class ConcreteSubject {
        -state
        +setState()
    }
    class Observer {
        +update()
    }
    class ConcreteObserver {
        +update()
    }
    Subject <|-- ConcreteSubject
    Observer <|-- ConcreteObserver
    Subject o-- Observer
    
    %% Strategy
    class Context {
        -strategy
        +setStrategy(strategy)
        +executeStrategy()
    }
    class Strategy {
        +execute()
    }
    class ConcreteStrategyA {
        +execute()
    }
    class ConcreteStrategyB {
        +execute()
    }
    Strategy <|-- ConcreteStrategyA
    Strategy <|-- ConcreteStrategyB
    Context o-- Strategy
    
    %% Visitor
    class Visitor {
        +visitElementA(elementA)
        +visitElementB(elementB)
    }
    class ConcreteVisitor {
        +visitElementA(elementA)
        +visitElementB(elementB)
    }
    class Element {
        +accept(visitor)
    }
    class ElementA {
        +accept(visitor)
        +operationA()
    }
    class ElementB {
        +accept(visitor)
        +operationB()
    }
    Visitor <|-- ConcreteVisitor
    Element <|-- ElementA
    Element <|-- ElementB
    ElementA ..> Visitor
    ElementB ..> Visitor
    
    %% Chain of Responsibility
    class Handler {
        -successor
        +setNext(handler)
        +handle(request)
    }
    class ConcreteHandlerA {
        +handle(request)
    }
    class ConcreteHandlerB {
        +handle(request)
    }
    Handler <|-- ConcreteHandlerA
    Handler <|-- ConcreteHandlerB
    Handler o-- Handler
    
    %% Command
    class Command {
        +execute()
    }
    class ConcreteCommand {
        -receiver
        +execute()
    }
    class Invoker {
        -command
        +setCommand(command)
        +executeCommand()
    }
    class Receiver {
        +action()
    }
    Command <|-- ConcreteCommand
    Invoker o-- Command
    ConcreteCommand o-- Receiver
    
    %% State
    class Context2 {
        -state
        +setState(state)
        +request()
    }
    class State {
        +handle(context)
    }
    class ConcreteStateA {
        +handle(context)
    }
    class ConcreteStateB {
        +handle(context)
    }
    State <|-- ConcreteStateA
    State <|-- ConcreteStateB
    Context2 o-- State
    
    %% Template Method
    class AbstractClass {
        +templateMethod()
        #primitiveOperation1()
        #primitiveOperation2()
    }
    class ConcreteClass {
        #primitiveOperation1()
        #primitiveOperation2()
    }
    AbstractClass <|-- ConcreteClass
```

## 3. テストモジュール

### 3.1 テスト構成
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TD
    A[テストスイート] --> B[単体テスト]
    A --> C[統合テスト]
    A --> D[E2Eテスト]
    
    B --> E[コンポーネントテスト]
    B --> F[機能テスト]
    B --> G[境界値テスト]
    
    E --> H[モック]
    E --> I[スタブ]
    E --> J[スパイ]
    
    C --> K[テストフィクスチャ]
    C --> L[テストヘルパー]
    C --> M[データプロバイダー]
    
    D --> N[テストシナリオ]
    D --> O[テストデータ]
    D --> P[性能テスト]
```

### 3.2 テストユーティリティ
```typescript
/**
 * テスト用ヘルパークラス
 * テスト実行に必要な各種ユーティリティを提供
 */
export class TestHelper {
    /**
     * モックオブジェクトの生成
     * @param baseObj ベースとなるオブジェクト
     * @param overrides 上書きするプロパティ
     * @returns モックオブジェクト
     */
    static createMock<T extends object>(baseObj: T, overrides: Partial<T> = {}): jest.Mocked<T> {
        return {
            ...baseObj,
            ...overrides
        } as jest.Mocked<T>;
    }
    
    /**
     * テスト環境のセットアップ
     * @param options セットアップオプション
     */
    static setupTestEnvironment(options: TestSetupOptions = {}): void {
        // データベース初期化
        if (options.resetDatabase) {
            // テスト用データベースの初期化処理
        }
        
        // キャッシュのクリア
        if (options.clearCache) {
            // キャッシュのクリア処理
        }
        
        // テスト用データの作成
        if (options.seedTestData) {
            // テストデータの投入
        }
    }
    
    /**
     * テスト後のクリーンアップ
     */
    static cleanupTestData(): void {
        // テストで使用したリソースの解放
        // 一時ファイルの削除
        // モックのリセット
    }
    
    /**
     * 非同期操作の待機
     * @param ms 待機時間（ミリ秒）
     */
    static async wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * 非同期エラーの検証
     * @param fn テスト対象の非同期関数
     * @param errorType 期待するエラーの型
     */
    static async expectAsyncError(fn: () => Promise<any>, errorType?: any): Promise<void> {
        try {
            await fn();
            throw new Error('エラーが発生しませんでした');
        } catch (error) {
            if (errorType) {
                expect(error).toBeInstanceOf(errorType);
            }
        }
    }
}

/**
 * テストセットアップのオプション
 */
interface TestSetupOptions {
    resetDatabase?: boolean;
    clearCache?: boolean;
    seedTestData?: boolean;
    mockExternalServices?: boolean;
    isolateTests?: boolean;
}
```

## 4. ドキュメントモジュール

### 4.1 API文書
TypeDocによって生成されるAPI文書は、以下の情報を含みます：

- 各クラス・インターフェースの説明
- メソッドとプロパティの一覧と詳細
- 型情報と継承関係
- 使用例とコードサンプル

```typescript
/**
 * 訪問者パターンを実装するためのインターフェース
 * ファイルシステム要素を操作するための各種訪問者を定義
 * 
 * @template T - 操作の結果の型
 * @example
 * ```typescript
 * class FileSearcher implements FileSystemVisitor<File[]> {
 *   private results: File[] = [];
 *   
 *   visitFile(file: File): void {
 *     if (this.matchesCriteria(file)) {
 *       this.results.push(file);
 *     }
 *   }
 *   
 *   getResults(): File[] {
 *     return this.results;
 *   }
 * }
 * ```
 */
export interface FileSystemVisitor<T = void> {
    /**
     * ファイルを訪問する
     * @param file 訪問するファイル
     */
    visitFile(file: File): void;
    
    /**
     * ディレクトリを訪問する
     * @param directory 訪問するディレクトリ
     */
    visitDirectory(directory: Directory): void;
    
    /**
     * 結果を取得する
     * @returns 操作の結果
     */
    getResults?(): T;
}
```

### 4.2 設計文書
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TD
    A[設計文書] --> B[アーキテクチャ設計]
    A --> C[詳細設計]
    A --> D[テスト設計]
    
    B --> E[システム構成]
    B --> F[モジュール構成]
    B --> G[依存関係管理]
    
    C --> H[クラス設計]
    C --> I[シーケンス図]
    C --> J[実装ガイドライン]
    
    D --> K[テスト計画]
    D --> L[テストケース]
    D --> M[カバレッジ目標]
```

## 5. 例示モジュール

### 5.1 サンプルコード
```typescript
/**
 * Visitor パターンの使用例 (振る舞いパターン)
 * ファイルシステム内のファイル検索を実装
 */

// ファイルシステムコンポーネント
class FileSystem {
    private root: Directory;
    
    constructor() {
        this.root = new Directory('root');
    }
    
    public getRoot(): Directory {
        return this.root;
    }
    
    public accept(visitor: FileSystemVisitor): void {
        this.root.accept(visitor);
    }
    
    // ファイルシステムの構築（サンプル用）
    public initialize(): void {
        const docs = new Directory('docs');
        const src = new Directory('src');
        
        const readme = new File('README.md', 2048);
        const config = new File('config.json', 1024);
        
        const mainTs = new File('main.ts', 4096);
        const appTs = new File('app.ts', 8192);
        
        this.root.addEntry(docs);
        this.root.addEntry(src);
        this.root.addEntry(readme);
        this.root.addEntry(config);
        
        src.addEntry(mainTs);
        src.addEntry(appTs);
    }
}

// 訪問者インターフェース
interface FileSystemVisitor {
    visitFile(file: File): void;
    visitDirectory(directory: Directory): void;
}

// ファイル検索の訪問者実装
class FileSearcher implements FileSystemVisitor {
    private pattern: RegExp;
    private results: File[] = [];
    
    constructor(searchPattern: string) {
        this.pattern = new RegExp(searchPattern);
    }
    
    public visitFile(file: File): void {
        if (this.pattern.test(file.getName())) {
            this.results.push(file);
        }
    }
    
    public visitDirectory(directory: Directory): void {
        // ディレクトリそのものには何もしない
        // 子要素の訪問は Directory.accept によって行われる
    }
    
    public getResults(): File[] {
        return this.results;
    }
}

// 使用例
function searchExample(): void {
    const fileSystem = new FileSystem();
    fileSystem.initialize();
    
    // .ts ファイルを検索
    const tsFileSearcher = new FileSearcher('\\.ts$');
    fileSystem.accept(tsFileSearcher);
    
    console.log('TypeScript ファイル検索結果:');
    tsFileSearcher.getResults().forEach(file => {
        console.log(`- ${file.getPath()}: ${file.getSize()} bytes`);
    });
}
```

### 5.2 デモアプリケーション
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TD
    A[デモアプリケーション] --> B[コマンドラインデモ]
    A --> C[Webデモ]
    A --> D[ドキュメントデモ]
    
    B --> E[ファイルシステムデモ]
    B --> F[スマートホームデモ]
    B --> G[データ処理デモ]
    
    C --> H[対話的デモ]
    C --> I[ビジュアルコンポーネント]
    C --> J[APIエンドポイント]
    
    D --> K[コード生成デモ]
    D --> L[アニメーションデモ]
    D --> M[インタラクティブガイド]
```

## 6. モジュール間の依存関係

### 6.1 依存グラフ
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TB
    A[コアモジュール] --> B[パターンモジュール]
    A --> C[テストモジュール]
    A --> D[ドキュメントモジュール]
    A --> E[例示モジュール]
    
    B --> C
    B --> D
    B --> E
    
    C --> D
    
    E --> D
    
    %% 詳細な依存関係
    subgraph "コアモジュール"
        A1[共通インターフェース]
        A2[ユーティリティ]
        A3[型定義]
    end
    
    subgraph "パターンモジュール"
        B1[生成パターン]
        B2[構造パターン]
        B3[振る舞いパターン]
    end
```

### 6.2 循環依存の防止
循環依存を防止するための主要な戦略：

1. **インターフェースを活用した依存方向の制御**
   ```typescript
   // 良い例：インターフェースを使用して依存方向を制御
   interface Logger {
       log(message: string): void;
   }
   
   class ConsoleLogger implements Logger {
       log(message: string): void {
           console.log(message);
       }
   }
   
   class UserService {
       constructor(private logger: Logger) {}
       
       createUser(userData: UserData): User {
           this.logger.log(`新しいユーザーを作成: ${userData.name}`);
           // ユーザー作成ロジック
           return new User(userData);
       }
   }
   ```

2. **依存性の注入**
   ```typescript
   // 良い例：依存性の注入
   class Application {
       constructor(
           private userService: UserService,
           private authService: AuthService,
           private configService: ConfigService
       ) {}
       
       initialize(): void {
           this.configService.load();
           this.authService.initialize();
           // アプリケーションの初期化
       }
   }
   
   // 依存関係の組み立て
   const logger = new ConsoleLogger();
   const configService = new ConfigService();
   const authService = new AuthService(logger, configService);
   const userService = new UserService(logger);
   const app = new Application(userService, authService, configService);
   ```

3. **イベントベースの通信**
   ```typescript
   // 良い例：イベントを使用した疎結合な通信
   class EventBus {
       private listeners: Map<string, Function[]> = new Map();
       
       subscribe(event: string, callback: Function): void {
           if (!this.listeners.has(event)) {
               this.listeners.set(event, []);
           }
           this.listeners.get(event)!.push(callback);
       }
       
       publish(event: string, data?: any): void {
           if (this.listeners.has(event)) {
               for (const callback of this.listeners.get(event)!) {
                   callback(data);
               }
           }
       }
   }
   
   // 使用例
   const eventBus = new EventBus();
   
   class UserManager {
       constructor(private eventBus: EventBus) {
           this.eventBus.subscribe('user:created', this.handleUserCreated.bind(this));
       }
       
       private handleUserCreated(user: User): void {
           console.log(`ユーザーが作成されました: ${user.name}`);
       }
   }
   
   class AuthService {
       constructor(private eventBus: EventBus) {}
       
       createUser(userData: UserData): User {
           const user = new User(userData);
           // ユーザー作成ロジック
           this.eventBus.publish('user:created', user);
           return user;
       }
   }
   ```

## 7. モジュールの品質管理

### 7.1 品質メトリクス
| メトリクス名 | 説明 | 目標値 | 測定ツール |
|------------|------|--------|----------|
| コード行数 | モジュールあたりの物理行数 | < 500行 | TSLint/ESLint |
| 循環的複雑度 | 関数内の分岐の複雑さ | < 10 | ESLint complexity |
| 依存関係の数 | モジュールの外部依存数 | < 10 | dependency-cruiser |
| テストカバレッジ | コードの実行カバレッジ | > 85% | Jest coverage |
| 重複コード率 | コードベース内の重複率 | < 3% | jscpd |
| 静的解析警告 | コード品質警告の数 | 0 | ESLint |
| ドキュメント率 | ドキュメント付き要素の割合 | > 80% | TypeDoc |

### 7.2 品質保証プロセス
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph LR
    A[コード作成] --> B[静的解析]
    B --> C[単体テスト]
    C --> D[コードレビュー]
    D --> E[統合テスト]
    E --> F[ドキュメント更新]
    F --> G[リリース準備]
    G --> H[パフォーマンステスト]
    H --> I[セキュリティスキャン]
    I --> J[リリース承認]
```

## 8. モジュールの拡張性

### 8.1 拡張ポイント
1. **プラグインシステム**
   - プラグインインターフェース
   - プラグイン読み込みメカニズム
   - プラグイン設定と初期化

2. **イベントハンドラ**
   - イベント発行/購読システム
   - フックポイント
   - 非同期イベント処理

3. **カスタムビジター**
   - 標準ビジターの拡張
   - 複合ビジターの構築
   - 結果集約メカニズム

4. **フィルターチェーン**
   - 前処理/後処理フィルター
   - 条件付きフィルター
   - 優先度ベースのフィルター

### 8.2 拡張手順
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph TB
    A[要件分析] --> B[拡張ポイント特定]
    B --> C[インターフェース実装]
    C --> D[依存関係解決]
    D --> E[単体テスト作成]
    E --> F[統合テスト]
    F --> G[ドキュメント更新]
```

## 9. モジュールのバージョン管理

### 9.1 バージョニング規則
セマンティックバージョニングに基づく：

- **メジャーバージョン**（x.0.0）： 互換性のない変更
- **マイナーバージョン**（0.x.0）： 後方互換性のある機能追加
- **パッチバージョン**（0.0.x）： バグ修正と軽微な変更

### 9.2 変更管理
```mermaid
%%{ init: { 'flowchart': { 'defaultRenderer': 'elk' } } }%%
graph LR
    A[変更提案] --> B[影響分析]
    B --> C[実装]
    C --> D[テスト]
    D --> E[ドキュメント更新]
    E --> F[リリース]
    F --> G[変更履歴更新]
```

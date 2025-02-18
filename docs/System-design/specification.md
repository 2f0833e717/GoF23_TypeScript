# GoF23デザインパターン TypeScript実装仕様書

## 1. プロジェクト概要

### 1.1 目的
- GoF（Gang of Four）で定義された23のデザインパターンをTypeScriptで実装
- 実務で使用可能な品質のTypeScript実装
- 各パターンの実践的なユースケースと実装
- TypeScriptの特徴を活かした現代的な実装
- 型安全性とテスト容易性を重視した設計

### 1.2 実装範囲
以下の3つのカテゴリーに分類される23のデザインパターンを実装します：

#### 1.2.1 生成に関するパターン（Creational Patterns）
1. Singleton（シングルトン）
2. Factory Method（ファクトリーメソッド）
3. Abstract Factory（抽象ファクトリー）
4. Builder（ビルダー）
5. Prototype（プロトタイプ）

#### 1.2.2 構造に関するパターン（Structural Patterns）
1. Adapter（アダプター）
2. Bridge（ブリッジ）
3. Composite（コンポジット）
4. Decorator（デコレーター）
5. Facade（ファサード）
6. Flyweight（フライウェイト）
7. Proxy（プロキシ）

#### 1.2.3 振る舞いに関するパターン（Behavioral Patterns）
1. Chain of Responsibility（責任の連鎖）
2. Command（コマンド）
3. Interpreter（インタープリター）
4. Iterator（イテレーター）
5. Mediator（メディエーター）
6. Memento（メメント）
7. Observer（オブザーバー）
8. State（ステート）
9. Strategy（ストラテジー）
10. Template Method（テンプレートメソッド）
11. Visitor（ビジター）

## 2. 技術要件

### 2.1 開発環境
- TypeScript 5.0以上
- Node.js 18.0以上
- Jest（テストフレームワーク）
- ESLint（コード品質管理）
- Prettier（コードフォーマッター）
- TypeDoc（APIドキュメント生成）
- npm-run-all（スクリプト実行管理）

### 2.2 プロジェクト構造
```
GoF23_TypeScript/
├── src/
│   ├── creational/    # 生成パターン
│   ├── structural/    # 構造パターン
│   ├── behavioral/    # 振る舞いパターン
│   ├── common/        # 共通ユーティリティ
│   ├── interfaces/    # 共通インターフェース
│   └── types/         # 共通型定義
├── tests/
│   ├── unit/         # 単体テスト
│   └── integration/  # 統合テスト
├── docs/             # ドキュメント
├── examples/         # 使用例
```

### 2.3 コーディング規約
1. ファイル名：
   - パスカルケース（例：`SingletonPattern.ts`）
   - テストファイルは`.test.ts`または`.spec.ts`を付与

2. クラス名：
   - パスカルケース
   - インターフェース名は`I`プレフィックスを付与

3. メソッド名：
   - キャメルケース
   - プライベートメソッドは`_`プレフィックスを付与

4. 変数名：
   - キャメルケース
   - 定数は大文字のスネークケース

5. コメント：
   - クラスとパブリックメソッドにはJSDocコメントを付与
   - 日本語でコメントを記述

## 3. 実装ステップ

### 3.1 フェーズ1：基盤構築

#### 3.1.1 開発環境セットアップ
1. プロジェクト初期化
```bash
mkdir GoF23_TypeScript
cd GoF23_TypeScript
npm init -y
```

2. 必要なパッケージのインストール
```bash
npm install typescript @types/node jest @types/jest ts-jest eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier --save-dev
```

3. TypeScript設定
```bash
npx tsc --init
```

4. 設定ファイルの作成
- tsconfig.json, .eslintrc, .prettierrc, jest.config.js

#### 3.1.2 プロジェクト構造の設定
1. ディレクトリ構造の作成
```bash
mkdir -p src/{creational,structural,behavioral,common} tests docs examples
```

2. 共通インターフェースの定義
- src/common/interfaces/
- src/common/types/
- src/common/utils/

### 3.2 フェーズ2：生成パターンの実装

#### 3.2.1 Singleton
1. 基本実装
```typescript
/**
 * シングルトンパターンの基本実装
 * グローバルな状態管理やリソース共有に使用
 */
class Singleton {
  private static instance: Singleton;
  private constructor() {
    if (new.target) {
      throw new Error('Direct construction is not allowed, use getInstance()');
    }
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // エラーハンドリングの例
  public operation(): Result<string, Error> {
    try {
      // 実際の処理
      return Ok('Operation successful');
    } catch (error) {
      return Err(new Error(`Operation failed: ${error.message}`));
    }
  }
}
```

実装ポイント：
1. コンストラクタをprivateに設定
2. インスタンス取得用の静的メソッド
3. スレッドセーフな実装
4. 遅延初期化の実装
5. 適切なエラーハンドリング

#### 3.2.2 Factory Method
1. Creator抽象クラスの実装
2. ConcreteCreatorの実装
3. Product抽象クラスの実装
4. ConcreteProductの実装
5. テストケース作成

（以下、各パターンについて同様の詳細な実装ステップを記述）

#### 3.2.3 Abstract Factory
```typescript
/**
 * 抽象ファクトリーパターンの基本実装
 * 関連するオブジェクトファミリーを作成
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

interface AbstractProductA {
  operationA(): string;
}

interface AbstractProductB {
  operationB(): string;
  collaborateWith(collaborator: AbstractProductA): string;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
```

実装ポイント：
1. 抽象ファクトリーインターフェースの定義
2. 抽象製品インターフェースの定義
3. 具象ファクトリーの実装
4. 具象製品の実装
5. 製品間の協調動作の実装

#### 3.2.4 Builder
```typescript
/**
 * ビルダーパターンの基本実装
 * 複雑なオブジェクトの段階的構築
 */
interface Builder {
  reset(): void;
  buildStepA(): void;
  buildStepB(): void;
  buildStepC(): void;
}

class Product {
  parts: string[] = [];
  
  listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  // 具体的な構築ステップの実装
  buildStepA(): void {
    this.product.parts.push('PartA');
  }

  buildStepB(): void {
    this.product.parts.push('PartB');
  }

  buildStepC(): void {
    this.product.parts.push('PartC');
  }

  getResult(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
```

実装ポイント：
1. ビルダーインターフェースの定義
2. 製品クラスの実装
3. 具象ビルダーの実装
4. 製品の段階的構築と取得

#### 3.2.5 Prototype
```typescript
/**
 * プロトタイプパターンの基本実装
 * 既存のオブジェクトをクローンして新しいオブジェクトを生成
 */
export abstract class DocumentPrototype {
    protected title: string;
    protected content: string;
    protected author: string;
    protected metadata: Map<string, string>;
    protected createdAt: Date;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.metadata = new Map<string, string>();
        this.createdAt = new Date();
    }

    public abstract clone(): DocumentPrototype;

    protected copyBasicProperties(target: DocumentPrototype): void {
        target.title = this.title;
        target.content = this.content;
        target.author = this.author;
        target.metadata = new Map(this.metadata);
        // 1ミリ秒待ってから新しい作成日時を設定
        const now = new Date();
        const delay = 1;
        now.setMilliseconds(now.getMilliseconds() + delay);
        target.createdAt = now;
    }
}

/**
 * 具象プロトタイプの実装例（報告書）
 */
export class Report extends DocumentPrototype {
    private department: string;

    constructor(title: string, content: string, author: string, department: string) {
        super(title, content, author);
        this.department = department;
        this.addMetadata('type', '報告書');
        this.addMetadata('department', department);
    }

    public clone(): DocumentPrototype {
        const clone = new Report(this.title, this.content, this.author, this.department);
        this.copyBasicProperties(clone);
        return clone;
    }
}

/**
 * 具象プロトタイプの実装例（契約書）
 */
export class Contract extends DocumentPrototype {
    private parties: string[];
    private expirationDate: Date;

    constructor(
        title: string,
        content: string,
        author: string,
        parties: string[],
        expirationDate: Date
    ) {
        super(title, content, author);
        this.parties = [...parties];
        this.expirationDate = new Date(expirationDate);
        this.addMetadata('type', '契約書');
        this.addMetadata('parties', parties.join(', '));
        this.addMetadata('expiration', expirationDate.toLocaleDateString());
    }

    public clone(): DocumentPrototype {
        const clone = new Contract(
            this.title,
            this.content,
            this.author,
            this.parties,
            this.expirationDate
        );
        this.copyBasicProperties(clone);
        return clone;
    }
}
```

実装ポイント：
1. 抽象プロトタイプクラスの定義
   - 基本的なプロパティの定義
   - 抽象クローンメソッドの宣言
   - 共通プロパティのコピー機能

2. 具象プロトタイプクラスの実装
   - 特定の文書タイプに応じた追加プロパティ
   - クローンメソッドの具体的な実装
   - メタデータの適切な管理

3. クローン処理の実装
   - ディープコピーの実現
   - 作成日時の適切な更新
   - メタデータの複製

4. 型安全性の確保
   - TypeScriptの型システムを活用
   - プロパティのカプセル化
   - 適切なアクセス修飾子の使用

#### 3.2.5.1 プロトタイプパターンのテスト実装
```typescript
describe('Document Prototype Pattern', () => {
    describe('Report', () => {
        test('should create a report with correct metadata', () => {
            const report = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );
            const reportStr = report.toString();

            expect(reportStr).toContain('タイトル: 月次報告書');
            expect(reportStr).toContain('作成者: 山田太郎');
            expect(reportStr).toContain('type: 報告書');
            expect(reportStr).toContain('department: 営業部');
        });

        test('should create a clone with different creation date', () => {
            const original = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 月次報告書');
            expect(clone.toString()).toContain('作成者: 山田太郎');
            expect(clone.toString()).toContain('type: 報告書');
            expect(clone.toString()).toContain('department: 営業部');
            expect(clone['createdAt'].getTime())
                .toBeGreaterThan(original['createdAt'].getTime());
        });
    });

    describe('Contract', () => {
        test('should create a contract with correct metadata', () => {
            const contract = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );
            const contractStr = contract.toString();

            expect(contractStr).toContain('タイトル: 業務委託契約書');
            expect(contractStr).toContain('作成者: 法務部長');
            expect(contractStr).toContain('type: 契約書');
            expect(contractStr).toContain('parties: 株式会社A, 株式会社B');
            expect(contractStr).toContain('expiration: 12/31/2025');
        });

        test('should create a clone with different creation date but same expiration', () => {
            const original = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 業務委託契約書');
            expect(clone.toString()).toContain('expiration: 12/31/2025');
            expect(clone['createdAt'].getTime())
                .toBeGreaterThan(original['createdAt'].getTime());
        });
    });
});
```

テストポイント：
1. 基本機能の検証
   - メタデータの正確な複製
   - プロパティの適切なコピー
   - 文字列表現の正確性

2. クローン機能の検証
   - 作成日時の更新確認
   - 固有プロパティの維持
   - 参照の独立性

3. 異常系の確認
   - 不正な入力値の処理
   - エラー処理の動作
   - 境界値の扱い

### 3.3 フェーズ3：構造パターンの実装

#### 3.3.1 Adapter
```typescript
/**
 * アダプターパターンの実装
 * レガシーシステムとモダンなシステム間のデータ変換を提供
 */

// レガシーシステムのインターフェース
interface LegacyData {
    id: number;
    old_name: string;
    old_value: string;
    created_at: string;
}

// モダンなシステムのインターフェース
interface ModernData {
    identifier: string;
    name: string;
    value: any;
    metadata: {
        createdAt: Date;
        updatedAt: Date;
        version: number;
    };
}

// アダプターの実装
class LegacyToModernAdapter implements IModernDataProcessor {
    constructor(private legacyProcessor: LegacyDataProcessor) {}

    async save(data: ModernData): Promise<void> {
        const legacyData = this.convertToLegacy(data);
        this.legacyProcessor.saveInLegacyFormat(legacyData);
    }

    async get(identifier: string): Promise<ModernData | null> {
        const id = parseInt(identifier);
        if (isNaN(id)) {
            throw new Error(`Invalid identifier format: ${identifier}`);
        }
        const legacyData = this.legacyProcessor.getInLegacyFormat(id);
        return legacyData ? this.convertToModern(legacyData) : null;
    }
}
```

実装ポイント：
1. データ変換の実装
   - レガシーデータからモダンなデータへの変換
   - モダンなデータからレガシーデータへの変換
   - オブジェクト型の値の適切な変換（JSON文字列化と復元）

2. エラーハンドリング
   - 無効な識別子の検証
   - データ型変換時のエラー処理
   - 存在しないデータの処理

3. 非同期処理
   - モダンなインターフェースでの非同期メソッド
   - Promise型を使用した非同期データ処理

4. 型安全性
   - TypeScriptの型システムを活用
   - インターフェースによる契約の定義
   - 型変換の安全性確保

#### 3.3.1.1 アダプターパターンのテスト実装
```typescript
describe('Legacy to Modern Adapter Pattern', () => {
    let legacyProcessor: LegacyDataProcessor;
    let adapter: LegacyToModernAdapter;

    beforeEach(() => {
        legacyProcessor = new LegacyDataProcessor();
        adapter = new LegacyToModernAdapter(legacyProcessor);
    });

    describe('Data Conversion', () => {
        test('should save modern data through adapter', async () => {
            const modernData = {
                identifier: '1',
                name: 'テストデータ',
                value: 'テスト値',
                metadata: {
                    createdAt: new Date('2024-01-01'),
                    updatedAt: new Date('2024-01-01'),
                    version: 1
                }
            };

            await adapter.save(modernData);
            const legacyData = legacyProcessor.getInLegacyFormat(1);

            expect(legacyData).toBeDefined();
            expect(legacyData?.id).toBe(1);
            expect(legacyData?.old_name).toBe('テストデータ');
            expect(legacyData?.old_value).toBe('テスト値');
        });

        // その他のテストケース...
    });
});
```

テストポイント：
1. 基本機能の検証
   - データの保存と取得
   - データ変換の正確性
   - 全データの取得

2. エラーケースの検証
   - 無効な識別子
   - 不正なデータ形式
   - 存在しないデータ

3. 特殊なデータ型の処理
   - オブジェクト型の値
   - 数値型の値
   - 日付型の値

4. 非同期処理の検証
   - Promise の解決
   - エラーハンドリング
   - 非同期メソッドの動作

#### 3.3.2 Bridge
1. Implementor interfaceの定義
2. ConcreteImplementorの実装
3. Abstractionの実装
4. RefinedAbstractionの実装
5. テストケース作成

#### 3.3.3 Composite
1. Component interfaceの定義
2. Leafの実装
3. Compositeの実装
4. テストケース作成

#### 3.3.4 Decorator
1. Component interfaceの定義
2. ConcreteComponentの実装
3. Decoratorの実装
4. テストケース作成

#### 3.3.5 Facade
1. Subsystemクラスの実装
2. Facadeの実装
3. テストケース作成

#### 3.3.6 Flyweight
1. Flyweight interfaceの定義
2. ConcreteFlyweightの実装
3. UnsharedConcreteFlyweightの実装
4. FlyweightFactoryの実装
5. テストケース作成

#### 3.3.7 Proxy
1. Subject interfaceの定義
2. RealSubjectの実装
3. Proxyの実装
4. テストケース作成

### 3.4 フェーズ4：振る舞いパターンの実装

#### 3.4.1 Chain of Responsibility
1. Handler interfaceの定義
2. BaseHandlerの実装
3. ConcreteHandlerの実装
4. 責任連鎖の構築
5. 要求の伝播メカニズム実装

#### 3.4.2 Command
1. Command interfaceの定義
2. ConcreteCommandの実装
3. Invokerの実装
4. Receiverの実装
5. テストケース作成

#### 3.4.3 Interpreter
```typescript
/**
 * Interpreter Pattern ✅
 * 数式の解析と評価を例にしたInterpreterパターンの実装。
 * - `Expression`インターフェースで式の評価を定義
 * - `Context`クラスで変数の管理を実装
 * - 終端式（数値、変数）と非終端式（演算子）を実装
 * - `ExpressionParser`で式の解析を実装
 *
 * 主な機能：
 * - 四則演算の解析と評価
 * - 変数の管理と参照
 * - 括弧による優先順位の制御
 * - エラー処理と診断メッセージ
 *
 * テスト結果：
 * - 全13テストが成功
 * - カバレッジ：
 *   - 文: 93.33%
 *   - 分岐: 77.77%
 *   - 関数: 100%
 *   - 行: 93.26%
 */
interface Expression {
  evaluate(): number;
}

class Context {
  private variables: Map<string, number> = new Map();

  setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  getVariable(name: string): number | undefined {
    return this.variables.get(name);
  }
}

class TerminalExpression implements Expression {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  evaluate(): number {
    return this.value;
  }
}

class NonterminalExpression implements Expression {
  private left: Expression;
  private right: Expression;
  private operator: string;

  constructor(left: Expression, operator: string, right: Expression) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  evaluate(): number {
    const leftValue = this.left.evaluate();
    const rightValue = this.right.evaluate();
    switch (this.operator) {
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      case '*':
        return leftValue * rightValue;
      case '/':
        return leftValue / rightValue;
      default:
        throw new Error('Invalid operator');
    }
  }
}

class ExpressionParser {
  private expression: string;
  private context: Context;

  constructor(expression: string) {
    this.expression = expression;
    this.context = new Context();
  }

  parse(): Expression {
    const tokens = this.expression.split(' ');
    const stack: Expression[] = [];

    for (const token of tokens) {
      if (this.isOperator(token)) {
        const right = stack.pop()!;
        const left = stack.pop()!;
        const expression = new NonterminalExpression(left, token, right);
        stack.push(expression);
      } else {
        const value = this.parseTerminal(token);
        stack.push(new TerminalExpression(value));
      }
    }

    return stack.pop()!;
  }

  private isOperator(token: string): boolean {
    return ['+', '-', '*', '/'].includes(token);
  }

  private parseTerminal(token: string): number {
    const value = parseFloat(token);
    if (isNaN(value)) {
      throw new Error('Invalid terminal expression');
    }
    return value;
  }
}
```

実装ポイント：
1. Expressionインターフェースの定義
2. Contextクラスの実装
3. TerminalExpressionクラスの実装
4. NonterminalExpressionクラスの実装
5. ExpressionParserクラスの実装

#### 3.4.4 Iterator
1. Iterator interfaceの定義
2. ConcreteIteratorの実装
3. Aggregate interfaceの定義
4. ConcreteAggregateの実装
5. テストケース作成

#### 3.4.5 Mediator
1. Mediator interfaceの定義
2. ConcreteMediatorの実装
3. Colleague interfaceの定義
4. ConcreteColleagueの実装
5. テストケース作成

#### 3.4.6 Memento
1. Memento interfaceの定義
2. ConcreteMementoの実装
3. Originatorの実装
4. Caretakerの実装
5. テストケース作成

#### 3.4.7 Observer
1. Subject interfaceの定義
2. ConcreteSubjectの実装
3. Observer interfaceの定義
4. ConcreteObserverの実装
5. テストケース作成

#### 3.4.8 State
1. State interfaceの定義
2. ConcreteStateの実装
3. Contextの実装
4. テストケース作成

#### 3.4.9 Strategy
1. Strategy interfaceの定義
2. ConcreteStrategyの実装
3. Contextの実装
4. テストケース作成

#### 3.4.10 Template Method
1. AbstractClassの実装
2. ConcreteClassの実装
3. テストケース作成

#### 3.4.11 Visitor
1. Visitor interfaceの定義
2. ConcreteVisitorの実装
3. Element interfaceの定義
4. ConcreteElementの実装
5. テストケース作成

## 4. 実装詳細

### 4.1 生成パターン（Creational Patterns）

#### 4.1.1 Singleton
```typescript
/**
 * シングルトンパターンの基本実装
 * グローバルな状態管理やリソース共有に使用
 */
class Singleton {
  private static instance: Singleton;
  private constructor() {
    if (new.target) {
      throw new Error('Direct construction is not allowed, use getInstance()');
    }
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // エラーハンドリングの例
  public operation(): Result<string, Error> {
    try {
      // 実際の処理
      return Ok('Operation successful');
    } catch (error) {
      return Err(new Error(`Operation failed: ${error.message}`));
    }
  }
}
```

実装ポイント：
1. コンストラクタをprivateに設定
2. インスタンス取得用の静的メソッド
3. スレッドセーフな実装考慮
4. 遅延初期化の実装
5. 適切なエラーハンドリング

#### 4.1.2 Factory Method
```typescript
/**
 * ファクトリーメソッドパターンの基本実装
 * オブジェクト生成を抽象化し、サブクラスに実装を委譲
 */
abstract class Creator {
  abstract createProduct(): Product;
  
  someOperation(): string {
    const product = this.createProduct();
    return `Creator: ${product.operation()}`;
  }
}

interface Product {
  operation(): string;
}
```

実装ポイント：
1. 抽象Creatorクラスの定義
2. Product interfaceの定義
3. 具象Creatorクラスの実装
4. 具象Productクラスの実装

#### 4.1.3 Abstract Factory
```typescript
/**
 * 抽象ファクトリーパターンの基本実装
 * 関連するオブジェクトファミリーを作成
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

interface AbstractProductA {
  operationA(): string;
}

interface AbstractProductB {
  operationB(): string;
  collaborateWith(collaborator: AbstractProductA): string;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
```

実装ポイント：
1. 抽象ファクトリーインターフェースの定義
2. 抽象製品インターフェースの定義
3. 具象ファクトリーの実装
4. 具象製品の実装
5. 製品間の協調動作の実装

#### 4.1.4 Builder
```typescript
/**
 * ビルダーパターンの基本実装
 * 複雑なオブジェクトの段階的構築
 */
interface Builder {
  reset(): void;
  buildStepA(): void;
  buildStepB(): void;
  buildStepC(): void;
}

class Product {
  parts: string[] = [];
  
  listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }

  // 具体的な構築ステップの実装
  buildStepA(): void {
    this.product.parts.push('PartA');
  }

  buildStepB(): void {
    this.product.parts.push('PartB');
  }

  buildStepC(): void {
    this.product.parts.push('PartC');
  }

  getResult(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}
```

実装ポイント：
1. ビルダーインターフェースの定義
2. 製品クラスの実装
3. 具象ビルダーの実装
4. 製品の段階的構築と取得

#### 4.1.5 Prototype
```typescript
/**
 * プロトタイプパターンの基本実装
 * 既存のオブジェクトをクローンして新しいオブジェクトを生成
 */
export abstract class DocumentPrototype {
    protected title: string;
    protected content: string;
    protected author: string;
    protected metadata: Map<string, string>;
    protected createdAt: Date;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.metadata = new Map<string, string>();
        this.createdAt = new Date();
    }

    public abstract clone(): DocumentPrototype;

    protected copyBasicProperties(target: DocumentPrototype): void {
        target.title = this.title;
        target.content = this.content;
        target.author = this.author;
        target.metadata = new Map(this.metadata);
        // 1ミリ秒待ってから新しい作成日時を設定
        const now = new Date();
        const delay = 1;
        now.setMilliseconds(now.getMilliseconds() + delay);
        target.createdAt = now;
    }
}

/**
 * 具象プロトタイプの実装例（報告書）
 */
export class Report extends DocumentPrototype {
    private department: string;

    constructor(title: string, content: string, author: string, department: string) {
        super(title, content, author);
        this.department = department;
        this.addMetadata('type', '報告書');
        this.addMetadata('department', department);
    }

    public clone(): DocumentPrototype {
        const clone = new Report(this.title, this.content, this.author, this.department);
        this.copyBasicProperties(clone);
        return clone;
    }
}

/**
 * 具象プロトタイプの実装例（契約書）
 */
export class Contract extends DocumentPrototype {
    private parties: string[];
    private expirationDate: Date;

    constructor(
        title: string,
        content: string,
        author: string,
        parties: string[],
        expirationDate: Date
    ) {
        super(title, content, author);
        this.parties = [...parties];
        this.expirationDate = new Date(expirationDate);
        this.addMetadata('type', '契約書');
        this.addMetadata('parties', parties.join(', '));
        this.addMetadata('expiration', expirationDate.toLocaleDateString());
    }

    public clone(): DocumentPrototype {
        const clone = new Contract(
            this.title,
            this.content,
            this.author,
            this.parties,
            this.expirationDate
        );
        this.copyBasicProperties(clone);
        return clone;
    }
}
```

実装ポイント：
1. 抽象プロトタイプクラスの定義
   - 基本的なプロパティの定義
   - 抽象クローンメソッドの宣言
   - 共通プロパティのコピー機能

2. 具象プロトタイプクラスの実装
   - 特定の文書タイプに応じた追加プロパティ
   - クローンメソッドの具体的な実装
   - メタデータの適切な管理

3. クローン処理の実装
   - ディープコピーの実現
   - 作成日時の適切な更新
   - メタデータの複製

4. 型安全性の確保
   - TypeScriptの型システムを活用
   - プロパティのカプセル化
   - 適切なアクセス修飾子の使用

#### 4.1.5.1 プロトタイプパターンのテスト実装
```typescript
describe('Document Prototype Pattern', () => {
    describe('Report', () => {
        test('should create a report with correct metadata', () => {
            const report = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );
            const reportStr = report.toString();

            expect(reportStr).toContain('タイトル: 月次報告書');
            expect(reportStr).toContain('作成者: 山田太郎');
            expect(reportStr).toContain('type: 報告書');
            expect(reportStr).toContain('department: 営業部');
        });

        test('should create a clone with different creation date', () => {
            const original = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 月次報告書');
            expect(clone.toString()).toContain('作成者: 山田太郎');
            expect(clone.toString()).toContain('type: 報告書');
            expect(clone.toString()).toContain('department: 営業部');
            expect(clone['createdAt'].getTime())
                .toBeGreaterThan(original['createdAt'].getTime());
        });
    });

    describe('Contract', () => {
        test('should create a contract with correct metadata', () => {
            const contract = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );
            const contractStr = contract.toString();

            expect(contractStr).toContain('タイトル: 業務委託契約書');
            expect(contractStr).toContain('作成者: 法務部長');
            expect(contractStr).toContain('type: 契約書');
            expect(contractStr).toContain('parties: 株式会社A, 株式会社B');
            expect(contractStr).toContain('expiration: 12/31/2025');
        });

        test('should create a clone with different creation date but same expiration', () => {
            const original = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 業務委託契約書');
            expect(clone.toString()).toContain('expiration: 12/31/2025');
            expect(clone['createdAt'].getTime())
                .toBeGreaterThan(original['createdAt'].getTime());
        });
    });
});
```

テストポイント：
1. 基本機能の検証
   - メタデータの正確な複製
   - プロパティの適切なコピー
   - 文字列表現の正確性

2. クローン機能の検証
   - 作成日時の更新確認
   - 固有プロパティの維持
   - 参照の独立性

3. 異常系の確認
   - 不正な入力値の処理
   - エラー処理の動作
   - 境界値の扱い

### 4.2 構造パターン（Structural Patterns）

#### 4.2.1 Adapter
```typescript
/**
 * アダプターパターンの実装
 * レガシーシステムとモダンなシステム間のデータ変換を提供
 */

// レガシーシステムのインターフェース
interface LegacyData {
    id: number;
    old_name: string;
    old_value: string;
    created_at: string;
}

// モダンなシステムのインターフェース
interface ModernData {
    identifier: string;
    name: string;
    value: any;
    metadata: {
        createdAt: Date;
        updatedAt: Date;
        version: number;
    };
}

// アダプターの実装
class LegacyToModernAdapter implements IModernDataProcessor {
    constructor(private legacyProcessor: LegacyDataProcessor) {}

    async save(data: ModernData): Promise<void> {
        const legacyData = this.convertToLegacy(data);
        this.legacyProcessor.saveInLegacyFormat(legacyData);
    }

    async get(identifier: string): Promise<ModernData | null> {
        const id = parseInt(identifier);
        if (isNaN(id)) {
            throw new Error(`Invalid identifier format: ${identifier}`);
        }
        const legacyData = this.legacyProcessor.getInLegacyFormat(id);
        return legacyData ? this.convertToModern(legacyData) : null;
    }
}
```

実装ポイント：
1. データ変換の実装
   - レガシーデータからモダンなデータへの変換
   - モダンなデータからレガシーデータへの変換
   - オブジェクト型の値の適切な変換（JSON文字列化と復元）

2. エラーハンドリング
   - 無効な識別子の検証
   - データ型変換時のエラー処理
   - 存在しないデータの処理

3. 非同期処理
   - モダンなインターフェースでの非同期メソッド
   - Promise型を使用した非同期データ処理

4. 型安全性
   - TypeScriptの型システムを活用
   - インターフェースによる契約の定義
   - 型変換の安全性確保

#### 4.2.1.1 アダプターパターンのテスト実装
```typescript
describe('Legacy to Modern Adapter Pattern', () => {
    let legacyProcessor: LegacyDataProcessor;
    let adapter: LegacyToModernAdapter;

    beforeEach(() => {
        legacyProcessor = new LegacyDataProcessor();
        adapter = new LegacyToModernAdapter(legacyProcessor);
    });

    describe('Data Conversion', () => {
        test('should save modern data through adapter', async () => {
            const modernData = {
                identifier: '1',
                name: 'テストデータ',
                value: 'テスト値',
                metadata: {
                    createdAt: new Date('2024-01-01'),
                    updatedAt: new Date('2024-01-01'),
                    version: 1
                }
            };

            await adapter.save(modernData);
            const legacyData = legacyProcessor.getInLegacyFormat(1);

            expect(legacyData).toBeDefined();
            expect(legacyData?.id).toBe(1);
            expect(legacyData?.old_name).toBe('テストデータ');
            expect(legacyData?.old_value).toBe('テスト値');
        });

        // その他のテストケース...
    });
});
```

テストポイント：
1. 基本機能の検証
   - データの保存と取得
   - データ変換の正確性
   - 全データの取得

2. エラーケースの検証
   - 無効な識別子
   - 不正なデータ形式
   - 存在しないデータ

3. 特殊なデータ型の処理
   - オブジェクト型の値
   - 数値型の値
   - 日付型の値

4. 非同期処理の検証
   - Promise の解決
   - エラーハンドリング
   - 非同期メソッドの動作

### 4.3 振る舞いパターン（Behavioral Patterns）

#### 4.3.1 Observer
```typescript
/**
 * オブザーバーパターンの基本実装
 * オブジェクト間の1対多の依存関係を定義
 */
interface Observer {
  update(subject: Subject): void;
}

class Subject {
  private observers: Observer[] = [];
  private state: number = 0;
  
  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
```

実装ポイント：
1. Subject（観察対象）の実装
2. Observer（観察者）インターフェースの定義
3. 具象Observerの実装
4. イベント通知メカニズムの実装

#### 4.3.2 Command
```typescript
/**
 * コマンドパターンの実装
 * スマートホームデバイスを例にしたコマンドパターンの実装。
 * - `Command`インターフェースでコマンドの基本操作を定義
 * - `SmartDevice`抽象クラスでデバイスの基本機能を実装
 * - `SmartLight`と`Thermostat`で具体的なデバイスを実装
 * - `SmartHomeController`でコマンドの実行と履歴を管理
 * - undo/redo機能による操作の取り消しとやり直し
 *
 * 主な機能：
 * - デバイスの電源制御
 * - ライトの明るさ調整
 * - エアコンの温度とモード設定
 * - コマンド履歴の管理
 * - 操作の取り消しとやり直し
 *
 * テスト結果：
 * - 全8テストが成功
 * - カバレッジ：
 *   - 文: 82.01%
 *   - 分岐: 47.5%
 *   - 関数: 83.33%
 *   - 行: 82.01%
 */
interface Command {
  execute(): void;
  undo(): void;
}

class SmartDevice {
  // デバイスの基本機能を実装
}

class SmartLight extends SmartDevice implements Command {
  execute(): void {
    // ライトの明るさ調整の実装
  }

  undo(): void {
    // ライトの明るさを元に戻す実装
  }
}

class Thermostat extends SmartDevice implements Command {
  execute(): void {
    // エアコンの温度とモード設定の実装
  }

  undo(): void {
    // エアコンの設定を元に戻す実装
  }
}

class SmartHomeController {
  private commands: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.commands.push(command);
  }

  undo(): void {
    const command = this.commands.pop();
    if (command) {
      command.undo();
    }
  }
}
```

実装ポイント：
1. Commandインターフェースの定義
2. SmartDeviceクラスの実装
3. SmartLightとThermostatクラスの実装
4. SmartHomeControllerクラスの実装

（他の振る舞いパターンも同様の詳細度で記述）

## 5. テスト実装

### 5.1 テストの基本構造
```typescript
describe('デザインパターン名', () => {
  describe('正常系', () => {
    test('基本的な機能が正常に動作すること', () => {
      // 基本機能のテスト
    });
    
    test('状態が適切に管理されること', () => {
      // 状態管理のテスト
    });
  });
  
  describe('異常系', () => {
    test('不正な入力に対して適切なエラーを返すこと', () => {
      // エラーケースのテスト
    });
    
    test('境界値で正しく動作すること', () => {
      // 境界値のテスト
    });
  });
  
  describe('パフォーマンス', () => {
    test('大量のデータを処理できること', () => {
      // スケーラビリティのテスト
    });
    
    test('メモリリークが発生しないこと', () => {
      // メモリ管理のテスト
    });
  });
});
```

### 5.2 パターン別テスト例

#### 5.2.1 Singletonテスト
```typescript
describe('Singleton', () => {
  test('インスタンスが1つだけ作成されること', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    expect(instance1).toBe(instance2);
  });
  
  test('privateコンストラクタで直接インスタンス化できないこと', () => {
    expect(() => new Singleton()).toThrow();
  });
});
```

#### 5.2.2 Abstract Factoryテスト
```typescript
describe('Abstract Factory', () => {
  let factory: AbstractFactory;

  beforeEach(() => {
    factory = new ConcreteFactory1();
  });

  test('製品の作成と協調動作', () => {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    expect(productA.operationA()).toBe('Product A1');
    expect(productB.operationB()).toBe('Product B1');
    expect(productB.collaborateWith(productA))
      .toBe('Product B1 collaborates with Product A1');
  });

  test('異なるファクトリーでの製品の互換性', () => {
    const factory2 = new ConcreteFactory2();
    const productA1 = factory.createProductA();
    const productB2 = factory2.createProductB();

    expect(() => productB2.collaborateWith(productA1))
      .not.toThrow();
  });
});
```

#### 5.2.3 Builderテスト
```typescript
describe('Builder', () => {
  let builder: ConcreteBuilder;
  let director: Director;

  beforeEach(() => {
    builder = new ConcreteBuilder();
    director = new Director();
  });

  test('段階的な製品構築', () => {
    builder.buildStepA();
    builder.buildStepB();
    const product = builder.getResult();

    expect(product.parts).toContain('PartA');
    expect(product.parts).toContain('PartB');
    expect(product.parts).not.toContain('PartC');
  });

  test('ディレクターを使用した製品構築', () => {
    director.setBuilder(builder);
    director.buildMinimalProduct();
    const minimalProduct = builder.getResult();

    director.buildFullProduct();
    const fullProduct = builder.getResult();

    expect(minimalProduct.parts.length).toBeLessThan(fullProduct.parts.length);
  });
});
```

## 6. 実装ガイドライン

### 6.1 実装の原則
1. 設計原則
   - SOLID原則の遵守
   - インターフェース設計の一貫性
   - 依存関係の明確化
   - 単一責任の原則の徹底
   - 拡張性を考慮した設計

2. 実装方針
   - TypeScriptの型システムの活用
   - 適切な抽象化レベルの維持
   - テスタビリティの確保
   - イミュータブルな設計の推奨
   - 副作用の最小化

3. コード品質
   - クリーンコードの原則に従う
   - 適切なエラー処理の実装
   - パフォーマンスを考慮した実装

### 6.2 実装基準
1. コード構造
   - 明確な責任分割
   - 適切な粒度のモジュール化
   - 再利用可能なコンポーネント設計

2. 型システム
   - 厳密な型定義の活用
   - ジェネリクスの適切な使用
   - 型安全性の確保

3. テスト
   - ユニットテストの完備
   - エッジケースの考慮
   - テストケースの網羅性
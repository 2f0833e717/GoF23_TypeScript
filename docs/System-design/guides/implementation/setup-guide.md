# セットアッププロセス

このドキュメントでは、GoF23デザインパターンのTypeScript実装プロジェクトの構築プロセスを段階的に説明します。環境構築から実装、テスト、ドキュメント生成までの一連の作業手順を示します。

## 1. 環境構築フェーズ

### 1.1 開発環境セットアップ

#### 1. プロジェクト初期化
```bash
mkdir GoF23_TypeScript
cd GoF23_TypeScript
npm init -y
```

#### 2. 必要なパッケージのインストール
```bash
# TypeScript関連
npm install typescript @types/node --save-dev

# テスト関連
npm install jest @types/jest ts-jest jest-environment-jsdom --save-dev

# リンターとフォーマッター
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier --save-dev

# ドキュメント生成
npm install typedoc typedoc-plugin-markdown --save-dev

# ユーティリティ
npm install npm-run-all rimraf --save-dev

# 開発支援
npm install nodemon ts-node --save-dev
```

#### 3. TypeScript設定
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "declaration": true,
    "sourceMap": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

#### 4. ESLint設定
```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error"
  }
}
```

#### 5. Prettier設定
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

#### 6. Jest設定
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true,
  testTimeout: 30000,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
```

### 1.2 CI/CD設定

#### GitHub Actions設定
```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint check
        run: npm run lint
      
      - name: Type check
        run: npm run type-check
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```

### 1.3 セキュリティ設定

#### 1. 依存関係のセキュリティチェック
```json
{
  "scripts": {
    "security:audit": "npm audit",
    "security:outdated": "npm outdated",
    "security:check": "npm run security:audit && npm run security:outdated",
    "security:fix": "npm audit fix"
  }
}
```

#### 2. GitHubセキュリティ設定
```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    versioning-strategy: auto
    labels:
      - "dependencies"
      - "security"
    commit-message:
      prefix: "chore"
      include: "scope"
```

## 2. パターン実装フェーズ

パターンの実装は、以下のフェーズに分けて進めます：

### 2.1 フェーズ2：生成パターンの実装
1. Singleton
2. Factory Method
3. Abstract Factory
4. Builder
5. Prototype

### 2.2 フェーズ3：構造パターンの実装
1. Adapter
2. Bridge
3. Composite
4. Decorator
5. Facade
6. Flyweight
7. Proxy

### 2.3 フェーズ4：振る舞いパターンの実装
1. Chain of Responsibility
2. Command
3. Interpreter
4. Iterator
5. Mediator
6. Memento
7. Observer
8. State
9. Strategy
10. Template Method
11. Visitor

各パターンの実装例は[パターン実装例](../architecture/pattern-examples.md)を参照してください。

## 3. フェーズ5：品質保証とドキュメント

### 3.1 パフォーマンステスト

#### ベンチマーク設定
```typescript
import Benchmark from 'benchmark';

const suite = new Benchmark.Suite;

suite
  .add('Singleton.getInstance', () => {
    ConfigManager.getInstance();
  })
  .add('WeatherStation.notify (10 observers)', () => {
    const station = new WeatherStation();
    for (let i = 0; i < 10; i++) {
      station.attach(new TemperatureDisplay(`${i}`));
    }
    station.setMeasurements(25, 65, 1013);
  })
  .on('cycle', (event: any) => {
    console.log(String(event.target));
  })
  .on('complete', function(this: any) {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
```

### 3.2 セキュリティテスト

```typescript
describe('Security', () => {
  it('設定値のサニタイズ', () => {
    const config = ConfigManager.getInstance();
    const input = '<script>alert("xss")</script>';
    config.set('userInput', sanitizeInput(input));
    expect(config.get('userInput')).not.toContain('<script>');
  });

  it('プロトタイプ汚染の防止', () => {
    const config = ConfigManager.getInstance();
    const input = { '__proto__': { 'polluted': true } };
    config.set('userConfig', safeObjectMerge({}, input));
    expect(Object.prototype).not.toHaveProperty('polluted');
  });
});
```

### 3.3 ドキュメント生成

#### TypeDoc設定
```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs/api",
  "excludePrivate": true,
  "excludeProtected": true,
  "theme": "markdown",
  "readme": "none",
  "name": "GoF23 TypeScript実装",
  "includeVersion": true
}
```

#### mdbook設定
```toml
[book]
authors = ["Team"]
language = "ja"
multilingual = false
src = "docs"
title = "GoF23 TypeScript実装ガイド"

[output.html]
mathjax-support = true
git-repository-url = "https://github.com/your/repo"
edit-url-template = "https://github.com/your/repo/edit/main/{path}"
```

詳細なプロジェクトのセットアップ手順とガイドラインは[依存関係管理](../architecture/dependencies.md)を参照してください。 
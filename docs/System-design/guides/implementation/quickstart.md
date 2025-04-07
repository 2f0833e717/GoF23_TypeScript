# クイックスタートガイド

このガイドでは、GoF23デザインパターンのTypeScript実装プロジェクトを素早く開始する方法を説明します。詳細な設計原則やコーディング規約については[設計・実装ガイドライン](../architecture/guidelines.md)を参照してください。

## 1. 環境構築

### 必要条件
- Node.js 20.0以上
- npm 10.0以上 または yarn 2.0以上
- Git

### インストール手順

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/GoF23_TypeScript.git
cd GoF23_TypeScript

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 2. プロジェクト構造

```
GoF23_TypeScript/
├── src/                  # ソースコード
│   ├── creational/       # 生成パターン実装
│   ├── structural/       # 構造パターン実装
│   ├── behavioral/       # 振る舞いパターン実装
│   └── common/           # 共通ユーティリティ
├── tests/                # テストコード
├── docs/                 # ドキュメント
├── package.json          # プロジェクト設定
└── tsconfig.json         # TypeScript設定
```

## 3. 主要なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run build` | プロジェクトをビルド |
| `npm run dev` | 開発モードで実行 |
| `npm test` | テストを実行 |
| `npm run lint` | コードの静的解析 |
| `npm run docs` | ドキュメントを生成 |

## 4. 実装パターンの基本構造

各デザインパターンは以下の一貫した構造で実装されています：

1. **インターフェース定義** - パターンの抽象部分を定義
2. **具象クラス実装** - インターフェースの実装
3. **クライアントコード** - パターンの使用例

例（Singletonパターン）：

```typescript
// シングルトンパターンの基本実装
class ConfigManager {
  private static instance: ConfigManager | null = null;
  
  private constructor() {} // 外部からのインスタンス化を防止
  
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
  
  // 実際のメソッド
  public getConfig(key: string): any {
    // 設定を取得する実装
  }
}

// 使用例
const config = ConfigManager.getInstance();
```

## 5. 次のステップ

- [パターン実装例](../examples/pattern-examples.md) - より詳細なパターン実装例
- [設計・実装ガイドライン](../architecture/guidelines.md) - コーディング規約とベストプラクティス
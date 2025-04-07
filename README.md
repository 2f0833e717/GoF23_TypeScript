# GoF23 TypeScript実装

このプロジェクトは、Gang of Four（GoF）デザインパターンをTypeScriptで実装したものです。

## 概要

Gang of Four（GoF）デザインパターンは、ソフトウェア設計における一般的な問題に対する再利用可能な解決策を提供する23のクラシックなデザインパターンです。このプロジェクトでは、これらのパターンをTypeScriptで実装し、現代のソフトウェア開発におけるベストプラクティスとともに提供します。

## デザインパターンの分類

### 生成パターン（Creational Patterns）
- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

### 構造パターン（Structural Patterns）
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### 振る舞いパターン（Behavioral Patterns）
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

## 設計ドキュメント

プロジェクトの設計ドキュメントは、`docs/System-design`ディレクトリにあります。2025年4月に設計書を再整理し、より体系的な構造にしました。重複していた内容を整理し、「実装仕様」の内容を「設計・実装ガイドライン」に統合しました。

### ドキュメント構成

- **アーキテクチャ**：システムのアーキテクチャ設計、ガイドライン、モジュール構成などの情報
- **実装**：実装例、実装ステップ、実装ガイドなどの詳細情報
- **デザインパターン**：各パターンの詳細な説明と実装例
- **リファレンス**：用語集、参考文献など

### ドキュメントの閲覧方法

ドキュメントを閲覧するには、以下の方法があります：

1. **ローカルでの閲覧**：
   ```bash
   cd docs/System-design
   mdbook serve
   ```
   その後、ブラウザで `http://localhost:3000` を開きます。

2. **直接ファイルを閲覧**：
   - [はじめに](docs/System-design/index.md)
   - [目次](docs/System-design/SUMMARY.md)

## 開発環境のセットアップ

### 必要条件

- Node.js（v14以上）
- npm（v6以上）

### インストール手順

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/GoF23_TypeScript.git
cd GoF23_TypeScript

# 依存関係のインストール
npm install

# コードのビルド
npm run build

# テストの実行
npm test
```

## ライセンス

このプロジェクトはMITライセンスのもとで提供されています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

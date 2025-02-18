# GoF23 TypeScript セットアップガイド

このガイドでは、GoF23 TypeScriptプロジェクトの開発環境のセットアップ方法について説明します。

## 必要要件

- Node.js 18.0以上
- npm 8.0以上
- TypeScript 5.0以上
- Git

## 開発環境のセットアップ

### 1. リポジトリのクローン

```bash
git clone [repository-url]
cd GoF23_TypeScript
```

### 2. 依存パッケージのインストール

```bash
npm install
```

### 3. 開発用スクリプト

以下のnpmスクリプトが利用可能です：

- `npm run build`: TypeScriptのコンパイル
- `npm run dev`: 開発モードでの実行（ホットリロード対応）
- `npm run test`: テストの実行
- `npm run test:watch`: テストの監視実行
- `npm run test:coverage`: テストカバレッジの生成
- `npm run lint`: コードの静的解析
- `npm run lint:fix`: コードの自動修正
- `npm run format`: コードのフォーマット
- `npm run clean`: ビルド成果物の削除
- `npm run docs`: ドキュメントの生成

### 4. VSCode拡張機能（推奨）

以下の拡張機能のインストールを推奨します：

- ESLint
- Prettier
- TypeScript IDE Support
- Jest Runner
- Git Lens

### 5. デバッグ設定

VSCodeでデバッグを行う場合は、`.vscode/launch.json`に以下の設定が必要です：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current Test",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      "args": ["${relativeFile}", "--config", "jest.config.js"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Example",
      "program": "${file}",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

### 6. 環境変数の設定

必要に応じて`.env`ファイルを作成し、環境変数を設定します：

```env
NODE_ENV=development
DEBUG=true
```

## トラブルシューティング

### よくある問題と解決方法

1. TypeScriptのコンパイルエラー
   - `npm run clean`を実行してから`npm run build`を実行
   - `node_modules`を削除して`npm install`を再実行

2. テストの失敗
   - Jest のキャッシュをクリア: `npm test -- --clearCache`
   - テストファイルが正しい場所にあることを確認

3. ESLintエラー
   - `npm run lint:fix`で自動修正を試行
   - `.eslintrc.json`の設定を確認

## 次のステップ

セットアップが完了したら、以下のドキュメントを参照してください：

1. [テストガイド](./testing.md)
2. [デザインパターン実装ガイド](../patterns/README.md) 
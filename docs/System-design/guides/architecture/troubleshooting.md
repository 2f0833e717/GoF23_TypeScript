# トラブルシューティングガイド

このドキュメントは、GoF23 TypeScriptプロジェクトにおける一般的な問題とその解決方法を提供します。

## よくある問題と解決方法

### 1. TypeScriptのコンパイルエラー

コンパイル時に問題が発生した場合は、次の手順を試してください：

```bash
# キャッシュをクリアしてからビルド
npm run test:clean
npm run build

# または依存関係をクリーンインストール
rm -rf node_modules
npm install
npm run build
```

### 2. テストの失敗

テストが失敗する場合：

```bash
# テストキャッシュをクリア
npm run test:clear

# 詳細なデバッグ情報を表示
npm run test:debug
```

追加確認事項：
- テストファイルが正しいディレクトリにあるか確認
- 必要なモック関数が適切に設定されているか
- 環境変数が正しく設定されているか

### 3. ESLintエラー

静的解析エラーの修正：

```bash
# 自動修正を試行
npm run lint:fix
```

ESLintの設定が期待通りでない場合：
- `.eslintrc.json`と`.eslintrc.js`の設定を確認
- プロジェクト固有のルールが適切に構成されているか確認

### 4. ドキュメント生成の失敗

mdbookによるドキュメント生成に問題がある場合：

```bash
# ビルド成果物を削除
npm run book:clean

# mdbook依存関係を確認
cd scripts/mdbook
./mdbook.exe --version
./mdbook-mermaid.exe --version
```

また、以下の点も確認してください：
- `book.toml`の設定が正しいか
- mermaid図表の構文が正しいか
- 必要な依存ファイルがすべて存在するか

### 5. エディタ連携の問題

VSCodeなどのエディタとの連携に問題がある場合：

- TypeScript拡張機能が最新か確認
- `.vscode/settings.json`が適切に構成されているか確認
- プロジェクトのワークスペース設定を再読み込み

### 6. 依存関係の競合

ライブラリの依存関係に問題がある場合：

```bash
# 依存関係の競合を確認
npm ls

# 特定のパッケージのバージョン確認
npm ls パッケージ名

# 脆弱性チェック
npm audit
```

## デバッグのヒント

### 効果的なログ出力

```typescript
// 開発環境のみのデバッグログ
if (process.env.NODE_ENV === 'development') {
  console.log('デバッグ情報:', 変数);
}

// 階層的なログレベル
logger.debug('詳細な情報');
logger.info('一般的な情報');
logger.warn('警告');
logger.error('エラー情報');
```

### VSCodeでのデバッグ

以下の設定を`.vscode/launch.json`に追加すると、VSCodeからデバッグ実行できます：

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

## サポートリソース

問題が解決しない場合は、以下のリソースを参照してください：

1. [プロジェクトのIssueトラッカー](https://github.com/yourusername/GoF23_TypeScript/issues)
2. [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
3. [Jest公式ドキュメント](https://jestjs.io/docs/getting-started)
4. [ESLint公式ドキュメント](https://eslint.org/docs/user-guide/getting-started) 
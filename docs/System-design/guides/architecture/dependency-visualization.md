# コード依存関係の可視化

このプロジェクトでは、コードの依存関係を視覚的に把握するための可視化ツールとして `dependency-cruiser` を使用しています。これにより、各デザインパターンの実装同士の関係や、全体のコード構造を理解しやすくなります。

## 依存関係の可視化方法

### 準備

依存関係の可視化には `dependency-cruiser` を使用します。必要なパッケージはすでにプロジェクトの依存関係として含まれていますが、新たにセットアップする場合は以下のコマンドで実行できます：

```bash
npm run viz:setup
```

このコマンドは依存関係に `dependency-cruiser` を追加します。

### 依存関係グラフの生成

依存関係グラフを生成するための様々なスクリプトが `package.json` に用意されています。

#### 基本的な依存関係の生成

```bash
# DOT形式の依存関係グラフを生成
npm run viz:dependencies:dot

# HTML形式の依存関係グラフを生成
npm run viz:dependencies:html
```

これらのコマンドは `docs/CodeViz` ディレクトリに `.dot` または `.html` ファイルを生成します。

#### インタラクティブなグラフ生成

```bash
# VSCodeのファイルリンク付きインタラクティブグラフ生成（dot形式）
npm run viz:dependencies:interactive:dot

# VSCodeのファイルリンク付きインタラクティブグラフ生成（ddot形式）
npm run viz:dependencies:interactive:ddot
```

これらのコマンドは生成後に自動的にブラウザでグラフを開きます。生成されたファイルはクリックでVSCodeのファイルにリンクします。

#### ストリーム形式とラップHTML

より高度な可視化には以下のコマンドが用意されています：

```bash
# ストリーム形式のSVGを生成 (dot形式)
npm run viz:dependencies:stream:dot

# ストリーム形式のSVGを生成 (ddot形式)
npm run viz:dependencies:stream:ddot

# ストリーム出力をHTMLでラップして見やすくする (dot形式)
npm run viz:dependencies:wrap_html:dot

# ストリーム出力をHTMLでラップして見やすくする (ddot形式)
npm run viz:dependencies:wrap_html:ddot
```

`wrap_html` コマンドは以下の機能を提供します：
- オレンジ色の文字を黒色に変更（見やすさ向上）
- VSCodeへのリンクパスの修正
- 背景色の調整

## 出力ファイルと活用方法

### 出力ファイル形式

依存関係の可視化は様々な形式で出力できます：

- **DOT形式** (`.dot`): Graphviz形式のグラフ定義ファイル
- **HTML形式** (`.html`): ブラウザで表示可能な静的HTMLファイル
- **Stream形式** (`.html`): インタラクティブな機能が含まれたHTML+SVG

### 主要な出力ファイル

- `dependencies.dot` - プロジェクト全体の依存関係（DOT形式）
- `dependencies.html` - プロジェクト全体の依存関係（HTML形式）
- `dependencies-dot-stream.html` - dot形式のストリーム形式依存関係
- `dependencies-ddot-stream.html` - ddot形式のストリーム形式依存関係 
- `dependencies-dot-wrapped.html` - ラップされたインタラクティブな依存関係グラフ（dot形式）
- `dependencies-ddot-wrapped.html` - ラップされたインタラクティブな依存関係グラフ（ddot形式）

## 依存関係グラフの読み方

依存関係グラフでは、以下の情報を確認できます：

- **ノード**：各ファイル（TypeScriptモジュール）を表します
- **エッジ（線）**：ファイル間の依存関係を表します
- **方向**：依存の方向を矢印で示します（通常は依存する側から依存される側へ）
- **グループ化**：ディレクトリ構造に基づいて関連ファイルがグループ化されます

### インタラクティブな機能（wrap_html）

`wrap_html` で生成されたHTMLファイルでは以下の操作が可能です：

- **マウスホバー** - ノードやエッジにマウスを置くと関連要素がハイライト
- **右クリック** - ハイライト状態を固定
- **ESCキー** - ハイライト解除

## 活用例

依存関係グラフは以下のような用途に活用できます：

1. デザインパターン実装の全体構造把握
2. コードリファクタリング時の影響範囲の確認
3. コード間の関係性の理解と説明
4. モジュール間の依存関係の複雑さの分析
5. 循環参照などの問題発見

## アーキテクチャビューの活用

標準ビューが詳細すぎる場合は、ddot形式のビュー (`viz:dependencies:wrap_html:ddot`) を使用すると、より高レベルな依存関係を確認できます。このビューでは、個々のファイルの依存関係がよりまとまって表示されます。

## 注意点

- 依存関係グラフが大きくなりすぎると見づらくなることがあります
- ブラウザによってはSVGの表示に時間がかかる場合があります
- ノード数が多い場合は、ddot形式のビューを使用することで概要を把握しやすくなります 
import { Builder } from './Builder';

/**
 * ディレクター
 * 
 * 特定の順序で構築手順を実行するためのクラスです。
 * 同じ構築プロセスから異なる種類の製品を生成する場合に便利です。
 */
export class Director {
    private builder: Builder;

    /**
     * コンストラクタ
     * @param builder 使用するビルダー
     */
    constructor(builder: Builder) {
        this.builder = builder;
    }

    /**
     * ビルダーを設定します
     * @param builder 設定するビルダー
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * 最小構成の製品を構築します
     * パーツAのみを含む製品を作成します。
     */
    public buildMinimalViableProduct(): void {
        this.builder.buildPartA();
    }

    /**
     * フル機能の製品を構築します
     * すべてのパーツを含む製品を作成します。
     */
    public buildFullFeaturedProduct(): void {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
} 
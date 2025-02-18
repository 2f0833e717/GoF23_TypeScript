/**
 * ファイルシステム要素のインターフェース
 * 
 * ファイルシステムの要素（ファイル、ディレクトリ、シンボリックリンク）の
 * 共通インターフェースを定義します。
 */

export interface FileSystemElement {
    /**
     * 要素の名前を取得します
     */
    getName(): string;

    /**
     * 要素のサイズを取得します（バイト単位）
     */
    getSize(): number;

    /**
     * 要素の作成日時を取得します
     */
    getCreatedAt(): Date;

    /**
     * 要素の更新日時を取得します
     */
    getModifiedAt(): Date;

    /**
     * 要素の親要素を取得します
     */
    getParent(): FileSystemElement | null;

    /**
     * 要素の親要素を設定します
     * @param parent 親要素
     */
    setParent(parent: FileSystemElement | null): void;

    /**
     * 要素のパスを取得します
     */
    getPath(): string;

    /**
     * 要素の表示文字列を取得します
     * @param indent インデントレベル
     */
    display(indent?: number): string;

    /**
     * サイズをフォーマットして表示します
     * @param bytes バイト数
     */
    formatSize(bytes: number): string;

    /**
     * リンク先のパスを取得します（シンボリックリンクの場合）
     */
    getTargetPath?(): string;

    /**
     * リンクが有効かどうかを確認します（シンボリックリンクの場合）
     */
    isValid?(): boolean;
} 
/**
 * ファイルシステム要素のインターフェース
 * 
 * Visitorパターンにおける要素（Element）の基本インターフェースを定義します。
 * すべてのファイルシステム要素はこのインターフェースを実装する必要があります。
 */

import { FileSystemVisitor } from './FileSystemVisitor';

export interface FileSystemElement {
    /**
     * Visitorを受け入れます
     * @param visitor 訪問者
     */
    accept(visitor: FileSystemVisitor): void;

    /**
     * 要素の名前を取得します
     */
    getName(): string;

    /**
     * 要素のパスを取得します
     */
    getPath(): string;

    /**
     * 要素のサイズを取得します（バイト）
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
     * 親要素を設定します
     * @param parent 親要素
     */
    setParent(parent: FileSystemElement | null): void;

    /**
     * 親要素を取得します
     */
    getParent(): FileSystemElement | null;
} 
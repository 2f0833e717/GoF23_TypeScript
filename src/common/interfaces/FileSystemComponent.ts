/**
 * ファイルシステムコンポーネントのインターフェース
 * 
 * Compositeパターンの基本インターフェースを定義します。
 * FileSystemElementを継承し、Visitorパターンのためのacceptメソッドを追加します。
 */
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';
import { FileSystemElement } from './FileSystemElement';

export interface FileSystemComponent extends FileSystemElement {
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
    getParent(): FileSystemComponent | null;

    /**
     * 要素の親要素を設定します
     * @param parent 親要素
     */
    setParent(parent: FileSystemComponent | null): void;

    /**
     * 要素のパスを取得します
     */
    getPath(): string;

    /**
     * 要素の表示文字列を取得します
     */
    display(): string;
} 
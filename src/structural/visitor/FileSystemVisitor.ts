/**
 * ファイルシステムVisitorのインターフェース
 * 
 * ファイルシステム要素を訪問し、それぞれの要素に対して特定の操作を実行します。
 * 新しい操作を追加する際は、このインターフェースを実装する新しいVisitorを作成します。
 */

import { File } from '../composite/File';
import { Directory } from '../composite/Directory';
import { SymbolicLink } from '../composite/SymbolicLink';

export interface FileSystemVisitor {
    /**
     * ファイルを訪問します
     * @param file 訪問するファイル
     */
    visitFile(file: File): void;

    /**
     * ディレクトリを訪問します
     * @param directory 訪問するディレクトリ
     */
    visitDirectory(directory: Directory): void;

    /**
     * シンボリックリンクを訪問します
     * @param symlink 訪問するシンボリックリンク
     */
    visitSymbolicLink(symlink: SymbolicLink): void;

    /**
     * 訪問結果を取得します
     * @returns 訪問結果
     */
    getResult(): any;
} 
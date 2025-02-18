/**
 * ファイル検索Visitor
 * 
 * 指定された検索条件に基づいてファイルシステム要素を検索するVisitorです。
 * 名前、サイズ、作成日時、更新日時などの条件で検索できます。
 */
import { FileSystemVisitor } from '../FileSystemVisitor';
import { FileSystemElement } from '../../../common/interfaces/FileSystemElement';
import { File } from '../../../structural/composite/File';
import { Directory } from '../../../structural/composite/Directory';
import { SymbolicLink } from '../../../structural/composite/SymbolicLink';

/**
 * 検索条件を定義するインターフェース
 */
export interface SearchCriteria {
    /**
     * ファイル名のパターン（正規表現）
     */
    name?: RegExp;

    /**
     * 最小サイズ（バイト）
     */
    minSize?: number;

    /**
     * 最大サイズ（バイト）
     */
    maxSize?: number;

    /**
     * この日時以降に作成されたファイル
     */
    createdAfter?: Date;

    /**
     * この日時以前に作成されたファイル
     */
    createdBefore?: Date;

    /**
     * この日時以降に更新されたファイル
     */
    modifiedAfter?: Date;

    /**
     * この日時以前に更新されたファイル
     */
    modifiedBefore?: Date;
}

/**
 * ファイル検索を実行するVisitorクラス
 */
export class FileSearcher implements FileSystemVisitor {
    private results: FileSystemElement[] = [];
    private criteria: SearchCriteria;

    /**
     * コンストラクタ
     * @param criteria 検索条件
     */
    constructor(criteria: SearchCriteria) {
        this.criteria = criteria;
    }

    /**
     * ファイルを訪問し、検索条件に一致する場合は結果に追加します
     * @param file 訪問するファイル
     */
    visitFile(file: File): void {
        if (this.matchesCriteria(file)) {
            this.results.push(file);
        }
    }

    /**
     * ディレクトリを訪問し、検索条件に一致する場合は結果に追加します
     * @param directory 訪問するディレクトリ
     */
    visitDirectory(directory: Directory): void {
        if (this.matchesCriteria(directory)) {
            this.results.push(directory);
        }
    }

    /**
     * シンボリックリンクを訪問し、検索条件に一致する場合は結果に追加します
     * @param symlink 訪問するシンボリックリンク
     */
    visitSymbolicLink(symlink: SymbolicLink): void {
        if (this.matchesCriteria(symlink)) {
            this.results.push(symlink);
        }
    }

    /**
     * 検索結果を取得します
     * @returns 検索条件に一致したファイルシステム要素の配列
     */
    getResult(): FileSystemElement[] {
        return this.results;
    }

    /**
     * ファイルが検索条件に一致するかチェックします
     * @param element チェック対象のファイルシステム要素
     * @returns 条件に一致する場合はtrue
     */
    private matchesCriteria(element: FileSystemElement): boolean {
        const { name, minSize, maxSize, createdAfter, createdBefore, modifiedAfter, modifiedBefore } = this.criteria;

        // 名前のチェック
        if (name && !name.test(element.getName())) {
            return false;
        }

        // サイズのチェック
        const size = element.getSize();
        if (minSize !== undefined && size < minSize) {
            return false;
        }
        if (maxSize !== undefined && size > maxSize) {
            return false;
        }

        // 作成日時のチェック
        const createdAt = element.getCreatedAt();
        if (createdAfter && createdAt < createdAfter) {
            return false;
        }
        if (createdBefore && createdAt > createdBefore) {
            return false;
        }

        // 更新日時のチェック
        const modifiedAt = element.getModifiedAt();
        if (modifiedAfter && modifiedAt < modifiedAfter) {
            return false;
        }
        if (modifiedBefore && modifiedAt > modifiedBefore) {
            return false;
        }

        return true;
    }

    /**
     * 検索をリセットします
     */
    reset(): void {
        this.results = [];
    }
} 
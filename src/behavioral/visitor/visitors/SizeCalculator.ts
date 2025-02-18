/**
 * サイズ計算Visitor
 * 
 * ファイルシステム要素のサイズを計算するVisitorです。
 * ディレクトリの場合は、含まれるすべての要素のサイズを合計します。
 */
import { FileSystemVisitor } from '../FileSystemVisitor';
import { File } from '../../../structural/composite/File';
import { Directory } from '../../../structural/composite/Directory';
import { SymbolicLink } from '../../../structural/composite/SymbolicLink';

/**
 * ファイルシステム要素のサイズを計算するVisitorクラス
 */
export class SizeCalculator implements FileSystemVisitor {
    /** 合計サイズ（バイト） */
    private totalSize: number = 0;
    /** パスごとのサイズ詳細 */
    private details: Map<string, number> = new Map();

    /**
     * ファイルを訪問し、そのサイズを計算に追加します
     * @param file 訪問するファイル
     */
    visitFile(file: File): void {
        const size = file.getSize();
        this.totalSize += size;
        this.details.set(file.getPath(), size);
    }

    /**
     * ディレクトリを訪問し、その配下の要素のサイズを計算します
     * @param directory 訪問するディレクトリ
     */
    visitDirectory(directory: Directory): void {
        let dirSize = 0;
        const children = directory.getChildren();

        // 子要素を再帰的に訪問
        for (const child of children) {
            const prevSize = this.totalSize;
            child.accept(this);
            dirSize += this.totalSize - prevSize;
        }

        this.details.set(directory.getPath(), dirSize);
    }

    /**
     * シンボリックリンクを訪問し、そのサイズを計算に追加します
     * @param symlink 訪問するシンボリックリンク
     */
    visitSymbolicLink(symlink: SymbolicLink): void {
        const size = symlink.getSize();
        this.totalSize += size;
        this.details.set(symlink.getPath(), size);
    }

    /**
     * 計算結果を取得します
     * @returns 合計サイズとパスごとの詳細情報
     */
    getResult(): { totalSize: number; details: Map<string, number> } {
        return {
            /** 全要素の合計サイズ（バイト） */
            totalSize: this.totalSize,
            /** パスごとのサイズ詳細 */
            details: new Map(this.details)
        };
    }

    /**
     * 計算結果をリセットします
     */
    reset(): void {
        this.totalSize = 0;
        this.details.clear();
    }

    /**
     * サイズを人間が読みやすい形式に変換します
     * @param bytes バイト数
     * @returns フォーマットされたサイズ文字列（例: "1.5 KB"）
     */
    static formatSize(bytes: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let size = bytes;
        let unitIndex = 0;

        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

        return `${size.toFixed(1)} ${units[unitIndex]}`;
    }
} 
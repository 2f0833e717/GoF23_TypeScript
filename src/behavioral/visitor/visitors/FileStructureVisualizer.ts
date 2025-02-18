/**
 * ファイルシステム構造視覚化Visitor
 * 
 * ファイルシステムの階層構造を文字列として視覚化するVisitorです。
 * ディレクトリ、ファイル、シンボリックリンクを適切なアイコンと共に表示します。
 */
import { FileSystemVisitor } from '../FileSystemVisitor';
import { File } from '../../../structural/composite/File';
import { Directory } from '../../../structural/composite/Directory';
import { SymbolicLink } from '../../../structural/composite/SymbolicLink';

/**
 * ファイルシステムの階層構造を視覚化するVisitorクラス
 */
export class FileStructureVisualizer implements FileSystemVisitor {
    /** 視覚化結果の文字列 */
    private result: string = '';
    /** 現在のインデントレベル */
    private currentIndent: number = 0;
    /** インデントのサイズ（スペースの数） */
    private indentSize: number = 2;

    /**
     * インデントサイズを設定します
     * @param size インデントサイズ（1以上の整数）
     * @throws {Error} サイズが1未満の場合
     */
    setIndentSize(size: number): void {
        if (size < 1) {
            throw new Error('インデントサイズは1以上の整数である必要があります');
        }
        this.indentSize = size;
    }

    /**
     * ファイルを訪問し、その情報を視覚化結果に追加します
     * @param file 訪問するファイル
     */
    visitFile(file: File): void {
        this.result += this.getIndentation();
        this.result += `📄 ${file.getName()} (${this.formatSize(file.getSize())})`;
        this.result += '\n';
    }

    /**
     * ディレクトリを訪問し、その情報と子要素を視覚化結果に追加します
     * @param directory 訪問するディレクトリ
     */
    visitDirectory(directory: Directory): void {
        this.result += this.getIndentation();
        this.result += `📁 ${directory.getName()} (${this.formatSize(directory.getSize())})`;
        this.result += '\n';

        if (directory.isEmpty()) {
            this.currentIndent++;
            this.result += this.getIndentation();
            this.result += '(空のディレクトリ)';
            this.result += '\n';
            this.currentIndent--;
            return;
        }

        this.currentIndent++;
        const children = directory.getChildren();
        for (const child of children) {
            child.accept(this);
        }
        this.currentIndent--;
    }

    /**
     * シンボリックリンクを訪問し、その情報を視覚化結果に追加します
     * @param symlink 訪問するシンボリックリンク
     */
    visitSymbolicLink(symlink: SymbolicLink): void {
        this.result += this.getIndentation();
        this.result += `🔗 ${symlink.getName()} -> ${symlink.getTargetPath()} (${this.formatSize(symlink.getSize())})`;
        this.result += '\n';
    }

    /**
     * 視覚化結果を取得します
     * @returns フォーマットされたファイルシステム構造の文字列
     */
    getResult(): string {
        // 最後の改行を削除
        return this.result.trim();
    }

    /**
     * 現在のインデントレベルに応じたスペースを返します
     * @returns インデントを表すスペース文字列
     */
    private getIndentation(): string {
        return ' '.repeat(this.currentIndent * this.indentSize);
    }

    /**
     * サイズを人間が読みやすい形式に変換します
     * @param bytes バイト数
     * @returns フォーマットされたサイズ文字列（例: "1.5 KB"）
     */
    private formatSize(bytes: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let size = bytes;
        let unitIndex = 0;

        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

        return `${size.toFixed(1)} ${units[unitIndex]}`;
    }

    /**
     * 視覚化結果をリセットします
     */
    reset(): void {
        this.result = '';
        this.currentIndent = 0;
    }
} 
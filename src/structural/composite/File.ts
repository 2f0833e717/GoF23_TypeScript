/**
 * ファイルクラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * ファイルシステムの末端要素（リーフ）として機能します。
 */
import { FileSystemComponent } from './FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';

export class File implements FileSystemComponent {
    private parent: FileSystemComponent | null = null;
    private readonly createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name ファイル名
     * @param size ファイルサイズ（バイト）
     */
    constructor(
        private readonly name: string,
        private size: number
    ) {
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }

    accept(visitor: FileSystemVisitor): void {
        visitor.visitFile(this);
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getModifiedAt(): Date {
        return this.modifiedAt;
    }

    getParent(): FileSystemComponent | null {
        return this.parent;
    }

    setParent(parent: FileSystemComponent | null): void {
        this.parent = parent;
    }

    getPath(): string {
        const parentPath = this.parent ? this.parent.getPath() : '';
        return parentPath ? `${parentPath}/${this.name}` : this.name;
    }

    /**
     * ファイルの内容を更新します
     * @param newSize 新しいファイルサイズ（バイト）
     */
    updateContent(newSize: number): void {
        this.size = newSize;
        this.modifiedAt = new Date();
    }

    /**
     * ファイルの表示文字列を取得します
     * @param indent インデントレベル
     * @returns フォーマットされた文字列
     */
    display(indent: number = 0): string {
        const indentation = ' '.repeat(indent * 2);
        return `${indentation}📄 ${this.name} (${this.formatSize(this.size)})`;
    }

    /**
     * ファイルサイズを適切な単位に変換して表示します
     * @param bytes バイト数
     * @returns フォーマットされたサイズ文字列
     */
    formatSize(bytes: number): string {
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
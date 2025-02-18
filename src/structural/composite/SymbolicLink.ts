/**
 * シンボリックリンククラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * 他のファイルシステム要素への参照として機能します。
 */
import { FileSystemComponent } from './FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';

export class SymbolicLink implements FileSystemComponent {
    private parent: FileSystemComponent | null = null;
    private readonly createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name リンク名
     * @param target リンク先の要素
     */
    constructor(
        private readonly name: string,
        private target: FileSystemComponent
    ) {
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }

    accept(visitor: FileSystemVisitor): void {
        visitor.visitSymbolicLink(this);
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.target.getSize();
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
     * リンク先の要素を取得します
     * @returns リンク先の要素
     */
    getTarget(): FileSystemComponent {
        return this.target;
    }

    /**
     * リンク先のパスを取得します
     * @returns リンク先のパス
     */
    getTargetPath(): string {
        return this.target.getPath();
    }

    /**
     * リンク先の要素を設定します
     * @param target 新しいリンク先の要素
     */
    setTarget(target: FileSystemComponent): void {
        this.target = target;
        this.modifiedAt = new Date();
    }

    /**
     * シンボリックリンクが有効かどうかを確認します
     * @returns リンクが有効な場合はtrue
     */
    isValid(): boolean {
        return this.target !== null;
    }

    /**
     * シンボリックリンクの表示文字列を取得します
     * @param indent インデントレベル
     * @returns フォーマットされた文字列
     */
    display(indent: number = 0): string {
        const indentation = ' '.repeat(indent * 2);
        return `${indentation}🔗 ${this.name} -> ${this.target.getPath()} (${this.formatSize(this.getSize())})`;
    }

    /**
     * サイズを適切な単位に変換して表示します
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
/**
 * シンボリックリンククラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * 他のファイルシステム要素への参照として機能します。
 */
import { FileSystemComponent } from '../../common/interfaces/FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';
import { Directory } from './Directory';
import { FileSystemUtils } from './FileSystemUtils';
import { File } from './File';
import { FileSystemElement } from '../../common/interfaces/FileSystemElement';

export class SymbolicLink implements FileSystemComponent, FileSystemElement {
    private name: string;
    private target: FileSystemComponent | null;
    private parent: FileSystemComponent | null;
    private createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name リンク名
     * @param target リンク先の要素
     */
    constructor(name: string, target: FileSystemComponent | null) {
        this.name = name;
        if (target !== null && !(target instanceof File) && !(target instanceof Directory) && !(target instanceof SymbolicLink)) {
            throw new Error('ターゲットが不正です');
        }
        this.target = target;
        this.parent = null;
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
        return this.target ? this.target.getSize() : 0;
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
        if (parent && !(parent instanceof Directory)) {
            throw new Error('親ディレクトリが不正です');
        }
        this.parent = parent;
    }

    getPath(): string {
        return this.parent ? `${this.parent.getPath()}/${this.name}` : this.name;
    }

    /**
     * リンク先の要素を取得します
     * @returns リンク先の要素
     */
    getTarget(): FileSystemComponent | null {
        return this.target;
    }

    /**
     * リンク先のパスを取得します
     * @returns リンク先のパス
     */
    getTargetPath(): string {
        return this.target ? this.target.getPath() : '(無効なリンク)';
    }

    /**
     * リンク先の要素を設定します
     * @param target 新しいリンク先の要素
     */
    setTarget(target: FileSystemComponent | null): void {
        if (target !== null && !(target instanceof File) && !(target instanceof Directory) && !(target instanceof SymbolicLink)) {
            throw new Error('ターゲットが不正です');
        }
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
     * @returns フォーマットされた文字列
     */
    display(): string {
        const sizeStr = FileSystemUtils.formatSize(this.getSize());
        const dateStr = this.modifiedAt.toLocaleString();
        const targetPath = this.isValid() ? this.getTargetPath() : '(無効なリンク)';
        return `${sizeStr} ${dateStr} ${this.name} -> ${targetPath}`;
    }

    /**
     * サイズをフォーマットして表示します
     * @param bytes バイト数
     * @returns フォーマットされたサイズ文字列
     */
    formatSize(bytes: number): string {
        return FileSystemUtils.formatSize(bytes);
    }
} 
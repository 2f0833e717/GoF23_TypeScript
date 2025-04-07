/**
 * ファイルクラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * ファイルシステムの末端要素（リーフ）として機能します。
 */
import { FileSystemComponent } from '../../common/interfaces/FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';
import { Directory } from './Directory';
import { FileSystemUtils } from './FileSystemUtils';
import { FileSystemElement } from '../../common/interfaces/FileSystemElement';

export class File implements FileSystemComponent, FileSystemElement {
    private name: string;
    private size: number;
    private parent: FileSystemComponent | null;
    private createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name ファイル名
     * @param size ファイルサイズ（バイト）
     */
    constructor(name: string, size: number) {
        if (size < 0) {
            throw new Error('ファイルサイズは0以上である必要があります');
        }
        this.name = name;
        this.size = size;
        this.parent = null;
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
        if (parent && !(parent instanceof Directory)) {
            throw new Error('親ディレクトリが不正です');
        }
        this.parent = parent;
    }

    getPath(): string {
        return this.parent ? `${this.parent.getPath()}/${this.name}` : this.name;
    }

    /**
     * ファイルの内容を更新します
     * @param size 新しいファイルサイズ（バイト）
     */
    updateContent(size: number): void {
        if (size < 0) {
            throw new Error('ファイルサイズは0以上である必要があります');
        }
        this.size = size;
        this.modifiedAt = new Date();
    }

    /**
     * ファイルの表示文字列を取得します
     * @returns フォーマットされた文字列
     */
    display(): string {
        const sizeStr = FileSystemUtils.formatSize(this.size);
        const dateStr = this.modifiedAt.toLocaleString();
        return `${sizeStr} ${dateStr} ${this.name}`;
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
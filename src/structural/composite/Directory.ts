/**
 * ディレクトリクラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * 他のコンポーネント（ファイルやディレクトリ）を含むことができる複合オブジェクトとして機能します。
 */
import { FileSystemComponent } from '../../common/interfaces/FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';
import { FileSystemUtils } from './FileSystemUtils';
import { FileSystemElement } from '../../common/interfaces/FileSystemElement';

export class Directory implements FileSystemComponent, FileSystemElement {
    private name: string;
    private children: Map<string, FileSystemComponent>;
    private parent: FileSystemComponent | null;
    private createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name ディレクトリ名
     */
    constructor(name: string) {
        this.name = name;
        this.children = new Map();
        this.parent = null;
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }

    accept(visitor: FileSystemVisitor): void {
        visitor.visitDirectory(this);
    }

    getName(): string {
        return this.name;
    }

    getPath(): string {
        return this.parent ? `${this.parent.getPath()}/${this.name}` : this.name;
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

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getModifiedAt(): Date {
        return this.modifiedAt;
    }

    getSize(): number {
        let totalSize = 0;
        for (const child of this.children.values()) {
            totalSize += child.getSize();
        }
        return totalSize;
    }

    add(component: FileSystemComponent): void {
        if (!component) {
            throw new Error('追加する要素が不正です');
        }
        const name = component.getName();
        if (this.children.has(name)) {
            throw new Error(`同名の要素が既に存在します: ${name}`);
        }
        this.children.set(name, component);
        component.setParent(this);
        this.modifiedAt = new Date();
    }

    remove(name: string): void {
        if (!this.children.has(name)) {
            throw new Error(`指定された要素が存在しません: ${name}`);
        }
        const component = this.children.get(name)!;
        component.setParent(null);
        this.children.delete(name);
        this.modifiedAt = new Date();
    }

    getChild(name: string): FileSystemComponent {
        const child = this.children.get(name);
        if (!child) {
            throw new Error(`指定された要素が存在しません: ${name}`);
        }
        return child;
    }

    getChildren(): FileSystemComponent[] {
        return Array.from(this.children.values());
    }

    isEmpty(): boolean {
        return this.children.size === 0;
    }

    /**
     * ディレクトリの表示文字列を取得します
     * @returns フォーマットされた文字列
     */
    display(): string {
        const sizeStr = FileSystemUtils.formatSize(this.getSize());
        const dateStr = this.modifiedAt.toLocaleString();
        let result = `${sizeStr} ${dateStr} ${this.name}/`;

        if (this.isEmpty()) {
            result += '\n  (空のディレクトリ)';
            return result;
        }

        for (const child of this.children.values()) {
            result += '\n  ' + child.display();
        }

        return result;
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
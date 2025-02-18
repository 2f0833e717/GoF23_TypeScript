/**
 * ディレクトリクラス
 * 
 * FileSystemComponentインターフェースを実装する具象クラスです。
 * 他のコンポーネント（ファイルやディレクトリ）を含むことができる複合オブジェクトとして機能します。
 */
import { FileSystemComponent } from './FileSystemComponent';
import { FileSystemVisitor } from '../../behavioral/visitor/FileSystemVisitor';

export class Directory implements FileSystemComponent {
    private children: Map<string, FileSystemComponent> = new Map();
    private parent: FileSystemComponent | null = null;
    private readonly createdAt: Date;
    private modifiedAt: Date;

    /**
     * コンストラクタ
     * @param name ディレクトリ名
     */
    constructor(private readonly name: string) {
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }

    accept(visitor: FileSystemVisitor): void {
        visitor.visitDirectory(this);
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        let totalSize = 0;
        for (const child of this.children.values()) {
            totalSize += child.getSize();
        }
        return totalSize;
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
     * 子コンポーネントを追加します
     * @param component 追加するコンポーネント
     * @throws Error 同名のコンポーネントが既に存在する場合
     */
    add(component: FileSystemComponent): void {
        const componentName = component.getName();
        if (this.children.has(componentName)) {
            throw new Error(`コンポーネント "${componentName}" は既に存在します`);
        }
        this.children.set(componentName, component);
        component.setParent(this);
        this.modifiedAt = new Date();
    }

    /**
     * 子コンポーネントを削除します
     * @param name 削除するコンポーネントの名前
     * @throws Error 指定された名前のコンポーネントが存在しない場合
     */
    remove(name: string): void {
        if (!this.children.has(name)) {
            throw new Error(`コンポーネント "${name}" が見つかりません`);
        }
        const component = this.children.get(name)!;
        component.setParent(null);
        this.children.delete(name);
        this.modifiedAt = new Date();
    }

    /**
     * 指定された名前の子コンポーネントを取得します
     * @param name コンポーネントの名前
     * @returns 子コンポーネント
     * @throws Error 指定された名前のコンポーネントが存在しない場合
     */
    getChild(name: string): FileSystemComponent {
        if (!this.children.has(name)) {
            throw new Error(`コンポーネント "${name}" が見つかりません`);
        }
        return this.children.get(name)!;
    }

    /**
     * すべての子コンポーネントを取得します
     * @returns 子コンポーネントの配列
     */
    getChildren(): FileSystemComponent[] {
        return Array.from(this.children.values());
    }

    /**
     * ディレクトリが空かどうかを確認します
     * @returns ディレクトリが空の場合はtrue
     */
    isEmpty(): boolean {
        return this.children.size === 0;
    }

    /**
     * ディレクトリの表示文字列を取得します
     * @param indent インデントレベル
     * @returns フォーマットされた文字列
     */
    display(indent: number = 0): string {
        const indentation = ' '.repeat(indent * 2);
        let result = `${indentation}📁 ${this.name} (${this.formatSize(this.getSize())})`;

        if (this.isEmpty()) {
            result += '\n' + ' '.repeat((indent + 1) * 2) + '(空のディレクトリ)';
            return result;
        }

        for (const child of this.children.values()) {
            result += '\n' + child.display(indent + 1);
        }

        return result;
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
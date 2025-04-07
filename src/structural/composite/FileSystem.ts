/**
 * ファイルシステム
 * 
 * Compositeパターンを使用して、ファイルとディレクトリの階層構造を管理します。
 * - ファイルとディレクトリの統一的な操作
 * - 階層構造の管理
 * - パーミッションの管理
 * - メタデータの管理
 */

/**
 * ファイルシステムエントリの種類
 */
export enum FileSystemEntryType {
    FILE = 'FILE',
    DIRECTORY = 'DIRECTORY'
}

/**
 * パーミッション
 */
export class Permission {
    constructor(
        public read: boolean = true,
        public write: boolean = true,
        public execute: boolean = false
    ) { }

    /**
     * パーミッションを文字列形式で取得します
     */
    toString(): string {
        return `${this.read ? 'r' : '-'}${this.write ? 'w' : '-'}${this.execute ? 'x' : '-'}`;
    }

    /**
     * パーミッションをコピーします
     */
    clone(): Permission {
        return new Permission(this.read, this.write, this.execute);
    }
}

/**
 * ファイルシステムエントリの抽象クラス
 */
export abstract class FileSystemEntry {
    protected parent: Directory | null = null;
    protected created: Date;
    protected modified: Date;
    protected permission: Permission;

    constructor(
        protected name: string,
        permission?: Permission
    ) {
        this.created = new Date();
        this.modified = new Date();
        this.permission = permission || new Permission();
    }

    /**
     * エントリの種類を取得します
     */
    abstract getType(): FileSystemEntryType;

    /**
     * エントリのサイズを取得します
     */
    abstract getSize(): number;

    /**
     * エントリの完全パスを取得します
     */
    getPath(): string {
        if (this.parent) {
            return `${this.parent.getPath()}/${this.name}`;
        }
        return this.name;
    }

    /**
     * エントリ名を取得します
     */
    getName(): string {
        return this.name;
    }

    /**
     * エントリ名を設定します
     */
    setName(name: string): void {
        if (!this.permission.write) {
            throw new Error('書き込み権限がありません');
        }
        this.name = name;
        this.modified = new Date();
    }

    /**
     * 作成日時を取得します
     */
    getCreated(): Date {
        return new Date(this.created.getTime());
    }

    /**
     * 更新日時を取得します
     */
    getModified(): Date {
        return new Date(this.modified.getTime());
    }

    /**
     * パーミッションを取得します
     */
    getPermission(): Permission {
        return this.permission.clone();
    }

    /**
     * パーミッションを設定します
     */
    setPermission(permission: Permission): void {
        this.permission = permission.clone();
        this.modified = new Date();
    }

    /**
     * 親ディレクトリを設定します
     */
    setParent(parent: Directory | null): void {
        this.parent = parent;
    }

    /**
     * エントリの情報を文字列形式で取得します
     */
    toString(): string {
        return `${this.permission.toString()} ${this.getSize().toString().padStart(8)} ${this.modified.toISOString()} ${this.name}`;
    }
}

/**
 * ファイルクラス
 */
export class File extends FileSystemEntry {
    constructor(
        name: string,
        private content: string = '',
        permission?: Permission
    ) {
        super(name, permission);
    }

    getType(): FileSystemEntryType {
        return FileSystemEntryType.FILE;
    }

    getSize(): number {
        return this.content.length;
    }

    /**
     * ファイルの内容を取得します
     */
    getContent(): string {
        if (!this.permission.read) {
            throw new Error('読み取り権限がありません');
        }
        return this.content;
    }

    /**
     * ファイルの内容を設定します
     */
    setContent(content: string): void {
        if (!this.permission.write) {
            throw new Error('書き込み権限がありません');
        }
        this.content = content;
        this.modified = new Date();
    }

    /**
     * ファイルの内容を追加します
     */
    appendContent(content: string): void {
        if (!this.permission.write) {
            throw new Error('書き込み権限がありません');
        }
        this.content += content;
        this.modified = new Date();
    }
}

/**
 * ディレクトリクラス
 */
export class Directory extends FileSystemEntry {
    private entries: Map<string, FileSystemEntry> = new Map();

    constructor(
        name: string,
        permission?: Permission
    ) {
        super(name, permission);
    }

    getType(): FileSystemEntryType {
        return FileSystemEntryType.DIRECTORY;
    }

    getSize(): number {
        let totalSize = 0;
        for (const entry of this.entries.values()) {
            totalSize += entry.getSize();
        }
        return totalSize;
    }

    /**
     * エントリを追加します
     */
    addEntry(entry: FileSystemEntry): void {
        if (!this.permission.write) {
            throw new Error('書き込み権限がありません');
        }
        if (this.entries.has(entry.getName())) {
            throw new Error('同名のエントリが既に存在します');
        }
        this.entries.set(entry.getName(), entry);
        entry.setParent(this);
        this.modified = new Date();
    }

    /**
     * エントリを削除します
     */
    removeEntry(name: string): void {
        if (!this.permission.write) {
            throw new Error('書き込み権限がありません');
        }
        if (!this.entries.has(name)) {
            throw new Error('エントリが見つかりません');
        }
        const entry = this.entries.get(name)!;
        entry.setParent(null);
        this.entries.delete(name);
        this.modified = new Date();
    }

    /**
     * エントリを取得します
     */
    getEntry(name: string): FileSystemEntry | null {
        if (!this.permission.read) {
            throw new Error('読み取り権限がありません');
        }
        return this.entries.get(name) || null;
    }

    /**
     * すべてのエントリを取得します
     */
    getEntries(): FileSystemEntry[] {
        if (!this.permission.read) {
            throw new Error('読み取り権限がありません');
        }
        return Array.from(this.entries.values());
    }

    /**
     * ディレクトリが空かどうかを確認します
     */
    isEmpty(): boolean {
        return this.entries.size === 0;
    }

    /**
     * エントリ数を取得します
     */
    getEntryCount(): number {
        return this.entries.size;
    }

    /**
     * 再帰的にパーミッションを設定します
     */
    setPermissionRecursive(permission: Permission): void {
        this.setPermission(permission);
        for (const entry of this.entries.values()) {
            if (entry instanceof Directory) {
                entry.setPermissionRecursive(permission);
            } else {
                entry.setPermission(permission);
            }
        }
    }
} 
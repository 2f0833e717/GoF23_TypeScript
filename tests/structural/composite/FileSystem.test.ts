import { FileSystemComponent } from '../../../src/common/interfaces/FileSystemComponent';
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';

describe('FileSystem', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    describe('File', () => {
        describe('基本操作', () => {
            it('ファイルを作成できること', () => {
                const file = new File('test.txt', 13);
                expect(file.getName()).toBe('test.txt');
                expect(file.getSize()).toBe(13);
            });

            it('親ディレクトリの設定と取得ができること', () => {
                const dir = new Directory('docs');
                const file = new File('test.txt', 13);
                file.setParent(dir);
                expect(file.getPath()).toBe('docs/test.txt');
                file.setParent(null);
                expect(file.getPath()).toBe('test.txt');
            });

            it('ファイルの情報を表示できること', () => {
                const file = new File('test.txt', 13);
                const info = file.display();
                expect(info).toContain('test.txt');
                expect(info).toContain('13.0 B');
            });
        });

        describe('メタデータ', () => {
            it('作成日時と更新日時を取得できること', () => {
                const file = new File('test.txt', 13);
                expect(file.getCreatedAt()).toBeInstanceOf(Date);
                expect(file.getModifiedAt()).toBeInstanceOf(Date);
            });

            it('内容を更新すると更新日時が変更されること', () => {
                const file = new File('test.txt', 13);
                const originalModifiedAt = file.getModifiedAt();
                jest.advanceTimersByTime(1000);
                file.updateContent(26);
                expect(file.getModifiedAt().getTime()).toBeGreaterThan(originalModifiedAt.getTime());
            });
        });

        describe('エラーケース', () => {
            it('不正なサイズでファイルを作成できないこと', () => {
                expect(() => new File('test.txt', -1)).toThrow();
            });

            it('不正な親ディレクトリを設定できないこと', () => {
                const file = new File('test.txt', 13);
                expect(() => file.setParent({} as Directory)).toThrow();
            });

            it('不正なサイズで更新できないこと', () => {
                const file = new File('test.txt', 13);
                expect(() => file.updateContent(-1)).toThrow();
            });
        });
    });

    describe('Directory', () => {
        describe('エントリ管理', () => {
            it('ファイルを追加・削除できること', () => {
                const dir = new Directory('docs');
                const file = new File('test.txt', 13);
                dir.add(file);
                expect(dir.getChildren()).toContain(file);
                dir.remove('test.txt');
                expect(dir.getChildren()).not.toContain(file);
            });

            it('エントリを取得できること', () => {
                const dir = new Directory('docs');
                const file = new File('test.txt', 13);
                dir.add(file);
                expect(dir.getChild('test.txt')).toBe(file);
                expect(() => dir.getChild('nonexistent.txt')).toThrow();
            });

            it('同名のファイルを追加できないこと', () => {
                const dir = new Directory('docs');
                const file1 = new File('test.txt', 13);
                const file2 = new File('test.txt', 26);
                dir.add(file1);
                expect(() => dir.add(file2)).toThrow();
            });
        });

        describe('階層構造', () => {
            it('ディレクトリの階層構造を作成できること', () => {
                const root = new Directory('root');
                const docs = new Directory('docs');
                const subdir = new Directory('subdir');
                root.add(docs);
                docs.add(subdir);
                expect(subdir.getPath()).toBe('root/docs/subdir');
            });
        });

        describe('サイズ計算', () => {
            it('ディレクトリのサイズを計算できること', () => {
                const dir = new Directory('docs');
                dir.add(new File('test.txt', 13));
                expect(dir.getSize()).toBe(13);
            });

            it('再帰的なサイズ計算ができること', () => {
                const dir = new Directory('docs');
                const subdir = new Directory('subdir');
                dir.add(new File('test1.txt', 5));
                dir.add(subdir);
                subdir.add(new File('test2.txt', 5));
                expect(dir.getSize()).toBe(10);
            });

            it('ディレクトリの情報を表示できること', () => {
                const dir = new Directory('docs');
                const info = dir.display();
                expect(info).toContain('docs');
                expect(info).toContain('0.0 B');
            });
        });

        describe('空のディレクトリ', () => {
            it('空のディレクトリを判定できること', () => {
                const dir = new Directory('docs');
                expect(dir.isEmpty()).toBe(true);
                dir.add(new File('test.txt', 13));
                expect(dir.isEmpty()).toBe(false);
            });
        });

        describe('エラーケース', () => {
            it('不正な親ディレクトリを設定できないこと', () => {
                const dir = new Directory('docs');
                expect(() => dir.setParent({} as Directory)).toThrow();
            });

            it('存在しない子要素を取得できないこと', () => {
                const dir = new Directory('docs');
                expect(() => dir.getChild('nonexistent.txt')).toThrow();
            });

            it('存在しない子要素を削除できないこと', () => {
                const dir = new Directory('docs');
                expect(() => dir.remove('nonexistent.txt')).toThrow();
            });

            it('不正な子要素を追加できないこと', () => {
                const dir = new Directory('docs');
                expect(() => dir.add({} as FileSystemComponent)).toThrow();
            });

            it('同名の子要素を追加できないこと', () => {
                const dir = new Directory('docs');
                const file1 = new File('test.txt', 13);
                const file2 = new File('test.txt', 26);
                dir.add(file1);
                expect(() => dir.add(file2)).toThrow();
            });
        });
    });

    describe('SymbolicLink', () => {
        it('基本的なプロパティの取得', () => {
            const target = new File('target.txt', 1024);
            const link = new SymbolicLink('link', target);

            expect(link.getName()).toBe('link');
            expect(link.getSize()).toBe(1024);
            expect(link.getCreatedAt()).toBeInstanceOf(Date);
            expect(link.getModifiedAt()).toBeInstanceOf(Date);
        });

        it('リンク先の取得と設定', () => {
            const target1 = new File('target1.txt', 1024);
            const target2 = new File('target2.txt', 2048);
            const link = new SymbolicLink('link', target1);

            expect(link.getTarget()).toBe(target1);
            expect(link.getTargetPath()).toBe('target1.txt');

            const originalModifiedAt = link.getModifiedAt();
            jest.advanceTimersByTime(1000);

            link.setTarget(target2);
            expect(link.getTarget()).toBe(target2);
            expect(link.getTargetPath()).toBe('target2.txt');
            expect(link.getModifiedAt().getTime()).toBeGreaterThan(originalModifiedAt.getTime());
        });

        it('パスの取得', () => {
            const root = new Directory('root');
            const docs = new Directory('docs');
            const target = new File('target.txt', 1024);
            const link = new SymbolicLink('link', target);

            root.add(docs);
            docs.add(link);

            expect(link.getPath()).toBe('root/docs/link');
        });

        it('リンクの有効性チェック', () => {
            const target = new File('target.txt', 1024);
            const validLink = new SymbolicLink('valid-link', target);
            const invalidLink = new SymbolicLink('invalid-link', null as any);

            expect(validLink.isValid()).toBe(true);
            expect(invalidLink.isValid()).toBe(false);
        });

        it('表示文字列のフォーマット', () => {
            const target = new File('target.txt', 1536);
            const link = new SymbolicLink('link', target);

            const display = link.display();
            expect(display).toContain('link');
            expect(display).toContain('target.txt');
            expect(display).toContain('1.5 KB');
        });

        describe('エラーケース', () => {
            it('不正なターゲットでシンボリックリンクを作成できないこと', () => {
                expect(() => new SymbolicLink('link', {} as FileSystemComponent)).toThrow();
            });

            it('不正な親ディレクトリを設定できないこと', () => {
                const target = new File('target.txt', 1024);
                const link = new SymbolicLink('link', target);
                expect(() => link.setParent({} as Directory)).toThrow();
            });

            it('不正なターゲットを設定できないこと', () => {
                const target = new File('target.txt', 1024);
                const link = new SymbolicLink('link', target);
                expect(() => link.setTarget({} as FileSystemComponent)).toThrow();
            });
        });
    });
}); 
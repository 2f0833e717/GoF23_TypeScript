/**
 * ファイル検索のテスト
 */
import {
    FileSearcher,
    SearchCriteria,
} from '../../../src/behavioral/visitor/visitors/FileSearcher';
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';

describe('FileSearcher', () => {
    let searcher: FileSearcher;

    beforeEach(() => {
        searcher = new FileSearcher({});
    });

    describe('visitFile', () => {
        it('ファイル名で検索できること', () => {
            const criteria: SearchCriteria = {
                name: /test\.txt$/,
            };
            searcher = new FileSearcher(criteria);

            const file1 = new File('test.txt', 100);
            const file2 = new File('other.txt', 100);

            searcher.visitFile(file1);
            searcher.visitFile(file2);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('test.txt');
        });

        it('サイズで検索できること', () => {
            const criteria: SearchCriteria = {
                minSize: 50,
                maxSize: 150,
            };
            searcher = new FileSearcher(criteria);

            const file1 = new File('small.txt', 25);
            const file2 = new File('medium.txt', 100);
            const file3 = new File('large.txt', 200);

            searcher.visitFile(file1);
            searcher.visitFile(file2);
            searcher.visitFile(file3);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('medium.txt');
        });

        it('作成日時で検索できること', () => {
            const now = new Date();
            const pastDate = new Date(now.getTime() - 1000 * 60 * 60); // 1時間前
            const futureDate = new Date(now.getTime() + 1000 * 60 * 60); // 1時間後

            const criteria: SearchCriteria = {
                createdAfter: pastDate,
                createdBefore: futureDate,
            };
            searcher = new FileSearcher(criteria);

            const file = new File('test.txt', 100);
            searcher.visitFile(file);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('test.txt');
        });

        it('更新日時で検索できること', () => {
            const now = new Date();
            const pastDate = new Date(now.getTime() - 1000 * 60 * 60); // 1時間前
            const futureDate = new Date(now.getTime() + 1000 * 60 * 60); // 1時間後

            const criteria: SearchCriteria = {
                modifiedAfter: pastDate,
                modifiedBefore: futureDate,
            };
            searcher = new FileSearcher(criteria);

            const file = new File('test.txt', 100);
            searcher.visitFile(file);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('test.txt');
        });
    });

    describe('visitDirectory', () => {
        it('ディレクトリを検索できること', () => {
            const criteria: SearchCriteria = {
                name: /test$/,
            };
            searcher = new FileSearcher(criteria);

            const dir1 = new Directory('test');
            const dir2 = new Directory('other');

            searcher.visitDirectory(dir1);
            searcher.visitDirectory(dir2);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('test');
        });
    });

    describe('visitSymbolicLink', () => {
        it('シンボリックリンクを検索できること', () => {
            const criteria: SearchCriteria = {
                name: /link$/,
            };
            searcher = new FileSearcher(criteria);

            const file = new File('target.txt', 100);
            const link = new SymbolicLink('test-link', file);

            searcher.visitSymbolicLink(link);

            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('test-link');
        });
    });

    describe('reset', () => {
        it('検索結果をリセットできること', () => {
            const file = new File('test.txt', 100);
            searcher.visitFile(file);
            expect(searcher.getResult()).toHaveLength(1);

            searcher.reset();
            expect(searcher.getResult()).toHaveLength(0);
        });
    });
}); 
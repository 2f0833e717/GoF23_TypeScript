/**
 * ファイルシステムVisitorのテスト
 */
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';
import { SizeCalculator } from '../../../src/behavioral/visitor/visitors/SizeCalculator';
import { FileSearcher, SearchCriteria } from '../../../src/behavioral/visitor/visitors/FileSearcher';
import { FileStructureVisualizer } from '../../../src/behavioral/visitor/visitors/FileStructureVisualizer';

describe('Visitor Pattern - File System', () => {
    let root: Directory;
    let docs: Directory;
    let src: Directory;
    let readme: File;
    let config: File;
    let symlink: SymbolicLink;

    beforeEach(() => {
        root = new Directory('project');
        docs = new Directory('docs');
        src = new Directory('src');
        readme = new File('README.md', 2048); // 2KB
        config = new File('config.json', 1024); // 1KB
        symlink = new SymbolicLink('readme-link', readme);

        root.add(docs);
        root.add(src);
        root.add(readme);
        root.add(config);
        root.add(symlink);
    });

    describe('FileSearcher', () => {
        it('should find files by name pattern', () => {
            const searcher = new FileSearcher({ name: /README\.md/ });
            root.accept(searcher);
            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('README.md');
        });

        it('should find files by size range', () => {
            const criteria: SearchCriteria = {
                minSize: 1500,
                maxSize: 2500,
                name: /README\.md$/ // 名前でフィルタリングしてシンボリックリンクを除外
            };
            const searcher = new FileSearcher(criteria);
            root.accept(searcher);
            const results = searcher.getResult();
            expect(results).toHaveLength(1);
            expect(results[0].getName()).toBe('README.md');
        });

        it('should find files by creation date', () => {
            const now = new Date();
            const criteria: SearchCriteria = {
                createdAfter: new Date(now.getTime() - 1000), // 1秒前
                createdBefore: new Date(now.getTime() + 1000) // 1秒後
            };
            const searcher = new FileSearcher(criteria);
            root.accept(searcher);
            const results = searcher.getResult();
            expect(results.length).toBeGreaterThan(0);
        });

        it('should find files by modification date', () => {
            const now = new Date();
            const criteria: SearchCriteria = {
                modifiedAfter: new Date(now.getTime() - 1000), // 1秒前
                modifiedBefore: new Date(now.getTime() + 1000) // 1秒後
            };
            const searcher = new FileSearcher(criteria);
            root.accept(searcher);
            const results = searcher.getResult();
            expect(results.length).toBeGreaterThan(0);
        });

        it('should handle no matches', () => {
            const searcher = new FileSearcher({ name: /nonexistent/ });
            root.accept(searcher);
            const results = searcher.getResult();
            expect(results).toHaveLength(0);
        });

        it('should handle invalid search criteria', () => {
            expect(() => {
                new FileSearcher({ minSize: -100 });
            }).toThrow();
        });
    });

    describe('FileStructureVisualizer', () => {
        it('should visualize file system structure', () => {
            const visualizer = new FileStructureVisualizer();
            root.accept(visualizer);
            const result = visualizer.getResult();
            expect(result).toContain('project');
            expect(result).toContain('README.md');
            expect(result).toContain('config.json');
            expect(result).toContain('docs');
            expect(result).toContain('src');
        });

        it('should show empty directories', () => {
            const visualizer = new FileStructureVisualizer();
            docs.accept(visualizer);
            const result = visualizer.getResult();
            expect(result).toContain('(空のディレクトリ)');
        });

        it('should format file sizes', () => {
            const visualizer = new FileStructureVisualizer();
            readme.accept(visualizer);
            const result = visualizer.getResult();
            expect(result).toContain('2.0 KB');
        });

        it('should handle symbolic links correctly', () => {
            const visualizer = new FileStructureVisualizer();
            symlink.accept(visualizer);
            const result = visualizer.getResult();
            expect(result).toContain('readme-link');
            expect(result).toContain('->');
            expect(result).toContain('README.md');
        });

        it('should reset visualization state', () => {
            const visualizer = new FileStructureVisualizer();
            readme.accept(visualizer);
            let result = visualizer.getResult();
            expect(result).not.toBe('');
            
            visualizer.reset();
            result = visualizer.getResult();
            expect(result).toBe('');
        });

        it('should throw an error when setting invalid indent size', () => {
            const visualizer = new FileStructureVisualizer();
            expect(() => {
                visualizer.setIndentSize(0);
            }).toThrow('インデントサイズは1以上の整数である必要があります');
        });
    });

    describe('SizeCalculator', () => {
        it('should calculate total size', () => {
            const calculator = new SizeCalculator();
            root.accept(calculator);
            const totalSize = calculator.getResult();
            // 2048(readme) + 1024(config) + シンボリックリンクのサイズ
            expect(totalSize).toBeGreaterThan(3072);
        });

        it('should handle empty directories', () => {
            const calculator = new SizeCalculator();
            docs.accept(calculator);
            const totalSize = calculator.getResult();
            expect(totalSize).toBe(0);
        });

        it('should handle symbolic links correctly', () => {
            const calculator = new SizeCalculator();
            symlink.accept(calculator);
            const totalSize = calculator.getResult();
            expect(totalSize).toBeGreaterThan(0);
            
            // シンボリックリンクのサイズはターゲットファイルのサイズと同じであることを確認
            expect(totalSize).toBe(symlink.getSize());
            expect(totalSize).toBe(readme.getSize());
        });

        it('should reset calculation state', () => {
            const calculator = new SizeCalculator();
            root.accept(calculator);
            let totalSize = calculator.getResult();
            expect(totalSize).toBeGreaterThan(0);
            
            calculator.reset();
            totalSize = calculator.getResult();
            expect(totalSize).toBe(0);
        });

        it('should reset calculation state after calculating multiple directories', () => {
            const calculator = new SizeCalculator();
            
            // まずdocsディレクトリを計算
            docs.accept(calculator);
            let docsSize = calculator.getResult();
            
            // 次にrootディレクトリを計算（リセットなし）
            root.accept(calculator);
            let combinedSize = calculator.getResult();
            
            // リセットすると0に戻る
            calculator.reset();
            expect(calculator.getResult()).toBe(0);
            
            // srcディレクトリのみを計算
            src.accept(calculator);
            let srcSize = calculator.getResult();
            
            // 合計サイズがdocsとsrcの合計よりも大きいことを確認（rootには他のファイルもある）
            expect(combinedSize).toBeGreaterThan(docsSize + srcSize);
        });

        it('should format size properly', () => {
            const formatted = SizeCalculator.formatSize(1536);
            expect(formatted).toBe('1.5 KB');
        });

        it('should handle size units correctly', () => {
            expect(SizeCalculator.formatSize(500)).toContain('B');
            expect(SizeCalculator.formatSize(1500)).toContain('KB');
            expect(SizeCalculator.formatSize(1500000)).toContain('MB');
            expect(SizeCalculator.formatSize(1500000000)).toContain('GB');
        });
    });
}); 
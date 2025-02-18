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

    beforeEach(() => {
        root = new Directory('project');
        docs = new Directory('docs');
        src = new Directory('src');
        readme = new File('README.md', 2048); // 2KB
        config = new File('config.json', 1024); // 1KB

        root.add(docs);
        root.add(src);
        root.add(readme);
        root.add(config);
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
                maxSize: 2500
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
    });

    describe('SizeCalculator', () => {
        it('should calculate total size', () => {
            const calculator = new SizeCalculator();
            root.accept(calculator);
            const totalSize = calculator.getResult();
            expect(totalSize).toBe(3072); // 2048 + 1024
        });

        it('should handle empty directories', () => {
            const calculator = new SizeCalculator();
            docs.accept(calculator);
            const totalSize = calculator.getResult();
            expect(totalSize).toBe(0);
        });
    });
}); 
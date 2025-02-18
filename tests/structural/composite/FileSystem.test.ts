/**
 * ファイルシステムのテスト
 */
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';
import { SizeCalculator } from '../../../src/behavioral/visitor/visitors/SizeCalculator';
import { FileSearcher } from '../../../src/behavioral/visitor/visitors/FileSearcher';
import { FileStructureVisualizer } from '../../../src/behavioral/visitor/visitors/FileStructureVisualizer';

describe('Composite Pattern - File System', () => {
    let root: Directory;
    let docs: Directory;
    let src: Directory;
    let readme: File;
    let config: File;
    let docsLink: SymbolicLink;

    beforeEach(() => {
        root = new Directory('project');
        docs = new Directory('docs');
        src = new Directory('src');
        readme = new File('README.md', 2048);
        config = new File('config.json', 1024);
        docsLink = new SymbolicLink('docs-link', docs);

        root.add(docs);
        root.add(src);
        root.add(readme);
        root.add(config);
        root.add(docsLink);
    });

    describe('File Operations', () => {
        it('should handle file size and content updates', () => {
            expect(readme.getSize()).toBe(2048);
            readme.updateContent(3072);
            expect(readme.getSize()).toBe(3072);
            expect(readme.getModifiedAt()).not.toBe(readme.getCreatedAt());
        });

        it('should format file size correctly', () => {
            expect(readme.formatSize(1024)).toBe('1.0 KB');
            expect(readme.formatSize(1536)).toBe('1.5 KB');
            expect(readme.formatSize(2 * 1024 * 1024)).toBe('2.0 MB');
        });
    });

    describe('Directory Operations', () => {
        it('should calculate total size correctly', () => {
            expect(root.getSize()).toBe(3072); // 2048 + 1024
            expect(docs.getSize()).toBe(0);
            expect(src.getSize()).toBe(0);
        });

        it('should handle empty directories', () => {
            expect(docs.isEmpty()).toBe(true);
            const file = new File('test.txt', 512);
            docs.add(file);
            expect(docs.isEmpty()).toBe(false);
        });

        it('should handle component addition and removal', () => {
            const file = new File('test.txt', 512);
            docs.add(file);
            expect(docs.getSize()).toBe(512);
            expect(file.getParent()).toBe(docs);

            docs.remove('test.txt');
            expect(docs.getSize()).toBe(0);
            expect(file.getParent()).toBeNull();
        });

        it('should throw error for duplicate names', () => {
            const file = new File('README.md', 512);
            expect(() => root.add(file)).toThrow();
        });

        it('should throw error for non-existent components', () => {
            expect(() => root.remove('nonexistent')).toThrow();
            expect(() => root.getChild('nonexistent')).toThrow();
        });
    });

    describe('Symbolic Link Operations', () => {
        it('should handle target path and validity', () => {
            expect(docsLink.getTargetPath()).toBe('project/docs');
            expect(docsLink.isValid()).toBe(true);
        });

        it('should update target correctly', () => {
            docsLink.setTarget(src);
            expect(docsLink.getTargetPath()).toBe('project/src');
            expect(docsLink.getTarget()).toBe(src);
        });

        it('should handle size delegation', () => {
            const file = new File('test.txt', 512);
            docs.add(file);
            expect(docsLink.getSize()).toBe(512);
        });
    });

    describe('Path Construction', () => {
        it('should construct paths correctly', () => {
            expect(readme.getPath()).toBe('project/README.md');
            expect(docs.getPath()).toBe('project/docs');
            expect(docsLink.getPath()).toBe('project/docs-link');
        });

        it('should handle nested paths', () => {
            const nested = new Directory('nested');
            const file = new File('test.txt', 512);
            docs.add(nested);
            nested.add(file);
            expect(file.getPath()).toBe('project/docs/nested/test.txt');
        });
    });
}); 
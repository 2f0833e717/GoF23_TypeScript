/**
 * ファイル検索のテスト
 */
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';
import { FileSearcher, SearchCriteria } from '../../../src/behavioral/visitor/visitors/FileSearcher';

describe('FileSearcher', () => {
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

    it('should find files by name pattern', () => {
        const searcher = new FileSearcher({
            name: /\.md$/
        });
        root.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(1);
        expect(result[0].getName()).toBe('README.md');
    });

    it('should find files by size range', () => {
        const searcher = new FileSearcher({
            minSize: 1500,
            maxSize: 2500
        });
        root.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(1);
        expect(result[0].getName()).toBe('README.md');
    });

    it('should find files by multiple criteria', () => {
        const searcher = new FileSearcher({
            name: /\.json$/,
            maxSize: 1500
        });
        root.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(1);
        expect(result[0].getName()).toBe('config.json');
    });

    it('should handle no matches', () => {
        const searcher = new FileSearcher({
            name: /\.txt$/
        });
        root.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(0);
    });

    it('should handle empty criteria', () => {
        const searcher = new FileSearcher({});
        root.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(2); // README.md and config.json
    });

    it('should handle symbolic links', () => {
        const file = new File('test.md', 512);
        docs.add(file);

        const searcher = new FileSearcher({
            name: /\.md$/
        });
        docsLink.accept(searcher);
        const result = searcher.getResult();

        expect(result.length).toBe(1);
        expect(result[0].getName()).toBe('test.md');
    });
}); 
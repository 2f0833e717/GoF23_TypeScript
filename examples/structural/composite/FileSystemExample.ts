/**
 * コンポジットパターンの使用例
 * 
 * ファイルシステムの階層構造を使用して、
 * 個々のオブジェクト（ファイル）と複合オブジェクト（ディレクトリ）を
 * 同じように扱える例を示します。
 */
import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';

/**
 * プロジェクトのファイル構造を作成する例を実行します
 */
export function runFileSystemExample(): void {
    console.log('ファイルシステムの例:');
    console.log('--------------------------------');

    // プロジェクトのルートディレクトリを作成
    const projectRoot = new Directory('project');

    // ソースコードディレクトリを作成
    const srcDir = new Directory('src');
    const mainFile = new File('main.ts', 2048);
    const utilFile = new File('utils.ts', 1024);
    srcDir.add(mainFile);
    srcDir.add(utilFile);

    // テストディレクトリを作成
    const testDir = new Directory('tests');
    const testFile = new File('main.test.ts', 1536);
    testDir.add(testFile);

    // ドキュメントディレクトリを作成
    const docsDir = new Directory('docs');
    const readmeFile = new File('README.md', 512);
    const apiDocsFile = new File('API.md', 2560);
    docsDir.add(readmeFile);
    docsDir.add(apiDocsFile);

    // すべてをプロジェクトルートに追加
    projectRoot.add(srcDir);
    projectRoot.add(testDir);
    projectRoot.add(docsDir);

    // プロジェクト構造を表示
    console.log('プロジェクト構造:');
    console.log(projectRoot.display());

    // ファイルの更新例
    console.log('\nファイルの更新:');
    console.log(`更新前の ${mainFile.getPath()} のサイズ: ${mainFile.getSize()} bytes`);
    mainFile.updateContent(3072);
    console.log(`更新後の ${mainFile.getPath()} のサイズ: ${mainFile.getSize()} bytes`);

    // ディレクトリ操作の例
    console.log('\nディレクトリ操作:');
    const configFile = new File('config.json', 256);
    projectRoot.add(configFile);
    console.log('設定ファイルを追加しました');
    console.log(projectRoot.display());

    // ファイル削除の例
    console.log('\nファイル削除:');
    projectRoot.remove('config.json');
    console.log('設定ファイルを削除しました');
    console.log(projectRoot.display());

    // 各ディレクトリのサイズを表示
    console.log('\nディレクトリサイズ:');
    console.log(`src: ${srcDir.getSize()} bytes`);
    console.log(`tests: ${testDir.getSize()} bytes`);
    console.log(`docs: ${docsDir.getSize()} bytes`);
    console.log(`total: ${projectRoot.getSize()} bytes`);
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runFileSystemExample();
} 
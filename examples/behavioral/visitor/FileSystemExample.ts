/**
 * ファイルシステム訪問者パターン実装例
 * 
 * このサンプルでは、Visitorパターンを使用して、ファイルシステムの異なる要素（ファイル、
 * ディレクトリ、シンボリックリンク）に対して、特定の操作を実行する方法を示します。
 * 
 * 3種類の訪問者（Visitor）を使って、異なる処理を実装しています：
 * 1. FileSearcher: 特定の条件に合致するファイルを検索
 * 2. FileStructureVisualizer: ファイル構造を視覚的に表示
 * 3. SizeCalculator: ディレクトリの合計サイズを計算
 */

import { File } from '../../../src/structural/composite/File';
import { Directory } from '../../../src/structural/composite/Directory';
import { SymbolicLink } from '../../../src/structural/composite/SymbolicLink';
import { FileSearcher } from '../../../src/behavioral/visitor/visitors/FileSearcher';
import { FileStructureVisualizer } from '../../../src/behavioral/visitor/visitors/FileStructureVisualizer';
import { SizeCalculator } from '../../../src/behavioral/visitor/visitors/SizeCalculator';

/**
 * ファイルシステムVisitorパターンのサンプル実行クラス
 */
export class FileSystemVisitorExample {
  /**
   * サンプルを実行します
   */
  public static run(): void {
    console.log('===== ファイルシステム Visitor パターン実装例 =====');

    // ファイルシステム構造を作成
    const root = new Directory('root');

    const documents = new Directory('documents');
    root.addEntry(documents);

    const pictures = new Directory('pictures');
    root.addEntry(pictures);

    const report = new File('report.pdf', 2500000); // 2.5MB
    documents.addEntry(report);
    report.setCreationDate(new Date('2024-03-20'));
    report.setModificationDate(new Date('2024-04-01'));

    const presentation = new File('presentation.pptx', 5000000); // 5MB
    documents.addEntry(presentation);
    presentation.setCreationDate(new Date('2024-03-15'));
    presentation.setModificationDate(new Date('2024-03-30'));

    const image1 = new File('vacation.jpg', 3000000); // 3MB
    pictures.addEntry(image1);
    image1.setCreationDate(new Date('2024-02-10'));

    const image2 = new File('family.jpg', 2000000); // 2MB
    pictures.addEntry(image2);
    image2.setCreationDate(new Date('2024-01-20'));

    // サブディレクトリを追加
    const backups = new Directory('backups');
    root.addEntry(backups);

    const oldReport = new File('report_old.pdf', 2000000);
    backups.addEntry(oldReport);
    oldReport.setCreationDate(new Date('2023-12-20'));

    // シンボリックリンクを追加
    const reportLink = new SymbolicLink('report_link', report);
    root.addEntry(reportLink);

    // 1. FileSearcherビジターを使用して、JPG画像を検索
    console.log('\n--- 検索機能のデモ ---');
    const fileSearcher = new FileSearcher({
      namePattern: '.jpg',
    });
    
    root.accept(fileSearcher);
    
    console.log('JPG画像の検索結果:');
    const jpgFiles = fileSearcher.getResult();
    jpgFiles.forEach(file => {
      console.log(` - ${file.getPath()}`);
    });

    // 2. FileStructureVisualizerビジターを使用して、ファイル構造を表示
    console.log('\n--- ファイル構造の可視化 ---');
    const visualizer = new FileStructureVisualizer();
    
    root.accept(visualizer);
    
    console.log(visualizer.getResult());

    // 3. SizeCalculatorビジターを使用して、ディレクトリのサイズを計算
    console.log('\n--- ディレクトリサイズの計算 ---');
    const sizeCalculator = new SizeCalculator();
    
    root.accept(sizeCalculator);
    
    console.log(`ルートディレクトリの合計サイズ: ${sizeCalculator.getResult()}`);
    
    // documents ディレクトリのサイズを計算
    sizeCalculator.reset();
    documents.accept(sizeCalculator);
    console.log(`documentsディレクトリのサイズ: ${sizeCalculator.getResult()}`);
    
    // pictures ディレクトリのサイズを計算
    sizeCalculator.reset();
    pictures.accept(sizeCalculator);
    console.log(`picturesディレクトリのサイズ: ${sizeCalculator.getResult()}`);
  }
}

// サンプル実行
if (require.main === module) {
  FileSystemVisitorExample.run();
} 
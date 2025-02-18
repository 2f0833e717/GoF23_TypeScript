import { Report, Contract } from '../../../../src/creational/prototype/document/ConcreteDocuments';

/**
 * 文書プロトタイプパターンの実行例
 */
export function runDocumentExample(): void {
    console.log('文書プロトタイプパターンの実行例:');
    console.log('--------------------------------');

    // 報告書の作成と複製
    console.log('1. 報告書のデモ:');
    const report = new Report(
        '月次営業報告書',
        '2024年1月の営業活動について報告いたします。\n1. 売上実績\n2. 新規顧客獲得状況\n3. 来月の展望',
        '山田太郎',
        '営業部'
    );
    console.log('\n元の報告書:');
    console.log(report.toString());

    // 報告書のクローンを作成
    const clonedReport = report.clone();
    console.log('\nクローンされた報告書:');
    console.log(clonedReport.toString());

    // 契約書の作成と複製
    console.log('\n2. 契約書のデモ:');
    const contract = new Contract(
        'システム開発委託契約書',
        '第1条 契約の目的\n本契約は、システム開発に関する委託業務について定めるものとする。\n\n第2条 委託内容\n...',
        '法務部長',
        ['株式会社ABC', '株式会社XYZ'],
        new Date('2025-12-31')
    );
    console.log('\n元の契約書:');
    console.log(contract.toString());

    // 契約書のクローンを作成
    const clonedContract = contract.clone();
    console.log('\nクローンされた契約書:');
    console.log(clonedContract.toString());
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runDocumentExample();
} 
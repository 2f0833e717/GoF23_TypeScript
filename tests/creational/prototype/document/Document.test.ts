import { Report, Contract } from '../../../../src/creational/prototype/document/ConcreteDocuments';

describe('Document Prototype Pattern', () => {
    describe('Report', () => {
        test('should create a report with correct metadata', () => {
            const report = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );
            const reportStr = report.toString();

            expect(reportStr).toContain('タイトル: 月次報告書');
            expect(reportStr).toContain('作成者: 山田太郎');
            expect(reportStr).toContain('type: 報告書');
            expect(reportStr).toContain('department: 営業部');
        });

        test('should create a clone with different creation date', () => {
            const original = new Report(
                '月次報告書',
                '今月の活動内容...',
                '山田太郎',
                '営業部'
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 月次報告書');
            expect(clone.toString()).toContain('作成者: 山田太郎');
            expect(clone.toString()).toContain('type: 報告書');
            expect(clone.toString()).toContain('department: 営業部');
            expect(clone['createdAt'].getTime()).toBeGreaterThan(original['createdAt'].getTime());
        });
    });

    describe('Contract', () => {
        test('should create a contract with correct metadata', () => {
            const contract = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );
            const contractStr = contract.toString();

            expect(contractStr).toContain('タイトル: 業務委託契約書');
            expect(contractStr).toContain('作成者: 法務部長');
            expect(contractStr).toContain('type: 契約書');
            expect(contractStr).toContain('parties: 株式会社A, 株式会社B');
            expect(contractStr).toContain('expiration: 12/31/2025');
        });

        test('should create a clone with different creation date but same expiration', () => {
            const original = new Contract(
                '業務委託契約書',
                '契約内容...',
                '法務部長',
                ['株式会社A', '株式会社B'],
                new Date('2025-12-31')
            );

            const clone = original.clone();

            expect(clone.toString()).toContain('タイトル: 業務委託契約書');
            expect(clone.toString()).toContain('expiration: 12/31/2025');
            expect(clone['createdAt'].getTime()).toBeGreaterThan(original['createdAt'].getTime());
        });
    });
}); 
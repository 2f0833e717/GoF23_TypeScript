/**
 * Chain of Responsibilityパターンのテスト
 * 
 * サポートチケット処理チェーンの動作をテストします。
 */
import { Priority, SupportTicket } from '../../../src/behavioral/chain-of-responsibility/Handler';
import { FirstLevelSupportHandler } from '../../../src/behavioral/chain-of-responsibility/FirstLevelSupportHandler';
import { SecondLevelSupportHandler } from '../../../src/behavioral/chain-of-responsibility/SecondLevelSupportHandler';
import { EscalationSupportHandler } from '../../../src/behavioral/chain-of-responsibility/EscalationSupportHandler';

describe('Chain of Responsibility Pattern - Support Chain', () => {
    let firstLevel: FirstLevelSupportHandler;
    let secondLevel: SecondLevelSupportHandler;
    let escalation: EscalationSupportHandler;

    beforeEach(() => {
        firstLevel = new FirstLevelSupportHandler();
        secondLevel = new SecondLevelSupportHandler();
        escalation = new EscalationSupportHandler();

        // ハンドラーチェーンを構築
        firstLevel.setNext(secondLevel).setNext(escalation);
    });

    describe('Basic Ticket Handling', () => {
        test('should handle low priority general ticket at first level', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-001',
                priority: Priority.LOW,
                category: 'general',
                description: '基本的な使い方について',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('FirstLevelSupport');
            expect(result).toContain('TICKET-001');
        });

        test('should handle medium priority technical ticket at second level', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-002',
                priority: Priority.MEDIUM,
                category: 'technical',
                description: 'システムの技術的な問題について',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('SecondLevelSupport');
            expect(result).toContain('TICKET-002');
        });

        test('should handle high priority security ticket at escalation level', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-003',
                priority: Priority.HIGH,
                category: 'security',
                description: 'セキュリティインシデントの報告',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('EscalationSupport');
            expect(result).toContain('TICKET-003');
        });
    });

    describe('Urgent Cases', () => {
        test('should handle urgent cases with special protocol', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-004',
                priority: Priority.URGENT,
                category: 'emergency',
                description: 'システム全体がダウン',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('緊急チケット');
            expect(result).toContain('緊急対応プロトコル');
        });
    });

    describe('Category Handling', () => {
        test('should handle tickets based on category and priority combination', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-005',
                priority: Priority.MEDIUM,
                category: 'account',
                description: 'アカウントの技術的な問題',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('SecondLevelSupport');
        });

        test('should handle unknown category at appropriate level based on priority', () => {
            const ticket: SupportTicket = {
                id: 'TICKET-006',
                priority: Priority.HIGH,
                category: 'unknown',
                description: '未分類の問題',
                createdAt: new Date()
            };

            const result = firstLevel.handle(ticket);
            expect(result).toContain('見つかりませんでした');
        });
    });

    describe('Chain Construction', () => {
        test('should allow dynamic chain reconstruction', () => {
            // チェーンを再構築
            const newFirstLevel = new FirstLevelSupportHandler();
            const newEscalation = new EscalationSupportHandler();
            newFirstLevel.setNext(newEscalation);

            const ticket: SupportTicket = {
                id: 'TICKET-007',
                priority: Priority.HIGH,
                category: 'security',
                description: 'セキュリティ問題',
                createdAt: new Date()
            };

            const result = newFirstLevel.handle(ticket);
            expect(result).toContain('EscalationSupport');
        });

        test('should handle end of chain gracefully', () => {
            const standalone = new FirstLevelSupportHandler();
            const ticket: SupportTicket = {
                id: 'TICKET-008',
                priority: Priority.HIGH,
                category: 'security',
                description: '対応できない問題',
                createdAt: new Date()
            };

            const result = standalone.handle(ticket);
            expect(result).toContain('見つかりませんでした');
        });
    });
}); 
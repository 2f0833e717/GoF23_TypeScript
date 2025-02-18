/**
 * Chain of Responsibilityパターンの使用例
 * 
 * サポートチケットの処理チェーンを使用して、
 * 異なる優先度とカテゴリのチケットを適切なレベルで処理する例を示します。
 */
import { Priority, SupportTicket } from '../../../src/behavioral/chain-of-responsibility/Handler';
import { FirstLevelSupportHandler } from '../../../src/behavioral/chain-of-responsibility/FirstLevelSupportHandler';
import { SecondLevelSupportHandler } from '../../../src/behavioral/chain-of-responsibility/SecondLevelSupportHandler';
import { EscalationSupportHandler } from '../../../src/behavioral/chain-of-responsibility/EscalationSupportHandler';

export function runChainOfResponsibilityExample(): void {
    console.log('Chain of Responsibilityパターンの実行例:');
    console.log('--------------------------------');

    // サポートチェーンを構築
    const firstLevel = new FirstLevelSupportHandler();
    const secondLevel = new SecondLevelSupportHandler();
    const escalation = new EscalationSupportHandler();

    firstLevel.setNext(secondLevel).setNext(escalation);

    // 1. 基本的な問い合わせ（一次サポートで対応）
    console.log('1. 基本的な問い合わせの処理:');
    const basicTicket: SupportTicket = {
        id: 'BASIC-001',
        priority: Priority.LOW,
        category: 'general',
        description: 'アプリケーションの基本的な使い方について質問があります',
        createdAt: new Date()
    };
    console.log(firstLevel.handle(basicTicket));
    console.log();

    // 2. 技術的な問題（二次サポートで対応）
    console.log('2. 技術的な問題の処理:');
    const technicalTicket: SupportTicket = {
        id: 'TECH-001',
        priority: Priority.MEDIUM,
        category: 'technical',
        description: 'データベース接続エラーが発生しています',
        createdAt: new Date()
    };
    console.log(firstLevel.handle(technicalTicket));
    console.log();

    // 3. セキュリティインシデント（エスカレーション対応）
    console.log('3. セキュリティインシデントの処理:');
    const securityTicket: SupportTicket = {
        id: 'SEC-001',
        priority: Priority.HIGH,
        category: 'security',
        description: '不正アクセスの痕跡を検出しました',
        createdAt: new Date()
    };
    console.log(firstLevel.handle(securityTicket));
    console.log();

    // 4. システム緊急事態（緊急対応プロトコル）
    console.log('4. システム緊急事態の処理:');
    const emergencyTicket: SupportTicket = {
        id: 'EMERG-001',
        priority: Priority.URGENT,
        category: 'emergency',
        description: '主要システムが完全停止しています',
        createdAt: new Date()
    };
    console.log(firstLevel.handle(emergencyTicket));
    console.log();

    // 5. 未分類の問題（適切なハンドラーが見つからない）
    console.log('5. 未分類の問題の処理:');
    const unknownTicket: SupportTicket = {
        id: 'UNK-001',
        priority: Priority.MEDIUM,
        category: 'unknown',
        description: '分類不能な問題が発生しています',
        createdAt: new Date()
    };
    console.log(firstLevel.handle(unknownTicket));
    console.log('--------------------------------');
}

// 実行例
if (require.main === module) {
    runChainOfResponsibilityExample();
} 
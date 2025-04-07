/**
 * 暗号化デコレーター
 * 
 * データの書き込み時に暗号化し、読み込み時に復号化する機能を追加します。
 */
import { DataSourceDecorator } from './DataSourceDecorator';
import * as crypto from 'crypto';

export class EncryptionDecorator extends DataSourceDecorator {
    private readonly algorithm = 'aes-256-cbc';
    private readonly key = crypto.scryptSync('password', 'salt', 32);
    private readonly iv = Buffer.alloc(16, 0);

    /**
     * データを暗号化して書き込みます
     * @param data 書き込むデータ
     */
    writeData(data: string): void {
        if (data === null || data === undefined) {
            throw new Error('データが無効です');
        }

        if (typeof data !== 'string') {
            throw new Error('データは文字列である必要があります');
        }

        try {
            const encryptedData = this.encrypt(data);
            super.writeData(encryptedData);
        } catch (error) {
            console.error('データの書き込みに失敗しました:', error);
            throw new Error('データの書き込みに失敗しました');
        }
    }

    /**
     * データを読み込んで復号化します
     * @returns 復号化されたデータ
     */
    readData(): string {
        try {
            const encryptedData = super.readData();
            if (!encryptedData) {
                return '';
            }
            return this.decrypt(encryptedData);
        } catch (error) {
            console.error('データの読み込みに失敗しました:', error);
            throw new Error('データの読み込みに失敗しました');
        }
    }

    /**
     * データを暗号化します
     * @param data 暗号化するデータ
     * @returns 暗号化されたデータ
     */
    private encrypt(data: string): string {
        try {
            if (!data) {
                return '';
            }

            const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
            let encrypted = cipher.update(data, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return encrypted;
        } catch (error) {
            console.error('データの暗号化に失敗しました:', error);
            throw new Error('データの暗号化に失敗しました');
        }
    }

    /**
     * データを復号化します
     * @param encryptedData 暗号化されたデータ
     * @returns 復号化されたデータ
     */
    private decrypt(encryptedData: string): string {
        try {
            if (!encryptedData) {
                return '';
            }

            const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
            let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            console.error('データの復号化に失敗しました:', error);
            throw new Error('データの復号化に失敗しました');
        }
    }
} 
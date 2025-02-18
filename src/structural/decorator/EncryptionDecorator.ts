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
        const encryptedData = this.encrypt(data);
        super.writeData(encryptedData);
    }

    /**
     * データを読み込んで復号化します
     * @returns 復号化されたデータ
     */
    readData(): string {
        const encryptedData = super.readData();
        if (!encryptedData) {
            return '';
        }
        return this.decrypt(encryptedData);
    }

    /**
     * データを暗号化します
     * @param data 暗号化するデータ
     * @returns 暗号化されたデータ
     */
    private encrypt(data: string): string {
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    /**
     * データを復号化します
     * @param encryptedData 暗号化されたデータ
     * @returns 復号化されたデータ
     */
    private decrypt(encryptedData: string): string {
        try {
            const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
            let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        } catch (error) {
            console.error('データの復号化に失敗しました:', error);
            return '';
        }
    }
} 
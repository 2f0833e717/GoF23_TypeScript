/**
 * ビデオファイル
 * 
 * ビデオファイルとそのメタデータを表現するクラスです。
 */
export class VideoFile {
    private readonly filename: string;
    private readonly codecType: string;
    private readonly duration: number;

    /**
     * コンストラクタ
     * @param filename ファイル名
     * @param codecType コーデックタイプ
     * @param duration 動画の長さ（秒）
     */
    constructor(filename: string, codecType: string, duration: number) {
        this.filename = filename;
        this.codecType = codecType;
        this.duration = duration;
    }

    /**
     * ファイル名を取得します
     */
    getFilename(): string {
        return this.filename;
    }

    /**
     * コーデックタイプを取得します
     */
    getCodecType(): string {
        return this.codecType;
    }

    /**
     * 動画の長さを取得します
     */
    getDuration(): number {
        return this.duration;
    }

    /**
     * ファイル情報を文字列として取得します
     */
    toString(): string {
        return `VideoFile(filename=${this.filename}, codec=${this.codecType}, duration=${this.duration}s)`;
    }
} 
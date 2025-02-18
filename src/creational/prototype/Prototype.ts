/**
 * プロトタイプ
 * 
 * クローン機能を持つオブジェクトの基底クラスです。
 * このクラスは、プロトタイプパターンの中心となるインターフェースを定義します。
 */
export abstract class Prototype {
    public primitive: any;
    public component!: object;
    public circularReference!: ComponentWithBackReference;

    /**
     * クローンメソッド
     * 
     * オブジェクトの複製を作成します。
     * @returns {Prototype} クローンされたオブジェクト
     */
    public abstract clone(): Prototype;
}

/**
 * プロトタイプコンポーネント
 * 
 * プロトタイプへの参照を持つコンポーネントクラスです。
 */
export class ComponentWithBackReference {
    public prototype;

    /**
     * コンストラクタ
     * @param prototype プロトタイプへの参照
     */
    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
} 
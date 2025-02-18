import { Prototype, ComponentWithBackReference } from './Prototype';

/**
 * 具象プロトタイプ1
 * 
 * プロトタイプの具象実装を提供します。
 * クローンメソッドを実装し、オブジェクトの完全な複製を作成します。
 */
export class ConcretePrototype1 extends Prototype {
    /**
     * コンストラクタ
     */
    constructor() {
        super();
        this.primitive = 245;
        this.component = new Date();
        this.circularReference = new ComponentWithBackReference(this);
    }

    /**
     * クローンメソッド
     * 
     * オブジェクトの深いコピーを作成します。
     * プリミティブフィールドは値をコピーし、オブジェクトは新しいインスタンスを作成します。
     * @returns {Prototype} クローンされたオブジェクト
     */
    public clone(): Prototype {
        const clone = new ConcretePrototype1();
        clone.primitive = this.primitive;
        // Dateオブジェクトの正しい複製を作成
        clone.component = new Date((this.component as Date).getTime());
        // 循環参照を持つオブジェクトを複製
        clone.circularReference = new ComponentWithBackReference(clone);
        return clone;
    }
}

/**
 * 具象プロトタイプ2
 * 
 * プロトタイプの別の具象実装を提供します。
 */
export class ConcretePrototype2 extends Prototype {
    /**
     * コンストラクタ
     */
    constructor() {
        super();
        this.primitive = 'test';
        this.component = new Map<string, string>();
        this.circularReference = new ComponentWithBackReference(this);
    }

    /**
     * クローンメソッド
     * 
     * オブジェクトの深いコピーを作成します。
     * @returns {Prototype} クローンされたオブジェクト
     */
    public clone(): Prototype {
        const clone = new ConcretePrototype2();
        clone.primitive = this.primitive;
        clone.component = new Map(this.component as Map<string, string>);
        clone.circularReference = new ComponentWithBackReference(clone);
        return clone;
    }
} 
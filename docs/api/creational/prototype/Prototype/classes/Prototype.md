[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/prototype/Prototype](../README.md) / Prototype

# Class: `abstract` Prototype

Defined in: creational/prototype/Prototype.ts:7

プロトタイプ

クローン機能を持つオブジェクトの基底クラスです。
このクラスは、プロトタイプパターンの中心となるインターフェースを定義します。

## Extended by

- [`ConcretePrototype1`](../../ConcretePrototype/classes/ConcretePrototype1.md)
- [`ConcretePrototype2`](../../ConcretePrototype/classes/ConcretePrototype2.md)

## Constructors

### new Prototype()

> **new Prototype**(): [`Prototype`](Prototype.md)

#### Returns

[`Prototype`](Prototype.md)

## Properties

### primitive

> **primitive**: `any`

Defined in: creational/prototype/Prototype.ts:8

***

### component

> **component**: `object`

Defined in: creational/prototype/Prototype.ts:9

***

### circularReference

> **circularReference**: [`ComponentWithBackReference`](ComponentWithBackReference.md)

Defined in: creational/prototype/Prototype.ts:10

## Methods

### clone()

> `abstract` **clone**(): [`Prototype`](Prototype.md)

Defined in: creational/prototype/Prototype.ts:18

クローンメソッド

オブジェクトの複製を作成します。

#### Returns

[`Prototype`](Prototype.md)

クローンされたオブジェクト

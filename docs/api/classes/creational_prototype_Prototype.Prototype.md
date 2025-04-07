[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/prototype/Prototype](../modules/creational_prototype_Prototype.md) / Prototype

# Class: Prototype

[creational/prototype/Prototype](../modules/creational_prototype_Prototype.md).Prototype

プロトタイプ

クローン機能を持つオブジェクトの基底クラスです。
このクラスは、プロトタイプパターンの中心となるインターフェースを定義します。

## Hierarchy

- **`Prototype`**

  ↳ [`ConcretePrototype1`](creational_prototype_ConcretePrototype.ConcretePrototype1.md)

  ↳ [`ConcretePrototype2`](creational_prototype_ConcretePrototype.ConcretePrototype2.md)

## Table of contents

### Constructors

- [constructor](creational_prototype_Prototype.Prototype.md#constructor)

### Properties

- [primitive](creational_prototype_Prototype.Prototype.md#primitive)
- [component](creational_prototype_Prototype.Prototype.md#component)
- [circularReference](creational_prototype_Prototype.Prototype.md#circularreference)

### Methods

- [clone](creational_prototype_Prototype.Prototype.md#clone)

## Constructors

### constructor

• **new Prototype**(): [`Prototype`](creational_prototype_Prototype.Prototype.md)

#### Returns

[`Prototype`](creational_prototype_Prototype.Prototype.md)

## Properties

### primitive

• **primitive**: `any`

#### Defined in

creational/prototype/Prototype.ts:8

___

### component

• **component**: `object`

#### Defined in

creational/prototype/Prototype.ts:9

___

### circularReference

• **circularReference**: [`ComponentWithBackReference`](creational_prototype_Prototype.ComponentWithBackReference.md)

#### Defined in

creational/prototype/Prototype.ts:10

## Methods

### clone

▸ **clone**(): [`Prototype`](creational_prototype_Prototype.Prototype.md)

クローンメソッド

オブジェクトの複製を作成します。

#### Returns

[`Prototype`](creational_prototype_Prototype.Prototype.md)

クローンされたオブジェクト

#### Defined in

creational/prototype/Prototype.ts:18

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [creational/prototype/ConcretePrototype](../modules/creational_prototype_ConcretePrototype.md) / ConcretePrototype2

# Class: ConcretePrototype2

[creational/prototype/ConcretePrototype](../modules/creational_prototype_ConcretePrototype.md).ConcretePrototype2

具象プロトタイプ2

プロトタイプの別の具象実装を提供します。

## Hierarchy

- [`Prototype`](creational_prototype_Prototype.Prototype.md)

  ↳ **`ConcretePrototype2`**

## Table of contents

### Constructors

- [constructor](creational_prototype_ConcretePrototype.ConcretePrototype2.md#constructor)

### Properties

- [primitive](creational_prototype_ConcretePrototype.ConcretePrototype2.md#primitive)
- [component](creational_prototype_ConcretePrototype.ConcretePrototype2.md#component)
- [circularReference](creational_prototype_ConcretePrototype.ConcretePrototype2.md#circularreference)

### Methods

- [clone](creational_prototype_ConcretePrototype.ConcretePrototype2.md#clone)

## Constructors

### constructor

• **new ConcretePrototype2**(): [`ConcretePrototype2`](creational_prototype_ConcretePrototype.ConcretePrototype2.md)

コンストラクタ

#### Returns

[`ConcretePrototype2`](creational_prototype_ConcretePrototype.ConcretePrototype2.md)

#### Overrides

[Prototype](creational_prototype_Prototype.Prototype.md).[constructor](creational_prototype_Prototype.Prototype.md#constructor)

#### Defined in

creational/prototype/ConcretePrototype.ts:47

## Properties

### primitive

• **primitive**: `any`

#### Inherited from

[Prototype](creational_prototype_Prototype.Prototype.md).[primitive](creational_prototype_Prototype.Prototype.md#primitive)

#### Defined in

creational/prototype/Prototype.ts:8

___

### component

• **component**: `object`

#### Inherited from

[Prototype](creational_prototype_Prototype.Prototype.md).[component](creational_prototype_Prototype.Prototype.md#component)

#### Defined in

creational/prototype/Prototype.ts:9

___

### circularReference

• **circularReference**: [`ComponentWithBackReference`](creational_prototype_Prototype.ComponentWithBackReference.md)

#### Inherited from

[Prototype](creational_prototype_Prototype.Prototype.md).[circularReference](creational_prototype_Prototype.Prototype.md#circularreference)

#### Defined in

creational/prototype/Prototype.ts:10

## Methods

### clone

▸ **clone**(): [`Prototype`](creational_prototype_Prototype.Prototype.md)

クローンメソッド

オブジェクトの深いコピーを作成します。

#### Returns

[`Prototype`](creational_prototype_Prototype.Prototype.md)

クローンされたオブジェクト

#### Overrides

[Prototype](creational_prototype_Prototype.Prototype.md).[clone](creational_prototype_Prototype.Prototype.md#clone)

#### Defined in

creational/prototype/ConcretePrototype.ts:60

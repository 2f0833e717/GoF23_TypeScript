[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/prototype/ConcretePrototype](../README.md) / ConcretePrototype2

# Class: ConcretePrototype2

Defined in: creational/prototype/ConcretePrototype.ts:43

具象プロトタイプ2

プロトタイプの別の具象実装を提供します。

## Extends

- [`Prototype`](../../Prototype/classes/Prototype.md)

## Constructors

### new ConcretePrototype2()

> **new ConcretePrototype2**(): [`ConcretePrototype2`](ConcretePrototype2.md)

Defined in: creational/prototype/ConcretePrototype.ts:47

コンストラクタ

#### Returns

[`ConcretePrototype2`](ConcretePrototype2.md)

#### Overrides

[`Prototype`](../../Prototype/classes/Prototype.md).[`constructor`](../../Prototype/classes/Prototype.md#constructors)

## Properties

### primitive

> **primitive**: `any`

Defined in: creational/prototype/Prototype.ts:8

#### Inherited from

[`Prototype`](../../Prototype/classes/Prototype.md).[`primitive`](../../Prototype/classes/Prototype.md#primitive)

***

### component

> **component**: `object`

Defined in: creational/prototype/Prototype.ts:9

#### Inherited from

[`Prototype`](../../Prototype/classes/Prototype.md).[`component`](../../Prototype/classes/Prototype.md#component)

***

### circularReference

> **circularReference**: [`ComponentWithBackReference`](../../Prototype/classes/ComponentWithBackReference.md)

Defined in: creational/prototype/Prototype.ts:10

#### Inherited from

[`Prototype`](../../Prototype/classes/Prototype.md).[`circularReference`](../../Prototype/classes/Prototype.md#circularreference)

## Methods

### clone()

> **clone**(): [`Prototype`](../../Prototype/classes/Prototype.md)

Defined in: creational/prototype/ConcretePrototype.ts:60

クローンメソッド

オブジェクトの深いコピーを作成します。

#### Returns

[`Prototype`](../../Prototype/classes/Prototype.md)

クローンされたオブジェクト

#### Overrides

[`Prototype`](../../Prototype/classes/Prototype.md).[`clone`](../../Prototype/classes/Prototype.md#clone)

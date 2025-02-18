[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/prototype/ConcretePrototype](../README.md) / ConcretePrototype1

# Class: ConcretePrototype1

Defined in: creational/prototype/ConcretePrototype.ts:9

具象プロトタイプ1

プロトタイプの具象実装を提供します。
クローンメソッドを実装し、オブジェクトの完全な複製を作成します。

## Extends

- [`Prototype`](../../Prototype/classes/Prototype.md)

## Constructors

### new ConcretePrototype1()

> **new ConcretePrototype1**(): [`ConcretePrototype1`](ConcretePrototype1.md)

Defined in: creational/prototype/ConcretePrototype.ts:13

コンストラクタ

#### Returns

[`ConcretePrototype1`](ConcretePrototype1.md)

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

Defined in: creational/prototype/ConcretePrototype.ts:27

クローンメソッド

オブジェクトの深いコピーを作成します。
プリミティブフィールドは値をコピーし、オブジェクトは新しいインスタンスを作成します。

#### Returns

[`Prototype`](../../Prototype/classes/Prototype.md)

クローンされたオブジェクト

#### Overrides

[`Prototype`](../../Prototype/classes/Prototype.md).[`clone`](../../Prototype/classes/Prototype.md#clone)

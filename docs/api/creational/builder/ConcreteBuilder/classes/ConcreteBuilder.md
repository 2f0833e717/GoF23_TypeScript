[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [creational/builder/ConcreteBuilder](../README.md) / ConcreteBuilder

# Class: ConcreteBuilder

Defined in: creational/builder/ConcreteBuilder.ts:10

具象ビルダー

ビルダーインターフェースの具体的な実装を提供します。
製品の構築手順を定義し、最終的な製品を返します。

## Implements

- [`Builder`](../../Builder/interfaces/Builder.md)

## Constructors

### new ConcreteBuilder()

> **new ConcreteBuilder**(): [`ConcreteBuilder`](ConcreteBuilder.md)

Defined in: creational/builder/ConcreteBuilder.ts:16

新しい製品の構築を開始します

#### Returns

[`ConcreteBuilder`](ConcreteBuilder.md)

## Methods

### reset()

> **reset**(): `void`

Defined in: creational/builder/ConcreteBuilder.ts:23

ビルダーをリセットします

#### Returns

`void`

***

### buildPartA()

> **buildPartA**(): `void`

Defined in: creational/builder/ConcreteBuilder.ts:30

パーツAを構築します

#### Returns

`void`

#### Implementation of

[`Builder`](../../Builder/interfaces/Builder.md).[`buildPartA`](../../Builder/interfaces/Builder.md#buildparta)

***

### buildPartB()

> **buildPartB**(): `void`

Defined in: creational/builder/ConcreteBuilder.ts:37

パーツBを構築します

#### Returns

`void`

#### Implementation of

[`Builder`](../../Builder/interfaces/Builder.md).[`buildPartB`](../../Builder/interfaces/Builder.md#buildpartb)

***

### buildPartC()

> **buildPartC**(): `void`

Defined in: creational/builder/ConcreteBuilder.ts:44

パーツCを構築します

#### Returns

`void`

#### Implementation of

[`Builder`](../../Builder/interfaces/Builder.md).[`buildPartC`](../../Builder/interfaces/Builder.md#buildpartc)

***

### getProduct()

> **getProduct**(): [`Product`](../../Product/classes/Product.md)

Defined in: creational/builder/ConcreteBuilder.ts:52

構築した製品を取得します

#### Returns

[`Product`](../../Product/classes/Product.md)

構築された製品

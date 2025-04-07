[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/template-method/DataMiner](../modules/behavioral_template_method_DataMiner.md) / DataSet

# Interface: DataSet

[behavioral/template-method/DataMiner](../modules/behavioral_template_method_DataMiner.md).DataSet

データマイナー

データ解析処理のテンプレートを定義する抽象クラスです。
具象クラスは、各ステップの具体的な実装を提供します。

## Table of contents

### Properties

- [headers](behavioral_template_method_DataMiner.DataSet.md#headers)
- [rows](behavioral_template_method_DataMiner.DataSet.md#rows)
- [metadata](behavioral_template_method_DataMiner.DataSet.md#metadata)

## Properties

### headers

• **headers**: `string`[]

#### Defined in

behavioral/template-method/DataMiner.ts:9

___

### rows

• **rows**: `any`[][]

#### Defined in

behavioral/template-method/DataMiner.ts:10

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `createdAt` | `Date` |
| `format` | `string` |

#### Defined in

behavioral/template-method/DataMiner.ts:11

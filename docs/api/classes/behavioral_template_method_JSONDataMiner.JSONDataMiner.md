[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/template-method/JSONDataMiner](../modules/behavioral_template_method_JSONDataMiner.md) / JSONDataMiner

# Class: JSONDataMiner

[behavioral/template-method/JSONDataMiner](../modules/behavioral_template_method_JSONDataMiner.md).JSONDataMiner

データマイナーの抽象基底クラス

## Hierarchy

- [`DataMiner`](behavioral_template_method_DataMiner.DataMiner.md)

  ↳ **`JSONDataMiner`**

## Table of contents

### Constructors

- [constructor](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#constructor)

### Methods

- [mine](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#mine)
- [generateReport](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#generatereport)
- [readData](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#readdata)
- [cleanData](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#cleandata)
- [analyzeData](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#analyzedata)
- [shouldCache](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#shouldcache)
- [cacheResult](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#cacheresult)
- [getSkippedRows](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#getskippedrows)
- [generateInsights](behavioral_template_method_JSONDataMiner.JSONDataMiner.md#generateinsights)

## Constructors

### constructor

• **new JSONDataMiner**(): [`JSONDataMiner`](behavioral_template_method_JSONDataMiner.JSONDataMiner.md)

#### Returns

[`JSONDataMiner`](behavioral_template_method_JSONDataMiner.JSONDataMiner.md)

#### Inherited from

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[constructor](behavioral_template_method_DataMiner.DataMiner.md#constructor)

## Methods

### mine

▸ **mine**(`source`): [`AnalysisResult`](../interfaces/behavioral_template_method_DataMiner.AnalysisResult.md)

テンプレートメソッド
データ解析の全体的な流れを定義します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | データソース |

#### Returns

[`AnalysisResult`](../interfaces/behavioral_template_method_DataMiner.AnalysisResult.md)

解析結果

#### Inherited from

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[mine](behavioral_template_method_DataMiner.DataMiner.md#mine)

#### Defined in

behavioral/template-method/DataMiner.ts:42

___

### generateReport

▸ **generateReport**(`statistics`, `originalData`): [`AnalysisResult`](../interfaces/behavioral_template_method_DataMiner.AnalysisResult.md)

レポートを生成します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statistics` | `Object` | 統計情報 |
| `originalData` | [`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md) | 元のデータ |

#### Returns

[`AnalysisResult`](../interfaces/behavioral_template_method_DataMiner.AnalysisResult.md)

解析結果

#### Inherited from

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[generateReport](behavioral_template_method_DataMiner.DataMiner.md#generatereport)

#### Defined in

behavioral/template-method/DataMiner.ts:83

___

### readData

▸ **readData**(`source`): [`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md)

データを読み込みます

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | データソース |

#### Returns

[`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md)

読み込んだデータ

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[readData](behavioral_template_method_DataMiner.DataMiner.md#readdata)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:25

___

### cleanData

▸ **cleanData**(`data`): [`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md)

データをクリーニングします

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md) | 生データ |

#### Returns

[`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md)

クリーニング済みデータ

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[cleanData](behavioral_template_method_DataMiner.DataMiner.md#cleandata)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:59

___

### analyzeData

▸ **analyzeData**(`data`): `Object`

データを解析します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`DataSet`](../interfaces/behavioral_template_method_DataMiner.DataSet.md) | クリーニング済みデータ |

#### Returns

`Object`

解析結果の統計情報

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[analyzeData](behavioral_template_method_DataMiner.DataMiner.md#analyzedata)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:84

___

### shouldCache

▸ **shouldCache**(): `boolean`

結果をキャッシュするかどうかを判断します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`boolean`

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[shouldCache](behavioral_template_method_DataMiner.DataMiner.md#shouldcache)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:102

___

### cacheResult

▸ **cacheResult**(`result`): `void`

結果をキャッシュします
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | [`AnalysisResult`](../interfaces/behavioral_template_method_DataMiner.AnalysisResult.md) | 解析結果 |

#### Returns

`void`

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[cacheResult](behavioral_template_method_DataMiner.DataMiner.md#cacheresult)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:106

___

### getSkippedRows

▸ **getSkippedRows**(): `number`

スキップされた行数を取得します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`number`

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[getSkippedRows](behavioral_template_method_DataMiner.DataMiner.md#getskippedrows)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:114

___

### generateInsights

▸ **generateInsights**(`statistics`): `string`[]

統計情報から洞察を生成します
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statistics` | `Object` | 統計情報 |

#### Returns

`string`[]

#### Overrides

[DataMiner](behavioral_template_method_DataMiner.DataMiner.md).[generateInsights](behavioral_template_method_DataMiner.DataMiner.md#generateinsights)

#### Defined in

behavioral/template-method/JSONDataMiner.ts:118

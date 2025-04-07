[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/template-method/DataMiner](../modules/behavioral_template_method_DataMiner.md) / DataMiner

# Class: DataMiner

[behavioral/template-method/DataMiner](../modules/behavioral_template_method_DataMiner.md).DataMiner

データマイナーの抽象基底クラス

## Hierarchy

- **`DataMiner`**

  ↳ [`CSVDataMiner`](behavioral_template_method_CSVDataMiner.CSVDataMiner.md)

  ↳ [`JSONDataMiner`](behavioral_template_method_JSONDataMiner.JSONDataMiner.md)

## Table of contents

### Constructors

- [constructor](behavioral_template_method_DataMiner.DataMiner.md#constructor)

### Methods

- [mine](behavioral_template_method_DataMiner.DataMiner.md#mine)
- [readData](behavioral_template_method_DataMiner.DataMiner.md#readdata)
- [cleanData](behavioral_template_method_DataMiner.DataMiner.md#cleandata)
- [analyzeData](behavioral_template_method_DataMiner.DataMiner.md#analyzedata)
- [generateReport](behavioral_template_method_DataMiner.DataMiner.md#generatereport)
- [shouldCache](behavioral_template_method_DataMiner.DataMiner.md#shouldcache)
- [cacheResult](behavioral_template_method_DataMiner.DataMiner.md#cacheresult)
- [getSkippedRows](behavioral_template_method_DataMiner.DataMiner.md#getskippedrows)
- [generateInsights](behavioral_template_method_DataMiner.DataMiner.md#generateinsights)

## Constructors

### constructor

• **new DataMiner**(): [`DataMiner`](behavioral_template_method_DataMiner.DataMiner.md)

#### Returns

[`DataMiner`](behavioral_template_method_DataMiner.DataMiner.md)

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

#### Defined in

behavioral/template-method/DataMiner.ts:42

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

#### Defined in

behavioral/template-method/DataMiner.ts:61

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

#### Defined in

behavioral/template-method/DataMiner.ts:68

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

#### Defined in

behavioral/template-method/DataMiner.ts:75

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

#### Defined in

behavioral/template-method/DataMiner.ts:83

___

### shouldCache

▸ **shouldCache**(): `boolean`

結果をキャッシュするかどうかを判断します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`boolean`

#### Defined in

behavioral/template-method/DataMiner.ts:101

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

#### Defined in

behavioral/template-method/DataMiner.ts:110

___

### getSkippedRows

▸ **getSkippedRows**(): `number`

スキップされた行数を取得します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`number`

#### Defined in

behavioral/template-method/DataMiner.ts:118

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

#### Defined in

behavioral/template-method/DataMiner.ts:127

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/template-method/DataMiner](../README.md) / DataMiner

# Class: `abstract` DataMiner

Defined in: behavioral/template-method/DataMiner.ts:35

データマイナーの抽象基底クラス

## Extended by

- [`CSVDataMiner`](../../CSVDataMiner/classes/CSVDataMiner.md)
- [`JSONDataMiner`](../../JSONDataMiner/classes/JSONDataMiner.md)

## Constructors

### new DataMiner()

> **new DataMiner**(): [`DataMiner`](DataMiner.md)

#### Returns

[`DataMiner`](DataMiner.md)

## Methods

### mine()

> **mine**(`source`): [`AnalysisResult`](../interfaces/AnalysisResult.md)

Defined in: behavioral/template-method/DataMiner.ts:42

テンプレートメソッド
データ解析の全体的な流れを定義します

#### Parameters

##### source

`string`

データソース

#### Returns

[`AnalysisResult`](../interfaces/AnalysisResult.md)

解析結果

***

### readData()

> `abstract` `protected` **readData**(`source`): [`DataSet`](../interfaces/DataSet.md)

Defined in: behavioral/template-method/DataMiner.ts:61

データを読み込みます

#### Parameters

##### source

`string`

データソース

#### Returns

[`DataSet`](../interfaces/DataSet.md)

読み込んだデータ

***

### cleanData()

> `abstract` `protected` **cleanData**(`data`): [`DataSet`](../interfaces/DataSet.md)

Defined in: behavioral/template-method/DataMiner.ts:68

データをクリーニングします

#### Parameters

##### data

[`DataSet`](../interfaces/DataSet.md)

生データ

#### Returns

[`DataSet`](../interfaces/DataSet.md)

クリーニング済みデータ

***

### analyzeData()

> `abstract` `protected` **analyzeData**(`data`): `object`

Defined in: behavioral/template-method/DataMiner.ts:75

データを解析します

#### Parameters

##### data

[`DataSet`](../interfaces/DataSet.md)

クリーニング済みデータ

#### Returns

`object`

解析結果の統計情報

***

### generateReport()

> `protected` **generateReport**(`statistics`, `originalData`): [`AnalysisResult`](../interfaces/AnalysisResult.md)

Defined in: behavioral/template-method/DataMiner.ts:83

レポートを生成します

#### Parameters

##### statistics

統計情報

##### originalData

[`DataSet`](../interfaces/DataSet.md)

元のデータ

#### Returns

[`AnalysisResult`](../interfaces/AnalysisResult.md)

解析結果

***

### shouldCache()

> `protected` **shouldCache**(): `boolean`

Defined in: behavioral/template-method/DataMiner.ts:101

結果をキャッシュするかどうかを判断します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`boolean`

***

### cacheResult()

> `protected` **cacheResult**(`result`): `void`

Defined in: behavioral/template-method/DataMiner.ts:110

結果をキャッシュします
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

##### result

[`AnalysisResult`](../interfaces/AnalysisResult.md)

解析結果

#### Returns

`void`

***

### getSkippedRows()

> `protected` **getSkippedRows**(): `number`

Defined in: behavioral/template-method/DataMiner.ts:118

スキップされた行数を取得します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`number`

***

### generateInsights()

> `protected` **generateInsights**(`statistics`): `string`[]

Defined in: behavioral/template-method/DataMiner.ts:127

統計情報から洞察を生成します
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

##### statistics

統計情報

#### Returns

`string`[]

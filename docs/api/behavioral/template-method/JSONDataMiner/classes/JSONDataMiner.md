[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/template-method/JSONDataMiner](../README.md) / JSONDataMiner

# Class: JSONDataMiner

Defined in: behavioral/template-method/JSONDataMiner.ts:20

データマイナーの抽象基底クラス

## Extends

- [`DataMiner`](../../DataMiner/classes/DataMiner.md)

## Constructors

### new JSONDataMiner()

> **new JSONDataMiner**(): [`JSONDataMiner`](JSONDataMiner.md)

#### Returns

[`JSONDataMiner`](JSONDataMiner.md)

#### Inherited from

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`constructor`](../../DataMiner/classes/DataMiner.md#constructors)

## Methods

### mine()

> **mine**(`source`): [`AnalysisResult`](../../DataMiner/interfaces/AnalysisResult.md)

Defined in: behavioral/template-method/DataMiner.ts:42

テンプレートメソッド
データ解析の全体的な流れを定義します

#### Parameters

##### source

`string`

データソース

#### Returns

[`AnalysisResult`](../../DataMiner/interfaces/AnalysisResult.md)

解析結果

#### Inherited from

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`mine`](../../DataMiner/classes/DataMiner.md#mine)

***

### generateReport()

> `protected` **generateReport**(`statistics`, `originalData`): [`AnalysisResult`](../../DataMiner/interfaces/AnalysisResult.md)

Defined in: behavioral/template-method/DataMiner.ts:83

レポートを生成します

#### Parameters

##### statistics

統計情報

##### originalData

[`DataSet`](../../DataMiner/interfaces/DataSet.md)

元のデータ

#### Returns

[`AnalysisResult`](../../DataMiner/interfaces/AnalysisResult.md)

解析結果

#### Inherited from

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`generateReport`](../../DataMiner/classes/DataMiner.md#generatereport)

***

### readData()

> `protected` **readData**(`source`): [`DataSet`](../../DataMiner/interfaces/DataSet.md)

Defined in: behavioral/template-method/JSONDataMiner.ts:25

データを読み込みます

#### Parameters

##### source

`string`

データソース

#### Returns

[`DataSet`](../../DataMiner/interfaces/DataSet.md)

読み込んだデータ

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`readData`](../../DataMiner/classes/DataMiner.md#readdata)

***

### cleanData()

> `protected` **cleanData**(`data`): [`DataSet`](../../DataMiner/interfaces/DataSet.md)

Defined in: behavioral/template-method/JSONDataMiner.ts:59

データをクリーニングします

#### Parameters

##### data

[`DataSet`](../../DataMiner/interfaces/DataSet.md)

生データ

#### Returns

[`DataSet`](../../DataMiner/interfaces/DataSet.md)

クリーニング済みデータ

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`cleanData`](../../DataMiner/classes/DataMiner.md#cleandata)

***

### analyzeData()

> `protected` **analyzeData**(`data`): `object`

Defined in: behavioral/template-method/JSONDataMiner.ts:84

データを解析します

#### Parameters

##### data

[`DataSet`](../../DataMiner/interfaces/DataSet.md)

クリーニング済みデータ

#### Returns

`object`

解析結果の統計情報

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`analyzeData`](../../DataMiner/classes/DataMiner.md#analyzedata)

***

### shouldCache()

> `protected` **shouldCache**(): `boolean`

Defined in: behavioral/template-method/JSONDataMiner.ts:102

結果をキャッシュするかどうかを判断します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`boolean`

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`shouldCache`](../../DataMiner/classes/DataMiner.md#shouldcache)

***

### cacheResult()

> `protected` **cacheResult**(`result`): `void`

Defined in: behavioral/template-method/JSONDataMiner.ts:106

結果をキャッシュします
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

##### result

[`AnalysisResult`](../../DataMiner/interfaces/AnalysisResult.md)

解析結果

#### Returns

`void`

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`cacheResult`](../../DataMiner/classes/DataMiner.md#cacheresult)

***

### getSkippedRows()

> `protected` **getSkippedRows**(): `number`

Defined in: behavioral/template-method/JSONDataMiner.ts:114

スキップされた行数を取得します
フックメソッド - サブクラスでオーバーライド可能

#### Returns

`number`

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`getSkippedRows`](../../DataMiner/classes/DataMiner.md#getskippedrows)

***

### generateInsights()

> `protected` **generateInsights**(`statistics`): `string`[]

Defined in: behavioral/template-method/JSONDataMiner.ts:118

統計情報から洞察を生成します
フックメソッド - サブクラスでオーバーライド可能

#### Parameters

##### statistics

統計情報

#### Returns

`string`[]

#### Overrides

[`DataMiner`](../../DataMiner/classes/DataMiner.md).[`generateInsights`](../../DataMiner/classes/DataMiner.md#generateinsights)

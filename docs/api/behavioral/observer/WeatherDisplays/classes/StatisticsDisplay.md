[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/observer/WeatherDisplays](../README.md) / StatisticsDisplay

# Class: StatisticsDisplay

Defined in: behavioral/observer/WeatherDisplays.ts:38

統計情報ディスプレイ

## Implements

- [`Observer`](../../WeatherStation/interfaces/Observer.md)

## Constructors

### new StatisticsDisplay()

> **new StatisticsDisplay**(): [`StatisticsDisplay`](StatisticsDisplay.md)

#### Returns

[`StatisticsDisplay`](StatisticsDisplay.md)

## Methods

### update()

> **update**(`data`): `void`

Defined in: behavioral/observer/WeatherDisplays.ts:43

更新通知を受け取ります

#### Parameters

##### data

[`WeatherData`](../../WeatherStation/interfaces/WeatherData.md)

気象データ

#### Returns

`void`

#### Implementation of

[`Observer`](../../WeatherStation/interfaces/Observer.md).[`update`](../../WeatherStation/interfaces/Observer.md#update)

***

### display()

> **display**(): `string`

Defined in: behavioral/observer/WeatherDisplays.ts:59

統計情報を表示します

#### Returns

`string`

***

### clear()

> **clear**(): `void`

Defined in: behavioral/observer/WeatherDisplays.ts:81

統計データをクリアします

#### Returns

`void`

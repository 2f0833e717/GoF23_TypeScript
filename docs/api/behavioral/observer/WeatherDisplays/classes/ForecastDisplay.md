[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/observer/WeatherDisplays](../README.md) / ForecastDisplay

# Class: ForecastDisplay

Defined in: behavioral/observer/WeatherDisplays.ts:91

天気予報ディスプレイ

## Implements

- [`Observer`](../../WeatherStation/interfaces/Observer.md)

## Constructors

### new ForecastDisplay()

> **new ForecastDisplay**(): [`ForecastDisplay`](ForecastDisplay.md)

#### Returns

[`ForecastDisplay`](ForecastDisplay.md)

## Methods

### update()

> **update**(`data`): `void`

Defined in: behavioral/observer/WeatherDisplays.ts:95

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

Defined in: behavioral/observer/WeatherDisplays.ts:103

天気予報を表示します

#### Returns

`string`

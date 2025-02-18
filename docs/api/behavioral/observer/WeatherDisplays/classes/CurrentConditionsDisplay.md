[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/observer/WeatherDisplays](../README.md) / CurrentConditionsDisplay

# Class: CurrentConditionsDisplay

Defined in: behavioral/observer/WeatherDisplays.ts:12

現在の気象状況ディスプレイ

## Implements

- [`Observer`](../../WeatherStation/interfaces/Observer.md)

## Constructors

### new CurrentConditionsDisplay()

> **new CurrentConditionsDisplay**(): [`CurrentConditionsDisplay`](CurrentConditionsDisplay.md)

#### Returns

[`CurrentConditionsDisplay`](CurrentConditionsDisplay.md)

## Methods

### update()

> **update**(`data`): `void`

Defined in: behavioral/observer/WeatherDisplays.ts:15

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

Defined in: behavioral/observer/WeatherDisplays.ts:22

現在の気象状況を表示します

#### Returns

`string`

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md) / ForecastDisplay

# Class: ForecastDisplay

[behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md).ForecastDisplay

天気予報ディスプレイ

## Implements

- [`Observer`](../interfaces/behavioral_observer_WeatherStation.Observer.md)

## Table of contents

### Constructors

- [constructor](behavioral_observer_WeatherDisplays.ForecastDisplay.md#constructor)

### Methods

- [update](behavioral_observer_WeatherDisplays.ForecastDisplay.md#update)
- [display](behavioral_observer_WeatherDisplays.ForecastDisplay.md#display)

## Constructors

### constructor

• **new ForecastDisplay**(): [`ForecastDisplay`](behavioral_observer_WeatherDisplays.ForecastDisplay.md)

#### Returns

[`ForecastDisplay`](behavioral_observer_WeatherDisplays.ForecastDisplay.md)

## Methods

### update

▸ **update**(`data`): `void`

更新通知を受け取ります

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`WeatherData`](../interfaces/behavioral_observer_WeatherStation.WeatherData.md) | 気象データ |

#### Returns

`void`

#### Implementation of

[Observer](../interfaces/behavioral_observer_WeatherStation.Observer.md).[update](../interfaces/behavioral_observer_WeatherStation.Observer.md#update)

#### Defined in

behavioral/observer/WeatherDisplays.ts:95

___

### display

▸ **display**(): `string`

天気予報を表示します

#### Returns

`string`

#### Defined in

behavioral/observer/WeatherDisplays.ts:103

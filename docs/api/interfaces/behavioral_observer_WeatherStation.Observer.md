[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md) / Observer

# Interface: Observer

[behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md).Observer

オブザーバーインターフェース

## Implemented by

- [`CurrentConditionsDisplay`](../classes/behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md)
- [`ForecastDisplay`](../classes/behavioral_observer_WeatherDisplays.ForecastDisplay.md)
- [`StatisticsDisplay`](../classes/behavioral_observer_WeatherDisplays.StatisticsDisplay.md)

## Table of contents

### Methods

- [update](behavioral_observer_WeatherStation.Observer.md#update)

## Methods

### update

▸ **update**(`data`): `void`

更新通知を受け取ります

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`WeatherData`](behavioral_observer_WeatherStation.WeatherData.md) | 気象データ |

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherStation.ts:26

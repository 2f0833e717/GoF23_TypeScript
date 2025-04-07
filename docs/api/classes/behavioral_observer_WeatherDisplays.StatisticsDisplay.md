[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md) / StatisticsDisplay

# Class: StatisticsDisplay

[behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md).StatisticsDisplay

統計情報ディスプレイ

## Implements

- [`Observer`](../interfaces/behavioral_observer_WeatherStation.Observer.md)

## Table of contents

### Constructors

- [constructor](behavioral_observer_WeatherDisplays.StatisticsDisplay.md#constructor)

### Methods

- [update](behavioral_observer_WeatherDisplays.StatisticsDisplay.md#update)
- [display](behavioral_observer_WeatherDisplays.StatisticsDisplay.md#display)
- [clear](behavioral_observer_WeatherDisplays.StatisticsDisplay.md#clear)

## Constructors

### constructor

• **new StatisticsDisplay**(): [`StatisticsDisplay`](behavioral_observer_WeatherDisplays.StatisticsDisplay.md)

#### Returns

[`StatisticsDisplay`](behavioral_observer_WeatherDisplays.StatisticsDisplay.md)

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

behavioral/observer/WeatherDisplays.ts:43

___

### display

▸ **display**(): `string`

統計情報を表示します

#### Returns

`string`

#### Defined in

behavioral/observer/WeatherDisplays.ts:59

___

### clear

▸ **clear**(): `void`

統計データをクリアします

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherDisplays.ts:81

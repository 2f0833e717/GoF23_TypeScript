[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md) / CurrentConditionsDisplay

# Class: CurrentConditionsDisplay

[behavioral/observer/WeatherDisplays](../modules/behavioral_observer_WeatherDisplays.md).CurrentConditionsDisplay

現在の気象状況ディスプレイ

## Implements

- [`Observer`](../interfaces/behavioral_observer_WeatherStation.Observer.md)

## Table of contents

### Constructors

- [constructor](behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md#constructor)

### Methods

- [update](behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md#update)
- [display](behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md#display)

## Constructors

### constructor

• **new CurrentConditionsDisplay**(): [`CurrentConditionsDisplay`](behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md)

#### Returns

[`CurrentConditionsDisplay`](behavioral_observer_WeatherDisplays.CurrentConditionsDisplay.md)

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

behavioral/observer/WeatherDisplays.ts:15

___

### display

▸ **display**(): `string`

現在の気象状況を表示します

#### Returns

`string`

#### Defined in

behavioral/observer/WeatherDisplays.ts:22

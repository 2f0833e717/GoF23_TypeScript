[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md) / Subject

# Interface: Subject

[behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md).Subject

サブジェクトインターフェース

## Implemented by

- [`WeatherStation`](../classes/behavioral_observer_WeatherStation.WeatherStation.md)

## Table of contents

### Methods

- [registerObserver](behavioral_observer_WeatherStation.Subject.md#registerobserver)
- [removeObserver](behavioral_observer_WeatherStation.Subject.md#removeobserver)
- [notifyObservers](behavioral_observer_WeatherStation.Subject.md#notifyobservers)

## Methods

### registerObserver

▸ **registerObserver**(`observer`): `void`

オブザーバーを登録します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`Observer`](behavioral_observer_WeatherStation.Observer.md) | 登録するオブザーバー |

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherStation.ts:37

___

### removeObserver

▸ **removeObserver**(`observer`): `void`

オブザーバーを削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`Observer`](behavioral_observer_WeatherStation.Observer.md) | 削除するオブザーバー |

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherStation.ts:43

___

### notifyObservers

▸ **notifyObservers**(): `void`

すべてのオブザーバーに通知します

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherStation.ts:48

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md) / WeatherStation

# Class: WeatherStation

[behavioral/observer/WeatherStation](../modules/behavioral_observer_WeatherStation.md).WeatherStation

天気観測所クラス

## Implements

- [`Subject`](../interfaces/behavioral_observer_WeatherStation.Subject.md)

## Table of contents

### Constructors

- [constructor](behavioral_observer_WeatherStation.WeatherStation.md#constructor)

### Methods

- [setMeasurements](behavioral_observer_WeatherStation.WeatherStation.md#setmeasurements)
- [getMeasurements](behavioral_observer_WeatherStation.WeatherStation.md#getmeasurements)
- [registerObserver](behavioral_observer_WeatherStation.WeatherStation.md#registerobserver)
- [removeObserver](behavioral_observer_WeatherStation.WeatherStation.md#removeobserver)
- [notifyObservers](behavioral_observer_WeatherStation.WeatherStation.md#notifyobservers)
- [getObserverCount](behavioral_observer_WeatherStation.WeatherStation.md#getobservercount)

## Constructors

### constructor

• **new WeatherStation**(): [`WeatherStation`](behavioral_observer_WeatherStation.WeatherStation.md)

#### Returns

[`WeatherStation`](behavioral_observer_WeatherStation.WeatherStation.md)

#### Defined in

behavioral/observer/WeatherStation.ts:58

## Methods

### setMeasurements

▸ **setMeasurements**(`temperature`, `humidity`, `pressure`): `void`

気象データを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `temperature` | `number` | 温度 |
| `humidity` | `number` | 湿度 |
| `pressure` | `number` | 気圧 |

#### Returns

`void`

#### Defined in

behavioral/observer/WeatherStation.ts:73

___

### getMeasurements

▸ **getMeasurements**(): [`WeatherData`](../interfaces/behavioral_observer_WeatherStation.WeatherData.md)

現在の気象データを取得します

#### Returns

[`WeatherData`](../interfaces/behavioral_observer_WeatherStation.WeatherData.md)

#### Defined in

behavioral/observer/WeatherStation.ts:86

___

### registerObserver

▸ **registerObserver**(`observer`): `void`

オブザーバーを登録します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`Observer`](../interfaces/behavioral_observer_WeatherStation.Observer.md) | 登録するオブザーバー |

#### Returns

`void`

#### Implementation of

[Subject](../interfaces/behavioral_observer_WeatherStation.Subject.md).[registerObserver](../interfaces/behavioral_observer_WeatherStation.Subject.md#registerobserver)

#### Defined in

behavioral/observer/WeatherStation.ts:90

___

### removeObserver

▸ **removeObserver**(`observer`): `void`

オブザーバーを削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | [`Observer`](../interfaces/behavioral_observer_WeatherStation.Observer.md) | 削除するオブザーバー |

#### Returns

`void`

#### Implementation of

[Subject](../interfaces/behavioral_observer_WeatherStation.Subject.md).[removeObserver](../interfaces/behavioral_observer_WeatherStation.Subject.md#removeobserver)

#### Defined in

behavioral/observer/WeatherStation.ts:94

___

### notifyObservers

▸ **notifyObservers**(): `void`

すべてのオブザーバーに通知します

#### Returns

`void`

#### Implementation of

[Subject](../interfaces/behavioral_observer_WeatherStation.Subject.md).[notifyObservers](../interfaces/behavioral_observer_WeatherStation.Subject.md#notifyobservers)

#### Defined in

behavioral/observer/WeatherStation.ts:98

___

### getObserverCount

▸ **getObserverCount**(): `number`

登録されているオブザーバーの数を取得します

#### Returns

`number`

#### Defined in

behavioral/observer/WeatherStation.ts:107

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/observer/WeatherStation](../README.md) / WeatherStation

# Class: WeatherStation

Defined in: behavioral/observer/WeatherStation.ts:54

天気観測所クラス

## Implements

- [`Subject`](../interfaces/Subject.md)

## Constructors

### new WeatherStation()

> **new WeatherStation**(): [`WeatherStation`](WeatherStation.md)

Defined in: behavioral/observer/WeatherStation.ts:58

#### Returns

[`WeatherStation`](WeatherStation.md)

## Methods

### setMeasurements()

> **setMeasurements**(`temperature`, `humidity`, `pressure`): `void`

Defined in: behavioral/observer/WeatherStation.ts:73

気象データを設定します

#### Parameters

##### temperature

`number`

温度

##### humidity

`number`

湿度

##### pressure

`number`

気圧

#### Returns

`void`

***

### getMeasurements()

> **getMeasurements**(): [`WeatherData`](../interfaces/WeatherData.md)

Defined in: behavioral/observer/WeatherStation.ts:86

現在の気象データを取得します

#### Returns

[`WeatherData`](../interfaces/WeatherData.md)

***

### registerObserver()

> **registerObserver**(`observer`): `void`

Defined in: behavioral/observer/WeatherStation.ts:90

オブザーバーを登録します

#### Parameters

##### observer

[`Observer`](../interfaces/Observer.md)

登録するオブザーバー

#### Returns

`void`

#### Implementation of

[`Subject`](../interfaces/Subject.md).[`registerObserver`](../interfaces/Subject.md#registerobserver)

***

### removeObserver()

> **removeObserver**(`observer`): `void`

Defined in: behavioral/observer/WeatherStation.ts:94

オブザーバーを削除します

#### Parameters

##### observer

[`Observer`](../interfaces/Observer.md)

削除するオブザーバー

#### Returns

`void`

#### Implementation of

[`Subject`](../interfaces/Subject.md).[`removeObserver`](../interfaces/Subject.md#removeobserver)

***

### notifyObservers()

> **notifyObservers**(): `void`

Defined in: behavioral/observer/WeatherStation.ts:98

すべてのオブザーバーに通知します

#### Returns

`void`

#### Implementation of

[`Subject`](../interfaces/Subject.md).[`notifyObservers`](../interfaces/Subject.md#notifyobservers)

***

### getObserverCount()

> **getObserverCount**(): `number`

Defined in: behavioral/observer/WeatherStation.ts:107

登録されているオブザーバーの数を取得します

#### Returns

`number`

[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/observer/WeatherStation](../README.md) / Subject

# Interface: Subject

Defined in: behavioral/observer/WeatherStation.ts:32

サブジェクトインターフェース

## Methods

### registerObserver()

> **registerObserver**(`observer`): `void`

Defined in: behavioral/observer/WeatherStation.ts:37

オブザーバーを登録します

#### Parameters

##### observer

[`Observer`](Observer.md)

登録するオブザーバー

#### Returns

`void`

***

### removeObserver()

> **removeObserver**(`observer`): `void`

Defined in: behavioral/observer/WeatherStation.ts:43

オブザーバーを削除します

#### Parameters

##### observer

[`Observer`](Observer.md)

削除するオブザーバー

#### Returns

`void`

***

### notifyObservers()

> **notifyObservers**(): `void`

Defined in: behavioral/observer/WeatherStation.ts:48

すべてのオブザーバーに通知します

#### Returns

`void`

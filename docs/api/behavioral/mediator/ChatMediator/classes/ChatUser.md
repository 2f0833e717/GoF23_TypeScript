[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/mediator/ChatMediator](../README.md) / ChatUser

# Class: `abstract` ChatUser

Defined in: behavioral/mediator/ChatMediator.ts:65

チャットユーザー基底クラス

## Extended by

- [`RegularUser`](../../ChatUsers/classes/RegularUser.md)
- [`AdminUser`](../../ChatUsers/classes/AdminUser.md)

## Constructors

### new ChatUser()

> **new ChatUser**(`id`, `name`, `mediator`): [`ChatUser`](ChatUser.md)

Defined in: behavioral/mediator/ChatMediator.ts:74

コンストラクタ

#### Parameters

##### id

`string`

ユーザーID

##### name

`string`

ユーザー名

##### mediator

[`ChatMediator`](../interfaces/ChatMediator.md)

チャットメディエーター

#### Returns

[`ChatUser`](ChatUser.md)

## Properties

### status

> `protected` **status**: `string` = `'online'`

Defined in: behavioral/mediator/ChatMediator.ts:66

***

### mediator

> `protected` **mediator**: [`ChatMediator`](../interfaces/ChatMediator.md)

Defined in: behavioral/mediator/ChatMediator.ts:77

チャットメディエーター

## Methods

### send()

> **send**(`content`, `to`?): `void`

Defined in: behavioral/mediator/ChatMediator.ts:85

メッセージを送信します

#### Parameters

##### content

`string`

メッセージ内容

##### to?

`string`

宛先ユーザーID（省略可）

#### Returns

`void`

***

### receive()

> `abstract` **receive**(`message`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:100

メッセージを受信します

#### Parameters

##### message

[`Message`](../interfaces/Message.md)

受信したメッセージ

#### Returns

`void`

***

### setStatus()

> **setStatus**(`status`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:106

ステータスを設定します

#### Parameters

##### status

`string`

新しいステータス

#### Returns

`void`

***

### getId()

> **getId**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:114

ユーザーIDを取得します

#### Returns

`string`

***

### getName()

> **getName**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:121

ユーザー名を取得します

#### Returns

`string`

***

### getStatus()

> **getStatus**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:128

ステータスを取得します

#### Returns

`string`

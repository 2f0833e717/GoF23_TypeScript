[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/mediator/ChatUsers](../README.md) / RegularUser

# Class: RegularUser

Defined in: behavioral/mediator/ChatUsers.ts:9

一般ユーザー

## Extends

- [`ChatUser`](../../ChatMediator/classes/ChatUser.md)

## Constructors

### new RegularUser()

> **new RegularUser**(`id`, `name`, `mediator`): [`RegularUser`](RegularUser.md)

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

[`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md)

チャットメディエーター

#### Returns

[`RegularUser`](RegularUser.md)

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`constructor`](../../ChatMediator/classes/ChatUser.md#constructors)

## Properties

### status

> `protected` **status**: `string` = `'online'`

Defined in: behavioral/mediator/ChatMediator.ts:66

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`status`](../../ChatMediator/classes/ChatUser.md#status)

***

### mediator

> `protected` **mediator**: [`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md)

Defined in: behavioral/mediator/ChatMediator.ts:77

チャットメディエーター

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`mediator`](../../ChatMediator/classes/ChatUser.md#mediator-1)

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

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`send`](../../ChatMediator/classes/ChatUser.md#send)

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

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`setStatus`](../../ChatMediator/classes/ChatUser.md#setstatus)

***

### getId()

> **getId**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:114

ユーザーIDを取得します

#### Returns

`string`

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`getId`](../../ChatMediator/classes/ChatUser.md#getid)

***

### getName()

> **getName**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:121

ユーザー名を取得します

#### Returns

`string`

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`getName`](../../ChatMediator/classes/ChatUser.md#getname)

***

### getStatus()

> **getStatus**(): `string`

Defined in: behavioral/mediator/ChatMediator.ts:128

ステータスを取得します

#### Returns

`string`

#### Inherited from

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`getStatus`](../../ChatMediator/classes/ChatUser.md#getstatus)

***

### receive()

> **receive**(`message`): `void`

Defined in: behavioral/mediator/ChatUsers.ts:12

メッセージを受信します

#### Parameters

##### message

[`Message`](../../ChatMediator/interfaces/Message.md)

受信したメッセージ

#### Returns

`void`

#### Overrides

[`ChatUser`](../../ChatMediator/classes/ChatUser.md).[`receive`](../../ChatMediator/classes/ChatUser.md#receive)

***

### getMessageHistory()

> **getMessageHistory**(): [`Message`](../../ChatMediator/interfaces/Message.md)[]

Defined in: behavioral/mediator/ChatUsers.ts:43

メッセージ履歴を取得します

#### Returns

[`Message`](../../ChatMediator/interfaces/Message.md)[]

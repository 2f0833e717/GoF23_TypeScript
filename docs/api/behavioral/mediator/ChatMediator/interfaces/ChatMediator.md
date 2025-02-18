[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/mediator/ChatMediator](../README.md) / ChatMediator

# Interface: ChatMediator

Defined in: behavioral/mediator/ChatMediator.ts:35

チャットメディエーターインターフェース

## Methods

### addUser()

> **addUser**(`user`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:40

ユーザーを追加します

#### Parameters

##### user

[`ChatUser`](../classes/ChatUser.md)

追加するユーザー

#### Returns

`void`

***

### removeUser()

> **removeUser**(`userId`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:46

ユーザーを削除します

#### Parameters

##### userId

`string`

削除するユーザーのID

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`message`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:52

メッセージを送信します

#### Parameters

##### message

[`Message`](Message.md)

送信するメッセージ

#### Returns

`void`

***

### notifyUserStatus()

> **notifyUserStatus**(`userId`, `status`): `void`

Defined in: behavioral/mediator/ChatMediator.ts:59

ユーザーのステータスが変更されたことを通知します

#### Parameters

##### userId

`string`

ステータスが変更されたユーザーのID

##### status

`string`

新しいステータス

#### Returns

`void`

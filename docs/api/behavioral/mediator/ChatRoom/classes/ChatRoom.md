[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/mediator/ChatRoom](../README.md) / ChatRoom

# Class: ChatRoom

Defined in: behavioral/mediator/ChatRoom.ts:10

チャットメディエーターインターフェース

## Implements

- [`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md)

## Constructors

### new ChatRoom()

> **new ChatRoom**(): [`ChatRoom`](ChatRoom.md)

#### Returns

[`ChatRoom`](ChatRoom.md)

## Methods

### addUser()

> **addUser**(`user`): `void`

Defined in: behavioral/mediator/ChatRoom.ts:18

ユーザーを追加します

#### Parameters

##### user

[`ChatUser`](../../ChatMediator/classes/ChatUser.md)

追加するユーザー

#### Returns

`void`

#### Implementation of

[`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md).[`addUser`](../../ChatMediator/interfaces/ChatMediator.md#adduser)

***

### removeUser()

> **removeUser**(`userId`): `void`

Defined in: behavioral/mediator/ChatRoom.ts:31

ユーザーを削除します

#### Parameters

##### userId

`string`

削除するユーザーのID

#### Returns

`void`

#### Implementation of

[`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md).[`removeUser`](../../ChatMediator/interfaces/ChatMediator.md#removeuser)

***

### sendMessage()

> **sendMessage**(`message`): `void`

Defined in: behavioral/mediator/ChatRoom.ts:45

メッセージを送信します

#### Parameters

##### message

[`Message`](../../ChatMediator/interfaces/Message.md)

送信するメッセージ

#### Returns

`void`

#### Implementation of

[`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md).[`sendMessage`](../../ChatMediator/interfaces/ChatMediator.md#sendmessage)

***

### notifyUserStatus()

> **notifyUserStatus**(`userId`, `status`): `void`

Defined in: behavioral/mediator/ChatRoom.ts:82

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

#### Implementation of

[`ChatMediator`](../../ChatMediator/interfaces/ChatMediator.md).[`notifyUserStatus`](../../ChatMediator/interfaces/ChatMediator.md#notifyuserstatus)

***

### getMessageLog()

> **getMessageLog**(): [`Message`](../../ChatMediator/interfaces/Message.md)[]

Defined in: behavioral/mediator/ChatRoom.ts:118

メッセージログを取得します

#### Returns

[`Message`](../../ChatMediator/interfaces/Message.md)[]

***

### getMessageLogByType()

> **getMessageLogByType**(`type`): [`Message`](../../ChatMediator/interfaces/Message.md)[]

Defined in: behavioral/mediator/ChatRoom.ts:126

特定のメッセージタイプのログを取得します

#### Parameters

##### type

[`MessageType`](../../ChatMediator/enumerations/MessageType.md)

メッセージタイプ

#### Returns

[`Message`](../../ChatMediator/interfaces/Message.md)[]

***

### getUserMessageLog()

> **getUserMessageLog**(`userId`): [`Message`](../../ChatMediator/interfaces/Message.md)[]

Defined in: behavioral/mediator/ChatRoom.ts:134

特定のユーザーのメッセージログを取得します

#### Parameters

##### userId

`string`

ユーザーID

#### Returns

[`Message`](../../ChatMediator/interfaces/Message.md)[]

***

### getUsers()

> **getUsers**(): `Map`\<`string`, [`ChatUser`](../../ChatMediator/classes/ChatUser.md)\>

Defined in: behavioral/mediator/ChatRoom.ts:144

現在のユーザー一覧を取得します

#### Returns

`Map`\<`string`, [`ChatUser`](../../ChatMediator/classes/ChatUser.md)\>

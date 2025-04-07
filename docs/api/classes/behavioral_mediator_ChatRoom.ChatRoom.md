[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/mediator/ChatRoom](../modules/behavioral_mediator_ChatRoom.md) / ChatRoom

# Class: ChatRoom

[behavioral/mediator/ChatRoom](../modules/behavioral_mediator_ChatRoom.md).ChatRoom

チャットメディエーターインターフェース

## Implements

- [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md)

## Table of contents

### Constructors

- [constructor](behavioral_mediator_ChatRoom.ChatRoom.md#constructor)

### Methods

- [addUser](behavioral_mediator_ChatRoom.ChatRoom.md#adduser)
- [removeUser](behavioral_mediator_ChatRoom.ChatRoom.md#removeuser)
- [sendMessage](behavioral_mediator_ChatRoom.ChatRoom.md#sendmessage)
- [notifyUserStatus](behavioral_mediator_ChatRoom.ChatRoom.md#notifyuserstatus)
- [getMessageLog](behavioral_mediator_ChatRoom.ChatRoom.md#getmessagelog)
- [getMessageLogByType](behavioral_mediator_ChatRoom.ChatRoom.md#getmessagelogbytype)
- [getUserMessageLog](behavioral_mediator_ChatRoom.ChatRoom.md#getusermessagelog)
- [getUsers](behavioral_mediator_ChatRoom.ChatRoom.md#getusers)

## Constructors

### constructor

• **new ChatRoom**(): [`ChatRoom`](behavioral_mediator_ChatRoom.ChatRoom.md)

#### Returns

[`ChatRoom`](behavioral_mediator_ChatRoom.ChatRoom.md)

## Methods

### addUser

▸ **addUser**(`user`): `void`

ユーザーを追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md) | 追加するユーザー |

#### Returns

`void`

#### Implementation of

[ChatMediator](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md).[addUser](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md#adduser)

#### Defined in

behavioral/mediator/ChatRoom.ts:18

___

### removeUser

▸ **removeUser**(`userId`): `void`

ユーザーを削除します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | 削除するユーザーのID |

#### Returns

`void`

#### Implementation of

[ChatMediator](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md).[removeUser](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md#removeuser)

#### Defined in

behavioral/mediator/ChatRoom.ts:31

___

### sendMessage

▸ **sendMessage**(`message`): `void`

メッセージを送信します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md) | 送信するメッセージ |

#### Returns

`void`

#### Implementation of

[ChatMediator](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md).[sendMessage](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md#sendmessage)

#### Defined in

behavioral/mediator/ChatRoom.ts:45

___

### notifyUserStatus

▸ **notifyUserStatus**(`userId`, `status`): `void`

ユーザーのステータスが変更されたことを通知します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ステータスが変更されたユーザーのID |
| `status` | `string` | 新しいステータス |

#### Returns

`void`

#### Implementation of

[ChatMediator](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md).[notifyUserStatus](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md#notifyuserstatus)

#### Defined in

behavioral/mediator/ChatRoom.ts:82

___

### getMessageLog

▸ **getMessageLog**(): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

メッセージログを取得します

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatRoom.ts:118

___

### getMessageLogByType

▸ **getMessageLogByType**(`type`): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

特定のメッセージタイプのログを取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`MessageType`](../enums/behavioral_mediator_ChatMediator.MessageType.md) | メッセージタイプ |

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatRoom.ts:126

___

### getUserMessageLog

▸ **getUserMessageLog**(`userId`): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

特定のユーザーのメッセージログを取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID |

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatRoom.ts:134

___

### getUsers

▸ **getUsers**(): `Map`\<`string`, [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)\>

現在のユーザー一覧を取得します

#### Returns

`Map`\<`string`, [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)\>

#### Defined in

behavioral/mediator/ChatRoom.ts:144

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/mediator/ChatMediator](../modules/behavioral_mediator_ChatMediator.md) / ChatMediator

# Interface: ChatMediator

[behavioral/mediator/ChatMediator](../modules/behavioral_mediator_ChatMediator.md).ChatMediator

チャットメディエーターインターフェース

## Implemented by

- [`ChatRoom`](../classes/behavioral_mediator_ChatRoom.ChatRoom.md)

## Table of contents

### Methods

- [addUser](behavioral_mediator_ChatMediator.ChatMediator.md#adduser)
- [removeUser](behavioral_mediator_ChatMediator.ChatMediator.md#removeuser)
- [sendMessage](behavioral_mediator_ChatMediator.ChatMediator.md#sendmessage)
- [notifyUserStatus](behavioral_mediator_ChatMediator.ChatMediator.md#notifyuserstatus)

## Methods

### addUser

▸ **addUser**(`user`): `void`

ユーザーを追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`ChatUser`](../classes/behavioral_mediator_ChatMediator.ChatUser.md) | 追加するユーザー |

#### Returns

`void`

#### Defined in

behavioral/mediator/ChatMediator.ts:40

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

#### Defined in

behavioral/mediator/ChatMediator.ts:46

___

### sendMessage

▸ **sendMessage**(`message`): `void`

メッセージを送信します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Message`](behavioral_mediator_ChatMediator.Message.md) | 送信するメッセージ |

#### Returns

`void`

#### Defined in

behavioral/mediator/ChatMediator.ts:52

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

#### Defined in

behavioral/mediator/ChatMediator.ts:59

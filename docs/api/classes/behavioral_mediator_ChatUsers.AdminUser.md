[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/mediator/ChatUsers](../modules/behavioral_mediator_ChatUsers.md) / AdminUser

# Class: AdminUser

[behavioral/mediator/ChatUsers](../modules/behavioral_mediator_ChatUsers.md).AdminUser

管理者ユーザー

## Hierarchy

- [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)

  ↳ **`AdminUser`**

## Table of contents

### Constructors

- [constructor](behavioral_mediator_ChatUsers.AdminUser.md#constructor)

### Properties

- [status](behavioral_mediator_ChatUsers.AdminUser.md#status)
- [mediator](behavioral_mediator_ChatUsers.AdminUser.md#mediator)

### Methods

- [send](behavioral_mediator_ChatUsers.AdminUser.md#send)
- [setStatus](behavioral_mediator_ChatUsers.AdminUser.md#setstatus)
- [getId](behavioral_mediator_ChatUsers.AdminUser.md#getid)
- [getName](behavioral_mediator_ChatUsers.AdminUser.md#getname)
- [getStatus](behavioral_mediator_ChatUsers.AdminUser.md#getstatus)
- [receive](behavioral_mediator_ChatUsers.AdminUser.md#receive)
- [sendSystemMessage](behavioral_mediator_ChatUsers.AdminUser.md#sendsystemmessage)
- [getMessageHistory](behavioral_mediator_ChatUsers.AdminUser.md#getmessagehistory)
- [getMessageHistoryByType](behavioral_mediator_ChatUsers.AdminUser.md#getmessagehistorybytype)

## Constructors

### constructor

• **new AdminUser**(`id`, `name`, `mediator`): [`AdminUser`](behavioral_mediator_ChatUsers.AdminUser.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ユーザーID |
| `name` | `string` | ユーザー名 |
| `mediator` | [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md) | チャットメディエーター |

#### Returns

[`AdminUser`](behavioral_mediator_ChatUsers.AdminUser.md)

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[constructor](behavioral_mediator_ChatMediator.ChatUser.md#constructor)

#### Defined in

behavioral/mediator/ChatMediator.ts:74

## Properties

### status

• `Protected` **status**: `string` = `'online'`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[status](behavioral_mediator_ChatMediator.ChatUser.md#status)

#### Defined in

behavioral/mediator/ChatMediator.ts:66

___

### mediator

• `Protected` **mediator**: [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md)

チャットメディエーター

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[mediator](behavioral_mediator_ChatMediator.ChatUser.md#mediator)

#### Defined in

behavioral/mediator/ChatMediator.ts:77

## Methods

### send

▸ **send**(`content`, `to?`): `void`

メッセージを送信します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | メッセージ内容 |
| `to?` | `string` | 宛先ユーザーID（省略可） |

#### Returns

`void`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[send](behavioral_mediator_ChatMediator.ChatUser.md#send)

#### Defined in

behavioral/mediator/ChatMediator.ts:85

___

### setStatus

▸ **setStatus**(`status`): `void`

ステータスを設定します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `string` | 新しいステータス |

#### Returns

`void`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[setStatus](behavioral_mediator_ChatMediator.ChatUser.md#setstatus)

#### Defined in

behavioral/mediator/ChatMediator.ts:106

___

### getId

▸ **getId**(): `string`

ユーザーIDを取得します

#### Returns

`string`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[getId](behavioral_mediator_ChatMediator.ChatUser.md#getid)

#### Defined in

behavioral/mediator/ChatMediator.ts:114

___

### getName

▸ **getName**(): `string`

ユーザー名を取得します

#### Returns

`string`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[getName](behavioral_mediator_ChatMediator.ChatUser.md#getname)

#### Defined in

behavioral/mediator/ChatMediator.ts:121

___

### getStatus

▸ **getStatus**(): `string`

ステータスを取得します

#### Returns

`string`

#### Inherited from

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[getStatus](behavioral_mediator_ChatMediator.ChatUser.md#getstatus)

#### Defined in

behavioral/mediator/ChatMediator.ts:128

___

### receive

▸ **receive**(`message`): `void`

メッセージを受信します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md) | 受信したメッセージ |

#### Returns

`void`

#### Overrides

[ChatUser](behavioral_mediator_ChatMediator.ChatUser.md).[receive](behavioral_mediator_ChatMediator.ChatUser.md#receive)

#### Defined in

behavioral/mediator/ChatUsers.ts:54

___

### sendSystemMessage

▸ **sendSystemMessage**(`content`): `void`

システムメッセージを送信します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | メッセージ内容 |

#### Returns

`void`

#### Defined in

behavioral/mediator/ChatUsers.ts:83

___

### getMessageHistory

▸ **getMessageHistory**(): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

メッセージ履歴を取得します

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatUsers.ts:96

___

### getMessageHistoryByType

▸ **getMessageHistoryByType**(`type`): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

特定のメッセージタイプの履歴を取得します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`MessageType`](../enums/behavioral_mediator_ChatMediator.MessageType.md) | メッセージタイプ |

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatUsers.ts:104

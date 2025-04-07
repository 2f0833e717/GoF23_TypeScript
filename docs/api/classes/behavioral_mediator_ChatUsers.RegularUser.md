[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/mediator/ChatUsers](../modules/behavioral_mediator_ChatUsers.md) / RegularUser

# Class: RegularUser

[behavioral/mediator/ChatUsers](../modules/behavioral_mediator_ChatUsers.md).RegularUser

一般ユーザー

## Hierarchy

- [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)

  ↳ **`RegularUser`**

## Table of contents

### Constructors

- [constructor](behavioral_mediator_ChatUsers.RegularUser.md#constructor)

### Properties

- [status](behavioral_mediator_ChatUsers.RegularUser.md#status)
- [mediator](behavioral_mediator_ChatUsers.RegularUser.md#mediator)

### Methods

- [send](behavioral_mediator_ChatUsers.RegularUser.md#send)
- [setStatus](behavioral_mediator_ChatUsers.RegularUser.md#setstatus)
- [getId](behavioral_mediator_ChatUsers.RegularUser.md#getid)
- [getName](behavioral_mediator_ChatUsers.RegularUser.md#getname)
- [getStatus](behavioral_mediator_ChatUsers.RegularUser.md#getstatus)
- [receive](behavioral_mediator_ChatUsers.RegularUser.md#receive)
- [getMessageHistory](behavioral_mediator_ChatUsers.RegularUser.md#getmessagehistory)

## Constructors

### constructor

• **new RegularUser**(`id`, `name`, `mediator`): [`RegularUser`](behavioral_mediator_ChatUsers.RegularUser.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ユーザーID |
| `name` | `string` | ユーザー名 |
| `mediator` | [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md) | チャットメディエーター |

#### Returns

[`RegularUser`](behavioral_mediator_ChatUsers.RegularUser.md)

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

behavioral/mediator/ChatUsers.ts:12

___

### getMessageHistory

▸ **getMessageHistory**(): [`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

メッセージ履歴を取得します

#### Returns

[`Message`](../interfaces/behavioral_mediator_ChatMediator.Message.md)[]

#### Defined in

behavioral/mediator/ChatUsers.ts:43

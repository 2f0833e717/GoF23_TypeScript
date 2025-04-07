[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/mediator/ChatMediator](../modules/behavioral_mediator_ChatMediator.md) / ChatUser

# Class: ChatUser

[behavioral/mediator/ChatMediator](../modules/behavioral_mediator_ChatMediator.md).ChatUser

チャットユーザー基底クラス

## Hierarchy

- **`ChatUser`**

  ↳ [`RegularUser`](behavioral_mediator_ChatUsers.RegularUser.md)

  ↳ [`AdminUser`](behavioral_mediator_ChatUsers.AdminUser.md)

## Table of contents

### Constructors

- [constructor](behavioral_mediator_ChatMediator.ChatUser.md#constructor)

### Properties

- [status](behavioral_mediator_ChatMediator.ChatUser.md#status)
- [mediator](behavioral_mediator_ChatMediator.ChatUser.md#mediator)

### Methods

- [send](behavioral_mediator_ChatMediator.ChatUser.md#send)
- [receive](behavioral_mediator_ChatMediator.ChatUser.md#receive)
- [setStatus](behavioral_mediator_ChatMediator.ChatUser.md#setstatus)
- [getId](behavioral_mediator_ChatMediator.ChatUser.md#getid)
- [getName](behavioral_mediator_ChatMediator.ChatUser.md#getname)
- [getStatus](behavioral_mediator_ChatMediator.ChatUser.md#getstatus)

## Constructors

### constructor

• **new ChatUser**(`id`, `name`, `mediator`): [`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)

コンストラクタ

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ユーザーID |
| `name` | `string` | ユーザー名 |
| `mediator` | [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md) | チャットメディエーター |

#### Returns

[`ChatUser`](behavioral_mediator_ChatMediator.ChatUser.md)

#### Defined in

behavioral/mediator/ChatMediator.ts:74

## Properties

### status

• `Protected` **status**: `string` = `'online'`

#### Defined in

behavioral/mediator/ChatMediator.ts:66

___

### mediator

• `Protected` **mediator**: [`ChatMediator`](../interfaces/behavioral_mediator_ChatMediator.ChatMediator.md)

チャットメディエーター

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

#### Defined in

behavioral/mediator/ChatMediator.ts:85

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

#### Defined in

behavioral/mediator/ChatMediator.ts:100

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

#### Defined in

behavioral/mediator/ChatMediator.ts:106

___

### getId

▸ **getId**(): `string`

ユーザーIDを取得します

#### Returns

`string`

#### Defined in

behavioral/mediator/ChatMediator.ts:114

___

### getName

▸ **getName**(): `string`

ユーザー名を取得します

#### Returns

`string`

#### Defined in

behavioral/mediator/ChatMediator.ts:121

___

### getStatus

▸ **getStatus**(): `string`

ステータスを取得します

#### Returns

`string`

#### Defined in

behavioral/mediator/ChatMediator.ts:128

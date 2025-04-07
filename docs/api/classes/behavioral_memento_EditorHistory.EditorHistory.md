[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/memento/EditorHistory](../modules/behavioral_memento_EditorHistory.md) / EditorHistory

# Class: EditorHistory

[behavioral/memento/EditorHistory](../modules/behavioral_memento_EditorHistory.md).EditorHistory

エディタの履歴を管理するクラス

## Table of contents

### Constructors

- [constructor](behavioral_memento_EditorHistory.EditorHistory.md#constructor)

### Methods

- [save](behavioral_memento_EditorHistory.EditorHistory.md#save)
- [undo](behavioral_memento_EditorHistory.EditorHistory.md#undo)
- [redo](behavioral_memento_EditorHistory.EditorHistory.md#redo)
- [getState](behavioral_memento_EditorHistory.EditorHistory.md#getstate)
- [clear](behavioral_memento_EditorHistory.EditorHistory.md#clear)
- [getHistorySize](behavioral_memento_EditorHistory.EditorHistory.md#gethistorysize)
- [getCurrentIndex](behavioral_memento_EditorHistory.EditorHistory.md#getcurrentindex)

## Constructors

### constructor

• **new EditorHistory**(): [`EditorHistory`](behavioral_memento_EditorHistory.EditorHistory.md)

#### Returns

[`EditorHistory`](behavioral_memento_EditorHistory.EditorHistory.md)

## Methods

### save

▸ **save**(`memento`): `void`

現在の状態を保存します

#### Parameters

| Name | Type |
| :------ | :------ |
| `memento` | [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md) |

#### Returns

`void`

#### Defined in

behavioral/memento/EditorHistory.ts:23

___

### undo

▸ **undo**(): ``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

前の状態に戻ります

#### Returns

``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/EditorHistory.ts:35

___

### redo

▸ **redo**(): ``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

次の状態に進みます

#### Returns

``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/EditorHistory.ts:46

___

### getState

▸ **getState**(`index`): ``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

指定された位置の状態を取得します

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/EditorHistory.ts:57

___

### clear

▸ **clear**(): `void`

履歴をクリアします

#### Returns

`void`

#### Defined in

behavioral/memento/EditorHistory.ts:68

___

### getHistorySize

▸ **getHistorySize**(): `number`

履歴のサイズを取得します

#### Returns

`number`

#### Defined in

behavioral/memento/EditorHistory.ts:76

___

### getCurrentIndex

▸ **getCurrentIndex**(): `number`

現在の履歴インデックスを取得します

#### Returns

`number`

#### Defined in

behavioral/memento/EditorHistory.ts:83

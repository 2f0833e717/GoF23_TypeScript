[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/memento/EditorMemento](../modules/behavioral_memento_EditorMemento.md) / EditorMemento

# Class: EditorMemento

[behavioral/memento/EditorMemento](../modules/behavioral_memento_EditorMemento.md).EditorMemento

エディタの状態を保存するメメントクラス

## Table of contents

### Constructors

- [constructor](behavioral_memento_EditorMemento.EditorMemento.md#constructor)

### Methods

- [getState](behavioral_memento_EditorMemento.EditorMemento.md#getstate)
- [getTimestamp](behavioral_memento_EditorMemento.EditorMemento.md#gettimestamp)
- [getText](behavioral_memento_EditorMemento.EditorMemento.md#gettext)
- [getCursorPosition](behavioral_memento_EditorMemento.EditorMemento.md#getcursorposition)
- [getSelectionStart](behavioral_memento_EditorMemento.EditorMemento.md#getselectionstart)
- [getSelectionEnd](behavioral_memento_EditorMemento.EditorMemento.md#getselectionend)

## Constructors

### constructor

• **new EditorMemento**(`state`): [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EditorState`](../interfaces/behavioral_memento_EditorState.EditorState.md) |

#### Returns

[`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/EditorMemento.ts:19

## Methods

### getState

▸ **getState**(): [`EditorState`](../interfaces/behavioral_memento_EditorState.EditorState.md)

保存された状態を取得します

#### Returns

[`EditorState`](../interfaces/behavioral_memento_EditorState.EditorState.md)

#### Defined in

behavioral/memento/EditorMemento.ts:27

___

### getTimestamp

▸ **getTimestamp**(): `Date`

状態が保存された時刻を取得します

#### Returns

`Date`

#### Defined in

behavioral/memento/EditorMemento.ts:34

___

### getText

▸ **getText**(): `string`

#### Returns

`string`

#### Defined in

behavioral/memento/EditorMemento.ts:38

___

### getCursorPosition

▸ **getCursorPosition**(): `number`

#### Returns

`number`

#### Defined in

behavioral/memento/EditorMemento.ts:42

___

### getSelectionStart

▸ **getSelectionStart**(): `number`

#### Returns

`number`

#### Defined in

behavioral/memento/EditorMemento.ts:46

___

### getSelectionEnd

▸ **getSelectionEnd**(): `number`

#### Returns

`number`

#### Defined in

behavioral/memento/EditorMemento.ts:50

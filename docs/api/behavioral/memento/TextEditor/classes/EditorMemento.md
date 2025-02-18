[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/memento/TextEditor](../README.md) / EditorMemento

# Class: EditorMemento

Defined in: behavioral/memento/TextEditor.ts:22

エディタの状態を保存するメメント

## Constructors

### new EditorMemento()

> **new EditorMemento**(`state`): [`EditorMemento`](EditorMemento.md)

Defined in: behavioral/memento/TextEditor.ts:23

#### Parameters

##### state

[`EditorState`](../interfaces/EditorState.md)

#### Returns

[`EditorMemento`](EditorMemento.md)

## Methods

### getState()

> **getState**(): [`EditorState`](../interfaces/EditorState.md)

Defined in: behavioral/memento/TextEditor.ts:28

保存された状態を取得します

#### Returns

[`EditorState`](../interfaces/EditorState.md)

***

### getTimestamp()

> **getTimestamp**(): `Date`

Defined in: behavioral/memento/TextEditor.ts:35

保存された時刻を取得します

#### Returns

`Date`

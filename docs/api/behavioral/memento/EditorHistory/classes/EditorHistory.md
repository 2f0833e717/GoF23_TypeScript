[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/memento/EditorHistory](../README.md) / EditorHistory

# Class: EditorHistory

Defined in: behavioral/memento/EditorHistory.ts:9

## Constructors

### new EditorHistory()

> **new EditorHistory**(): [`EditorHistory`](EditorHistory.md)

#### Returns

[`EditorHistory`](EditorHistory.md)

## Methods

### push()

> **push**(`memento`): `void`

Defined in: behavioral/memento/EditorHistory.ts:17

新しい状態を保存します

#### Parameters

##### memento

[`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

保存する状態

#### Returns

`void`

***

### undo()

> **undo**(): `null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

Defined in: behavioral/memento/EditorHistory.ts:30

一つ前の状態を取得します（Undo）

#### Returns

`null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

***

### redo()

> **redo**(): `null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

Defined in: behavioral/memento/EditorHistory.ts:41

一つ後の状態を取得します（Redo）

#### Returns

`null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

***

### getCurrentIndex()

> **getCurrentIndex**(): `number`

Defined in: behavioral/memento/EditorHistory.ts:52

現在の履歴の位置を取得します

#### Returns

`number`

***

### getHistorySize()

> **getHistorySize**(): `number`

Defined in: behavioral/memento/EditorHistory.ts:59

履歴の総数を取得します

#### Returns

`number`

***

### getStateAt()

> **getStateAt**(`index`): `null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

Defined in: behavioral/memento/EditorHistory.ts:67

特定の時点の状態を取得します

#### Parameters

##### index

`number`

インデックス

#### Returns

`null` \| [`EditorMemento`](../../TextEditor/classes/EditorMemento.md)

***

### clear()

> **clear**(): `void`

Defined in: behavioral/memento/EditorHistory.ts:77

履歴をクリアします

#### Returns

`void`

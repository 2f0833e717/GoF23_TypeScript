[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [behavioral/memento/TextEditor](../README.md) / TextEditor

# Class: TextEditor

Defined in: behavioral/memento/TextEditor.ts:43

テキストエディタクラス

## Constructors

### new TextEditor()

> **new TextEditor**(): [`TextEditor`](TextEditor.md)

#### Returns

[`TextEditor`](TextEditor.md)

## Methods

### setText()

> **setText**(`text`): `void`

Defined in: behavioral/memento/TextEditor.ts:53

テキストを設定します

#### Parameters

##### text

`string`

設定するテキスト

#### Returns

`void`

***

### setCursor()

> **setCursor**(`position`): `void`

Defined in: behavioral/memento/TextEditor.ts:64

カーソル位置を設定します

#### Parameters

##### position

`number`

カーソル位置

#### Returns

`void`

***

### setSelection()

> **setSelection**(`start`, `end`): `void`

Defined in: behavioral/memento/TextEditor.ts:78

テキストを選択します

#### Parameters

##### start

`number`

選択開始位置

##### end

`number`

選択終了位置

#### Returns

`void`

***

### save()

> **save**(): [`EditorMemento`](EditorMemento.md)

Defined in: behavioral/memento/TextEditor.ts:90

現在の状態を保存します

#### Returns

[`EditorMemento`](EditorMemento.md)

***

### restore()

> **restore**(`memento`): `void`

Defined in: behavioral/memento/TextEditor.ts:105

状態を復元します

#### Parameters

##### memento

[`EditorMemento`](EditorMemento.md)

復元する状態

#### Returns

`void`

***

### getText()

> **getText**(): `string`

Defined in: behavioral/memento/TextEditor.ts:116

現在のテキストを取得します

#### Returns

`string`

***

### getCursorPosition()

> **getCursorPosition**(): `number`

Defined in: behavioral/memento/TextEditor.ts:123

現在のカーソル位置を取得します

#### Returns

`number`

***

### getSelection()

> **getSelection**(): `object`

Defined in: behavioral/memento/TextEditor.ts:130

現在の選択範囲を取得します

#### Returns

`object`

##### start

> **start**: `number`

##### end

> **end**: `number`

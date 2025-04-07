[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [behavioral/memento/TextEditor](../modules/behavioral_memento_TextEditor.md) / TextEditor

# Class: TextEditor

[behavioral/memento/TextEditor](../modules/behavioral_memento_TextEditor.md).TextEditor

テキストエディタクラス

## Table of contents

### Constructors

- [constructor](behavioral_memento_TextEditor.TextEditor.md#constructor)

### Methods

- [insertText](behavioral_memento_TextEditor.TextEditor.md#inserttext)
- [deleteText](behavioral_memento_TextEditor.TextEditor.md#deletetext)
- [moveCursor](behavioral_memento_TextEditor.TextEditor.md#movecursor)
- [select](behavioral_memento_TextEditor.TextEditor.md#select)
- [clearSelection](behavioral_memento_TextEditor.TextEditor.md#clearselection)
- [hasSelection](behavioral_memento_TextEditor.TextEditor.md#hasselection)
- [getSelection](behavioral_memento_TextEditor.TextEditor.md#getselection)
- [save](behavioral_memento_TextEditor.TextEditor.md#save)
- [undo](behavioral_memento_TextEditor.TextEditor.md#undo)
- [redo](behavioral_memento_TextEditor.TextEditor.md#redo)
- [restore](behavioral_memento_TextEditor.TextEditor.md#restore)
- [goTo](behavioral_memento_TextEditor.TextEditor.md#goto)
- [getText](behavioral_memento_TextEditor.TextEditor.md#gettext)
- [getCursorPosition](behavioral_memento_TextEditor.TextEditor.md#getcursorposition)
- [getSelectionStart](behavioral_memento_TextEditor.TextEditor.md#getselectionstart)
- [getSelectionEnd](behavioral_memento_TextEditor.TextEditor.md#getselectionend)

## Constructors

### constructor

• **new TextEditor**(): [`TextEditor`](behavioral_memento_TextEditor.TextEditor.md)

#### Returns

[`TextEditor`](behavioral_memento_TextEditor.TextEditor.md)

#### Defined in

behavioral/memento/TextEditor.ts:27

## Methods

### insertText

▸ **insertText**(`text`): `void`

テキストを挿入します

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:37

___

### deleteText

▸ **deleteText**(`length?`): `void`

テキストを削除します

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `1` | 削除する文字数。正の値の場合はカーソルの右側の文字を、負の値の場合はカーソルの左側の文字を削除 |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:57

___

### moveCursor

▸ **moveCursor**(`position`): `void`

カーソルを移動します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | 移動先の位置（0から文字列の長さまでの値） |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:101

___

### select

▸ **select**(`start`, `end`): `void`

テキストを選択します

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:113

___

### clearSelection

▸ **clearSelection**(): `void`

選択範囲をクリアします

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:126

___

### hasSelection

▸ **hasSelection**(): `boolean`

選択範囲があるかどうかを確認します

#### Returns

`boolean`

#### Defined in

behavioral/memento/TextEditor.ts:134

___

### getSelection

▸ **getSelection**(): `Object`

選択範囲を取得します

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Defined in

behavioral/memento/TextEditor.ts:158

___

### save

▸ **save**(): [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

現在の状態を保存します

#### Returns

[`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/TextEditor.ts:168

___

### undo

▸ **undo**(): ``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

前の状態に戻ります

#### Returns

``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/TextEditor.ts:175

___

### redo

▸ **redo**(): ``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

次の状態に進みます

#### Returns

``null`` \| [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md)

#### Defined in

behavioral/memento/TextEditor.ts:187

___

### restore

▸ **restore**(`memento`): `void`

状態を復元します

#### Parameters

| Name | Type |
| :------ | :------ |
| `memento` | [`EditorMemento`](behavioral_memento_EditorMemento.EditorMemento.md) |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:199

___

### goTo

▸ **goTo**(`index`): `void`

指定された位置の状態に移動します

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

behavioral/memento/TextEditor.ts:207

___

### getText

▸ **getText**(): `string`

現在のテキストを取得します

#### Returns

`string`

#### Defined in

behavioral/memento/TextEditor.ts:217

___

### getCursorPosition

▸ **getCursorPosition**(): `number`

カーソル位置を取得します

#### Returns

`number`

#### Defined in

behavioral/memento/TextEditor.ts:224

___

### getSelectionStart

▸ **getSelectionStart**(): `number`

選択範囲の開始位置を取得します

#### Returns

`number`

#### Defined in

behavioral/memento/TextEditor.ts:231

___

### getSelectionEnd

▸ **getSelectionEnd**(): `number`

選択範囲の終了位置を取得します

#### Returns

`number`

#### Defined in

behavioral/memento/TextEditor.ts:238

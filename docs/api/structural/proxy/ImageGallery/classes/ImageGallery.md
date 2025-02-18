[**GoF23 TypeScript Design Patterns v1.0.0**](../../../../README.md)

***

[GoF23 TypeScript Design Patterns](../../../../README.md) / [structural/proxy/ImageGallery](../README.md) / ImageGallery

# Class: ImageGallery

Defined in: structural/proxy/ImageGallery.ts:10

## Constructors

### new ImageGallery()

> **new ImageGallery**(): [`ImageGallery`](ImageGallery.md)

#### Returns

[`ImageGallery`](ImageGallery.md)

## Methods

### addImage()

> **addImage**(`filename`): `void`

Defined in: structural/proxy/ImageGallery.ts:17

ギャラリーに画像を追加します

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

`void`

***

### displayImage()

> **displayImage**(`filename`): `void`

Defined in: structural/proxy/ImageGallery.ts:30

指定された画像を表示します

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

`void`

#### Throws

Error 画像が見つからない場合

***

### showImageInfo()

> **showImageInfo**(`filename`): `void`

Defined in: structural/proxy/ImageGallery.ts:46

画像のメタデータを表示します

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

`void`

#### Throws

Error 画像が見つからない場合

***

### showGalleryInfo()

> **showGalleryInfo**(): `void`

Defined in: structural/proxy/ImageGallery.ts:63

すべての画像のメタデータを表示します

#### Returns

`void`

***

### isImageLoaded()

> **isImageLoaded**(`filename`): `boolean`

Defined in: structural/proxy/ImageGallery.ts:86

指定された画像が読み込まれているかを確認します

#### Parameters

##### filename

`string`

画像ファイル名

#### Returns

`boolean`

読み込み済みの場合はtrue

#### Throws

Error 画像が見つからない場合

[GoF23 TypeScript Design Patterns - v1.0.0](../README.md) / [structural/proxy/ImageGallery](../modules/structural_proxy_ImageGallery.md) / ImageGallery

# Class: ImageGallery

[structural/proxy/ImageGallery](../modules/structural_proxy_ImageGallery.md).ImageGallery

## Table of contents

### Constructors

- [constructor](structural_proxy_ImageGallery.ImageGallery.md#constructor)

### Methods

- [addImage](structural_proxy_ImageGallery.ImageGallery.md#addimage)
- [displayImage](structural_proxy_ImageGallery.ImageGallery.md#displayimage)
- [showImageInfo](structural_proxy_ImageGallery.ImageGallery.md#showimageinfo)
- [showGalleryInfo](structural_proxy_ImageGallery.ImageGallery.md#showgalleryinfo)
- [isImageLoaded](structural_proxy_ImageGallery.ImageGallery.md#isimageloaded)

## Constructors

### constructor

• **new ImageGallery**(): [`ImageGallery`](structural_proxy_ImageGallery.ImageGallery.md)

#### Returns

[`ImageGallery`](structural_proxy_ImageGallery.ImageGallery.md)

## Methods

### addImage

▸ **addImage**(`filename`): `void`

ギャラリーに画像を追加します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

`void`

#### Defined in

structural/proxy/ImageGallery.ts:17

___

### displayImage

▸ **displayImage**(`filename`): `void`

指定された画像を表示します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

`void`

**`Throws`**

Error 画像が見つからない場合

#### Defined in

structural/proxy/ImageGallery.ts:30

___

### showImageInfo

▸ **showImageInfo**(`filename`): `void`

画像のメタデータを表示します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

`void`

**`Throws`**

Error 画像が見つからない場合

#### Defined in

structural/proxy/ImageGallery.ts:46

___

### showGalleryInfo

▸ **showGalleryInfo**(): `void`

すべての画像のメタデータを表示します

#### Returns

`void`

#### Defined in

structural/proxy/ImageGallery.ts:63

___

### isImageLoaded

▸ **isImageLoaded**(`filename`): `boolean`

指定された画像が読み込まれているかを確認します

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | 画像ファイル名 |

#### Returns

`boolean`

読み込み済みの場合はtrue

**`Throws`**

Error 画像が見つからない場合

#### Defined in

structural/proxy/ImageGallery.ts:86

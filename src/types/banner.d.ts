interface IBannerFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface IBanner {
  id: number
  link: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  anh_banner: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      large: IBannerFormat
      small: IBannerFormat
      medium: IBannerFormat
      thumbnail: IBannerFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: string
    folderPath: string
    createdAt: string
    updatedAt: string
  }
}

export interface IBannerType {
  __component: string
  id: number
  dmst_banners: [IBanner]
}

export interface IPost {
  ngay_dang: string
  id: number
  ten_bai_viet: string
  loai_va_tag: {
    selectedTags: [number]
    articleTypeId: number
  }
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  vuid: string
  versionNumber: number
  versionComment: number
  isVisibleInListView: boolean
  noi_dung_bai_viet: {
    id: number
    mo_ta: string
  }
  like_bai_viet: {
    id: number
    like: number
  }
  anh_dai_dien: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      thumbnail: {
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

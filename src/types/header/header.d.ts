export interface IHeader {
  id: number
  logo: {
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
  dmst_link_don_gians: [IHeaderLink]
}



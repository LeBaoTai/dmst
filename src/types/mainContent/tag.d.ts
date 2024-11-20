import { IPost } from '@/types/post'

interface ITag {
  tag: string
  slug: string
  bai_viet: [IPost]
}

export interface ITagsType {
  id: number
  loai: {
    id: number
    loai: string
    slug: string
  }
  tags: [ITag]
}

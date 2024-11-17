import { IPost } from '@/types/post'

interface ITag {
  tag: string
  bai_viet: [IPost]
}

export interface ITagsType {
  id: number
  loai: string
  tags: [ITag]
}

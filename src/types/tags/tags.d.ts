import { IPost } from '@/types/post'

interface ITag {
  id: number
  tag: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slug: string
  dmst_bai_viets: [IPost]
}

export interface ITags {
  __component: string
  id: number
  dmst_tags: [ITag]
}

import { IQuiclyRead } from '@/types/belowContent/quicklyRead'
import { IVideo } from '@/types/belowContent/video'
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

interface ITags {
  id: number
  dmst_tags: [ITag]
}

export interface IBelowContent {
  __component: string
  id: number
  tags: ITags
  'dmst-videos': [IVideo]
  'dmst-doc-nhanh': [IQuiclyRead]
}

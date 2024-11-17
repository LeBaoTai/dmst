import { IPostsType } from '@/types/mainContent/post'
import { ITagsType } from '@/types/mainContent/tag'

export interface IMainContent {
  __component: string
  id: number
  bai_viet_theo_loai: IPostsType
  tags_theo_loai: ITagsType
}

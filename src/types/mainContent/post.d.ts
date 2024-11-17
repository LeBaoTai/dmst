import { IPost } from "@/types/post"

interface IPostType {
  id: number
  loai: string
  createdAt: string
  updatedAt: string
  slug: string
  publishedAt: string
  dmst_bai_viets: [IPost]
}

export interface IPostsType {
  id: string
  dmst_loai_bai_viets: [IPostType]
}

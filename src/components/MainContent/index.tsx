import Post from '@/components/MainContent/Post'
import Tag from '@/components/MainContent/Tag'
import { RootState } from '@/redux/store'
import { IPostsType, IPostType } from '@/types/mainContent/post'
import { ITag, ITagsType } from '@/types/mainContent/tag'
import { IPost } from '@/types/post'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function MainContent() {
  const mainContentSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[1]
  )

  const postsType: IPostsType | undefined =
    mainContentSelector?.bai_viet_theo_loai
  const postType: IPostType | undefined = postsType?.dmst_loai_bai_viets[0]
  const posts: IPost[] | undefined = postType?.dmst_bai_viets

  const tagsType: ITagsType | undefined = mainContentSelector?.tags_theo_loai
  const tags: ITag[] | undefined = tagsType?.tags ?? []

  return (
    <div className="pt-8">
      {/* tin tuc */}
      {/* grid layout for tablet and desktop */}
      <div className="hidden gap-4 gap-x-10 md:grid md:grid-cols-9 lg:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-8">
          <div className="font-lora border-t-[1px] border-slate-300 text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            <p className="pt-3">
              <Link href={`/news`}>Tin Tức</Link>
            </p>
          </div>
          <div className="divide-y divide-solid">
            {posts?.map((post: IPost) => <Post key={post.id} {...post} />)}
          </div>
        </div>
        <div className="sticky top-6 self-start border p-4 md:col-span-3 lg:col-span-4">
          <div className="absolute top-0 flex -translate-y-1/2 justify-center">
            <p className="bg-red-100 p-1 text-red-600">Các tin liên quan</p>
          </div>
          <div className="space-y-1"></div>
        </div>
      </div>

      {/* su kien */}
      <div className="">
        <div className="font-lora border-t-[1px] border-slate-300 pt-4 text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
          <p className="">Sự kiện</p>
        </div>
        <div className="grid gap-5 py-6 md:grid-cols-9 lg:grid-cols-12">
          <div className="md:col-span-4 lg:col-span-6">
            <p className="font-bold text-red-600 md:text-left">{tags[0].tag}</p>
            <div className="divide-y">
              {tags[0].bai_viet.map((post: IPost) => (
                <Tag key={post.id} {...post} />
              ))}
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-6 lg:col-span-6">
            <p className="font-bold text-red-600 md:text-left">{tags[1].tag}</p>
            <div className="divide-y">
              {tags[1].bai_viet.map((post: IPost) => (
                <Tag key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

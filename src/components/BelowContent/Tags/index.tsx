import Post from '@/components/BelowContent/Tags/tag'
import { IApp } from '@/types/app'
import { IBelowContent, ITag, ITags } from '@/types/belowContent/belowContent'
import { IPost } from '@/types/post'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { HOME_PATH_API } from '@/utils/paths'

export default async function Tags() {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${HOME_PATH_API}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IApp = await response.json()
  const belowContent: IBelowContent = data.noi_dung[4]
  const tagConent: ITags = belowContent.tags

  const tags: ITag[] = tagConent.dmst_tags

  return (
    <div className="grid gap-4 pt-4 md:grid-cols-2 md:grid-rows-2">
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          {tags[0].tag}
        </p>
        {tags[0].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          {tags[1].tag}
        </p>
        {tags[1].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          {tags[2].tag}
        </p>
        {tags[2].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          {tags[3].tag}
        </p>

        {tags[3].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

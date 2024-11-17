import Post from '@/components/BelowContent/Tags/tag'
import { RootState } from '@/redux/store'
import { ITag } from '@/types/belowContent/belowContent'
import { IPost } from '@/types/post'
import { useSelector } from 'react-redux'

export default function Tags() {
  const tagsSeletor = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[4].tags
  )

  const tags: ITag[] | undefined = tagsSeletor?.dmst_tags

  return (
    <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 pt-4">
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

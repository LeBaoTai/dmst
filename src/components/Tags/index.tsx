import Post from '@/components/Tags/Post'
import { RootState } from '@/redux/store'
import { IPost } from '@/types/post'
import { ITag } from '@/types/tags/tags'
import { useSelector } from 'react-redux'

export default function Tags() {
  const tagSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[3]
  )

  const tags: ITag[] | undefined = tagSelector?.dmst_tags

  return (
    <div className="pt-4">
      <div className="grid gap-4 md:grid-cols-9 lg:grid-cols-12">
        <div className="md:col-span-3 lg:col-span-4">
          <p className="text-left text-lg underline">{tags[0].tag}</p>
          <div className="divide-y">
            {tags[0].dmst_bai_viets.map((post: IPost) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4">
          <p className="text-left text-lg underline">{tags[1].tag}</p>
          <div className="divide-y">
            {tags[1].dmst_bai_viets.map((post: IPost) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-4">
          <p className="text-left text-lg underline">{tags[2].tag}</p>
          <div className="divide-y">
            {tags[2].dmst_bai_viets.map((post: IPost) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

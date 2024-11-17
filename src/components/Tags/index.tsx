import Post from '@/components/Tags/Post'
import { IApp } from '@/types/app'
import { IPost } from '@/types/post'
import { ITag, ITags } from '@/types/tags/tags'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
// import { HOME_PATH_API } from '@/utils/paths'

export default async function Tags() {
  const API_URL = `${NEXT_PUBLIC_BASE_URL}/api/dmst-trang-chu`

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }
  const data: IApp = await response.json()

  const tagsType: ITags = data.noi_dung[3]
  const tags: ITag[] = tagsType.dmst_tags

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

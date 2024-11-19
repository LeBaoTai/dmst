import Post from '@/components/BelowContent/Tags/tag'
import { IApp } from '@/types/app'
import { IBelowContent, ITag, ITags } from '@/types/belowContent/belowContent'
import { IPost } from '@/types/post'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import Link from 'next/link'

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
  const belowContent: IBelowContent = data.noi_dung[4]
  const tagConent: ITags = belowContent.tags

  const tags: ITag[] = tagConent.dmst_tags

  return (
    <div className="grid gap-4 pt-4 md:grid-cols-2 md:grid-rows-2">
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          <Link href={`/tags/${tags[0].slug}`}>{tags[0].tag}</Link>
        </p>
        {tags[0].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          <Link href={`/tags/${tags[1].slug}`}>{tags[1].tag}</Link>
        </p>
        {tags[1].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="border-b border-slate-600 font-bold md:text-xl">
          <Link href={`/tags/${tags[2].slug}`}>{tags[2].tag}</Link>
        </p>
        {tags[2].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className="">
        <p className="flex border-b border-slate-600 font-bold md:text-xl">
          <Link href={`/tags/${tags[3].slug}`}>{tags[3].tag}</Link>
        </p>
        {tags[3].dmst_bai_viets.map((post: IPost) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

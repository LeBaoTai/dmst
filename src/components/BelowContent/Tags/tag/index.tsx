import { IPost } from '@/types/post'
import { API_PORT, API_ROOT } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'

export default function Post(post: IPost) {
  const renderImg = () => {
    const imgPath = `${API_ROOT}:${API_PORT}${post?.anh_dai_dien.url}`

    if (imgPath) {
      return (
        <Image
          className="w-full object-contain"
          src={imgPath}
          width={post?.anh_dai_dien.width}
          height={post?.anh_dai_dien.height}
          alt={post?.anh_dai_dien.name || 'img'}
        />
      )
    }
  }

  return (
    <div className="grid h-32 grid-cols-3 gap-2 duration-150 ease-in hover:shadow-md">
      <Link
        href={`/post/${post.slug}`}
        className="col-span-1 overflow-hidden py-2">
        {renderImg()}
      </Link>
      <div className="col-span-2 py-2">
        <Link href={`/post/${post.slug}`}>
          <p className="line-clamp-4 text-base">{post.ten_bai_viet}</p>
        </Link>
      </div>
    </div>
  )
}

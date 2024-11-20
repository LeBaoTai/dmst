import { IPost } from '@/types/post'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'

export default function Tag(post: IPost) {
  const renderImg = () => {
    const imgPath = `${NEXT_PUBLIC_BASE_URL}${post.anh_dai_dien.url}`

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
    <div className="grid gap-4 py-3 md:h-36 md:grid-cols-6">
      {/* img */}
      <Link
        href={`/post/${post.slug}`}
        className="flex justify-center overflow-hidden md:col-span-2">
        {renderImg()}
      </Link>
      {/* infor] */}
      <div className="flex flex-col gap-2 md:col-span-4 md:grid-rows-[auto_auto_auto]">
        <Link href={`/post/${post.slug}`}>
          <p className="line-clamp-2 text-xl duration-100 ease-in-out hover:text-red-600">
            {post.ten_bai_viet}
          </p>
        </Link>
        <p className="text-xs text-slate-500">{post.createdAt}</p>
        <p className="line-clamp-2 text-sm">{post.noi_dung_bai_viet.mo_ta}</p>
      </div>
    </div>
  )
}

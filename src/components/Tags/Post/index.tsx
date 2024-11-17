import { IPost } from '@/types/post'
import { API_ROOT, API_PORT } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Post(post: IPost) {
  const renderImg = () => {
    const imgPath = `${API_ROOT}:${API_PORT}${post.anh_dai_dien.url}`

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
    <div className="grid h-36 grid-cols-3 gap-4 py-2 duration-150 ease-in hover:shadow-lg">
      <Link
        href={`/post/${post.slug}`}
        className="col-span-1 flex items-center overflow-hidden">
        {renderImg()}
      </Link>
      <div className="col-span-2 flex items-center">
        <Link href={`/post/${post.slug}`}>
          <p className="line-clamp-3 text-sm">{post.ten_bai_viet}</p>
        </Link>
      </div>
    </div>
  )
}

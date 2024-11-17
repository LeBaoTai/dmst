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
    <div key={post.id} className="grid h-56 w-auto gap-5 py-5 md:grid-cols-3">
      {/* img */}
      <div className="overflow-hidden md:col-span-1">{renderImg()}</div>
      {/* info */}
      <div className="grid h-full grid-rows-[auto_auto_1fr] gap-2 md:col-span-2">
        <p className="text-xs text-slate-500">{post.createdAt}</p>
        <Link href={`/post/${post.slug}`}>
          <p className="font-lora line-clamp-2 text-xl decoration-1 hover:underline md:text-2xl lg:line-clamp-3">
            {post.ten_bai_viet}
          </p>
        </Link>
        <Link href={`/post/${post.slug}`}>
          <p className="font-lora line-clamp-2 text-sm md:text-base">
            {post.noi_dung_bai_viet.mo_ta}
          </p>
        </Link>
      </div>
    </div>
  )
}

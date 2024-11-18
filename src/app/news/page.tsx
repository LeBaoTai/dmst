import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_PORT, API_ROOT } from '@/utils/constant'

import Image from 'next/image'
import Link from 'next/link'

export default async function NewList() {
  const newsPath = `${API_ROOT}:${API_PORT}${'/api/dmst-loai-bai-viets/slug/'}${'tin-tuc'}`
  const response = await fetch(newsPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })

  const data = await response.json()
  const list: any[] = []
  data.dmst_tags.forEach((tag: any) => {
    tag['dmst-bai-viets'].forEach((post: any) => list.push(post))
  })

  const combinedData = {
    ...data,
    list
  }

  const renderImg = (post: any) => {
    const imgPath = `${API_ROOT}:${API_PORT}${post.anh_dai_dien.url}`

    if (imgPath) {
      return (
        <Image
          className="h-full w-full overflow-hidden object-cover"
          src={imgPath}
          width={post.anh_dai_dien.width}
          height={post.anh_dai_dien.height}
          alt={post.anh_dai_dien.name || 'img'}
        />
      )
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-grow items-center justify-center p-4 py-5 md:px-7 lg:px-32">
        <div className="py-6 text-center text-3xl font-bold">
          {combinedData.loai}
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          {combinedData.list.map((post: any) => (
            // <PostCard key={post.id} post={post} />
            <Link
              href="#"
              key={post.id}
              className="h-[450px] p-2 duration-200 ease-out hover:shadow-lg hover:ease-in lg:col-span-3">
              <div className="h-full justify-between" key={post.id}>
                <div className="h-1/2">{renderImg(post)}</div>
                <div className="flex h-1/2 flex-col justify-between py-2">
                  <div className="">
                    <span className="text-sm text-slate-400">
                      {post.ngay_dang}
                    </span>
                  </div>
                  <div className="">
                    <span className="line-clamp-3 text-lg font-bold">
                      {post.ten_bai_viet}
                    </span>
                  </div>
                  <div className="">
                    <span className="line-clamp-3">
                      {post.noi_dung_bai_viet.mo_ta}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

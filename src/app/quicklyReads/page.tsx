import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function QuicklyReadList() {
  const quicklyReadsPath = `${NEXT_PUBLIC_BASE_URL}${'/api/dmst-doc-nhanhs'}`
  const response = await fetch(quicklyReadsPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  if (!response.ok) {
    notFound()
  }

  const list: any[] = data.data

  const renderImg = (post: any) => {
    const imgPath = `${NEXT_PUBLIC_BASE_URL}${post.url}`

    if (imgPath) {
      return (
        <Image
          className="h-full w-full overflow-hidden object-contain"
          src={imgPath}
          width={post.width}
          height={post.height}
          alt={post.name || 'img'}
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
        <div className="py-6 text-center text-3xl font-bold">{`Đọc Nhanh`}</div>
        <div className="grid gap-5 lg:grid-cols-12">
          {list.map((post: any) => (
            <Link
              href={`/quicklyReads/${post.slug}`}
              key={post.id}
              className="p-2 duration-200 ease-out hover:shadow-lg hover:ease-in lg:col-span-3">
              <div
                className="flex h-full flex-col justify-between"
                key={post.id}>
                <div className="h-full">{renderImg(post.anh_doc_nhanh[0])}</div>
                <div className="py-2">
                  <div className="">
                    <span className="text-sm text-slate-400">
                      {post.ngay_dang}
                    </span>
                  </div>
                  <div className="">
                    <span className="line-clamp-3 text-lg font-bold">
                      {post.ten}
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

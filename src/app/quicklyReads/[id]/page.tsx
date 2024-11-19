import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_ROOT, API_PORT } from '@/utils/constant'
import Image from 'next/image'
import React from 'react'

export default async function QuicklyRead(props: any) {
  const params = props.params
  const { id } = params
  const postPath = `${API_ROOT}:${API_PORT}${'/api/dmst-doc-nhanhs/slug/'}${id}`
  const response = await fetch(postPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }

  const data = await response.json()

  const list: any[] = data.anh_doc_nhanh

  const renderImg = (post: any) => {
    const imgPath = `${API_ROOT}:${API_PORT}${post.url}`

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
        <div className="py-6 text-center text-3xl font-bold">{data.ten}</div>
        <div className="grid gap-5 lg:grid-cols-12">
          {list.map((post: any) => (
            <div
              className="h-full duration-200 ease-out hover:shadow-lg hover:ease-in lg:col-span-3"
              key={post.id}>
              {renderImg(post)}
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

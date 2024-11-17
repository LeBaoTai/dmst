import { API_PORT, API_ROOT } from '@/utils/constant'
import { Link } from 'lucide-react'
import Image from 'next/image'

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

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow items-center justify-center">
        <span className="text-center text-3xl font-bold">
          {combinedData.loai}
        </span>
        <div className="grid gap-2 lg:grid-cols-12">
          {combinedData.list.map((post: any) => (
            // <PostCard key={post.id} post={post} />
            <div className="" key={post.id}>
              <Link href="#">
                {
                  <Image
                    className="w-full object-contain"
                    src={
                      'https://images.unsplash.com/photo-1657299142018-4f7f33aea18c'
                    }
                    width={post.anh_dai_dien.width}
                    height={post.anh_dai_dien.height}
                    alt={post.anh_dai_dien.name || 'img'}
                  />
                }
              </Link>
              <span>{post.ten}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PostCard = ({ post }: { post: any }) => {
  const imgPath = post?.anh_dai_dien
    ? `${API_ROOT}:${API_PORT}${post.anh_dai_dien.url}`
    : null

  return <div className="flex-col border lg:col-span-3"></div>
}

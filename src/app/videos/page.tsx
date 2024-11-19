import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_PORT, API_ROOT } from '@/utils/constant'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function VideoList() {
  const ecosystemPath = `${API_ROOT}:${API_PORT}${'/api/dmst-videos'}`
  const response = await fetch(ecosystemPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    notFound()
  }

  const data = await response.json()
  const list: any[] = data.data

  return (
    <div className="flex h-screen flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-grow items-center justify-center p-4 py-5 md:px-7 lg:px-32">
        <div className="py-6 text-center text-3xl font-bold">{'Video'}</div>
        <div className="grid gap-5 lg:grid-cols-12">
          {list.map((post: any) => (
            <Link
              href={`#`}
              key={post.id}
              className="p-2 duration-200 ease-out hover:shadow-lg hover:ease-in lg:col-span-3">
              <div className="h-full justify-between" key={post.id}>
                <div className="flex h-1/2 flex-col justify-between py-2">
                  <div className="">
                    <span className="text-sm text-slate-400">
                      {post.publishedAt}
                    </span>
                  </div>
                  <div className="">
                    <span className="line-clamp-3 text-lg font-bold">
                      {post.ten_video}
                    </span>
                  </div>
                  <div className="">
                    <span className="line-clamp-3">{post.mo_ta}</span>
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

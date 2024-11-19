import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_PORT, API_ROOT } from '@/utils/constant'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Tag(props: any) {
  const params = props.params
  const { id } = params
  const newsPath = `${API_ROOT}:${API_PORT}${'/api/dmst-tags/slug/'}${id}`
  const response = await fetch(newsPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  if (!response.ok) {
    notFound()
  }

  const list: any[] = data.dmst_bai_viets

  // const renderImg = (post: any) => {
  //   const imgPath = `${API_ROOT}:${API_PORT}${post.anh_dai_dien.url}`

  //   if (imgPath) {
  //     return (
  //       <Image
  //         className="h-full w-full overflow-hidden object-cover"
  //         src={imgPath}
  //         width={post.anh_dai_dien.width}
  //         height={post.anh_dai_dien.height}
  //         alt={post.anh_dai_dien.name || 'img'}
  //       />
  //     )
  //   }
  // }

  return (
    <div className="flex h-screen flex-col">
      <div>
        <Header />
      </div>

      <div className="flex-grow items-center justify-center p-4 py-5 md:px-7 lg:px-32">
        <div className="py-6 text-center text-3xl font-bold">{data.tag}</div>
        <div className="grid gap-5 lg:grid-cols-12">
          {list.map((post: any) => (
            <Link
              href={`/post/${post.slug}`}
              key={post.id}
              className="h-[450px] p-2 duration-200 ease-out hover:shadow-lg hover:ease-in lg:col-span-3">
              <div className="h-full justify-between" key={post.id}>
                {/* <div className="h-1/2">{renderImg(post)}</div> */}
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

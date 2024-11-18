import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_ROOT, API_PORT } from '@/utils/constant'
// import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
// import { POST_PATH_API } from '@/utils/paths'
import styles from './style.module.css'

export default async function PostDetails(props: any) {
  const params = props.params
  const { id } = params
  const postPath = `${API_ROOT}:${API_PORT}${'/api/dmst-bai-viets/slug/'}${id}`
  const response = await fetch(postPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }

  const data = await response.json()

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="flex-grow gap-x-10 p-4 py-5 md:grid md:grid-cols-9 md:px-7 lg:grid-cols-12 lg:px-32">
        <div className="md:col-span-6 lg:col-span-8">
          <div className="flex justify-between">
            <div>
              <span className="text-red-500">
                {data.dmst_loai_bai_viets[0].loai}
              </span>
              {'>' + data.dmst_tags[0]?.tag || ''}
            </div>
            <span>{data.ngay_dang}</span>
          </div>
          <p className="py-4 text-left text-3xl font-bold">
            {data.ten_bai_viet}
          </p>
          <p className="text-center">{data.noi_dung_bai_viet.mo_ta}</p>
          <div
            className={`flex-row ${styles.container}`}
            dangerouslySetInnerHTML={{
              __html: data.noi_dung_bai_viet.noi_dung
            }}></div>
        </div>
        <div className="sticky top-6 self-start border p-4 md:col-span-3 lg:col-span-4">
          <div className="absolute top-0 flex -translate-y-1/2 justify-center">
            <p className="bg-red-100 p-1 text-red-600">Các tin liên quan</p>
          </div>
          <div className="space-y-1"></div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

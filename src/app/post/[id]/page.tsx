import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_ROOT, API_PORT } from '@/utils/constant'
import styles from './style.module.css'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function PostDetails(props: any) {
  const params = props.params
  const { id } = params
  const postPath = `${API_ROOT}:${API_PORT}${'/api/dmst-bai-viets/slug/'}${id}`
  const response = await fetch(postPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    notFound()
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
                <Link href="/news">{data.dmst_loai_bai_viets[0].loai}</Link>
              </span>
              <span>{'>'}</span>
              <span>
                <Link href={`/tags/${data.dmst_tags[0].slug || 'none'}`}>
                  {data.dmst_tags[0].tag || 'Không có'}
                </Link>
              </span>
            </div>
            <div className="">
              <span>{data.noi_dung_bai_viet.tac_gia + ' - '}</span>
              <span>{data.ngay_dang}</span>
            </div>
          </div>
          <p className="py-4 text-left text-3xl font-bold">
            {data.ten_bai_viet}
          </p>
          <p className="text-center">{data.noi_dung_bai_viet.mo_ta}</p>
          <div
            className={`flex-row ${styles.container}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.noi_dung_bai_viet?.noi_dung || '')
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

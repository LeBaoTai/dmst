import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_ROOT, API_PORT } from '@/utils/constant'
// import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
// import { POST_PATH_API } from '@/utils/paths'

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
      <div className="flex-grow p-4 py-5 md:px-7 lg:px-32">
        <p className="text-center text-xl font-bold">{data.ten_bai_viet}</p>
        <p className="text-center">{data.noi_dung_bai_viet.mo_ta}</p>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

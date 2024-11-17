import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { POST_PATH_API } from '@/utils/paths'
// import { useRouter } from 'next/router'

export default async function PostDetails() {
  // const router = useRouter()

  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${POST_PATH_API}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  console.log(data)

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="flex-grow p-4 py-5 md:px-7 lg:px-32">
        {/* <p className="text-center text-xl font-bold">{data.ten_bai_viet}</p>
        <p className="text-center">{data.noi_dung_bai_viet.mo_ta}</p> */}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

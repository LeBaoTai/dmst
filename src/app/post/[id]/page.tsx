import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'

export default async function PostDetails(props: any) {
  const { params } = props

  // const data = await getPostData(params.id)

  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/proxy`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()

  console.log(data)
  console.log(params)

  return (
    <div className="flex h-screen flex-col">
      <div className="">{/* <Header /> */}</div>
      <div className="flex-grow p-4 py-5 md:px-7 lg:px-32">
        {data.id}
        {/* <p className="text-center text-xl font-bold">{data.ten_bai_viet}</p>
        <p className="text-center">{data.noi_dung_bai_viet.mo_ta}</p> */}
      </div>
      <div className="">{/* <Footer /> */}</div>
    </div>
  )
}

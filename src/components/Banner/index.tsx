import { IApp } from '@/types/app'
import { IBanner, IBannerType } from '@/types/banner'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import Image from 'next/image'

export default async function Banner() {
  const API_URL = `${NEXT_PUBLIC_BASE_URL}/api/dmst-trang-chu`

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }

  const data: IApp = await response.json()
  const bannerType: IBannerType = data.noi_dung[2]
  const banner: IBanner = bannerType.dmst_banners[0]

  const renderImg = () => {
    const imgPath = `${NEXT_PUBLIC_BASE_URL}${banner?.anh_banner.url}`

    if (imgPath) {
      return (
        <Image
          className="w-full object-contain"
          src={imgPath}
          width={banner?.anh_banner.width}
          height={banner?.anh_banner.height}
          alt={banner?.anh_banner.name || 'img'}
        />
      )
    }
  }

  return <div className="">{renderImg()}</div>
}

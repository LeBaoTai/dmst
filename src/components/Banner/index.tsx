import { RootState } from '@/redux/store'
import { API_PORT, API_ROOT } from '@/utils/constant'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export default function Banner() {
  const bannerSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[2]
  )

  const banner = bannerSelector?.dmst_banners[0]

  const renderImg = () => {
    const imgPath = `${API_ROOT}:${API_PORT}${banner?.anh_banner.url}`

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

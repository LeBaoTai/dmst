import { IQuicklyImg } from '@/types/belowContent/quicklyRead'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import Image from 'next/image'

export default function QuicklyImg(i: IQuicklyImg) {
  const renderImg = () => {
    const imgPath = `${NEXT_PUBLIC_BASE_URL}${i.url}`

    if (imgPath) {
      return (
        <Image
          className="w-full object-contain"
          src={imgPath}
          width={i.width}
          height={i.height}
          alt={i.name || 'Img'}
        />
      )
    }
  }
  return <div className="">{renderImg()}</div>
}

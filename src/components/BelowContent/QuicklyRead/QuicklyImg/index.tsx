import { IQuicklyImg } from '@/types/belowContent/quicklyRead'
import { API_ROOT, API_PORT } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function QuicklyImg(i: IQuicklyImg) {
  const renderImg = () => {
    const imgPath = `${API_ROOT}:${API_PORT}${i.url}`

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
  return (
    <div className="">
      <Link href={'#'}>{renderImg()}</Link>
    </div>
  )
}
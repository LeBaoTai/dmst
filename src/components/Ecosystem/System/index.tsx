import { ISystem } from '@/types/ecosystem/system'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'

export default function System(hst: ISystem) {
  const renderImg = () => {
    const imgPath = `${NEXT_PUBLIC_BASE_URL}${hst?.anh_dai_dien.url}`
    if (imgPath) {
      return (
        <Image
          className="w-full object-contain"
          src={imgPath}
          width={hst?.anh_dai_dien.width}
          height={hst?.anh_dai_dien.height}
          alt={hst?.anh_dai_dien.name || 'img'}
        />
      )
    }
  }

  return (
    <Link
      key={hst.id}
      href={`/ecosystem/${hst.slug}`}
      className="flex flex-col items-center justify-evenly rounded-md py-3 transition duration-150 ease-out hover:shadow-md hover:ease-in md:col-span-3 lg:col-span-4">
      {renderImg()}
      <span className="text-center text-sm text-slate-600">{hst.ten}</span>
    </Link>
  )
}

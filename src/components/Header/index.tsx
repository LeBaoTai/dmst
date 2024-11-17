import { RootState } from '@/redux/store'
import { IHeader } from '@/types/header/header'
import { IHeaderLink } from '@/types/header/headerLink'
import { API_PORT, API_ROOT } from '@/utils/constant'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Header() {
  const headerSelector = useSelector((state: RootState) => state.appData.data)

  const header: IHeader | undefined = headerSelector.Header

  const imgPath = `${API_ROOT}:${API_PORT}${header?.logo.url}`

  const renderImg = (url: string | undefined) => {
    if (url) {
      return (
        <Image
          className="h-auto w-auto"
          src={imgPath}
          width={header?.logo.width}
          height={header?.logo.height}
          alt={header?.logo.name || 'img'}
        />
      )
    }
  }

  return (
    <div className="grid items-center gap-4 bg-slate-100 p-4 shadow-sm md:h-16 md:grid-cols-9 md:px-7 lg:grid-cols-12 lg:px-32">
      <div className="shrink-0 md:col-span-3">
        {renderImg(header?.logo.url)}
      </div>
      <div className="hidden items-center justify-end gap-1 text-sm lg:col-span-7 lg:flex">
        {header?.dmst_link_don_gians.map((link: IHeaderLink) => (
          <Link
            key={link.ten}
            href={link.link}
            className="font-lora col-span-1 flex h-8 justify-center border-red-600 p-1 text-sm duration-150 ease-in hover:border-b">
            {link.ten}
          </Link>
        ))}
      </div>
      <div className="hidden md:col-span-3 md:block lg:col-span-2">
        <form action="#">
          <div className="relative flex h-8 rounded-xl">
            <input
              required
              className="peer w-full rounded-xl border border-red-400 bg-transparent bg-white px-4 text-sm outline-none focus:shadow-md"
              id="address"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="flex w-full items-center justify-end md:col-span-3 lg:hidden"></div>
    </div>
  )
}

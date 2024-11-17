import FooterLink from '@/components/Footer/FooterLink'
import { RootState } from '@/redux/store'
import { IFooterLink } from '@/types/footer/footerLink'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Footer() {
  const footerSelector = useSelector(
    (state: RootState) => state.appData.data.Footer
  )

  const footerLink: IFooterLink[] | undefined =
    footerSelector?.dmst_link_don_gians

  return (
    <div className="grid grid-cols-2 border-t bg-slate-50 p-4 md:px-7 lg:px-32">
      {/* left side */}
      <div className="col-span-1 flex flex-col justify-between">
        <p className="font-bold md:text-lg lg:text-xl">
          {footerSelector?.ten_trang}
        </p>

        <p className="md:text-sm lg:text-base">{footerSelector?.dia_chi}</p>

        <p className="md:text-sm lg:text-base">
          {footerSelector?.so_dien_thoai}
        </p>
        <p className="md:text-sm lg:text-base">{footerSelector?.email}</p>
      </div>
      {/* right side */}
      <div className="col-span-1 hidden flex-col items-end justify-between lg:flex">
        {footerLink?.map((link) => <FooterLink key={link.id} {...link} />)}
      </div>
    </div>
  )
}

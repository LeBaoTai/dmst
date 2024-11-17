import FooterLink from '@/components/Footer/FooterLink'
import { IApp } from '@/types/app'
import { IFooter } from '@/types/footer/footer'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { HOME_PATH_API } from '@/utils/paths'

export default async function Footer() {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${HOME_PATH_API}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IApp = await response.json()
  const footer: IFooter = data.Footer

  return (
    <div className="grid grid-cols-2 border-t bg-slate-50 p-4 md:px-7 lg:px-32">
      {/* left side */}
      <div className="col-span-1 flex flex-col justify-between">
        <p className="font-bold md:text-lg lg:text-xl">{footer.ten_trang}</p>
        <p className="md:text-sm lg:text-base">{footer.dia_chi}</p>
        <p className="md:text-sm lg:text-base">{footer.so_dien_thoai}</p>
        <p className="md:text-sm lg:text-base">{footer.email}</p>
      </div>
      {/* right side */}
      <div className="col-span-1 hidden flex-col items-end justify-between lg:flex">
        {footer.dmst_link_don_gians.map((link) => (
          <FooterLink key={link.id} {...link} />
        ))}
      </div>
    </div>
  )
}

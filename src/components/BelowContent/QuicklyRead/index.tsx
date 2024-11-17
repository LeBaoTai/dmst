import QuicklyImg from '@/components/BelowContent/QuicklyRead/QuicklyImg'
import { IApp } from '@/types/app'
import { IBelowContent } from '@/types/belowContent/belowContent'
import { IQuicklyImg, IQuiclyRead } from '@/types/belowContent/quicklyRead'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { HOME_PATH_API } from '@/utils/paths'

export default async function QuicklyRead() {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${HOME_PATH_API}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IApp = await response.json()
  const belowContent: IBelowContent = data.noi_dung[4]
  const quicklyReads: IQuiclyRead[] = belowContent['dmst-doc-nhanh']

  return (
    <>
      <p className="text-xl font-bold md:text-2xl lg:text-3xl">Đọc nhanh</p>
      <div className="space-y-2 py-7">
        {quicklyReads[0].anh_doc_nhanh.map((i: IQuicklyImg) => (
          <QuicklyImg key={i.id} {...i} />
        ))}
      </div>
    </>
  )
}

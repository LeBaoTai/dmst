import QuicklyImg from '@/components/BelowContent/QuicklyRead/QuicklyImg'
import { RootState } from '@/redux/store'
import { IQuicklyImg } from '@/types/belowContent/quicklyRead'
import { useSelector } from 'react-redux'

export default function QuicklyRead() {
  const quicklyReadSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[4]
  )

  const quicklyReads = quicklyReadSelector?.['dmst-doc-nhanh']

  return (
    <>
      <p className="text-xl font-bold md:text-2xl lg:text-3xl">Đọc nhanh</p>
      <div className="space-y-2 py-7">
        {quicklyReads?.[0].anh_doc_nhanh.map((i: IQuicklyImg) => (
          <QuicklyImg key={i.id} {...i} />
        ))}
      </div>
    </>
  )
}

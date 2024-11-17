import System from '@/components/Ecosystem/System'
import { RootState } from '@/redux/store'
import { ISystem } from '@/types/ecosystem/system'
import { useSelector } from 'react-redux'

export default function Ecosystem() {
  const ecosystemSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[0]
  )

  const he_sinh_thais: ISystem[] | undefined =
    ecosystemSelector?.dmst_he_sinh_thais

  return (
    <div className="bg-content-bg grid min-h-screen grid-cols-2 gap-6 md:min-h-fit md:grid-cols-9 lg:grid-cols-12">
      {he_sinh_thais?.map((hst) => <System {...hst} key={hst.id} />)}
    </div>
  )
}

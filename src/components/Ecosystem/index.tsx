import System from '@/components/Ecosystem/System'
import { IApp } from '@/types/app'
import { IEcosystem } from '@/types/ecosystem/ecosystem'
import { ISystem } from '@/types/ecosystem/system'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { HOME_PATH_API } from '@/utils/paths'

export default async function Ecosystem() {
  const response = await fetch(`${NEXT_PUBLIC_BASE_URL}${HOME_PATH_API}`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IApp = await response.json()
  const ecosystem: IEcosystem = data.noi_dung[0]
  const he_sinh_thais: ISystem[] = ecosystem.dmst_he_sinh_thais

  return (
    <div className="bg-content-bg grid min-h-screen grid-cols-2 gap-6 md:min-h-fit md:grid-cols-9 lg:grid-cols-12">
      {he_sinh_thais?.map((hst) => <System {...hst} key={hst.id} />)}
    </div>
  )
}

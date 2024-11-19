import Banner from '@/components/Banner'
import BelowContent from '@/components/BelowContent'
import Ecosystem from '@/components/Ecosystem'
import MainContent from '@/components/MainContent'
import Tags from '@/components/Tags'
import { IApp } from '@/types/app'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'

export default async function Body() {
  const API_URL = `${NEXT_PUBLIC_BASE_URL}/api/dmst-trang-chu`

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }
  const data: IApp = await response.json()

  const renderDynamicComponent = () => {
    const componentMap: Record<string, React.ComponentType> = {
      'dmst.he-sinh-thai': Ecosystem,
      'dmst.muc-chinh': MainContent,
      'dmst.banner': Banner,
      'dmst.muc-bai-viet-theo-tags': Tags,
      'dmst.muc-sau': BelowContent
    }

    return data.noi_dung.map((content: any, index) => {
      const Component = componentMap[content.__component]
      if (!Component) return null
      return <Component key={index} />
    })
  }

  return (
    <div className="p-4 py-5 md:px-7 lg:px-32">{renderDynamicComponent()}</div>
  )
}

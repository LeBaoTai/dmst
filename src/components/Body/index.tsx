import Banner from '@/components/Banner'
import BelowContent from '@/components/BelowContent'
import Ecosystem from '@/components/Ecosystem'
import MainContent from '@/components/MainContent'
import Tags from '@/components/Tags'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function Body() {
  const bodySelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung
  )

  const renderDynamicComponent = () => {
    const componentMap: Record<string, React.ComponentType> = {
      'dmst.he-sinh-thai': Ecosystem,
      'dmst.muc-chinh': MainContent,
      'dmst.banner': Banner,
      'dmst.muc-bai-viet-theo-tags': Tags,
      'dmst.muc-sau': BelowContent
    }

    return bodySelector?.map((content: any, index) => {
      const Component = componentMap[content.__component]
      if (!Component) return null
      return <Component key={index} />
    })
  }

  return (
    <div className="p-4 py-5 md:px-7 lg:px-32">
      {renderDynamicComponent()}
    </div>
  )
}

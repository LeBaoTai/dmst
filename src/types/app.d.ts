import { IBannerType } from '@/types/banner'
import { IBelowContent } from '@/types/belowContent/belowContent'
import { IEcosystem } from '@/types/ecosystem/ecosystem'
import { IFooter } from '@/types/footer/footer'
import { IMainContent } from '@/types/mainContent/mainContent'
import { ITags } from '@/types/tags/tags'
import { IHeader } from './header/header'

export type IApp = {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  Header: IHeader
  noi_dung: [IEcosystem, IMainContent, IBannerType, ITags, IBelowContent]
  Footer: IFooter
}

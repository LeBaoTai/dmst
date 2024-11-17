import { IFooterLink } from '@/types/footer/footerLink'

export interface IFooter {
  id: number
  ten_trang: string
  dia_chi: string
  email: string
  so_dien_thoai: string
  dmst_link_don_gians: [IFooterLink]
}

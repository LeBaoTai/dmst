import { ISystem } from "@/types/ecosystem/system"

export interface IEcosystem {
  __component: string
  id: number
  dmst_he_sinh_thais: [ISystem]
}

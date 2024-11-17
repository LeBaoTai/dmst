import { getEcosystemData } from '@/api/ecosystem/ecosystem'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default async function EcosystemDetails(props: any) {
  const { params } = props

  const data = await getEcosystemData(params.system)

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <p className="text-center text-3xl font-bold">{data.ten}</p>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

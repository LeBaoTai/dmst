import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { API_ROOT, API_PORT } from '@/utils/constant'
import React from 'react'

export default async function EcosystemDetails(props: any) {
  const params = props.params
  const { system } = params
  const ecosystemPath = `${API_ROOT}:${API_PORT}${'/api/dmst-he-sinh-thais/slug/'}${system}`
  const response = await fetch(ecosystemPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }

  const data = await response.json()

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

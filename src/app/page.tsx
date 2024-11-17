'use client'
import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { fetchAppData } from '@/redux/slicer/appDataSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const appSelector = useSelector((state: RootState) => state.appData)

  useEffect(() => {
    dispatch(fetchAppData())
  }, [dispatch])

  if (appSelector.loading == true) {
    return <div>Loading data...</div>
  }

  return (
    <div className="">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

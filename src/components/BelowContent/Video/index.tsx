'use client'

import CarouselVideoItem from '@/components/BelowContent/Video/CarouselVideoItem'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi
} from '@/components/ui/carousel'
import { RootState } from '@/redux/store'
import { IVideo } from '@/types/belowContent/video'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Video() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const belowContentSelector = useSelector(
    (state: RootState) => state.appData.data.noi_dung?.[4]
  )
  const videos: IVideo[] = belowContentSelector?.['dmst-videos']

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <p className="text-xl font-bold md:text-2xl lg:text-3xl">Video</p>
      <div className="mx-auto w-[90%] p-7">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {videos.map((video) => (
              <CarouselVideoItem key={video.id} {...video} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-center text-slate-400">
          Video {current} trên {count}
        </div>
      </div>
    </>
  )
}


import CarouselVideoItem from '@/components/BelowContent/Video/CarouselVideoItem'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { IApp } from '@/types/app'
import { IBelowContent } from '@/types/belowContent/belowContent'
import { IVideo } from '@/types/belowContent/video'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/constant'
import { HOME_PATH_API } from '@/utils/paths'

export default async function Video() {
  // const [api, setApi] = useState<CarouselApi>()
  // const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)

  const API_URL = `${NEXT_PUBLIC_BASE_URL}/api/dmst-trang-chu`

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }
  const data: IApp = await response.json()
  const belowContent: IBelowContent = data.noi_dung[4]
  const videos: IVideo[] = belowContent['dmst-videos']

  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }

  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)

  //   api.on('select', () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])

  return (
    <>
      <p className="text-xl font-bold md:text-2xl lg:text-3xl">Video</p>
      <div className="mx-auto w-[90%] p-7">
        <Carousel>
          <CarouselContent>
            {videos.map((video) => (
              <CarouselVideoItem key={video.id} {...video} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <div className="text-center text-slate-400">
          Video {current} trên {count}
        </div> */}
      </div>
    </>
  )
}

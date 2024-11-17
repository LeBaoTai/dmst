import { CarouselItem } from '@/components/ui/carousel'
import { IVideo } from '@/types/belowContent/video'

export default function CarouselVideoItem(video: IVideo) {
  function getIframeSrc(iframeString: string): string {
    try {
      const regex = /<iframe[^>]*src="([^"]*)"/
      const match = iframeString.match(regex)
      if (!match) throw new Error('Invalid iframe string or src not found')
      return match[1]
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  return (
    <CarouselItem>
      <div className="h-[400px]">
        <iframe
          className="h-full w-full"
          src={getIframeSrc(video.link_embed)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"
        />
      </div>
    </CarouselItem>
  )
}

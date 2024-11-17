import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Page() {
  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <Body />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

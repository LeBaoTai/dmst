import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Page() {
  // const dispatch = useDispatch<AppDispatch>()
  // const appSelector = useSelector((state: RootState) => state.appData)

  // useEffect(() => {
  //   dispatch(fetchAppData())
  // }, [dispatch])

  // if (appSelector.loading == true) {
  //   return <div>Loading data...</div>
  // }

  return (
    <div className="flex h-screen flex-col">
      <div className="">
        <Header />
      </div>
      <div className="flex flex-grow items-center justify-center">
        {/* <Body /> */}
        {/* <p className="text-center text-3xl font-bold">{data.ten}</p> */}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

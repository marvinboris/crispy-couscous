import { PlayCircleIcon } from '@heroicons/react/20/solid'
import { ReactElement, FormEvent } from 'react'

import { NextPageWithLayout } from './_app'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import GetStarted from '../components/frontend/home/GetStarted'
import Footer from '../components/frontend/navigation/Footer'

const params = {
  link: '/',
  title: "Valyou",
  description: "Your favorite e-commerce platform."
}

const HomePage: NextPageWithLayout = () => {
  const getStartedSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
  }

  return <>
    <Head {...params} />
    <main>
      <section id='home' className="min-h-screen flex pt-[133px]">
        <div className='container'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div>
              <div className="font-bold mb-[13px] text-3xl lg:text-4xl text-primary-600">Coming Soon</div>

              <div className='font-bold mb-[23px] text-4xl lg:text-5xl'>
                The best shop & win
                online plateform
              </div>

              <div className="mb-6 lg:mb-[71px] pr-[70px]">
                We are devoted to bring your shopping experience
                to the next level. Get registered today and stand a chance
                to win prizes from AED 10 to AED 20000.
              </div>

              <GetStarted onSubmit={getStartedSubmitHandler} />
            </div>

            <div className='lg:pt-[37px]'>
              <div className='relative pl-[34.79px] pr-[36.81px] pt-[46px] pb-[38px]'>
                <div className="ratio-4by3">
                  <img src="/images/curve-1.svg" alt="Curve" className="absolute -top-6 -left-9" />
                  <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
                  <img src="/images/home-banner.svg" alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
                  <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                        <PlayCircleIcon className='w-14 text-white' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute z-0 bottom-0 left-0 rounded-[38.0488px] bg-orange-600/10 shadow-lg shadow-orange-600/10 ratio-4by3 w-2/5" />
                <div className="absolute z-0 top-0 right-0 rounded-[45px] bg-primary-600/10 shadow-lg shadow-primary-600/10 ratio-4by3 w-3/5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
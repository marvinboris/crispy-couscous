import { PlayIcon } from '@heroicons/react/24/outline'
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
      <section id='home' className="min-h-screen flex items-center pt-[133px]">
        <div className='container'>
          <div className='grid md:gap-12 md:grid-cols-2'>
            <div>
              <div className="font-bold mb-[23px] md:mb-[13px] text-2xl md:text-4xl text-primary-600">Coming Soon</div>

              <div className='font-bold mb-5 md:mb-[23px] text-3xl md:text-5xl'>
                The best shop & win
                online plateform
              </div>

              <div className="mb-[46.89px] md:mb-[71px] md:pr-[70px]">
                We are devoted to bring your shopping experience
                to the next level. Get registered today and stand a chance
                to win prizes from AED 10 to AED 20000.
              </div>

              <div className="hidden md:block">
                <GetStarted onSubmit={getStartedSubmitHandler} />
              </div>
            </div>

            <div className='md:pt-[37px]'>
              <div className='relative pl-[34.79px] pr-[36.81px] pt-[46px] pb-[38px]'>
                <div className="ratio-4by3">
                  <img src="/images/curve-1.svg" alt="Curve" className="absolute -top-6 -left-9" />
                  <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
                  <img src="/images/home-banner.svg" alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
                  <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <div className="w-[96px] h-[96px] rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                      <div className="w-[56px] h-[56px] rounded-full bg-white/30 flex items-center justify-center">
                        <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white">
                          <PlayIcon className='w-4 text-orange-600' />
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-white absolute bottom-[30px]">Watch the video</div>
                  </div>
                </div>

                <div className="absolute z-0 bottom-0 left-0 rounded-[38.0488px] bg-orange-600/10 shadow-lg shadow-orange-600/10 ratio-4by3 w-2/5" />
                <div className="absolute z-0 top-0 right-0 rounded-[45px] bg-primary-600/10 shadow-lg shadow-primary-600/10 ratio-4by3 w-3/5" />
              </div>

              <div className="text-center mt-[59.13px] md:hidden">
                <GetStarted onSubmit={getStartedSubmitHandler} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div className="hidden md:block">
      <Footer />
    </div>
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ReactElement, FormEvent } from 'react'

import { NextPageWithLayout } from './_app'
import Footer from '../components/frontend/navigation/Footer'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import Button from '../components/frontend/ui/form/Button'
import View from '../components/ui/View'

const params = {
  link: '/',
  title: "Valyou",
  description: "Your favorite e-commerce platform."
}

const HomePage: NextPageWithLayout = () => {
  return <>
    <Head {...params} />
    <main>
      <section id='home' className="min-h-screen flex items-center pt-[133px] pb-12">
        <div className='container'>
          <div className='grid md:gap-12 md:grid-cols-2'>
            <div>
              <div className="font-bold mb-[23px] md:mb-[13px] text-2xl md:text-4xl text-primary">Coming Soon</div>

              <div className='font-bold mb-5 md:mb-[23px] text-3xl md:text-5xl'>
                Welcome to Valyou
              </div>

              <div className="mb-[26.89px] md:mb-[71px] md:pr-[70px]">
                A new shopping experience where your choices are highly rewarded!<br /><br />
                Thank you for registering!
                Stay tuned and stand a chance to win prizes from AED 10 to AED 20,000
              </div>

              <div className="hidden md:block">
                <Link href='/customer/dashboard'>
                  <a>
                    <Button icon={ArrowRightIcon}>My account</Button>
                  </a>
                </Link>
              </div>
            </div>

            <div className='md:pt-[37px]'>
              <div className='relative pl-[34.79px] pr-[36.81px] pt-[46px] pb-[38px]'>
                <div className="aspect-[4/3] md:aspect-video relative">
                  <View empty action={<>
                    <img src="/images/curve-1.svg" alt="Curve" className="absolute -top-6 -left-9" />
                    <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
                    <img src="/images/home-banner.svg" alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
                    <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                      <div className="w-[96px] h-[96px] rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                        <div className="w-[56px] h-[56px] rounded-full bg-white/30 flex items-center justify-center">
                          <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white">
                            <PlayIcon className='w-4 text-orange' />
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-white absolute bottom-[30px]">Watch the video</div>
                    </div>
                  </>
                  }>
                    <iframe src="https://www.youtube.com/embed/bOwewGxrIZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full aspect-video' />
                  </View>
                </div>

                <div className="absolute z-0 bottom-0 left-0 rounded-[38.0488px] bg-orange/10 shadow-lg shadow-orange/10 ratio-4by3 w-2/5" />
                <div className="absolute z-0 top-0 right-0 rounded-[45px] bg-primary/10 shadow-lg shadow-primary/10 ratio-4by3 w-3/5" />
              </div>

              <div className="text-center mt-[39.13px] md:hidden">
                <Link href='/customer/dashboard'>
                  <a>
                    <Button icon={ArrowRightIcon}>My account</Button>
                  </a>
                </Link>
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
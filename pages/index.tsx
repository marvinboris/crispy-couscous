import { ReactElement } from 'react'
import { ArrowRightIcon, ChevronDoubleDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import { NextPageWithLayout } from './_app'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import { useLanguageContext } from '../app/contexts/language'
import Router from 'next/router'
import Button from '../components/frontend/ui/form/Button'
import { EnvelopeIcon, MapPinIcon, PaperAirplaneIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'

const params = {
  link: '/',
  title: "Valyou",
  description: "Your favorite e-commerce platform."
}

const HomePage: NextPageWithLayout = () => {
  const { language } = useLanguageContext()
  if (language === null) {
    Router.push('/screen')
    return <></>
  }

  return <>
    <Head {...params} />
    <main>
      <header id='banner' className="min-h-screen flex items-center pt-[113px]">
        <div className='container'>
          <div className='grid gap-12 grid-cols-2'>
            <div>
              <div className="font-bold mb-[13px] text-4xl text-primary-600">Coming Soon</div>

              <div className='font-bold mb-[23px] text-5xl'>
                The best shop & win
                online plateform
              </div>

              <div className="mb-[71px] pr-[70px]">
                We are devoted to bring your shopping experience
                to the next level. Get registered today and stand a chance
                to win prizes from AED 10 to AED 20000.
              </div>

              <Button icon={ArrowRightIcon}>Get Started</Button>
            </div>

            <div className='pt-[37px]'>
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

          <div className="flex justify-center mt-[77px]">
            <a href="#about">
              <ChevronDoubleDownIcon className='w-10 text-primary-600/40' />
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="min-h-screen flex items-center">
        <div className="container">
          <div className="grid gap-12 grid-cols-2">
            <div>
              <div className='mb-7'>
                <img src="/images/dots.svg" alt="Dots" />
              </div>

              <div className='font-bold mb-5 text-5xl'>
                What is valyou ?
              </div>

              <div className='mb-[30px]'>
                Have you tried shopping online and you where asked to shop
                for a certain amount before receiving a specified discount
                coupon ? We value your trust in us and that’s why we make
                things more profitable to, enabling you earn prizes while you
                trough our raffle draw shopping. Every purchased item gives
                you access to a raffle draw ticket.
              </div>

              <div className="flex items-center mb-[76px]">

              </div>

              <Button icon={ArrowRightIcon}>Get Started</Button>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a href="#mission">
              <ChevronDoubleDownIcon className='w-10 text-primary-600/40' />
            </a>
          </div>
        </div>
      </section>

      <section id="mission" className="min-h-screen flex items-center">
        <div className="container">
          <div className="grid gap-12 grid-cols-2">
            <div className='relative'>
              <div className="pb-[60px] pr-[63px] pt-24">
                <div className="ratio-4by3">
                  <div className="w-[22px] h-[22px] rounded-full bg-primary-600 absolute -top-20 -right-10" />
                  <img src="/images/curve-1.svg" alt="Curve" className="absolute -top-1 -right-6 -translate-y-full rotate-90" />
                  <img src="/images/home-mission.svg" alt="Mission" className="absolute z-10 inset-0 rounded-[45px] image-cover" />
                </div>

                <div className="absolute z-0 bottom-0 right-0 rounded-[45px] bg-primary-600/10 shadow-lg shadow-primary-600/10 ratio-4by3 w-3/5" />
              </div>
            </div>

            <div>
              <div className='mb-7'>
                <img src="/images/dots.svg" alt="Dots" />
              </div>

              <div className='font-bold mb-5 text-5xl'>
                Our Mission
              </div>

              <div className='mb-[30px]'>
                Have you tried shopping online and you where asked to shop
                for a certain amount before receiving a specified discount
                coupon ? We value your trust in us and that’s why we make
                things more profitable to, enabling you earn prizes while you
                trough our raffle draw shopping.
              </div>

              <div className="flex items-center mb-[82px]">

              </div>

              <Button icon={ArrowRightIcon}>Get Started</Button>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a href="#newsletter">
              <ChevronDoubleDownIcon className='w-10 text-primary-600/40' />
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-primary-600">
        <div className="container pt-[70px] pb-[84px]">
          <div className="relative flex flex-col items-center">
            <img src="/images/dots.svg" alt="Dots" className="absolute top-0 right-0" />

            <div className="text-5xl mb-5 font-bold text-white">Stay informed !</div>

            <div className="w-full max-w-lg text-center mb-16 text-white">
              We will be happy having your on board. Please consider signing up
              for our newsletter to stay up to date
            </div>

            <form>
              <div className="relative h-[60px] flex items-center bg-white rounded-[300px] py-[7px] pr-[11px] pl-[45px]">
                <div className="flex-grow">
                  <input type="email" name='email' className='border-none text-lg bg-transparent outline-none text-inherit w-full' placeholder='E-mail Address' />
                </div>

                <div>
                  <Button size='sm' icon={PaperAirplaneIcon}>Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center">
        <div className="container">
          <div className="grid gap-12 grid-cols-2">
            <div>
              <div className='mb-7'>
                <img src="/images/dots.svg" alt="Dots" />
              </div>

              <div className='font-bold mb-5 text-5xl'>
                Contact Us
              </div>

              <div className='mb-12'>
                Have any inquiries ? Feel free to contact us through the
                provided channels and we will get back to you as soon
                as possible.
              </div>

              <div className='space-y-6'>
                <div className="flex items-center">
                  <div className="w-12">
                    <MapPinIcon className='text-primary-600 w-7' />
                  </div>

                  <div>Dubai - United Arab Emirates</div>
                </div>

                <div className="flex items-center">
                  <div className="w-12">
                    <EnvelopeIcon className='text-primary-600 w-7' />
                  </div>

                  <div>contact@valyouae.com</div>
                </div>

                <div className="flex items-center">
                  <div className="w-12">
                    <PhoneIcon className='text-primary-600 w-7' />
                  </div>

                  <div>+971 50 999 0003 / 50 444 0202</div>
                </div>
              </div>
            </div>

            <div>
              <form className="">
                <div className='grid gap-6 grid-cols-2'>
                  <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
                    <div>
                      <div className="w-16 flex justify-center">
                        <UserIcon className='w-6 text-primary-600/20' />
                      </div>
                    </div>

                    <div className='pr-4'>
                      <input type="text" name='first_name' className='border-none text-lg bg-transparent outline-none text-inherit w-full' placeholder='First Name' />
                    </div>
                  </div>

                  <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
                    <div>
                      <div className="w-16 flex justify-center">
                        <UserIcon className='w-6 text-primary-600/20' />
                      </div>
                    </div>

                    <div className='pr-4'>
                      <input type="text" name='last_name' className='border-none text-lg bg-transparent outline-none text-inherit w-full' placeholder='Last Name' />
                    </div>
                  </div>

                  <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
                    <div>
                      <div className="w-16 flex justify-center">
                        <EnvelopeIcon className='w-6 text-primary-600/20' />
                      </div>
                    </div>

                    <div className='pr-4'>
                      <input type="email" name='email' className='border-none text-lg bg-transparent outline-none text-inherit w-full' placeholder='E-mail Address' />
                    </div>
                  </div>

                  <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
                    <div>
                      <div className="w-16 flex justify-center">
                        <PhoneIcon className='w-6 text-primary-600/20' />
                      </div>
                    </div>

                    <div className='pr-4'>
                      <input type="tel" name='phone' className='border-none text-lg bg-transparent outline-none text-inherit w-full' placeholder='Phone Number' />
                    </div>
                  </div>

                  <div className="rounded-[45px] bg-secondary-100 col-span-2">
                    <textarea className='border-none text-lg bg-transparent outline-none text-inherit w-full p-5 min-h-[223px]' placeholder='Your Message goes here' />
                  </div>
                </div>

                <div className="mt-20">
                  <Button icon={PaperAirplaneIcon}>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
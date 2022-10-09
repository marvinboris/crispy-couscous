import { ReactElement, ChangeEvent, FormEvent, useState } from 'react'
import { ArrowRightIcon, CheckCircleIcon, ChevronDoubleDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon, EnvelopeIcon, KeyIcon, MapPinIcon, PaperAirplaneIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'

import { NextPageWithLayout } from './_app'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import Button from '../components/frontend/ui/form/Button'
import CountrySelect from '../components/frontend/home/CountrySelect'
import Input from '../components/frontend/ui/form/Input'
import Switch from '../components/frontend/ui/form/Switch'
import TextArea from '../components/frontend/ui/form/TextArea'
import View from '../components/ui/View'

const params = {
  link: '/',
  title: "Valyou",
  description: "Your favorite e-commerce platform."
}

interface FormDataType {
  first_name: string
  last_name: string
  email: string
  code: string
  phone: string
  terms: boolean

  otp: string
}

interface GetStartedProps {
  context: {
    page: number
    setPage: (page: number) => void
    value: FormDataType
    setValue: (value: FormDataType) => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: FormEvent) => void
  }
}

const Back = ({ onClick }: { onClick: () => void }) => <div className="absolute top-[51px] left-[87px] flex items-center cursor-pointer" onClick={onClick}>
  <div className="w-10 h-10 flex items-center justify-center mr-2">
    <ArrowLeftIcon className='text-primary-600 w-8' />
  </div>

  <div className="text-sm">Back</div>
</div>

const GetStarted = ({ context: { page, setPage, value, setValue, onChange, onSubmit } }: GetStartedProps) => {
  const firstPageContent = <>
    <div className="font-bold text-primary-600 text-3xl mb-[5px]">Create your account</div>

    <div className='text-lg mb-[64.55px]'>shopping taken to another level. </div>

    <div className="grid grid-cols-2 gap-x-[17.34px] gap-y-[13.63px] mb-[22.8px]">
      <Input icon={UserIcon} name='first_name' placeholder='First Name' onChange={onChange} value={value.first_name} />
      <Input icon={UserIcon} name='last_name' placeholder='Last Name' onChange={onChange} value={value.last_name} />
      <Input icon={EnvelopeIcon} type='email' name='email' placeholder='E-mail Address' onChange={onChange} value={value.email} />
      <Input addon={<div className='w-24 pl-[15.95px]'>
        <CountrySelect value={value.code} onChange={(code: string) => setValue({ ...value, code })} />
      </div>} type='tel' name='phone' placeholder='054 430 3333' onChange={onChange} value={value.phone} />
    </div>

    <div className="mb-auto">
      <Switch checked={value.terms} onChange={() => setValue({ ...value, terms: !value.terms })} label={<>
        By signing up, you agree to our terms
        and conditions mentionned <span className='font-bold text-primary-600'>here</span>.
      </>} />
    </div>

    <div className="text-center">
      <Button onClick={() => setPage(2)}>Continue</Button>
    </div>
  </>

  const secondPageContent = <>
    <Back onClick={() => setPage(1)} />

    <div className="mx-auto flex flex-col flex-1 items-center justify-between">
      <div>
        <div className="font-bold text-primary-600 text-3xl mb-[5px]">Let’s verify your number</div>

        <div className='text-lg mb-[64.55px]'>Please provide the 6 digit code received </div>
      </div>

      <div className="w-[209px]">
        <Input icon={KeyIcon} type='number' name='otp' placeholder='6 Digits code' onChange={onChange} value={value.otp} className='mb-[22px]' />

        <div className='text-xs'>Didn’t get the code ? <span className='cursor-pointer font-bold text-primary-600'>Resend here</span></div>
      </div>

      <div className="text-center">
        <Button onClick={() => setPage(3)}>Continue</Button>
      </div>
    </div>
  </>

  const thirdPageContent = <>
    <Back onClick={() => setPage(2)} />

    <div className="mx-auto flex flex-col flex-1 items-center justify-between">
      <div>
        <div className="font-bold text-primary-600 text-3xl mb-[5px]">Connect your social media</div>

        <div className='text-lg mb-[64.55px]'>Connect, like & share to receive a free raffle ticket</div>
      </div>

      <div className="grid gap-2.5 grid-cols-4">
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Facebook.svg' alt="Facebook" /></div>
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Twitter.svg' alt="Twitter" /></div>
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/LinkedIn.svg' alt="LinkedIn" /></div>
        <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Instagram.svg' alt="Instagram" /></div>
      </div>

      <div className="text-center">
        <Button onClick={() => setPage(4)}>Continue</Button>
      </div>
    </div>
  </>

  const fourthPageContent = <>
    <Back onClick={() => setPage(3)} />

    <div className="mx-auto max-w-md text-center flex flex-col flex-1 items-center justify-between">
      <div>
        <div className="font-bold text-primary-600 text-3xl mb-[20px]">Congratulations !!!</div>

        <div className='text-lg'>
          Welcome on board. You have received a notification
          by SMS & Mail. Your free ticket is available
        </div>
      </div>

      <div>
        <CheckCircleIcon className='w-24 text-green-700' />
      </div>

      <div className="text-center">
        <Button>Finish</Button>
      </div>
    </div>
  </>

  return <View action={<Button icon={ArrowRightIcon}>Get Started</Button>}>
    <form onSubmit={onSubmit} className='max-w-lg mx-auto h-[414px] flex flex-col'>
      {page === 1 && firstPageContent}
      {page === 2 && secondPageContent}
      {page === 3 && thirdPageContent}
      {page === 4 && fourthPageContent}
    </form>
  </View>
}

const HomePage: NextPageWithLayout = () => {
  const [page, setPage] = useState(1)
  const [value, setValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    code: '',
    phone: '',
    terms: false,

    otp: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const context = { page, setPage, value, setValue, onChange, onSubmit }

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

              <GetStarted context={context} />
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

              <GetStarted context={context} />
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

              <GetStarted context={context} />
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
                  <Input icon={UserIcon} name='first_name' placeholder='First Name' />
                  <Input icon={UserIcon} name='last_name' placeholder='Last Name' />
                  <Input icon={EnvelopeIcon} type="email" name='email' placeholder='E-mail Address' />
                  <Input icon={PhoneIcon} type="tel" name='phone' placeholder='Phone Number' />
                  <TextArea className='col-span-2' name='message' placeholder='Your Message goes here' />
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
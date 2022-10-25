import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FormEvent, ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Footer from '../../components/frontend/navigation/Footer'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Button from '../../components/frontend/ui/form/Button'
import PageTitle from '../../components/frontend/ui/title/page'

const params = {
    link: '/about/how-to-win',
    title: "How to win | Valyou",
    description: "Your favorite e-commerce platform: how does it work?"
}

const HowItWorksPage: NextPageWithLayout = () => {
    const getStartedSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
    }

    return <>
        <Head {...params} />
        <main>
            <section id="how-to-win" className="min-h-screen py-[133px]">
                <div className="container">
                    <div className="grid md:gap-12 md:grid-cols-2">
                        <div>
                            <PageTitle title='How to win' breadcrumb='About Us /' />

                            <div className='md:mb-[45px]'>
                                We bring you the easiest way to win by just purchasing any item from us. Our system will automatically create tickets from the number of items you bought.<br /><br />
                                The draw starts starts once spaces have been filled for each item draw. Share this with your family and friends to get the draw started faster.<br /><br />
                                For example: 1,000 joiners needed
                            </div>

                            <div className="hidden md:block">
                                <Link href='/customer/dashboard'>
                                    <a>
                                        <Button icon={ArrowRightIcon}>My account</Button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className='relative scale-75 md:scale-100'>
                            <div className="pb-8 lg:pb-[60px] pr-8 lg:pr-[63px] pt-12 lg:pt-24">
                                <div className="ratio-4by3">
                                    <div className="w-[22px] h-[22px] rounded-full bg-primary absolute -top-12 -right-6 lg:-top-20 lg:-right-10" />
                                    <img src="/images/curve-1.svg" alt="Curve" className="absolute top-7 -right-6 lg:-top-1 -translate-y-full rotate-90" />
                                    <img src="/images/home-how-to-win.svg" alt="Mission" className="absolute z-10 inset-0 rounded-[45px] image-cover" />
                                </div>

                                <div className="absolute z-0 bottom-0 right-0 rounded-[45px] bg-primary/10 shadow-lg shadow-primary/10 ratio-4by3 w-3/5" />
                            </div>
                        </div>

                        <div className='md:hidden text-center'>
                            <Link href='/customer/dashboard'>
                                <a>
                                    <Button icon={ArrowRightIcon}>My account</Button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}

HowItWorksPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default HowItWorksPage
import { ReactElement, FormEvent } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import GetStarted from '../../components/frontend/home/GetStarted'
import Footer from '../../components/frontend/navigation/Footer'
import PageTitle from '../../components/frontend/ui/title/page'

const params = {
    link: '/about/mission',
    title: "Our Mission | Valyou",
    description: "Your favorite e-commerce platform's mission."
}

const MissionPage: NextPageWithLayout = () => {
    const getStartedSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
    }

    return <>
        <Head {...params} />
        <main>
            <section id="mission" className="min-h-screen py-[133px]">
                <div className="container">
                    <div className="grid md:gap-12 md:grid-cols-2">
                        <div>
                            <PageTitle title='Our Mission' breadcrumb='About Us /' />

                            <div className='md:mb-[45px]'>
                                the mission of our company is to give back to the people who
                                are working hard for UAE’s Economy. We aim to offer product
                                which are of good quality and a fair price
                                <br /><br />
                                valyou is also dedicated in supporting
                                UAE local businesses and is highly motivated
                                in sustainability by for example, reducing carbon
                                footprint and using less plastic
                            </div>

                            <div className="hidden mb:block">
                                <GetStarted onSubmit={getStartedSubmitHandler} />
                            </div>
                        </div>

                        <div className='relative scale-75 md:scale-100'>
                            <div className="pb-8 lg:pb-[60px] pr-8 lg:pr-[63px] pt-12 lg:pt-24">
                                <div className="ratio-4by3">
                                    <div className="w-[22px] h-[22px] rounded-full bg-primary-600 absolute -top-12 -right-6 lg:-top-20 lg:-right-10" />
                                    <img src="/images/curve-1.svg" alt="Curve" className="absolute top-7 -right-6 lg:-top-1 -translate-y-full rotate-90" />
                                    <img src="/images/home-mission.svg" alt="Mission" className="absolute z-10 inset-0 rounded-[45px] image-cover" />
                                </div>

                                <div className="absolute z-0 bottom-0 right-0 rounded-[45px] bg-primary-600/10 shadow-lg shadow-primary-600/10 ratio-4by3 w-3/5" />
                            </div>
                        </div>

                        <div className='md:hidden text-center'>
                            <GetStarted onSubmit={getStartedSubmitHandler} />
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

MissionPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default MissionPage
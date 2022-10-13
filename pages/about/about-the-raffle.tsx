import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'

const params = {
    link: '/about/about-the-raffle',
    title: "About the raffle | Valyou",
    description: "Your favorite e-commerce platform: how does it work?"
}

const AboutTheRafflePage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>
            <section id="about-the-raffle" className="min-h-screen py-[133px]">
                <div className="container">
                    <div className='mb-[30px] -ml-[19px] relative flex items-center'>
                        <div className='mr-[9px]'>
                            <img src="/images/dots.svg" alt="Dots" />
                        </div>

                        <div>
                            <div className='font-bold mb-[5px] text-5xl'>
                                About the raffle
                            </div>

                            <div>
                                <span className='opacity-20'>Home / About Us /</span> About the raffle
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}

AboutTheRafflePage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default AboutTheRafflePage
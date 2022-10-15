import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'
import PageTitle from '../../components/frontend/ui/title/page'

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
                    <PageTitle title='About the raffle' breadcrumb='About Us /' />
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
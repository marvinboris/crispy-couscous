import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'
import PageTitle from '../../components/frontend/ui/title/page'

const params = {
    link: '/about/how-it-works',
    title: "How it works | Valyou",
    description: "Your favorite e-commerce platform: how does it work?"
}

const HowItWorksPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>
            <section id="how-it-works" className="min-h-screen py-[133px]">
                <div className="container">
                    <PageTitle title='How it works' breadcrumb='About Us /' />
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
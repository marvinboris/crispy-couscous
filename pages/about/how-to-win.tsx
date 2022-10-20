import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'
import PageTitle from '../../components/frontend/ui/title/page'

const params = {
    link: '/about/how-to-win',
    title: "How to win | Valyou",
    description: "Your favorite e-commerce platform: how does it work?"
}

const HowItWorksPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>
            <section id="how-to-win" className="min-h-screen py-[133px]">
                <div className="container">
                    <PageTitle title='How to win' breadcrumb='About Us /' />

                    <div className='md:mb-[45px]'>
                        We bring you the easiest way to win by just purchasing any item from us. Our system will automatically create tickets from the number of items you bought.<br /><br />
                        The draw starts starts once spaces have been filled for each item draw. Share this with your family and friends to get the draw started faster.<br /><br />
                        For example: 1,000 joiners needed
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
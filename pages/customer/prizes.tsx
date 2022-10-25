import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/backend/navigation/Layout'
import PageTitle from '../../components/backend/ui/title/page'

const params = {
    link: '/customer/prizes',
    title: "My Prizes | Valyou",
    description: "Your favorite e-commerce platform: your prizes."
}

const MyPrizesPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={DocumentPlusIcon} title='My Prizes' subtitle='View your raffle prizes' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                
            </div>
        </main>
    </>
}

MyPrizesPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default MyPrizesPage
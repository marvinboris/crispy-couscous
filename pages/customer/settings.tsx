import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/backend/navigation/Layout'
import PageTitle from '../../components/backend/ui/title/page'

const params = {
    link: '/customer/settings',
    title: "Settings | Valyou",
    description: "Your favorite e-commerce platform: your settings."
}

const SettingsPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={AdjustmentsHorizontalIcon} title='Settings' subtitle='Manage your account details' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                
            </div>
        </main>
    </>
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default SettingsPage
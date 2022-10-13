import { ChevronDoubleDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { ReactElement, FormEvent } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/backend/navigation/Layout'

const params = {
    link: '/customer/dashboard',
    title: "Customer Dashboard | Valyou",
    description: "Your favorite e-commerce platform: your personal dashboard."
}

const CustomerDashboardPage: NextPageWithLayout = () => {
    return <>
        <Head {...params} />
        <main>

        </main>
    </>
}

CustomerDashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default CustomerDashboardPage
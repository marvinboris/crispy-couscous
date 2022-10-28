import { ClipboardDocumentIcon, DocumentMagnifyingGlassIcon, DocumentPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState, ReactElement } from 'react'

import { NextPageWithLayout } from '../../_app'
import { getPrizes } from '../../../app/resources/prizes'
import TicketType from '../../../app/types/ticket'

import Layout, { Head } from '../../../components/backend/navigation/Layout'
import PageTitle from '../../../components/backend/ui/title/page'
import SectionTitle from '../../../components/backend/ui/title/section'
import Input from '../../../components/backend/ui/form/Input'
import Button from '../../../components/backend/ui/form/Button'
import TicketCard from '../../../components/backend/ui/blocks/ticket-card'

const params = {
    link: '/customer/prizes',
    title: "My Prizes | Valyou",
    description: "Your favorite e-commerce platform: your prizes."
}

const MyPrizesPage: NextPageWithLayout = () => {
    const [prizes, setPrizes] = useState<TicketType[] | null>(null)
    const prizesContent = prizes !== null && prizes.map((ticket, index) => <TicketCard key={`prize-${ticket.num}-${index}`} {...ticket} />)

    useEffect(() => {
        if (!prizes) getPrizes().then(prizes => setPrizes(prizes))
    }, [])

    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={DocumentPlusIcon} title='My Prizes' subtitle='Check your prizes here' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                <SectionTitle icon={ClipboardDocumentIcon} title='Tickets / History' description='All tickets, free and from purchases'>
                    <div className='hidden md:block'><Input type="search" icon={DocumentMagnifyingGlassIcon} placeholder="Search Prize" /></div>

                    <div className='pl-3 space-y-3 md:pl-0 md:space-y-0'>
                        <div className='md:hidden'><Input type="search" icon={DocumentMagnifyingGlassIcon} placeholder="Search Prize" /></div>
                        <Link href='/customer/prizes/history'><a><Button icon={DocumentMagnifyingGlassIcon} color='green'>View History</Button></a></Link>
                    </div>
                </SectionTitle>

                <div className='mb-[42.58px]'>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {prizesContent}
                    </div>
                </div>
            </div>
        </main>
    </>
}

MyPrizesPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default MyPrizesPage
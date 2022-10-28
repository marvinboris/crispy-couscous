import { ClipboardDocumentIcon, DocumentDuplicateIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../../_app'
import Layout, { Head } from '../../../components/backend/navigation/Layout'
import Input from '../../../components/backend/ui/form/Input'
import PageTitle from '../../../components/backend/ui/title/page'

import TicketType from '../../../app/types/ticket'

import { getFreeTickets } from '../../../app/resources/tickets/free'
import { getPurchasesTickets } from '../../../app/resources/tickets/purchases'

import TicketCard from '../../../components/backend/ui/blocks/ticket-card'
import Button from '../../../components/backend/ui/form/Button'
import SectionTitle from '../../../components/backend/ui/title/section'

const params = {
    link: '/customer/tickets',
    title: "My Tickets | Valyou",
    description: "Your favorite e-commerce platform: your tickets."
}

const MyTicketsPage: NextPageWithLayout = () => {
    const [freeTickets, setFreeTickets] = useState<TicketType[] | null>(null)
    const [purchasesTickets, setPurchasesTickets] = useState<TicketType[] | null>(null)
    const freeTicketsContent = freeTickets !== null && freeTickets.map((ticket, index) => <TicketCard key={`free-ticket-${ticket.num}-${index}`} {...ticket} />)
    const purchasesTicketsContent = purchasesTickets !== null && purchasesTickets.map((ticket, index) => <TicketCard key={`purchases-ticket-${ticket.num}-${index}`} {...ticket} />)

    useEffect(() => {
        if (!freeTickets) getFreeTickets().then(freeTickets => setFreeTickets(freeTickets))
        if (!purchasesTickets) getPurchasesTickets().then(purchasesTickets => setPurchasesTickets(purchasesTickets))
    }, [])


    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={DocumentDuplicateIcon} title='My Tickets' subtitle='View your raffle tickets' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                <SectionTitle icon={ClipboardDocumentIcon} title='Tickets / History' description='All tickets, free and from purchases'>
                    <div className='hidden md:block'><Input type="search" icon={DocumentMagnifyingGlassIcon} placeholder="Search Ticket" /></div>

                    <div className='pl-3 space-y-3 md:pl-0 md:space-y-0'>
                        <div className='md:hidden'><Input type="search" icon={DocumentMagnifyingGlassIcon} placeholder="Search Ticket" /></div>
                        <Link href='/customer/tickets/history'><a><Button icon={DocumentMagnifyingGlassIcon} color='green'>View History</Button></a></Link>
                    </div>
                </SectionTitle>

                <div className='mb-[42.58px]'>
                    <div className="text-lg font-bold mb-[17px]">Free tickets</div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {freeTicketsContent}
                    </div>
                </div>

                <div>
                    <div className="text-lg font-bold mb-[17px]">My purchases</div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {purchasesTicketsContent}
                    </div>
                </div>
            </div>
        </main>
    </>
}

MyTicketsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default MyTicketsPage
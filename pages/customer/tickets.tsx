import { CalendarDaysIcon, ClipboardDocumentIcon, DocumentDuplicateIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import { classNames } from '../../app/helpers/utils'
import Layout, { Head } from '../../components/backend/navigation/Layout'
import Input from '../../components/backend/ui/form/Input'
import PageTitle from '../../components/backend/ui/title/page'

import TicketType from '../../app/types/ticket'

import { getFreeTickets } from '../../app/resources/tickets/free'
import { getPurchasesTickets } from '../../app/resources/tickets/purchases'
import SectionTitle from '../../components/backend/ui/title/section'
import Button from '../../components/backend/ui/form/Button'

const params = {
    link: '/customer/tickets',
    title: "My Tickets | Valyou",
    description: "Your favorite e-commerce platform: your tickets."
}

const TicketCard = ({ draw, expiry, num, status, target }: TicketType) => <div className={classNames(status === 'won' || status === 'claimed' ? "border-green" : "border-blue", "bg-white rounded-[18.956px] pt-[13.9px] pl-[18.32px] pb-[13.91px] pr-[9.59px] border-[1.26px] flex")}>
    <div className="flex-1">
        <div className="font-bold text-[11.37px] mb-[3.06px]">{num}</div>
        <div className={classNames(status === 'won' ? "text-green bg-green/10 font-bold" : status === 'claimed' ? "text-red bg-red/10 font-bold" : "bg-blue/10", status === 'pending' ? "text-blue" : "", 'py-1 w-[104.26px] h-[17.26px] rounded-[3.79121px] inline-flex items-center justify-center text-[7.58px] mb-[6.32px]')}>
            {status === 'won' ? "You Won !!!" :
                status === 'claimed' ? "Already Claimed" :
                    status === 'pending' ? <div className='font-medium'>
                        <span className="mr-[3.79px]">
                            <div className="inline-block w-[7px] h-[7px] rounded-full border-blue border border-t-transparent animate-spin" />
                        </span> Pending draw
                    </div> : <div className='font-medium'>
                        <span className="mr-[3.79px]">
                            <CalendarDaysIcon className="inline-block w-[5.69px]" />
                        </span> Draw Date : {draw.toLocaleDateString()}
                    </div>}
        </div>
        <div className={classNames(status === 'won' ? "bg-green text-white" : "relative text-green", "h-[27.8px] font-bold rounded-[5.05494px] text-[10px] overflow-hidden mb-[12.3px] flex items-center justify-center")}>
            {status === 'won' ? <span>
                Claim your prize !!!
            </span> : status === 'claimed' ? <>
                <img src='/images/backend/claimed-ticket.svg' alt='BG Pending ticket' className='image-cover absolute z-0' />
                <span className="z-10">Not available</span>
            </> : <>
                <img src='/images/backend/pending-ticket.svg' alt='BG Pending ticket' className='image-cover absolute z-0' />
                <img src='/images/logo.svg' alt='Logo' className='h-full w-auto z-10' />
            </>}
        </div>
        <div className="text-[10.11px]">
            {status === 'won' || status === 'claimed' ? <>
                <span className="font-bold">Expiry :</span> {expiry?.toLocaleDateString()}
            </> : <>
                <span className="font-bold">Target :</span> {target} / 1000
            </>}
        </div>
    </div>

    <div className="ml-[15.8px] pt-[4.42px]">
        <img src={`/images/backend/${status === 'won' || status === 'claimed' ? "qr-green.svg" : "qr-blue.svg"}`} alt="QR code" className="w-[65.6px] h-auto" />
    </div>
</div>

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
                <SectionTitle icon={ClipboardDocumentIcon} title='My purchases' description='All tickets, free and from purchases'>
                    <div><Input type="search" icon={DocumentMagnifyingGlassIcon} placeholder="Search Ticket" /></div>
                
                    <div><Button icon={DocumentMagnifyingGlassIcon} color='green'>View History</Button></div>
                </SectionTitle>

                <div className='mb-[42.58px]'>
                    <div className="text-lg font-bold mb-[17px]">Free tickets</div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {freeTicketsContent}
                    </div>
                </div>

                <div className='mb-[42.58px]'>
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
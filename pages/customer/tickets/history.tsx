import { ArrowDownTrayIcon, CheckCircleIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ClipboardDocumentIcon, DocumentDuplicateIcon, DocumentMagnifyingGlassIcon, EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../../_app'
import Layout, { Head } from '../../../components/backend/navigation/Layout'
import Input from '../../../components/backend/ui/form/Input'
import PageTitle from '../../../components/backend/ui/title/page'

import TicketType from '../../../app/types/ticket'

import { getTicketsHistory } from '../../../app/resources/tickets/history'

import Button from '../../../components/backend/ui/form/Button'
import { classNames } from '../../../app/helpers/utils'

const params = {
    link: '/customer/tickets',
    title: "My Tickets | Valyou",
    description: "Your favorite e-commerce platform: your tickets."
}

type TableConfig = {
    label: string
    key: 'num' | 'draw' | 'winLoss' | 'expiry' | 'status' | 'target' | 'progression' | 'action'
}[]

const tableConfig: TableConfig = [
    { label: 'Ticket NO', key: 'num' },
    { label: 'Issued Date', key: 'draw' },
    { label: 'Win / Loss', key: 'winLoss' },
    { label: 'Expiry Date', key: 'expiry' },
    { label: 'Status', key: 'status' },
    { label: 'To Draw', key: 'target' },
    { label: 'Progression', key: 'progression' },
    { label: 'Action', key: 'action' },
]

const MyTicketsPage: NextPageWithLayout = () => {
    const [ticketsHistory, setTicketsHistory] = useState<TicketType[] | null>(null)

    useEffect(() => {
        if (!ticketsHistory) getTicketsHistory().then(ticketsHistory => setTicketsHistory(ticketsHistory))
    }, [])


    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={DocumentDuplicateIcon} title='My Tickets' subtitle='View your raffle tickets' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                <div className="bg-white rounded-[30px] py-8 px-[38.36px] shadow-2xl mb-[25px]">
                    <div className="mb-[30.89px] flex items-center justify-between">
                        <div>
                            <div className="font-bold mb-[4.63px] text-[16.43px]">My Ticket History</div>

                            <div className="text-[10.52px] mb-[13.6068px]">Ticket history</div>

                            <div className="w-[30.24px] h-[6.5732px] rounded-xl bg-green" />
                        </div>

                        <div className="flex items-center">
                            <div className="hidden md:flex items-center h-12 bg-secondary-500/[0.06] rounded-[6.5732px]">
                                <div className="flex items-center divide-x-[0.5px] divide-x-secondary-300 text-xs">
                                    <div className="w-[59px] h-[39px] flex items-center justify-center">Show</div>

                                    <div className="w-[59px] h-[39px] flex items-center justify-center">
                                        <div className="font-bold mr-1.5">05</div>

                                        <ChevronDownIcon className='w-4' />
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:block mr-[12.83px] ml-4'><Input type="search" icon={MagnifyingGlassIcon} placeholder="Search..." /></div>

                            <div className='pl-3 space-y-3 md:pl-0 md:space-y-0'>
                                <div className='md:hidden'><Input type="search" icon={MagnifyingGlassIcon} placeholder="Search..." /></div>
                                <Link href='/customer/tickets'><a><Button icon={DocumentMagnifyingGlassIcon} color='green'>View Tickets</Button></a></Link>
                            </div>
                        </div>
                    </div>

                    <table className="border-collapse table-auto w-full text-[10.52px]">
                        <thead>
                            <tr className='relative z-0 after:absolute after:inset-0 after:rounded-lg after:bg-secondary-500/10 after:-z-10'>
                                <th className="font-bold pt-[12.49px] pb-[10.98px] first:pl-[14.64px] pl-1.5 last:pr-[14.64px] pr-1.5 text-left">SL</th>
                                {tableConfig.map((col, i) => <th key={`table-thead-th-${i}`} className="font-bold pt-[12.49px] pb-[10.98px] first:pl-[14.64px] pl-1.5 last:pr-[14.64px] pr-1.5 text-left">{col.label}</th>)}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-secondary-800">
                            {ticketsHistory && ticketsHistory.map(ticket => {
                                const num = <div className='font-bold text-green'>{ticket.num}</div>
                                const draw = ticket.draw.toLocaleDateString()
                                const winLoss = <span className={classNames("py-[5px] px-[10.5px] font-medium rounded", ticket.status === 'claimed' ? "bg-green/20 text-green" : ticket.status === 'failed' ? "bg-red/20 text-red" : "bg-orange/20 text-orange")}>{ticket.status === 'claimed' ? 'You Won !!!' : ticket.status === 'failed' ? 'Try Again !' : "Pending Draw"}</span>
                                const expiry = ticket.expiry && ticket.expiry.toLocaleDateString()
                                const status = <span className={classNames("py-[5px] px-[10.5px] font-medium rounded", ticket.status === 'claimed' ? "bg-green/20 text-green" : ticket.status === 'pending' ? "bg-orange/20 text-orange" : ticket.status === 'failed' ? "bg-red/20 text-red" : "")}>{ticket.status === 'claimed' ? 'Collected' : ticket.status === 'failed' ? 'No Prize !' : "N/A"}</span>
                                const target = <div className='flex items-center space-x-[5.71px]'>
                                    {ticket.target === 1000 ? <CheckCircleIcon className='w-[14px] text-green -mx-0.5' /> : <div className="w-[9.2px] h-[9.2px] rounded-full border border-t-transparent border-orange animate-spin" />}
                                    <div>{ticket.target} <span className="font-bold">/ 1000</span></div>
                                </div>
                                const progression = <div className='h-[7px] w-[72px] rounded-xl bg-green/10'><div className='bg-green h-full rounded-xl' style={{ width: `${ticket.target / 10}%` }} /></div>
                                const action = <div className='flex space-x-[12.49px]'>
                                    <div className='w-[21.03px] h-[21.03px] flex items-center justify-center rounded-[5.25856px] bg-green hover:bg-green/80 transition-all duration-200 text-white cursor-pointer'><ArrowDownTrayIcon className='w-[13.15px]' /></div>
                                    <div className='w-[21.03px] h-[21.03px] flex items-center justify-center rounded-[5.25856px] bg-sky hover:bg-sky/80 transition-all duration-200 text-white cursor-pointer'><EyeIcon className='w-[13.15px]' /></div>
                                </div>

                                return { ...ticket, num, expiry, winLoss, draw, status, target, progression, action }
                            }).map((row, i) => <tr key={`table-tbody-tr-${i}`} className='group'>
                                <td className="group-last:border-0 border-b border-secondary-100 dark:border-secondary-700 py-3 first:pl-[14.64px] pl-1.5 last:pr-[14.64px] pr-1.5">{i + 1}</td>
                                {tableConfig.map((col, j) => <td key={`table-tbody-tr-${i}-td-${j}`} className="group-last:border-0 border-b border-secondary-100 dark:border-secondary-700 py-3 first:pl-[14.64px] pl-1.5 last:pr-[14.64px] pr-1.5">{row[col.key]}</td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>

                <div className="text-center">
                    <div className="inline-flex text-[9.69px] space-x-2.5 items-center p-2 rounded-3xl h-9 bg-white relative z-0 overflow-hidden after:absolute after:inset-0 after:bg-green/20 after:-z-10">
                        <div className='w-[20.45px] h-[20.45px] cursor-pointer rounded-full flex items-center justify-center bg-green/20'><ChevronLeftIcon className='w-2.5' /></div>
                        <div className="flex items-center space-x-2">
                            <div className="cursor-pointer font-bold text-green">1</div>
                            <div className="cursor-pointer opacity-30">2</div>
                            <div className="cursor-pointer opacity-30">3</div>
                        </div>
                        <div className='w-[20.45px] h-[20.45px] cursor-pointer rounded-full flex items-center justify-center bg-green text-white'><ChevronRightIcon className='w-2.5' /></div>
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
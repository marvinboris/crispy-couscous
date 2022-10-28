import { CheckCircleIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, DocumentMagnifyingGlassIcon, DocumentPlusIcon, EyeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../../_app'
import Layout, { Head } from '../../../components/backend/navigation/Layout'
import Input from '../../../components/backend/ui/form/Input'
import PageTitle from '../../../components/backend/ui/title/page'

import { getPrizesHistory } from '../../../app/resources/prizes/history'
import PrizeType from '../../../app/types/prize'

import Button from '../../../components/backend/ui/form/Button'
import { classNames } from '../../../app/helpers/utils'

const params = {
    link: '/customer/prizes',
    title: "My Prizes | Valyou",
    description: "Your favorite e-commerce platform: your prizes."
}

type TableConfig = {
    label: string
    key: 'ticket_num' | 'date' | 'price' | 'status' | 'claim_date' | 'comments'
}[]

const tableConfig: TableConfig = [
    { label: 'Ticket NO', key: 'ticket_num' },
    { label: 'Date', key: 'date' },
    { label: 'Price Won', key: 'price' },
    { label: 'Prize Status', key: 'status' },
    { label: 'Claim Date', key: 'claim_date' },
    { label: 'Comments', key: 'comments' },
]

const MyTicketsPage: NextPageWithLayout = () => {
    const [prizesHistory, setPrizesHistory] = useState<PrizeType[] | null>(null)

    useEffect(() => {
        if (!prizesHistory) getPrizesHistory().then(prizesHistory => setPrizesHistory(prizesHistory))
    }, [])


    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={DocumentPlusIcon} title='My Prizes' subtitle='Check your prizes here' />

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

                                    <div className="w-[59px] h-[39px] flex items-center justify-center relative">
                                        <select name="show" id="show" defaultValue='05' className='font-bold bg-transparent outline-none border-0 p-0'>
                                            <option value="5">05</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="All">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:block mr-[12.83px] ml-4'><Input type="search" icon={MagnifyingGlassIcon} placeholder="Search..." /></div>

                            <div className='pl-3 space-y-3 md:pl-0 md:space-y-0'>
                                <div className='md:hidden'><Input type="search" icon={MagnifyingGlassIcon} placeholder="Search..." /></div>
                                <Link href='/customer/tickets'><a><Button icon={DocumentMagnifyingGlassIcon} color='green'>View Prizes</Button></a></Link>
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
                            {prizesHistory && prizesHistory.map(prize => {
                                const ticket_num = <div className='font-bold text-green'>{prize.ticket_num}</div>
                                const date = prize.date.toLocaleDateString()
                                const price = <div className='font-medium'>{prize.price}</div>
                                const status = prize.claimed_at ? 'Claimed' : 'Not claimed yet'
                                const claim_date = prize.claimed_at ? prize.claimed_at.toLocaleDateString() : 'Not claimed'
                                const comments = <div className={classNames("py-[5px] px-[10.5px] inline-flex items-center space-x-2 font-medium rounded", prize.claimed_at ? "bg-green/20 text-green" : "bg-orange/20 text-orange")}>
                                    {prize.claimed_at ? <CheckCircleIcon className='w-[14px] text-green -mx-0.5' /> : <div className="w-[9.2px] h-[9.2px] rounded-full border border-t-transparent border-orange animate-spin" />}
                                    <div>{prize.claimed_at ? prize.type === 'product' ? 'Prize Collected' : 'Credited to account' : 'Pending Claim'}</div>
                                </div>

                                return { ...prize, ticket_num, claim_date, price, status, date, comments }
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
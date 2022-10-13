import { ChevronRightIcon, ClipboardDocumentIcon, HomeIcon, InformationCircleIcon, PlayIcon, TicketIcon } from '@heroicons/react/24/outline'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import { classNames } from '../../app/helpers/utils'
import Layout, { Head } from '../../components/backend/navigation/Layout'

import TutorialType from '../../app/types/tutorial'

import PageTitle from '../../components/backend/ui/title/page'
import { getTutorials } from '../../app/resources/tutorials'

const params = {
    link: '/customer/dashboard',
    title: "Customer Dashboard | Valyou",
    description: "Your favorite e-commerce platform: your personal dashboard."
}

interface AsideTitleProps {
    title: ReactNode
    subtitle: string
}

const AsideTitle = ({ title, subtitle }: AsideTitleProps) => <div>
    <div className="font-bold mb-2">{title}</div>

    <div className="text-sm mb-4">{subtitle}</div>

    <div className="w-[27.18px] h-[5px] bg-primary-600 rounded-xl" />
</div>

interface AsideProps {
    children: ReactNode
}

const Aside = ({ children, ...rest }: AsideProps) => <aside {...rest} className='px-5 pt-[23px] pb-[50px]'>{children}</aside>

interface PrizeCardProps {
    title: ReactNode
    valid_date: string
    claimed?: boolean
}

const PrizeCard = ({ claimed, title, valid_date }: PrizeCardProps) => <div className="bg-white rounded-[20px] pt-[11px] px-[18px] pb-[13px] space-y-[7px]">
    <div className="font-bold text-sm">{title}</div>
    <div className='text-xs'>Valid till: {valid_date}</div>
    <div className={classNames("py-[5px] px-[14px] text-xs rounded-3xl inline-block", claimed ? 'text-green-600 bg-green-600/30' : 'text-red-600 bg-red-600/30')}>{claimed ? 'Claimed' : 'Not Claimed'}</div>
</div>

interface StatCardProps {
    color: 'blue' | 'orange'
    title: string
    children: ReactNode
}

const StatCard = ({ color, title, children }: StatCardProps) => <div className='flex flex-col rounded-[12.625px] bg-white h-[100.92px] py-[13.25px] pl-[20.18px] pr-[10.72px] shadow-lg relative z-0'>
    <img src={`/images/backend/mesh-${color}.svg`} alt="BG Stat card" className="absolute inset-0 image-cover -z-10" />

    <div className="text-xs font-medium">{title}</div>
    <div className='pt-[8.6px]'>
        <div className={classNames(color === 'blue' ? 'bg-blue-600' : color === 'orange' ? 'bg-orange-600' : 'bg-primary-600', "block h-[3.15385px] w-[12.62px] rounded-xl")} />
    </div>
    <div>{children}</div>
</div>

const Tutorial = ({ photo, title, subtitle }: TutorialType) => <div className='px-4 pt-[18.5px] pb-[25.64px] shadow-md rounded-[17.3446px] bg-white'>
    <div className="ratio-4by3">
        <div className="absolute z-10 rounded-[11.563px] bg-white inset-0" />
        <img src={photo} alt="Banner" className="absolute rounded-[11.563px] top-0 z-20 image-cover" />
        <div className="absolute z-30 rounded-[11.563px] inset-0 bg-black/40 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">
                    <PlayIcon className='w-5 text-orange-600' />
                </div>
            </div>
        </div>
    </div>

    <div className='mt-[21px]'>
        <div className="mb-[4.66px] text-sm font-medium">{title}</div>
        <div className="text-xs">{subtitle}</div>
    </div>
</div>

const CustomerDashboardPage: NextPageWithLayout = () => {
    const [tutorials, setTutorials] = useState<TutorialType[] | null>(null)
    const tutorialsContent = tutorials !== null && tutorials.map(tutorial => <Tutorial key={'tutorial-' + tutorial.photo} {...tutorial} />)

    const width = '69%'

    useEffect(() => {
        if (!tutorials) getTutorials().then(tutorials => setTutorials(tutorials))
    }, [])


    return <>
        <Head {...params} />
        <main className='flex flex-1 items-stretch'>
            <div className="flex-1">
                <PageTitle icon={HomeIcon} title='Dashboard' subtitle={<>You just got a free raffle ticket ! <span className="font-bold">Stay tuned for the draw date</span></>} />

                <div className="px-[42px] pt-[47px] pb-[54px]">
                    <div className="grid gap-[19px] grid-cols-4 mb-[59px]">
                        <StatCard color='blue' title='Total Raffle Tickets'>
                            <div className="flex items-end justify-between">
                                <div className='pb-[5px]'>
                                    <span className="font-bold text-lg">01</span>
                                </div>

                                <div><TicketIcon className='w-11 text-blue-600' /></div>
                            </div>
                        </StatCard>
                        <StatCard color='orange' title='Next Draw'>
                            <div className="h-[7.57px] mt-[15.78px] relative overflow-hidden rounded-xl bg-primary-600/10">
                                <div className="h-full rounded-xl bg-primary-600" style={{ width }} />
                            </div>
                            <div className="mt-[5.05px] text-xs">
                                <span className="font-medium">310</span> <span className="font-bold">/ 1000</span>
                            </div>
                        </StatCard>
                    </div>

                    <div className="px-8 py-6 bg-white rounded-[15px] flex items-center justify-between mb-[27px]">
                        <div className='flex items-center'>
                            <div><ClipboardDocumentIcon className='w-7 text-primary-600' /></div>
                            <div className='ml-[11px] mr-[19px]'><div className="w-[6px] h-[6px] rounded-full bg-primary-600" /></div>
                            <div className="text-lg font-medium">Tutorials</div>
                        </div>

                        <div className="flex items-center">
                            <div><div className="h-[30px] border-l border-secondary-700/50" /></div>
                            <div className="ml-[53px] mr-[28.59px] text-sm font-medium">View list</div>
                            <div><ChevronRightIcon className='w-5' /></div>
                        </div>
                    </div>

                    <div className="grid gap-2.5 grid-cols-3">
                        {tutorialsContent}
                    </div>
                </div>
            </div>

            <div className="w-[300px] border-l border-secondary-700/10">
                <div className="bg-primary-600/5">
                    <Aside>
                        <AsideTitle title={<>Target to raffle draw <InformationCircleIcon className='inline-block ml-3 w-6 text-primary-600' /></>} subtitle='Raffle ticket count' />

                        <div className="mt-4 flex justify-center">
                            <div>
                                <div className="w-[117px] h-[117px] relative flex flex-col items-center justify-center space-y-0.5 text-xs z-0">
                                    <img src="/images/backend/next-draw.svg" alt="Next draw ellipsis" className="absolute inset-0 -z-10" />

                                    <TicketIcon className='w-7 text-primary-600/20' />
                                    <div><span className="font-medium">247</span> <span className="font-bold text-primary-600">/ 1000</span></div>
                                    <div>To next draw</div>
                                </div>
                            </div>
                        </div>
                    </Aside>
                </div>

                <Aside>
                    <AsideTitle title={<>Prizes Won</>} subtitle='Check your prizes' />

                    <div className="mt-[26px] space-y-[17px]">
                        <PrizeCard claimed valid_date='12/09/2023' title={<><span className="text-primary-600">50 AED</span> Gift Card</>} />
                        <PrizeCard valid_date='09/10/2023' title='iPhone 14 Pro' />
                    </div>
                </Aside>
            </div>
        </main>
    </>
}

CustomerDashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default CustomerDashboardPage
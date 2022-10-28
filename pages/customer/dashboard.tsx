import { ChevronLeftIcon, ChevronRightIcon, ClipboardDocumentIcon, HomeIcon, InformationCircleIcon, PlayIcon, TicketIcon, WalletIcon } from '@heroicons/react/24/outline'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import { classNames } from '../../app/helpers/utils'
import Layout, { Head } from '../../components/backend/navigation/Layout'

import TutorialType from '../../app/types/tutorial'

import { getTutorials } from '../../app/resources/tutorials'
import PageTitle from '../../components/backend/ui/title/page'
import SectionTitle from '../../components/backend/ui/title/section'
import View from '../../components/ui/View'

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
    <div className="text-xl md:text-base font-medium">{title}</div>

    <div className="text-sm mb-2">{subtitle}</div>

    <div className="w-[27.18px] h-[5px] bg-secondary-600/30 rounded-xl" />
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

const PrizeCard = ({ claimed, title, valid_date }: PrizeCardProps) => <div className="bg-white w-[251px] md:w-auto rounded-[20px] pt-[11px] px-[18px] pb-[13px] space-y-[7px]">
    <div className="font-bold text-sm">{title}</div>
    <div className='text-xs'>Valid till: {valid_date}</div>
    <div className={classNames("py-[5px] px-[14px] text-xs rounded-3xl inline-block", claimed ? 'text-green bg-green/30' : 'text-red bg-red/30')}>{claimed ? 'Claimed' : 'Not Claimed'}</div>
</div>

interface StatCardProps {
    color: 'sky' | 'blue' | 'green'
    title: string
    children: ReactNode
}

const StatCard = ({ color, title, children }: StatCardProps) => <div className={classNames(color === 'blue' ? "bg-blue/[.15]" : color === 'sky' ? "bg-sky/[.15]" : "bg-green text-white", 'flex flex-col rounded-[25px] md:rounded-[12.625px] h-[156.88px] md:h-[100.92px] py-[23px] md:py-[13.25px] pl-[26px] md:pl-[20.18px] pr-[22px] md:pr-[10.72px] relative z-0')}>
    {(color === 'blue' || color === 'sky') && <img src={`/images/backend/mesh-${color}.svg`} alt="BG Stat card" className="absolute inset-0 image-cover -z-10" />}

    <div className="text-lg md:text-xs font-medium">{title}</div>
    <div className='pt-[14px] md:pt-[8.6px]'>
        <div className={classNames(color === 'blue' ? 'bg-secondary-500/10' : color === 'sky' ? 'bg-sky' : color === 'green' ? 'bg-white/30' : 'bg-primary', "block h-[3.15385px] w-[55px] md:w-[17px] rounded-xl")} />
    </div>
    <div>{children}</div>
</div>

const Tutorial = ({ photo, title, subtitle }: TutorialType) => <div>
    <div className='w-[205.35px] md:block md:w-auto h-full px-4 pt-[18.5px] pb-[25.64px] rounded-[20px] md:rounded-[17.3446px] bg-white'>
        <div className="ratio-16by9">
            <View empty action={<>
                <div className="absolute z-10 rounded-[20px] md:rounded-[17.3446px] bg-white inset-0" />
                <img src={photo} alt="Banner" className="absolute rounded-[20px] md:rounded-[17.3446px] top-0 z-20 image-cover" />
                <div className="absolute z-30 rounded-[20px] md:rounded-[17.3446px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <div className="w-[47px] md:w-20 h-[47px] md:h-20 rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                        <div className="w-[30px] md:w-[52px] h-[30px] md:h-[52px] rounded-full bg-white flex items-center justify-center">
                            <PlayIcon className='w-3 md:w-5 text-orange' />
                        </div>
                    </div>
                </div>
            </>
            }>
                <iframe src="https://www.youtube.com/embed/bOwewGxrIZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full aspect-video' />
            </View>
        </div>

        <div className='mt-[20.24px] md:mt-[21px]'>
            <div className="text-xs md:text-sm font-medium">{title}</div>
        </div>
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
                <PageTitle animated icon={HomeIcon} title='Dashboard' subtitle='Welcome!' animationSubtitle={<>You just got a free raffle ticket ! <span className="font-bold">Stay tuned for the draw date</span></>} />

                <div className="pl-[33px] md:pl-[42px] pr-[33px] md:pr-[90px] pt-[29px] md:pt-[47px] pb-[54px]">
                    <div className="grid gap-2.5 md:grid-cols-4 mb-[51px] md:mb-[59px]">
                        <StatCard color='sky' title='Total Raffle Tickets'>
                            <div className="flex items-end justify-between">
                                <div className='pb-[7px] md:pb-[5px]'>
                                    <span className="font-bold text-3xl md:text-lg">01</span>
                                </div>

                                <div><TicketIcon className='w-20 md:w-11 text-blue/10' /></div>
                            </div>
                        </StatCard>

                        <StatCard color='blue' title='Next Draw'>
                            <div className="h-[15.56px] md:h-[7.57px] mt-[15.78px] relative overflow-hidden rounded-xl bg-blue/10">
                                <div className="h-full rounded-xl bg-blue" style={{ width }} />
                            </div>

                            <div className="mt-2.5 md:mt-[5.05px] text-lg md:text-xs">
                                <span className="font-medium">310</span> <span className="font-bold">/ 1000</span>
                            </div>
                        </StatCard>

                        <StatCard color='sky' title='Total Referal'>
                            <div className="flex items-end justify-between">
                                <div className='pb-[7px] md:pb-[5px]'>
                                    <span className="font-bold text-3xl md:text-lg">240</span>
                                </div>

                                <div><TicketIcon className='w-20 md:w-11 text-transparent' /></div>
                            </div>
                        </StatCard>

                        <StatCard color='green' title='My wallet balance'>
                            <div className="flex items-end justify-between">
                                <div className='pb-[7px] md:pb-[5px]'>
                                    <span className="font-bold text-3xl md:text-lg">52.25</span> <span className='text-[12.63px] opacity-40'>AED</span>
                                </div>

                                <div><WalletIcon className='w-20 md:w-11 text-black/10' /></div>
                            </div>
                        </StatCard>
                    </div>

                    <div className='md:hidden mb-6'>
                        <AsideTitle title={<>Prizes Won</>} subtitle='Check your prizes' />

                        <div className="mt-[41px] space-x-[11px] flex items-stretch w-screen md:w-auto overflow-auto -mx-[33px] px-[33px] pb-5">
                            <div>
                                <PrizeCard claimed valid_date='12/09/2023' title={<><span className="text-blue">50 AED</span> Gift Card</>} />
                            </div>

                            <div>
                                <PrizeCard valid_date='09/10/2023' title='iPhone 14 Pro' />
                            </div>
                        </div>
                    </div>

                    <div className='mb-8'>
                        <div className="text-2xl font-bold">Tutorials</div>
                        <div>Learn how the system works.</div>
                    </div>

                    <div className="md:px-[57px] relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center w-8 h-8 bg-secondary-500 bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 cursor-pointer"><ChevronLeftIcon className='w-4' /></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center w-8 h-8 bg-secondary-500 bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 cursor-pointer"><ChevronRightIcon className='w-4' /></div>

                        <div className="grid gap-2.5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {tutorialsContent}
                        </div>
                    </div>
                    <div className="flex items-stretch -mx-[33px] px-[33px] md:mx-0 md:px-0 pb-5 md:pb-0 w-screen md:w-auto overflow-auto md:overflow-visible space-x-[22px] md:space-x-0 md:grid md:gap-2.5 md:grid-cols-3">
                    </div>
                </div>
            </div>

            <div className="w-[300px] hidden md:flex border-l border-secondary-700/10 flex-col">
                <div className="bg-green/10">
                    <Aside>
                        <AsideTitle title={<>Target to raffle draw <InformationCircleIcon className='inline-block ml-3 w-6 text-orange' /></>} subtitle='Raffle ticket count' />

                        <div className="mt-4 flex justify-center">
                            <div>
                                <div className="w-[117px] h-[117px] relative flex flex-col items-center justify-center space-y-0.5 text-xs z-0">
                                    <img src="/images/backend/next-draw.svg" alt="Next draw ellipsis" className="absolute inset-0 -z-10" />

                                    <TicketIcon className='w-7 text-green/20' />
                                    <div><span className="font-bold">247</span> <span className="font-medium text-green">/ 1000</span></div>
                                    <div>To next draw</div>
                                </div>
                            </div>
                        </div>
                    </Aside>
                </div>

                <div className="bg-secondary-400/20 flex-1">
                    <Aside>
                        <div className="flex justify-between">
                            <div>
                                <AsideTitle title={<>Prizes Won</>} subtitle='Check your prizes' />
                            </div>

                            <div className="flex items-center space-x-2.5">
                                <div className="w-8 h-8 rounded-full bg-secondary-300 bg-opacity-100 hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center cursor-pointer"><ChevronLeftIcon className='w-4' /></div>
                                <div className="w-8 h-8 rounded-full bg-secondary-800 bg-opacity-100 hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center cursor-pointer"><ChevronRightIcon className='w-4 text-white' /></div>
                            </div>
                        </div>

                        <div className="mt-[26px] space-y-[17px]">
                            <PrizeCard claimed valid_date='12/09/2023' title={<><span className="text-blue">50 AED</span> Gift Card</>} />
                            <PrizeCard valid_date='09/10/2023' title='iPhone 14 Pro' />
                        </div>
                    </Aside>
                </div>
            </div>
        </main>
    </>
}

CustomerDashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default CustomerDashboardPage
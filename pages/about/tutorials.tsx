import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { ComponentProps, ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import { getTutorials } from '../../app/resources/tutorials'
import TutorialType from '../../app/types/tutorial'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'
import PageTitle from '../../components/frontend/ui/title/page'
import SocialNetworks from '../../components/frontend/navigation/Footer/SocialNetworks'
import View from '../../components/ui/View'

const params = {
    link: '/about/tutorials',
    title: "Tutorials | Valyou",
    description: "Your favorite e-commerce platform's tutorials."
}

interface DirectionButtonProps {
    icon: (props: ComponentProps<'svg'>) => JSX.Element,
    onClick: () => void
}

const DirectionButton = ({ icon: Icon, onClick }: DirectionButtonProps) => <div onClick={onClick} className="w-[50.58px] h-[50.58px] -translate-y-full rounded-full flex items-center justify-center bg-primary/20 cursor-pointer">
    <Icon className='text-primary w-5' />
</div>

const Tutorial = ({ photo, rank, title }: TutorialType) => <div>
    <div className='w-[266px] md:w-auto'>
        <div className="ratio-4by3">
            <View action={<>
                <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
                <img src={photo} alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
                <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                        <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">
                            <PlayIcon className='w-5 text-orange' />
                        </div>
                    </div>
                </div>
            </>
            }>
                <iframe src="https://www.youtube.com/embed/bOwewGxrIZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full aspect-video' />
            </View>
        </div>

        <div className='mt-6 md:mt-[21px] flex'>
            <div className='mr-2.5 md:mr-5 font-bold opacity-40 text-3xl'>{rank}.</div>

            <div className="pt-[11px] text-sm md:text-xl font-bold">{title}</div>
        </div>
    </div>
</div>

const TutorialsPage: NextPageWithLayout = () => {
    const [tutorials, setTutorials] = useState<TutorialType[] | null>(null)

    useEffect(() => {
        if (!tutorials) getTutorials().then(tutorials => setTutorials(tutorials))
    }, [])

    const tutorialsContent = tutorials !== null && tutorials.map(tutorial => <Tutorial key={'tutorial-' + tutorial.photo} {...tutorial} />)

    return <>
        <Head {...params} />
        <main>
            <section id="tutorials" className="min-h-screen py-[133px]">
                <div className="container">
                    <PageTitle title='Tutorials' breadcrumb='About Us /' />
                </div>

                <div className="flex items-center justify-center">
                    <div className='hidden md:block'>
                        <DirectionButton icon={ChevronLeftIcon} onClick={() => { }} />
                    </div>

                    <div>
                        <div className="container">
                            <div className="md:grid md:gap-9 md:grid-cols-3 flex items-stretch w-screen md:w-auto -mx-6 md:mx-0 px-6 md:px-0 overflow-auto space-x-[13.84px] md:space-x-0 pb-5 md:pb-0">
                                {tutorialsContent}
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <DirectionButton icon={ChevronRightIcon} onClick={() => { }} />
                    </div>
                </div>

                <div className="mt-[102px] md:hidden flex justify-center">
                    <SocialNetworks />
                </div>
            </section>
        </main>

        <div className='hidden md:block'>
            <Footer />
        </div>
    </>
}

TutorialsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default TutorialsPage
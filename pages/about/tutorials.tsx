import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { ComponentProps, ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import { getTutorials } from '../../app/resources/tutorials'
import TutorialType from '../../app/types/tutorial'
import Layout, { Head } from '../../components/frontend/navigation/Layout'
import Footer from '../../components/frontend/navigation/Footer'

const params = {
    link: '/about/tutorials',
    title: "Tutorials | Valyou",
    description: "Your favorite e-commerce platform's tutorials."
}

interface DirectionButtonProps {
    icon: (props: ComponentProps<'svg'>) => JSX.Element,
    onClick: () => void
}

const DirectionButton = ({ icon: Icon, onClick }: DirectionButtonProps) => <div onClick={onClick} className="w-[50.58px] h-[50.58px] -translate-y-full rounded-full flex items-center justify-center bg-primary-600/20 cursor-pointer">
    <Icon className='text-primary-600 w-5' />
</div>

const Tutorial = ({ photo, rank, title }: TutorialType) => <div>
    <div className="ratio-4by3">
        <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
        <img src={photo} alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
        <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">
                    <PlayIcon className='w-5 text-orange-600' />
                </div>
            </div>
        </div>
    </div>

    <div className='mt-[21px] flex'>
        <div className='mr-5 font-bold opacity-40 text-3xl'>{rank}.</div>

        <div className="pt-[11px] text-xl font-bold">{title}</div>
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
                    <div className='mb-[30px] -ml-[19px] relative flex items-center'>
                        <div className='mr-[9px]'>
                            <img src="/images/dots.svg" alt="Dots" />
                        </div>

                        <div>
                            <div className='font-bold mb-[5px] text-5xl'>
                                Tutorials
                            </div>

                            <div>
                                <span className='opacity-20'>Home / About Us /</span> Tutorials
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div>
                        <DirectionButton icon={ChevronLeftIcon} onClick={() => { }} />
                    </div>

                    <div>
                        <div className="container">
                            <div className="grid gap-9 grid-cols-3">
                                {tutorialsContent}
                            </div>
                        </div>
                    </div>

                    <div>
                        <DirectionButton icon={ChevronRightIcon} onClick={() => { }} />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}

TutorialsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default TutorialsPage
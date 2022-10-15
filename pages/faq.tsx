import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ComponentProps, ReactElement, useState, useEffect } from 'react'

import { NextPageWithLayout } from './_app'
import { getFaqs } from '../app/resources/faqs'
import FaqType from '../app/types/faq'
import Layout, { Head } from '../components/frontend/navigation/Layout'
import PageTitle from '../components/frontend/ui/title/page'

const params = {
    link: '/faq',
    title: "Frequently asked questions | Valyou",
    description: "Your favorite e-commerce platform: frequently asked questions"
}

interface DirectionButtonProps {
    icon: (props: ComponentProps<'svg'>) => JSX.Element,
    onClick: () => void
}

const DirectionButton = ({ icon: Icon, onClick }: DirectionButtonProps) => <div onClick={onClick} className="w-[50.58px] h-[50.58px] rounded-full flex items-center justify-center bg-primary-600/20 cursor-pointer">
    <Icon className='text-primary-600 w-5' />
</div>

interface PageButtonProps {
    active: boolean
    page: number
    onClick: (page: number) => void
}

const classNames = (...c: string[]) => c.join(' ')

const PageButton = ({ active, page, onClick }: PageButtonProps) => <div onClick={() => onClick(page)} className={classNames('text-lg', active ? "font-bold text-primary-600" : "")}>{page}</div>

const Faq = ({ question, answer }: FaqType) => <div className='rounded-3xl bg-secondary-100 py-[27px] px-[18px]'>
    <div className='font-bold'>{question}</div>

    <div className="mt-[13px] mb-2.5 w-[44px]">
        <div className="rounded-xl h-1 bg-primary-600" />
    </div>

    <div className='text-sm'>{answer}</div>
</div>

const ContactUsPage: NextPageWithLayout = () => {
    const [faqs, setFaqs] = useState<FaqType[] | null>(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (!faqs) getFaqs().then(faqs => setFaqs(faqs))
    }, [])

    const faqsContent = faqs !== null && faqs.filter((f, i) => (i >= 6 * (page - 1)) && (i < 6 * page)).map(faq => <Faq key={'faq-' + faq.question} {...faq} />)

    const pageNumber = faqs !== null ? Math.ceil(faqs.length / 6) : 0

    const firstPage = page > 2 ? page === pageNumber ? page - 2 : page - 1 : 1
    const secondPage = page > 2 ? page === pageNumber ? page - 1 : page : 2
    const thirdPage = page > 2 ? page === pageNumber ? page : page + 1 : 3

    const previousPage = () => page > 1 ? setPage(page - 1) : null
    const nextPage = () => page < pageNumber ? setPage(page + 1) : null

    return <>
        <Head {...params} />
        <main>
            <section id="contact" className="min-h-screen pt-[133px]">
                <div className="container">
                    <PageTitle title='Frequently asked questions' />

                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-x-[30px] gap-y-[14px] md:grid-cols-3">
                            {faqsContent}
                        </div>

                        <div className="mt-[52px] pb-[100px] md:pb-0 flex items-center justify-center space-x-6">
                            <div>
                                <DirectionButton icon={ChevronLeftIcon} onClick={previousPage} />
                            </div>

                            <div className="flex items-center space-x-[18px]">
                                <PageButton active={page === firstPage} page={firstPage} onClick={setPage} />
                                {pageNumber > 1 && <PageButton active={page === secondPage} page={secondPage} onClick={setPage} />}
                                {pageNumber > 2 && <PageButton active={page === thirdPage} page={thirdPage} onClick={setPage} />}
                            </div>

                            <div>
                                <DirectionButton icon={ChevronRightIcon} onClick={nextPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

ContactUsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ContactUsPage
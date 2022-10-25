import { ReactNode } from 'react'
import NextHead from 'next/head'

import Toolbar from '../Toolbar'
import { useLanguageContext } from '../../../../app/contexts/language'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const { language } = useLanguageContext()

    return language === null ? <div className='fixed inset-0 flex items-center justify-center'>
        <img src="/images/bg-screen.svg" alt="BG Screen" className="absolute inset-0 image-cover -z-10" />

        <div className="w-24 h-24 rounded-full border-[7px] border-primary border-t-primary/20 animate-spin" />
    </div> : <div className='min-h-screen flex flex-col relative'>
        <Toolbar />

        <div className="main-wrapper">
            {children}
        </div>
    </div>
}

interface PageParams {
    link: string
    title: string
    description: string
}

export const Head = ({ link, title, description }: PageParams) => <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={link} />

    <meta property='og:title' content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={link} />

    <meta property='twitter:title' content={title} />
    <meta property="twitter:description" content={description} />
</NextHead>
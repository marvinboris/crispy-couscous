import { ReactNode } from 'react'
import NextHead from 'next/head'

import Toolbar from '../Toolbar'
import Footer from '../Footer'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <div className='min-h-screen flex flex-col'>
        <Toolbar />

        <div className="main-wrapper">
            {children}
        </div>

        <Footer />
    </div>
}

export interface PageParams {
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
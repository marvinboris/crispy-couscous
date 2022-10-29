import { ReactNode, useState } from 'react'
import NextHead from 'next/head'

import Toolbar from '../Toolbar'
import SideDrawer from './SideDrawer'
import Footer from '../Footer'

import { useAccountContext } from '../../../../app/contexts/account'
import SideDrawerContext from '../../../../app/contexts/sideDrawer'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [open, setOpen] = useState(false)
    const { account } = useAccountContext()

    return account === null ? <div className='fixed inset-0 flex items-center justify-center'>
        <img src="/images/bg-screen.svg" alt="BG Screen" className="absolute inset-0 image-cover -z-10" />

        <div className="w-24 h-24 rounded-full border-[7px] border-primary border-t-primary/20 animate-spin" />
    </div> : <SideDrawerContext.Provider value={{ open, setOpen }}>
        <div className='h-screen flex relative overflow-hidden font-body'>
            <SideDrawer />

            <div className='flex-1 h-screen flex flex-col bg-secondary-100 overflow-y-auto'>
                <Toolbar />
                <div className="flex flex-col flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    </SideDrawerContext.Provider>
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
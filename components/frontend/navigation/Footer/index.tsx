import type { ReactNode } from 'react'

import SocialNetworks from './SocialNetworks'

interface FooterProps {
    action?: ReactNode
}

export default function Footer({ action }: FooterProps) {
    return <footer className="absolute inset-x-0 bottom-0 py-[44px]">
        <div className="container flex items-center">
            <SocialNetworks />

            <div className="ml-auto">
                {action}
            </div>
        </div>
    </footer>
}
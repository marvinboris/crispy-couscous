import { ComponentProps, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { classNames } from '../../../../../../app/helpers/utils'

interface NavItemProps {
    href: string
    children: ReactNode
    main?: boolean
    icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function NavItem({ href, icon: Icon, main: active, children }: NavItemProps) {
    const router = useRouter()
    // const active = router.pathname === href

    return <Link href={href}>
        <a className={classNames("flex items-center rounded-[12.5106px] w-full truncate", active ? 'text-white bg-primary relative py-4 font-medium shadow-lg after:absolute after:inset-y-3 after:left-2 after:w-1 after:bg-orange after:rounded-xl after:shadow-md' : 'px-[11px] text-secondary-700 hover:text-primary')}>
            <div className={classNames(active ? 'mr-[11.68px] pl-[29.19px]' : 'mr-[22px]')}><Icon className={classNames(active ? 'text-white/20 w-4' : 'text-primary/50 w-6')} /></div>

            <div>{children}</div>
        </a>
    </Link>
}
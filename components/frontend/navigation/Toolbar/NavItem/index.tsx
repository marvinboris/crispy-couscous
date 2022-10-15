import { ComponentProps, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { classNames } from '../../../../../app/helpers/utils'

interface NavItemProps {
    href: string
    children: ReactNode
    icon?: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function NavItem({ href, icon: Icon, children }: NavItemProps) {
    const router = useRouter()
    const active = router.pathname === href

    return <Link href={href}>
        <a className={classNames(active ? 'text-primary-600 font-bold relative scale-105 after:inline-block after:ml-0.5 after:w-1 after:h-1 after:rounded-full after:bg-orange-600' : 'font-medium text-secondary-700 hover:text-primary-600', "truncate text-sm dark:text-secondary-200 dark:hover:text-primary-600 inline-flex items-center hover:font-bold scale-100 hover:scale-105 transition-all duration-200")}>
            {Icon && <span className='mr-[6.65px]'><Icon className="w-4 text-primary-600/20" /></span>}

            <span>{children}</span>
        </a>
    </Link>
}
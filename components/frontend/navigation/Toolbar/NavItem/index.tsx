import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { classNames } from '../../../../../app/helpers/utils'

interface NavItemProps {
    href: string
    children: ReactNode
}

export default function NavItem({ href, children }: NavItemProps) {
    const router = useRouter()
    const active = router.pathname === href

    return <Link href={href}>
        <a className={classNames(active ? 'text-primary-600 font-bold relative after:inline-block after:ml-0.5 after:w-1 after:h-1 after:rounded-full after:bg-orange-600' : 'font-medium text-secondary-700 hover:text-primary-600', "truncate text-sm dark:text-secondary-200 dark:hover:text-primary-600")}>{children}</a>
    </Link>
}
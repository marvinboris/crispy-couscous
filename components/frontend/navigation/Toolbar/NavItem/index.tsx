import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavItemProps {
    href: string
    children: ReactNode
}

const classNames = (...c: string[]) => c.join(' ')

export default function NavItem({ href, children }: NavItemProps) {
    const router = useRouter()
    const active = router.pathname === href

    return <Link href={href}>
        <a className={classNames(active ? 'text-primary-600 font-bold' : 'font-medium text-secondary-700 hover:text-primary-600', "truncate text-sm dark:text-secondary-200 dark:hover:text-primary-600")}>{children}</a>
    </Link>
}
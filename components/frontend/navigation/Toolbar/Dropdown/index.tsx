import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { classNames } from '../../../../../app/helpers/utils'

interface MenuItemProps {
    href: string
    label: string
}

const MenuItem = ({ href, label }: MenuItemProps) => {
    const router = useRouter()

    return <div>
        <Link href={href}>
            <a className={classNames('block truncate py-[7px] px-4 rounded-lg', router.pathname === href ? 'text-white bg-primary-600 font-bold' : '')}>{label}</a>
        </Link>
    </div>
}

interface DropdownProps {
    children: ReactNode
    basePath: string
    list: MenuItemProps[]
}

export default function Dropdown({ children, basePath, list }: DropdownProps) {
    const router = useRouter()
    const active = router.pathname.includes(basePath)

    return <div className="inline-block relative text-sm group">
        <span className={classNames(active ? 'text-primary-600 font-bold relative scale-105 after:inline-block after:ml-0.5 after:w-1 after:h-1 after:rounded-full after:bg-orange-600' : 'font-medium text-secondary-700 group-hover:text-primary-600', "truncate text-sm dark:text-secondary-200 dark:group-hover:text-primary-600 inline-flex items-center group-hover:font-bold scale-100 group-hover:scale-105 transition-all duration-200")}>
            {children}
        </span>

        <div className="scale-0 group-hover:scale-100 transition-all duration-200 origin-top-left absolute left-0 z-0 pt-2">
            <div className="overflow-hidden relative z-0 bg-white after:bg-primary-600/20 after:inset-0 after:absolute after:-z-10 shadow-lg rounded-[20px] py-[22px] px-[13px]">
                {list.map(item => <MenuItem key={`menu-item-${item.href}`} {...item} />)}
            </div>
        </div>
    </div>
}

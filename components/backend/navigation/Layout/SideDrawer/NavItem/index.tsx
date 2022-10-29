import { ComponentProps, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useSideDrawerContext } from '../../../../../../app/contexts/sideDrawer'
import { classNames } from '../../../../../../app/helpers/utils'
import { useWindowSize } from '../../../../../../app/hooks'

interface NavItemProps {
    href: string
    children: ReactNode
    main?: boolean
    icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function NavItem({ href, icon: Icon, main, children }: NavItemProps) {
    const router = useRouter()
    const active = router.pathname === href

    const { width } = useWindowSize()
    const { setOpen } = useSideDrawerContext()

    const hideSideDrawer = () => {
        if (width !== undefined && width < 768) setOpen(false)
    }

    return <Link href={href}>
        <a onClick={hideSideDrawer} className={classNames("flex items-center rounded-[12.5106px] w-full truncate transition-all duration-200", main ? 'text-white font-display bg-primary relative py-4 scale-[0.87] font-medium shadow-lg after:absolute after:inset-y-3 after:left-2 after:w-1 after:bg-orange after:rounded-xl after:shadow-md' : active ? 'bg-primary/10 text-primary font-medium py-3 mr-6 px-[11px]' : 'text-secondary-700 hover:text-primary px-[11px]')}>
            <div className={classNames(main ? 'mr-[11.68px] pl-[29.19px]' : 'mr-[22px]')}><Icon className={classNames(main ? 'text-white/20 w-4' : 'text-primary/50 w-6')} /></div>

            <div>{children}</div>
        </a>
    </Link>
}
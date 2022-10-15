import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { classNames } from '../../../../../app/helpers/utils'

interface PageTitleProps {
    title: ReactNode
    subtitle: ReactNode
    animated: boolean
    animationSubtitle?: ReactNode
    icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function PageTitle({ title, subtitle: defaultSubtitle, animated, animationSubtitle, icon: Icon }: PageTitleProps) {
    const [hightlighted, setHightlighted] = useState(animated)
    const subtitle = hightlighted ? animationSubtitle : defaultSubtitle

    useEffect(() => {
        if (animated) setTimeout(() => {
            setHightlighted(false)
        }, 5000);
    }, [])

    return <div className={classNames("relative z-0 bg-white py-[18px] pl-[30px] pr-[85px] md:px-[33px] flex md:items-center space-x-[11px] md:space-x-[18px] before:absolute before:inset-y-0 before:left-0 before:w-[9px] after:absolute after:inset-0 after:-z-10 transition-all duration-200", hightlighted ? 'before:bg-green after:bg-green/[0.07]' : 'before:bg-primary after:bg-primary/[0.07]')}>
        <div>
            <Icon className={classNames('w-[56px] md:w-11 transition-all duration-200', hightlighted ? 'text-green' : 'text-primary')} />
        </div>

        <div className='space-y-[6px]'>
            <div className="text-lg font-medium">{title}</div>
            <div className={classNames('transition-all duration-200', hightlighted ? "text-green" : "text-primary")}>{subtitle}</div>
        </div>
    </div>
}
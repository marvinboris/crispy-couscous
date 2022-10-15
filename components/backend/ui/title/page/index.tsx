import { ComponentProps, ReactNode } from 'react'

interface PageTitleProps {
    title: ReactNode
    subtitle: ReactNode
    icon: (props: ComponentProps<'svg'>) => JSX.Element
}

export default function PageTitle({ title, subtitle, icon: Icon }: PageTitleProps) {
    return <div className="relative z-0 bg-white py-[18px] pl-[30px] pr-[85px] md:px-[33px] flex md:items-center space-x-[11px] md:space-x-[18px] before:absolute before:inset-y-0 before:left-0 before:w-[9px] before:bg-green-600 after:absolute after:inset-0 after:bg-green-600/[0.07] after:-z-10">
        <div>
            <Icon className='w-[56px] md:w-11 text-green-600' />
        </div>

        <div className='space-y-[6px]'>
            <div className="text-lg font-medium">{title}</div>
            <div className="text-green-600">{subtitle}</div>
        </div>
    </div>
}
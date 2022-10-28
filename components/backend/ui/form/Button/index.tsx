import React, { type ReactNode } from 'react'

import { classNames } from '../../../../../app/helpers/utils'

interface ButtonProps {
    color?: string
    size?: '' | 'sm' | 'lg' | 'xl'
    pill?: boolean
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
    children: ReactNode,
    onClick?: () => void
}

export default function Button({ color = 'primary', size = '', pill, icon: Icon, children, onClick }: ButtonProps) {
    return <button onClick={onClick} className={classNames(`btn btn-${color} h-12 justify-start px-[15px] group`, size === 'sm' ? 'btn-sm' : '', pill ? "rounded-[300px]" : "rounded-lg")}>
        {Icon && <Icon className={classNames(color === 'green' ? "text-white/40 group-hover:text-white" : "text-green/40 group-hover:text-green", 'w-5 mr-[14px] transition-all duration-200')} />}
        <span className={size === 'sm' ? '' : 'font-medium'}>{children}</span>
    </button>
}
import React, { type ReactNode } from 'react'

interface ButtonProps {
    color?: string
    size?: '' | 'sm' | 'lg' | 'xl'
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
    children: ReactNode,
    onClick?: () => void
}

const classNames = (...c: string[]) => c.join(' ')

export default function Button({ color = 'primary', size = '', icon, children, onClick }: ButtonProps) {
    const Icon = icon

    return <button onClick={onClick} className={classNames(`btn btn-${color} group`, icon ? 'btn-icon' : '', size === 'sm' ? 'btn-sm' : '')}>
        <span className={size === 'sm' ? '' : 'font-bold'}>{children}</span>

        {Icon && <span className='inline-flex items-center'>
            {size !== 'sm' && <div>
                <div className="w-1 h-1 rounded-full bg-white/40 mr-[5px]" />
            </div>}

            <div>
                <Icon className='text-white/40 group-hover:text-white w-6 transition-all duration-200' />
            </div>
        </span>}
    </button>
}
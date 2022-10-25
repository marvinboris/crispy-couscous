import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
    label?: ReactNode
    addon?: ReactNode
}

export default function Input({ icon, label, addon, className, ...rest }: InputProps) {
    const Icon = icon

    return <div className={className}>
        {label && <label htmlFor={rest.id ? rest.id : rest.name}>{label}</label>}

        <div className="h-12 rounded-[8px] bg-white md:bg-secondary-100 flex items-center">
            <div>
                <div className="w-[33px] md:w-[47px] flex justify-center">
                    {Icon && <Icon className='w-[18px]' />}
                </div>
                {addon}
            </div>

            <div className='pr-4 flex-1'>
                <input {...rest} className={'min-h-[33px] border-none text-xs md:text-sm bg-transparent outline-none text-inherit w-full'} />
            </div>
        </div>
    </div>
}
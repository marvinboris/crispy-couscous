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

        <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
            <div>
                <div className="w-12 md:w-16 flex justify-center">
                    {Icon && <Icon className='w-6 text-primary md:text-primary/20' />}
                </div>
                {addon}
            </div>

            <div className='pr-4 flex-1'>
                <input {...rest} className={'border-none text-base md:text-lg bg-transparent outline-none text-inherit w-full'} />
            </div>
        </div>
    </div>
}
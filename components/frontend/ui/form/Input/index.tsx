import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element
    label?: ReactNode
    addon?: ReactNode
}

export default function Input({ icon, label, addon, id, type, name, value, onChange, placeholder, className }: InputProps) {
    const Icon = icon

    return <div className={className}>
        {label && <label htmlFor={id ? id : name}>{label}</label>}

        <div className="h-[60px] rounded-[300px] bg-secondary-100 flex items-center">
            <div>
                <div className="w-12 md:w-16 flex justify-center">
                    {Icon && <Icon className='w-6 text-primary-600 md:text-primary-600/20' />}
                </div>
                {addon}
            </div>

            <div className='pr-4'>
                <input id={id} type={type} name={name} value={value} onChange={onChange} className={'border-none text-base md:text-lg bg-transparent outline-none text-inherit w-full'} placeholder={placeholder} />
            </div>
        </div>
    </div>
}
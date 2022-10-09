import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
    label?: ReactNode
}

export default function TextArea({ label, id, name, value, onChange, placeholder, className }: InputProps) {
    return <div className={className}>
        {label && <label htmlFor={id ? id : name}>{label}</label>}

        <div className="rounded-[45px] bg-secondary-100">
            <textarea id={id} name={name} value={value} onChange={onChange} className='border-none text-lg bg-transparent outline-none text-inherit w-full p-5 min-h-[223px]' placeholder={placeholder} />
        </div>
    </div>
}
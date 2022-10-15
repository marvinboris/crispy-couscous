import { ReactNode } from 'react'
import { Switch as HSwitch } from '@headlessui/react'

interface SwitchProps {
    label: ReactNode
    checked: boolean
    onChange: () => void
}

export default function Switch({ label, checked, onChange }: SwitchProps) {
    return (
        <div className="flex">
            <div className="mr-[13px]">
                <HSwitch checked={checked} onChange={onChange} className={`${checked ? 'bg-primary' : 'bg-secondary-100'} relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                    <span className="sr-only">{label}</span>
                    <span aria-hidden="true" className={`${checked ? 'translate-x-[22px]' : 'translate-x-0'} pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
                </HSwitch>
            </div>

            <div className="text-xs md:w-1/2">{label}</div>
        </div>
    )
}

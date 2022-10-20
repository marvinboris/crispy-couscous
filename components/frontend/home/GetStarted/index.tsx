import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, EnvelopeIcon, KeyIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, FormEvent, useState } from 'react'

import View from '../../../ui/View'
import Button from '../../ui/form/Button'
import Input from '../../ui/form/Input'
import Switch from '../../ui/form/Switch'
import CountrySelect from './CountrySelect'
import Link from 'next/link'

interface GetStartedProps {
    color?: string
    onSubmit: (e: FormEvent) => void
}

const Back = ({ onClick }: { onClick: () => void }) => <div className='px-5 md:px-0 relative md:absolute -top-4 md:top-[51px] md:left-[87px]'>
    <div className="flex items-center cursor-pointer" onClick={onClick}>
        <div className="w-10 h-10 flex items-center justify-center mr-2">
            <ArrowLeftIcon className='text-primary w-8' />
        </div>

        <div className="text-sm">Back</div>
    </div>
</div>

export default function GetStarted({ color = 'primary', onSubmit }: GetStartedProps) {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        code: '',
        phone: '',
        password: '',
        password_confirmation: '',
        birthdate: '',
        terms: false,

        otp: '',
    })
    const [birthdateInputType, setBirthdateInputType] = useState('text')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

    const firstPageContent = <>
        <div className="font-bold text-primary text-lg md:text-3xl text-center md:text-left mb-[17px] md:mb-[5px]">Create your account</div>

        <div className='text-sm md:text-lg text-center md:text-left mb-[30px] md:mb-[22px]'>Shop & Win !</div>

        <div className='max-h-[243px] md:max-h-[unset] px-3 md:px-0 overflow-auto mb-6 md:mb-[33px]'>
            <div className="grid md:grid-cols-2 gap-x-[17.34px] gap-y-[13.63px] mb-[22.8px]">
                <Input icon={UserIcon} name='first_name' placeholder='First Name' onChange={onChange} value={value.first_name} />
                <Input icon={UserIcon} name='last_name' placeholder='Last Name' onChange={onChange} value={value.last_name} />
                <Input icon={EnvelopeIcon} type='email' name='email' placeholder='E-mail Address' onChange={onChange} value={value.email} />
                <Input addon={<div className='w-24 pl-[15.95px]'>
                    <CountrySelect value={value.code} onChange={(code: string) => setValue({ ...value, code })} />
                </div>} type='tel' name='phone' placeholder='054 430 3333' onChange={onChange} value={value.phone} />
                <Input icon={LockClosedIcon} type='password' name='password' placeholder='Password' onChange={onChange} value={value.password} />
                <Input icon={LockClosedIcon} type='password' name='password_confirmation' placeholder='Retype Password' onChange={onChange} value={value.password_confirmation} />
                <Input icon={CalendarIcon} type={birthdateInputType} onFocus={() => setBirthdateInputType('date')} name='birthdate' placeholder='Date of birth' onChange={onChange} value={value.birthdate} />
            </div>

            <div>
                <Switch checked={value.terms} onChange={() => setValue({ ...value, terms: !value.terms })} label={<>
                    By signing up, you agree to our terms
                    and conditions mentionned <span className='font-bold text-primary'>here</span>.
                </>} />
            </div>
        </div>

        <div className="text-center">
            <Button onClick={() => setPage(2)}>Continue</Button>
        </div>
    </>

    const secondPageContent = <>
        <div className="mx-auto flex flex-col flex-1 items-center">
            <div>
                <div className="font-bold text-primary text-lg md:text-3xl text-center md:text-left mb-[17px] md:mb-[5px]">Let’s verify your number</div>

                <div className='text-sm md:text-lg text-center md:text-left mb-[64.55px]'>Please provide the 6 digit code received </div>
            </div>

            <div className="w-[209px]">
                <Input icon={KeyIcon} type='number' name='otp' placeholder='6 Digits code' onChange={onChange} value={value.otp} className='mb-[22px]' />

                <div className='text-xs'>Didn’t get the code ? <span className='cursor-pointer font-bold text-primary'>Resend here</span></div>
            </div>

            <div className="text-center mt-auto">
                <Link href='/success'>
                    <a>
                        <Button>Finish</Button>
                    </a>
                </Link>
            </div>
        </div>
    </>

    return <View action={<Button icon={ArrowRightIcon} color={color}>Get Started</Button>}>
        <img src="/images/bg-get-started.svg" alt="BG Get Started" className="absolute inset-0 image-cover z-0" />

        {page > 1 && <Back onClick={() => setPage(page - 1)} />}

        <form onSubmit={onSubmit} className='max-w-lg mx-auto px-5 md:px-0 min-h-[414px] flex flex-col relative z-10'>
            {page === 1 && firstPageContent}
            {page === 2 && secondPageContent}
        </form>
    </View>
}
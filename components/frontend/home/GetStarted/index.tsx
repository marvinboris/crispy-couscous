import { ArrowLeftIcon, ArrowRightIcon, EnvelopeIcon, KeyIcon, UserIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ChangeEvent, FormEvent, useState } from 'react'

import View from '../../../ui/View'
import Button from '../../ui/form/Button'
import Input from '../../ui/form/Input'
import Switch from '../../ui/form/Switch'
import CountrySelect from './CountrySelect'

interface GetStartedProps {
    onSubmit: (e: FormEvent) => void
}

const Back = ({ onClick }: { onClick: () => void }) => <div className='px-5 md:px-0 relative md:absolute -top-4 md:top-[51px] md:left-[87px]'>
    <div className="flex items-center cursor-pointer" onClick={onClick}>
        <div className="w-10 h-10 flex items-center justify-center mr-2">
            <ArrowLeftIcon className='text-primary-600 w-8' />
        </div>

        <div className="text-sm">Back</div>
    </div>
</div>

export default function GetStarted({ onSubmit }: GetStartedProps) {
    const [page, setPage] = useState(1)
    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        code: '',
        phone: '',
        terms: false,

        otp: '',
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

    const firstPageContent = <>
        <div className="font-bold text-primary-600 text-3xl mb-[5px]">Create your account</div>

        <div className='text-lg mb-6 md:mb-[64.55px]'>shopping taken to another level. </div>

        <div className="grid md:grid-cols-2 gap-x-[17.34px] gap-y-[13.63px] mb-[22.8px]">
            <Input icon={UserIcon} name='first_name' placeholder='First Name' onChange={onChange} value={value.first_name} />
            <Input icon={UserIcon} name='last_name' placeholder='Last Name' onChange={onChange} value={value.last_name} />
            <Input icon={EnvelopeIcon} type='email' name='email' placeholder='E-mail Address' onChange={onChange} value={value.email} />
            <Input addon={<div className='w-24 pl-[15.95px]'>
                <CountrySelect value={value.code} onChange={(code: string) => setValue({ ...value, code })} />
            </div>} type='tel' name='phone' placeholder='054 430 3333' onChange={onChange} value={value.phone} />
        </div>

        <div className="mb-6 md:mb-auto">
            <Switch checked={value.terms} onChange={() => setValue({ ...value, terms: !value.terms })} label={<>
                By signing up, you agree to our terms
                and conditions mentionned <span className='font-bold text-primary-600'>here</span>.
            </>} />
        </div>

        <div className="text-center">
            <Button onClick={() => setPage(2)}>Continue</Button>
        </div>
    </>

    const secondPageContent = <>
        <div className="mx-auto flex flex-col flex-1 items-center justify-between">
            <div>
                <div className="font-bold text-primary-600 text-3xl mb-[5px]">Let’s verify your number</div>

                <div className='text-lg mb-[64.55px]'>Please provide the 6 digit code received </div>
            </div>

            <div className="w-[209px]">
                <Input icon={KeyIcon} type='number' name='otp' placeholder='6 Digits code' onChange={onChange} value={value.otp} className='mb-[22px]' />

                <div className='text-xs'>Didn’t get the code ? <span className='cursor-pointer font-bold text-primary-600'>Resend here</span></div>
            </div>

            <div className="text-center">
                <Button onClick={() => setPage(3)}>Continue</Button>
            </div>
        </div>
    </>

    const thirdPageContent = <>
        <div className="mx-auto flex flex-col flex-1 items-center justify-between">
            <div>
                <div className="font-bold text-primary-600 text-3xl mb-[5px]">Connect your social media</div>

                <div className='text-lg mb-[64.55px]'>Connect, like & share to receive a free raffle ticket</div>
            </div>

            <div className="grid gap-2.5 grid-cols-4">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Facebook.svg' alt="Facebook" /></div>
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Twitter.svg' alt="Twitter" /></div>
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/LinkedIn.svg' alt="LinkedIn" /></div>
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-secondary-100"><img src='/images/social-media/Instagram.svg' alt="Instagram" /></div>
            </div>

            <div className="text-center">
                <Button onClick={() => setPage(4)}>Continue</Button>
            </div>
        </div>
    </>

    const fourthPageContent = <>
        <div className="mx-auto max-w-md text-center flex flex-col flex-1 items-center justify-between">
            <div>
                <div className="font-bold text-primary-600 text-3xl mb-[20px]">Congratulations !!!</div>

                <div className='text-lg'>
                    Welcome on board. You have received a notification
                    by SMS & Mail. Your free ticket is available
                </div>
            </div>

            <div>
                <CheckCircleIcon className='w-24 text-green-700' />
            </div>

            <div className="text-center">
                <Button>Finish</Button>
            </div>
        </div>
    </>

    return <View action={<Button icon={ArrowRightIcon}>Get Started</Button>}>
        <img src="/images/bg-get-started.svg" alt="BG Get Started" className="absolute inset-0 image-cover z-0" />

        {page > 1 && <Back onClick={() => setPage(page - 1)} />}

        <form onSubmit={onSubmit} className='max-w-lg mx-auto px-5 md:px-0 min-h-[414px] flex flex-col relative z-10'>
            {page === 1 && firstPageContent}
            {page === 2 && secondPageContent}
            {page === 3 && thirdPageContent}
            {page === 4 && fourthPageContent}
        </form>
    </View>
}
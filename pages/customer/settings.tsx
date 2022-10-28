import { AdjustmentsHorizontalIcon, ArrowDownOnSquareIcon, CalendarIcon, DocumentMagnifyingGlassIcon, EnvelopeIcon, EyeIcon, LockClosedIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/outline'
import { ChangeEvent, ReactElement, useState } from 'react'

import { NextPageWithLayout } from '../_app'
import Layout, { Head } from '../../components/backend/navigation/Layout'
import PageTitle from '../../components/backend/ui/title/page'
import Button from '../../components/backend/ui/form/Button'
import Input from '../../components/frontend/ui/form/Input'
import CountrySelect from '../../components/ui/CountrySelect'

const params = {
    link: '/customer/settings',
    title: "Settings | Valyou",
    description: "Your favorite e-commerce platform: your settings."
}

const SettingsPage: NextPageWithLayout = () => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        code: '',
        phone: '',
        password: '',
        password_confirmation: '',
        birthdate: '',
    })
    const [birthdateInputType, setBirthdateInputType] = useState('text')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

    return <>
        <Head {...params} />
        <main className='flex-1'>
            <PageTitle animated icon={AdjustmentsHorizontalIcon} title='Settings' subtitle='Manage your account details' />

            <div className="px-[33px] md:px-[42px] pt-[29px] md:pt-[47px] pb-[54px]">
                <div className="bg-white rounded-[30px] py-8 px-[38.36px] shadow-2xl mb-[25px] max-w-[700px]">
                    <div className="mb-[46.94px] flex items-center justify-between">
                        <div>
                            <div className="font-medium mb-[4.63px] text-[22.21px]">User Account Settings</div>

                            <div className="text-[12.96px]">Edit or manage account</div>
                        </div>

                        <div className="flex items-center">
                            <Button type={editing ? 'submit' : 'button'} onClick={() => setEditing(editing => !editing)} pill icon={ArrowDownOnSquareIcon} color={editing ? 'green' : 'night'}>{editing ? 'Save' : 'Edit'} Settings</Button>
                        </div>
                    </div>

                    <form>
                        <div className="md:flex md:items-start md:space-x-11">
                            <div className="flex-1 grid gap-y-2 gap-x-4 grid-cols-1 md:grid-cols-2">
                                <Input inputSize='sm' icon={UserIcon} name='first_name' placeholder='First Name' onChange={onChange} value={value.first_name} />
                                <Input inputSize='sm' icon={UserIcon} name='last_name' placeholder='Last Name' onChange={onChange} value={value.last_name} />
                                <Input inputSize='sm' icon={EnvelopeIcon} type='email' name='email' placeholder='E-mail Address' onChange={onChange} value={value.email} />
                                <Input inputSize='sm' addon={<div className='w-[88px] pl-[14.76px]'>
                                    <CountrySelect value={value.code} onChange={(code: string) => setValue({ ...value, code })} />
                                </div>} type='tel' name='phone' placeholder='054 430 3333' onChange={onChange} value={value.phone} />
                                <Input inputSize='sm' icon={LockClosedIcon} append={<EyeIcon className='w-6 text-green cursor-pointer' />} type='password' name='password' placeholder='Password' onChange={onChange} value={value.password} />
                                <Input inputSize='sm' icon={LockClosedIcon} append={<EyeIcon className='w-6 text-green cursor-pointer' />} type='password' name='password_confirmation' placeholder='Retype Password' onChange={onChange} value={value.password_confirmation} />
                                <Input inputSize='sm' icon={CalendarIcon} type={birthdateInputType} onFocus={() => setBirthdateInputType('date')} name='birthdate' placeholder='Date of birth' onChange={onChange} value={value.birthdate} />
                            </div>

                            <div className="w-40 h-40 mx-auto rounded-3xl relative flex flex-col items-center justify-center overflow-hidden text-white">
                                <img src="/images/backend/settings.svg" alt="User profile pic" className="absolute z-0 inset-0 image-cover" />
                                <div className="absolute z-10 inset-0 bg-black/40" />
                                <div className="relative z-20 w-14 h-14 mb-1.5 rounded-full flex items-center justify-center bg-black/30"><PencilSquareIcon className='w-6' /></div>
                                <div className="relative z-20 font-bold text-[14.81px]">Change</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>
}

SettingsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default SettingsPage
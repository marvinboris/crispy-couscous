import { ArrowLeftOnRectangleIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React, { ChangeEvent, FormEvent, useState } from 'react'

import CountrySelect from "../../../ui/CountrySelect";
import View from "../../../ui/View";
import Button from "../../ui/form/Button";
import Input from "../../ui/form/Input";

export default function SignIn() {
    const [value, setValue] = useState({
        code: '971',
        phone: '',
        password: '',
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue({ ...value, [e.target.name]: e.target.value })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

    }

    const content = <>
        <div className="font-bold text-primary text-lg md:text-3xl text-center md:text-left mb-[17px] md:mb-[5px]">Login to your account</div>

        <div className='text-sm md:text-lg text-center md:text-left mb-[30px] md:mb-[22px]'>Shop & Win !</div>

        <div className='max-h-[243px] md:max-h-[unset] px-3 md:px-0 overflow-auto mb-6 md:mb-[33px]'>
            <div className="grid gap-y-[13.63px] mb-[22.8px]">
                <Input addon={<div className='w-24 pl-[15.95px]'>
                    <CountrySelect value={value.code} onChange={(code: string) => setValue({ ...value, code })} />
                </div>} type='tel' name='phone' placeholder='054 430 3333' onChange={onChange} value={value.phone} />
                <Input icon={LockClosedIcon} type='password' name='password' placeholder='Password' onChange={onChange} value={value.password} />
            </div>
        </div>

        <div className="text-center">
            <Button>Continue</Button>
        </div>
    </>

    return <View action={<Button size='sm'>
        <span className='font-medium'>Sign In</span>
        <span>
            <ArrowLeftOnRectangleIcon className='ml-2 inline-block w-5 text-white/60 group-hover:text-white transition-all duration-200' />
        </span>
    </Button>}>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto px-5 md:px-0 flex flex-col relative z-10'>
            {content}
        </form>
    </View>
}
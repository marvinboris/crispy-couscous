import Router from 'next/router';
import { useEffect } from 'react'

import { Head } from '../components/frontend/navigation/Layout';
import Logo from "../components/ui/Logo";

const params = {
    link: '/success',
    title: 'Valyou',
    description: 'Your favorite e-commerce platform',
}

export default function SuccessPage() {
    useEffect(() => {
        setTimeout(() => {
            Router.push('/customer/dashboard')
        }, 3000);
    }, [])


    return <div className="min-h-screen relative overflow-hidden">
        <Head {...params} />

        <img src="/images/bg-screen.svg" alt="BG Screen" className="absolute hidden md:block inset-0 image-cover -z-10" />
        <img src="/images/frontend/screen/bg-sm.svg" alt="BG Small Screen" className="absolute md:hidden top-[140px] left-[53px] right-[30.31px] bottom-[111.31px] object-contain -z-10" />

        <div className='container flex flex-col items-center'>
            <div className="w-full mt-[30px] md:mt-[37px]">
                <Logo />
            </div>

            <div className="flex flex-1 flex-col items-center mt-[226.98px] md:mt-[77px] relative">
                <img src="/images/frontend/screen/112854-congratulations.gif" alt="Success" className='w-[151px] md:w-[263px] absolute -top-[132px] md:-top-[156px] left-0 md:-left-[179px] -z-20' />
                <img src="/images/frontend/screen/112854-congratulations.gif" alt="Success" className='w-[151px] md:w-[263px] absolute top-[19px] md:top-[33px] left-0 md:-left-[99px] -z-20' />
                <img src="/images/frontend/screen/112854-congratulations.gif" alt="Success" className='w-[151px] md:w-[263px] absolute -top-[132px] md:-top-[181px] right-0 md:-right-[177px] -z-20' />
                <img src="/images/frontend/screen/112854-congratulations.gif" alt="Success" className='w-[151px] md:w-[263px] absolute top-[19px] md:top-[92px] right-0 md:-right-[189px] -z-20' />

                <div className="congratulations text-center text-3xl md:text-left md:text-6xl font-bold mb-4 md:mb-[11px]">
                    Congratulations !!!
                </div>

                <img src="/images/curve.svg" alt="Courbe" className="absolute hidden md:block -right-4 -top-6 md:-right-12 md:-top-16 md:translate-x-full" />

                <div className="text-lg text-center md:text-left mb-[37px]">
                    You got youself a free raffle ticket. You are bein redirected to the dashboard
                </div>

                <img src="/images/frontend/screen/103973-tickets.gif" alt="Success" className='w-[184px] md:w-[300px] relative -z-10' />
            </div>

            <img src="/images/frontend/screen/85744-success.gif" alt="Success" className='w-[148px] md:w-[300px] absolute bottom-0 md:-bottom-[23px] left-0 md:left-[81px] -z-20' />
            <img src="/images/frontend/screen/85744-success.gif" alt="Success" className='w-[148px] md:w-[300px] absolute bottom-0 md:-bottom-[83px] right-0 md:right-[15px] -z-20' />
        </div>
    </div>
}
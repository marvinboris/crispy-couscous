import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Router from 'next/router';
import { useState } from 'react'

import { useLanguageContext } from '../app/contexts/language';
import { Head } from '../components/frontend/navigation/Layout';
import LanguageBlock from "../components/frontend/ui/blocks/LanguageBlock";
import Button from '../components/frontend/ui/form/Button';
import Logo from "../components/ui/Logo";

const params = {
    link: '/screen',
    title: 'Valyou',
    description: 'Your favorite e-commerce platform',
}

export default function ScreenPage() {
    const { setLanguage, languages } = useLanguageContext()
    const [abbr, setAbbr] = useState(languages![0].abbr)

    const languagesContent = languages?.map(language => <LanguageBlock key={`language-${language.abbr}`} language={language} selected={language.abbr === abbr} select={setAbbr} />)

    const onClick = () => {
        const language = languages?.find(l => l.abbr === abbr)
        if (language) {
            setLanguage(language)
            Router.push('/')
        }
    }

    return <div className="min-h-screen container flex flex-col items-center">
        <Head {...params} />

        <img src="/images/bg-screen.svg" alt="BG Screen" className="absolute inset-0 image-cover -z-10" />

        <div className="w-full mt-[37px]">
            <Logo />
        </div>

        <div className="flex flex-1 flex-col items-center mt-[77px]">
            <div className="text-6xl font-bold mb-7 lg:mb-[11px] relative">
                Welcome to Valyou !

                <img src="/images/curve.svg" alt="Courbe" className="absolute -right-4 -top-6 lg:-right-12 lg:-top-16 lg:translate-x-full" />
            </div>

            <div className="text-lg mb-8 lg:mb-[66px]">
                A new shopping experience where your choices are highly rewarded
                please select a language to get started.
            </div>

            <div className="lg:w-full max-w-lg grid gap-5 grid-cols-2 lg:grid-cols-4 mb-10 lg:mb-[100px]">
                {languagesContent}
            </div>

            <Button onClick={onClick} icon={ArrowRightIcon}>Continue</Button>
        </div>
    </div>
}
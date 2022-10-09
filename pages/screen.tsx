import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Router from 'next/router';
import { useState } from 'react'

import { useLanguageContext } from '../app/contexts/language';
import { useLanguagesContext } from "../app/contexts/languages";
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
    const { languages } = useLanguagesContext()
    const { setLanguage } = useLanguageContext()
    const [abbr, setAbbr] = useState('')

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
        <div className="w-full mt-[37px]">
            <Logo />
        </div>

        <div className="flex flex-1 flex-col items-center mt-[77px]">
            <div className="text-6xl font-bold mb-[11px] relative">
                Welcome to Valyou !

                <img src="/images/curve.svg" alt="Courbe" className="absolute -right-12 -top-16 translate-x-full" />
            </div>

            <div className="text-lg mb-[66px]">A rewarding shopping ! Please select a language to get started !</div>

            <div className="w-full max-w-lg grid gap-5 grid-cols-4 mb-[100px]">
                {languagesContent}
            </div>

            <Button onClick={onClick} icon={ArrowRightIcon}>Continue</Button>
        </div>
    </div>
}
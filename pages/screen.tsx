import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'

import { useLanguageContext } from '../app/contexts/language';
import { classNames } from '../app/helpers/utils';
import LanguageType from '../app/types/language';

import { Head } from '../components/frontend/navigation/Layout';
import IntroductionVideo from '../components/frontend/screen/IntroductionVideo';
import LanguageBlock from "../components/frontend/screen/LanguageBlock";
import Button from '../components/frontend/ui/form/Button';
import Logo from "../components/ui/Logo";

const params = {
    link: '/screen',
    title: 'Valyou',
    description: 'Your favorite e-commerce platform',
}

export default function ScreenPage() {
    let [isOpen, setIsOpen] = useState<boolean>(false)
    const [language, setLanguage] = useState<LanguageType | null>(null)
    const { languages } = useLanguageContext()
    const [abbr, setAbbr] = useState(languages![0].abbr)

    const languagesContent = languages?.map(language => <LanguageBlock key={`language-${language.abbr}`} language={language} selected={language.abbr === abbr || (language.items && language.items.find(item => item.abbr === abbr)) !== undefined} select={setAbbr} />)

    const onClick = () => {
        const language = languages?.find(l => l.abbr === abbr)
        if (language) {
            setLanguage(language)
            setIsOpen(true)
        }
    }

    return <div className="min-h-screen relative">
        <Head {...params} />

        <div className='container flex flex-col items-center'>
            <img src="/images/bg-screen.svg" alt="BG Screen" className="absolute inset-0 image-cover -z-10" />

            <IntroductionVideo isOpen={isOpen} setIsOpen={setIsOpen} language={language} />

            <div className="w-full mt-[30px] md:mt-[37px] flex justify-between items-center">
                <div><Logo /></div>
                <div className='hidden md:block'><Button size='sm'><span className='font-medium'>Sign In</span><span><ArrowLeftOnRectangleIcon className='ml-2 inline-block w-5 text-white/60 group-hover:text-white transition-all duration-200' /></span></Button></div>
            </div>

            <div className="flex flex-1 flex-col items-center mt-[101.98px] md:mt-[77px] pb-12">
                <div className="text-center text-3xl md:text-left md:text-6xl font-bold mb-4 md:mb-[11px] relative">
                    Welcome to Valyou !

                    <img src="/images/curve.svg" alt="Courbe" className="absolute hidden md:block -right-4 -top-6 md:-right-12 md:-top-16 md:translate-x-full" />
                </div>

                <div className="text-lg text-center md:text-left mb-[37px] md:mb-[66px]">
                    A new shopping experience where your choices are highly rewarded
                    please select a language to get started.
                </div>

                <div className="md:w-full max-w-lg grid gap-5 grid-cols-3 md:grid-cols-4 mb-8 md:mb-[100px]">
                    {languagesContent}
                </div>

                <div className={classNames(isOpen ? "opacity-0" : "opacity-100", "transition-all duration-200 sticky -bottom-8")}>
                    <Button onClick={onClick} icon={ArrowRightIcon}>Get Started</Button>

                    <div className='md:hidden font-medium font-body text-center mt-[25px]'>Or <span className="font-bold text-primary">Sign In</span></div>
                </div>
            </div>
        </div>
    </div>
}
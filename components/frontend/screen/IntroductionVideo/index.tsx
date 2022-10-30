import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FormEvent, Fragment, useEffect, useState } from 'react'

import { useLanguageContext } from '../../../../app/contexts/language'

import LanguageType from '../../../../app/types/language'
import GetStarted from './GetStarted'

interface IntroductionVideoProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    language: LanguageType | null
}

export default function IntroductionVideo({ isOpen, setIsOpen, language }: IntroductionVideoProps) {
    const { setLanguage } = useLanguageContext()

    const close = () => {
        // if (end) setIsOpen(false)
    }

    const setVideoRef = (video: HTMLVideoElement) => {
        if (video) {
            // video.muted = false
        }
    }

    const getStartedSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
    }

    return <div>
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={close} className="fixed inset-0 z-50 flex items-center">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                {/* Full-screen container to center the panel */}
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    <div className="container">
                        <Dialog.Panel className="mx-auto max-w-xs md:max-w-4xl w-full relative">
                            <div className="absolute -translate-y-full -top-[120px] md:-top-[51px] right-0 md:-right-[14px] md:translate-x-full">
                                <div onClick={() => setIsOpen(false)} className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer bg-white/20"><div><XMarkIcon className='w-10 text-white' /></div></div>
                            </div>

                            <div className="bg-secondary-800">
                                <video ref={setVideoRef} autoPlay src="/videos/Raffle Draw Motion Graphics.mp4" playsInline muted className='w-full' />
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>

        {isOpen && <div className="fixed z-[100] left-1/2 -translate-x-1/2 bottom-12" onClick={() => setLanguage(language)}>
            <GetStarted onSubmit={getStartedSubmitHandler} color="white" />
        </div>}
    </div>
}
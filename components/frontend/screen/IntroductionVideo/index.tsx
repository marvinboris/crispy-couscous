import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FormEvent, Fragment, useEffect, useState } from 'react'

import { useLanguageContext } from '../../../../app/contexts/language'

import LanguageType from '../../../../app/types/language'
import GetStarted from '../../home/GetStarted'

interface IntroductionVideoProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    language: LanguageType | null
}

export default function IntroductionVideo({ isOpen, setIsOpen, language }: IntroductionVideoProps) {
    const { setLanguage } = useLanguageContext()

    const [video, setVideo] = useState<HTMLVideoElement | null>(null)
    const [length, setLength] = useState(0);
    const [time, setTime] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [rate, setRate] = useState(1);
    const [end, setEnd] = useState(false);

    const close = () => {
        if (end) setIsOpen(false)
    }

    useEffect(() => {
        return () => {
            video?.pause();

            setVideo(null)
            setLength(0)
            setTime(0)
            setEnd(false)
        };
    }, [])

    const setVideoRef = (video: HTMLVideoElement) => {
        if (video) {
            const setVideoData = () => {
                setLength(video.duration);
                setTime(video.currentTime);
            };

            const setVideoTime = () => {
                const curTime = video.currentTime;
                setTime(curTime);
            };

            const setVideoVolume = () => setVolume(video.volume);

            const setVideoRate = () => setRate(video.playbackRate);

            const setVideoEnd = () => setEnd(true);

            // events on video object
            video.addEventListener("loadeddata", setVideoData);
            video.addEventListener("timeupdate", setVideoTime);
            video.addEventListener("volumechange", setVideoVolume);
            video.addEventListener("ratechange", setVideoRate);
            video.addEventListener("ended", setVideoEnd);

            setVideo(video)
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
                        <Dialog.Panel className="mx-auto max-w-xs md:max-w-4xl w-full rounded-[40.8836px] relative">
                            {end && <div className="absolute -translate-y-full -top-[120px] md:-top-[51px] right-0 md:-right-[14px] md:translate-x-full">
                                <div onClick={() => setIsOpen(false)} className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer bg-white/20"><div><XMarkIcon className='w-10 text-white' /></div></div>
                            </div>}

                            <div className="aspect-[4/3] md:aspect-video">
                                <div className="absolute z-10 rounded-[45px] bg-white inset-0" />

                                <div className="absolute z-30 rounded-[45px] inset-0 bg-secondary-800 flex flex-col items-center justify-center">
                                    <video ref={setVideoRef} autoPlay src="/videos/120772-processing-success.mp4" className='w-full aspect-[4/3] md:aspect-video' />
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>

        {end && <div className="fixed z-[100] left-1/2 -translate-x-1/2 bottom-12" onClick={() => setLanguage(language)}>
            <GetStarted onSubmit={getStartedSubmitHandler} color="white" />
        </div>}
    </div>
}
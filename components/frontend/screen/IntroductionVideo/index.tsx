import { Dialog, Transition } from '@headlessui/react'
import { ArrowRightIcon, PlayIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import Button from '../../ui/form/Button'

interface IntroductionVideoProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function IntroductionVideo({ isOpen, setIsOpen }: IntroductionVideoProps) {
    const router = useRouter()

    const close = () => {
        setIsOpen(false)
    }

    const leave = () => {
        router.push('/')
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
                    <div className="container relative">

                        <Dialog.Panel className="mx-auto max-w-xs lg:max-w-4xl w-full rounded-[40.8836px] relative">
                            <div className="absolute -translate-y-full -top-[120px] right-0">
                                <div onClick={() => setIsOpen(false)} className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer bg-white/20"><div><XMarkIcon className='w-10 text-white' /></div></div>
                            </div>

                            <div className="ratio-4by3">
                                <div className="absolute z-10 rounded-[45px] bg-white inset-0" />
                                <img src="/images/home-banner.svg" alt="Banner" className="absolute rounded-[45px] top-0 z-20 image-cover" />
                                <div className="absolute z-30 rounded-[45px] inset-0 bg-black/40 flex flex-col items-center justify-center">
                                    <div className="w-[96px] h-[96px] rounded-full bg-white/30 flex items-center justify-center animate-pulse">
                                        <div className="w-[56px] h-[56px] rounded-full bg-white/30 flex items-center justify-center">
                                            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white">
                                                <PlayIcon className='w-4 text-orange-600' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-xs text-white absolute bottom-[30px]">Watch the video</div>
                                </div>
                            </div>
                        </Dialog.Panel>

                        <div className="absolute -bottom-[120px] left-1/2 -translate-x-1/2 translate-y-full">
                            <Button onClick={leave} icon={ArrowRightIcon}>Get Started</Button>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    </div>
}
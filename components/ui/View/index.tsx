import { useState, Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ViewProps {
    action: ReactNode
    children: ReactNode
}

export default function View({ action, children }: ViewProps) {
    let [isOpen, setIsOpen] = useState<boolean>(false)

    return <div>
        <div onClick={() => setIsOpen(true)}>
            {action}
        </div>

        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center">
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                {/* Full-screen container to center the panel */}
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    <div className="container">
                        <Dialog.Panel className="mx-auto max-w-4xl w-full rounded-[40.8836px] relative bg-white text-secondary-700 pt-[44px] md:pt-[51px] pb-[50px] md:pb-[66px]">
                            <div className="absolute md:translate-x-full -translate-y-full md:-translate-y-1/2 -top-9 md:top-0 right-0 md:-right-10">
                                <div onClick={() => setIsOpen(false)} className="w-[60px] md:w-20 h-[60px] md:h-20 rounded-full flex items-center justify-center cursor-pointer bg-white/20"><div><XMarkIcon className='w-8 md:w-10 text-white' /></div></div>
                            </div>

                            {children}
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    </div>
}
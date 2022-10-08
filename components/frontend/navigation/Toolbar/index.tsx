/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ComponentProps } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    BookOpenIcon,
    EllipsisVerticalIcon,
    XMarkIcon,
    HomeIcon,
    DevicePhoneMobileIcon,
    NewspaperIcon,
    UsersIcon,
    MegaphoneIcon,
    HandRaisedIcon
} from '@heroicons/react/24/outline'

import Logo from '../../../ui/Logo'

import Resource from './Resource'
import NavItem from './NavItem'
import Dropdown from './Dropdown'

import { useThemeContext } from '../../../../app/contexts/theme'
import { useLanguageContext } from '../../../../app/contexts/language'

const mobileNavItems = [
    { name: 'Enseignements', href: '/lessons', icon: BookOpenIcon },
    { name: 'Donner', href: '/give', icon: HandRaisedIcon },
]


const renderMobileNavItem = (item: { name: string, href: string, icon: (props: ComponentProps<'svg'>) => JSX.Element }, close: () => void) => <Link key={item.name} href={item.href}>
    <a onClick={close} className="-m-3 flex items-center rounded-md p-3 hover:bg-secondary-50 dark:hover:bg-secondary-800">
        <item.icon className="h-6 w-6 flex-shrink-0 text-primary-600" aria-hidden="true" />
        <span className="ml-3 text-base font-medium text-secondary-900 dark:text-white">{item.name}</span>
    </a>
</Link>

export default function Toolbar() {
    const { setTheme } = useThemeContext()
    const { language, setLanguage } = useLanguageContext()

    if (!language) {
        Router.push('/screen')
        return <></>
    }

    return (
        <Popover className="fixed w-full top-0 z-50 bg-white dark:bg-secondary-900 backdrop-blur backdrop-filter">
            {({ close }) => <>
                <div className="container">
                    <div className="flex items-center py-[10px]">
                        <div className="flex justify-start">
                            <Link href="/#banner">
                                <div className='cursor-pointer'>
                                    <span className="sr-only">Valyou</span>
                                    <Logo />
                                </div>
                            </Link>
                        </div>

                        <div className='ml-auto flex items-center'>
                            <div className="flex items-center mr-[77px]">
                                <Popover.Group as="nav" className="hidden space-x-8 md:flex">
                                    <NavItem href="/#banner">Home</NavItem>
                                    <NavItem href="/#about">About Us</NavItem>
                                </Popover.Group>
                            </div>

                            <div className="flex items-center rounded-full py-[7px] pl-[9px] pr-[20px] cursor-pointer bg-secondary-100">
                                <div className='mr-2'>
                                    <div className="w-8 h-8 rounded-full">
                                        <img src={`/images/flags/1x1/${language!.flag}.svg`} alt="Flag" className="image-cover rounded-full" />
                                    </div>
                                </div>

                                <div className="font-medium">{language!.name}</div>
                            </div>

                            <div className="md:hidden ml-4">
                                <Popover.Button className="flex h-10 items-center justify-center rounded-md p-2 -m-2 focus:outline-none">
                                    <span className="sr-only">Ouvrir le menu</span>
                                    <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Popover.Overlay className="md:hidden fixed top-0 w-full h-screen z-40 bg-black/20 dark:bg-secondary-900/80 backdrop-filter backdrop-blur-sm" />
                <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel focus className="fixed inset-0 top-0 z-50 md:hidden">
                        <div className="absolute top-0 left-0 w-full pt-4">
                            <div className="container flex justify-end">
                                <Popover.Button className="flex h-10 items-center justify-center rounded-md p-2 -mr-2 focus:outline-none">
                                    <span className="sr-only">Fermer le menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>

                        <div className="mt-[72px] container">
                            <div className="divide-y-2 divide-secondary-50 dark:divide-secondary-200/10 rounded-lg bg-white dark:bg-secondary-800 shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                                <div className="px-5 pt-5 pb-6">

                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {mobileNavItems.map(item => renderMobileNavItem(item, close))}
                                        </nav>
                                    </div>
                                </div>

                                <div className="space-y-6 py-6 px-5">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <Resource href="#" name='Pricing' />
                                        <Resource href="#" name='Docs' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>}
        </Popover>
    )
}

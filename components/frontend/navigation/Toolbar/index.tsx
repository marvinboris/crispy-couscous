/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ComponentProps } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon, HomeIcon, IdentificationIcon, Bars3BottomRightIcon, PhoneIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

import Logo from '../../../ui/Logo'

import NavItem from './NavItem'
import LanguageSelect from './LanguageSelect'
import Dropdown from './Dropdown'
import Resource from './Resource'
import Button from '../../ui/form/Button'

const listItems = [
    { href: '/about/mission', label: 'Mission' },
    { href: '/about/tutorials', label: 'Tutorials' },
    { href: '/about/how-to-win', label: 'How to win' },
]

const mobileNavItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
]

const resourceItems = [
    { name: 'Mission', href: '/about/mission' },
    { name: 'Tutorials', href: '/about/tutorials' },
    { name: 'How to win', href: '/about/how-to-win' },
]

const renderMobileNavItem = (item: { name: string, href: string, icon: (props: ComponentProps<'svg'>) => JSX.Element }, close: () => void) => <Link key={item.name} href={item.href}>
    <a onClick={close} className="-m-3 flex items-center rounded-md p-3 hover:bg-secondary-50 dark:hover:bg-secondary-800">
        <item.icon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
        <span className="ml-3 text-base font-medium text-secondary-900 dark:text-white">{item.name}</span>
    </a>
</Link>

const renderResourceNavItem = (item: { name: string, href: string }, close: () => void) => <div key={`resource-${item.href}`} onClick={close}>
    <Resource {...item} />
</div>

export default function Toolbar() {
    return (
        <Popover className="fixed w-full top-0 z-40 bg-white dark:bg-secondary-900">
            {({ close }) => <>
                <div className="container">
                    <div className="flex items-center py-[30px] md:py-[10px]">
                        <div className="flex justify-start">
                            <Link href="/">
                                <div className='cursor-pointer'>
                                    <span className="sr-only">Valyou</span>
                                    <Logo />
                                </div>
                            </Link>
                        </div>

                        <div className='flex-1 md:flex-initial md:ml-auto flex items-center'>
                            <div className="flex items-center mr-[77px]">
                                <Popover.Group as="nav" className="hidden space-x-8 md:flex">
                                    <NavItem href="/" icon={HomeIcon}>Home</NavItem>
                                    <Dropdown basePath='/about' list={listItems}>About Us</Dropdown>
                                    <NavItem href="/contact">Contact Us</NavItem>
                                    <NavItem href="/faq">FAQ</NavItem>
                                </Popover.Group>
                            </div>

                            <div>
                                <LanguageSelect />
                            </div>

                            <div className='hidden md:block ml-[26px]'><Button size='sm'><span className='font-medium'>Sign In</span><span><ArrowLeftOnRectangleIcon className='ml-2 inline-block w-5 text-white/60 group-hover:text-white transition-all duration-200' /></span></Button></div>

                            <div className="md:hidden ml-auto md:ml-4">
                                <Popover.Button className="flex h-10 items-center justify-center rounded-md p-2 text-primary bg-primary/10 -m-2 focus:outline-none">
                                    <span className="sr-only">Ouvrir le menu</span>
                                    <Bars3BottomRightIcon className="w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Popover.Overlay className="md:hidden fixed top-0 w-full h-screen z-40 bg-black/20 dark:bg-secondary-900/80 backdrop-filter backdrop-blur-sm" />
                <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel focus className="fixed inset-x-0 top-0 z-50 md:hidden">
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

                                <div className="px-5 pb-5 pt-6">
                                    <div className="mb-6">
                                        <nav className="grid gap-4 grid-cols-2">
                                            {resourceItems.map(item => renderResourceNavItem(item, close))}
                                        </nav>
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

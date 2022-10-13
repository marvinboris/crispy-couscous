import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, ReactNode, useState } from 'react'

import { classNames } from '../../../../../app/helpers/utils'

interface MenuItemProps {
    href: string
    label: string
    close?: () => void
}

const MenuItem = ({ href, label, close }: MenuItemProps) => {
    const router = useRouter()

    return <Menu.Item>
        <Link href={href}>
            <a onClick={close} className={classNames('block truncate py-[7px] px-4 rounded-lg', router.pathname === href ? 'text-white bg-primary-600 font-bold' : '')}>{label}</a>
        </Link>
    </Menu.Item>
}

interface DropdownProps {
    children: ReactNode
    basePath: string
    list: MenuItemProps[]
}

export default function Dropdown({ children, basePath, list }: DropdownProps) {
    const router = useRouter()

    return <Menu as="div" className="relative text-sm">
        {({ open, close }) => <>
            <Menu.Button className={classNames(router.pathname.includes(basePath) ? 'text-primary-600 font-bold relative after:inline-block after:ml-0.5 after:w-1 after:h-1 after:rounded-full after:bg-orange-600' : 'font-medium text-secondary-700 hover:text-primary-600', "truncate align-top text-sm dark:text-secondary-200 dark:hover:text-primary-600")}>
                {children}
            </Menu.Button>

            <Transition show={open} as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items static className="absolute left-0 mt-2 origin-top-right z-0 overflow-hidden bg-white after:bg-primary-600/20 after:inset-0 after:absolute after:-z-10 shadow-lg rounded-[20px] py-[22px] px-[13px]">
                    {list.map(item => <MenuItem key={`menu-item-${item.href}`} {...item} close={close} />)}
                </Menu.Items>
            </Transition>
        </>}
    </Menu>
}

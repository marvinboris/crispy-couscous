import { AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, ComputerDesktopIcon, DocumentDuplicateIcon, DocumentPlusIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

import NavItem from "./NavItem";

import Logo from "../../../../ui/Logo";

import { useSideDrawerContext } from "../../../../../app/contexts/sideDrawer";
import { useWindowSize } from "../../../../../app/hooks";

import SocialNetworks from "../../../../frontend/navigation/Footer/SocialNetworks";

export default function SideDrawer() {
    const { width } = useWindowSize()
    const { open, setOpen } = useSideDrawerContext()

    return <Transition show={open || (width !== undefined && width > 768)} as={Fragment}>
        <div className='fixed inset-0 md:relative top-0 z-40 min-h-screen md:block'>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <div className="absolute md:relative w-[230px] z-0 h-full flex flex-col pt-[18px] pb-[95px] px-5 bg-white after:absolute after:inset-0 after:bg-secondary-500/10 after:-z-10">
                    <div className="mb-32 w-[130px]"><Link href='/'><a><Logo /></a></Link></div>

                    <div className="flex-1 flex flex-col">
                        <div>
                            <div className="mb-[103px]">
                                <NavItem icon={HomeIcon} href='/' main>Visit Website</NavItem>
                            </div>

                            <div className="space-y-3">
                                <NavItem icon={ComputerDesktopIcon} href='/customer/dashboard'>Dashboard</NavItem>
                                <NavItem icon={DocumentDuplicateIcon} href='/customer/tickets'>My Tickets</NavItem>
                                <NavItem icon={DocumentPlusIcon} href='/customer/prizes'>My Prizes</NavItem>
                                <NavItem icon={AdjustmentsHorizontalIcon} href='/customer/settings'>Settings</NavItem>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="mb-[69.4px] flex justify-center scale-90">
                                <SocialNetworks />
                            </div>

                            <div className="flex items-center cursor-pointer">
                                <div className="mr-6"><ArrowRightOnRectangleIcon className="w-6 text-primary" /></div>

                                <div className="text-lg font-bold text-primary">Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition.Child>

            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="absolute inset-0 -z-10 bg-black/30 backdrop-filter backdrop-blur-sm" onClick={() => setOpen(false)} />
            </Transition.Child>
        </div>
    </Transition>
}
import { AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, DocumentDuplicateIcon, DocumentPlusIcon, HomeIcon } from "@heroicons/react/24/outline";

import NavItem from "./NavItem";

import Logo from "../../../../ui/Logo";
import Link from "next/link";

export default function SideDrawer() {
    return <div className="sticky top-0 z-50 w-72 min-h-screen flex flex-col pt-[42px] pb-[95px] px-5 bg-primary-600/20">
        <div className="mb-32"><Link href='/'><a><Logo /></a></Link></div>

        <div className="flex-1 flex flex-col">
            <div>
                <div className="mb-[103px]">
                    <NavItem icon={HomeIcon} href='/customer/dashboard'>Dashboard</NavItem>
                </div>

                <div className="space-y-3">
                    <NavItem icon={DocumentDuplicateIcon} href='/customer/tickets'>My Tickets</NavItem>
                    <NavItem icon={DocumentPlusIcon} href='/customer/prizes'>My Prizes</NavItem>
                    <NavItem icon={AdjustmentsHorizontalIcon} href='/customer/prizes'>Settings</NavItem>
                </div>
            </div>

            <div className="mt-auto">
                <div className="flex items-center cursor-pointer">
                    <div className="mr-6"><ArrowRightOnRectangleIcon className="w-6 text-primary-600" /></div>

                    <div className="text-lg font-bold">Logout</div>
                </div>
            </div>
        </div>
    </div>
}
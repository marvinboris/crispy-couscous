import { AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, ArrowTopRightOnSquareIcon, Bars3BottomLeftIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, ClipboardDocumentListIcon, WalletIcon } from "@heroicons/react/24/outline"
import { ReactNode, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useAccountContext } from "../../../../app/contexts/account"
import { useSideDrawerContext } from "../../../../app/contexts/sideDrawer"
import { classNames } from "../../../../app/helpers/utils"

import LanguageSelect from "./LanguageSelect"

export default function Toolbar() {
    const { account } = useAccountContext()
    const { open, setOpen } = useSideDrawerContext()

    const [copiedId, setCopiedId] = useState(false)
    const [copiedLink, setCopiedLink] = useState(false)

    const copyId = () => {
        setCopiedLink(false)
        setCopiedId(true)
        setTimeout(() => {
            setCopiedId(false)
        }, 5000);
    }

    const copyLink = () => {
        setCopiedId(false)
        setCopiedLink(true)
        setTimeout(() => {
            setCopiedLink(false)
        }, 5000);
    }

    const idCopyIcon = <CopyToClipboard text={account?.aid!} onCopy={copyId}>
        <div className="inline-block relative">
            <img src="/images/backend/copy-id.svg" alt="Copy icon" className="inline-block cursor-pointer" />
            <div className={classNames(copiedId ? 'opacity-100 scale-100' : 'opacity-0 scale-0', "bg-secondary-800 text-xs origin-top-right transition-all duration-200 text-white p-1 rounded absolute top-full mt-1 right-0")}>Copied</div>
        </div>
    </CopyToClipboard >

    const LinkCopy = ({ children }: { children: ReactNode }) => <CopyToClipboard text='https://www.valyouae.com/ref=?FHKO57' onCopy={copyLink}>
        <div className="inline-block relative">
            <div className="cursor-pointer">{children}</div>
            <div className={classNames(copiedLink ? 'opacity-100 scale-100' : 'opacity-0 scale-0', "bg-secondary-800 text-xs origin-top-right transition-all duration-200 text-white p-1 rounded absolute top-full mt-1 right-0")}>Copied</div>
        </div>
    </CopyToClipboard >

    return <header className="bg-white flex items-center sticky top-0 z-30">
        <div className="flex-1 flex items-center pl-[33px] pr-4 md:px-[42px]">
            <div className="cursor-pointer" onClick={() => setOpen(!open)}><Bars3BottomLeftIcon className='w-10 text-primary' /></div>

            <div className="flex ml-auto">
                <div className="hidden xl:block mr-[42px]"><LinkCopy><div className="bg-secondary-500/10 rounded-lg py-2.5 px-[14px] flex md:items-center md:space-x-2.5 text-sm"><div>https://www.valyouae.com/ref=?FHKO57</div><ArrowTopRightOnSquareIcon className="text-green w-6" /></div></LinkCopy></div>
                <div className="mr-5 md:mr-[51.69px]"><LanguageSelect /></div>
                <div className="cursor-pointer relative z-0 group after:block after:absolute after:w-[12.72px] after:h-[12.72px] after:rounded-full after:bg-green after:top-0 after:right-0 mr-3">
                    <BellIcon className="w-[31px]" />

                    <div className="absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 pt-1 top-full right-0 origin-top-right transition-all duration-200">
                        <div className="bg-white shadow-sm rounded-[14px] p-3 text-xs truncate">
                            <div className="space-y-2.5">
                                <div className="flex cursor-pointer items-center space-x-1.5">
                                    <span><BellIcon className="w-3 text-green" /></span><span>You got a winning ticket</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer relative z-0 after:block after:absolute after:w-[12.72px] after:h-[12.72px] after:rounded-full after:bg-green after:top-0 after:right-0"><ChatBubbleOvalLeftEllipsisIcon className="w-[31px]" /></div>
            </div>
        </div>

        <div className="md:w-[300px] md:border-l border-secondary-700/10 h-[111px] md:h-[86px] flex items-center justify-between md:pl-3 pr-9">
            <div className="hidden md:block">
                <div className="text-lg font-medium mb-1">{account?.first_name} {account?.last_name}</div>

                <div>
                    <span className="text-green">ID : <span className="font-bold">{account?.aid}</span></span> <span>{idCopyIcon}</span>
                </div>
            </div>

            <div className="relative group">
                <img src="/images/backend/user-pic-wrapper.svg" alt="User pic wrapper" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[1px] w-11 h-11 rounded-full overflow-hidden">
                    <img src={account?.photo} alt="User pic" className="absolute inset-0 scale-[2] image-cover" />
                </div>

                <div className="absolute scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 pt-1.5 top-full right-0 origin-top-right transition-all duration-200">
                    <div className="w-40 bg-white shadow-sm rounded-[14px] px-[7px] pt-[7px] pb-6 text-sm">
                        <div className="bg-green/10 rounded-lg pt-[6px] pb-[5px] pr-[11px] pl-[15px] text-green mb-[13px] flex justify-between">
                            <div className="space-y-0.5">
                                <div>My Wallet</div>
                                <div className="font-bold">AED 152.4</div>
                            </div>

                            <div className="pt-[3px]"><WalletIcon className="w-4 opacity-20" /></div>
                        </div>

                        <div className="space-y-2.5 px-[13px]">
                            <div className="flex cursor-pointer md:hidden items-center justify-between">
                                <span className="text-green">ID : <span className="font-bold">{account?.aid}</span></span><span>{idCopyIcon}</span>
                            </div>
                            <div className="flex cursor-pointer xl:hidden items-center justify-between">
                                <span className="text-night font-medium">Referal Link</span><span><LinkCopy><img src="/images/backend/copy-link.svg" alt="Copy icon" className="inline-block" /></LinkCopy></span>
                            </div>
                            <div className="flex cursor-pointer items-center space-x-[7px]">
                                <span><AdjustmentsHorizontalIcon className="w-4 opacity-20" /></span><span>Settings</span>
                            </div>
                            <div className="flex cursor-pointer items-center space-x-[7px] text-red">
                                <span><ArrowRightOnRectangleIcon className="w-4" /></span><span className="font-bold">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}
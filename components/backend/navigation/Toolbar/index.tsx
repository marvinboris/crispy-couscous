import { Bars3BottomLeftIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { useAccountContext } from "../../../../app/contexts/account"
import { useSideDrawerContext } from "../../../../app/contexts/sideDrawer"

export default function Toolbar() {
    const { account } = useAccountContext()
    const { open, setOpen } = useSideDrawerContext()

    return <header className="bg-white flex items-center sticky top-0 z-50">
        <div className="flex-1 flex items-center pl-[33px] pr-4 md:px-[42px]">
            <div className="cursor-pointer" onClick={() => setOpen(!open)}><Bars3BottomLeftIcon className='w-10 text-primary' /></div>

            <div className="flex ml-auto space-x-3 md:space-x-8">
                <div className="cursor-pointer relative z-0 after:block after:absolute after:w-4 after:h-4 after:rounded-full after:bg-green md:after:bg-primary after:top-0 after:right-0"><BellIcon className="w-[34px] md:w-10" /></div>
                <div className="cursor-pointer relative z-0 after:block after:absolute after:w-4 after:h-4 after:rounded-full after:bg-green md:after:bg-primary after:top-0 after:right-0"><ChatBubbleOvalLeftEllipsisIcon className="w-[34px] md:w-10" /></div>
            </div>
        </div>

        <div className="md:w-[300px] md:border-l border-secondary-700/10 h-[111px] md:h-[86px] flex items-center justify-between pl-3 pr-9">
            <div className="hidden md:block">
                <div className="text-lg font-bold mb-1">{account?.first_name} {account?.last_name}</div>

                <div>
                    <span className="text-primary"><span className="font-bold">ID :</span> {account?.aid}</span> <span><ClipboardDocumentListIcon className="inline-block w-6" /></span>
                </div>
            </div>

            <div className="relative">
                <img src="/images/backend/user-pic-wrapper.svg" alt="User pic wrapper" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -ml-[1px] w-11 h-11 rounded-full overflow-hidden">
                    <img src={account?.photo} alt="User pic" className="absolute inset-0 scale-[2] image-cover" />
                </div>
            </div>
        </div>
    </header>
}
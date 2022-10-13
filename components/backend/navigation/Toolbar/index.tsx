import { Bars3BottomLeftIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { useAccountContext } from "../../../../app/contexts/account"

export default function Toolbar() {
    const { account } = useAccountContext()

    return <header className="bg-white flex items-center sticky top-0">
        <div className="flex-1 flex items-center px-[42px]">
            <div className="cursor-pointer"><Bars3BottomLeftIcon className='w-10' /></div>

            <div className="flex ml-auto space-x-8">
                <div className="cursor-pointer relative z-0 after:block after:absolute after:w-4 after:h-4 after:rounded-full after:bg-primary-600 after:top-0 after:right-0"><BellIcon className="w-10" /></div>
                <div className="cursor-pointer relative z-0 after:block after:absolute after:w-4 after:h-4 after:rounded-full after:bg-primary-600 after:top-0 after:right-0"><ChatBubbleOvalLeftEllipsisIcon className="w-10" /></div>
            </div>
        </div>

        <div className="w-[300px] border-l border-secondary-700/10 h-[86px] flex items-center justify-between pl-3 pr-9">
            <div>
                <div className="text-lg font-bold mb-[13px]">{account?.first_name} {account?.last_name}</div>

                <div>
                    <span className="text-primary-600"><span className="font-bold">ID :</span> {account?.aid}</span> <span><ClipboardDocumentListIcon className="inline-block w-6" /></span>
                </div>
            </div>

            <div className="relative">
                <img src="/images/backend/user-pic-wrapper.svg" alt="User pic wrapper" />
            </div>
        </div>
    </header>
}
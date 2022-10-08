import { CheckCircleIcon } from "@heroicons/react/20/solid";

import LanguageType from "../../../../../app/types/language";

interface LanguageBlockProps {
    language: LanguageType
    selected: boolean
    select: (abbr: string) => void
}

const classNames = (...c: string[]) => c.join(' ')

export default function LanguageBlock({ language, selected, select }: LanguageBlockProps) {
    return <div onClick={() => select(language.abbr)} className={classNames("rounded-[25px] w-[106px] flex flex-col cursor-pointer items-center p-[13px]", selected ? 'bg-white border relative border-primary-600 shadow-lg shadow-primary-600/20' : 'bg-secondary-100')}>
        {selected && <div className="absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 after:absolute after:inset-2 after:bg-white after:-z-10">
            <CheckCircleIcon className="w-9 text-primary-600 z-10" />
        </div>}

        <div className="h-10 w-10 mb-[13px] overflow-hidden">
            <img src={`/images/flags/1x1/${language.flag}.svg`} alt="Flag" className="image-cover rounded-full" />
        </div>

        <div className="w-[63px] text-center py-[5.5px] text-secondary-700 font-medium text-xs bg-primary-600/20 rounded-3xl">{language.name}</div>
    </div>
}
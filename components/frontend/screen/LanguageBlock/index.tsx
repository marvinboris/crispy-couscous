import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import LanguageType from "../../../../app/types/language";

interface LanguageBlockProps {
    language: LanguageType
    selected: boolean
    select: (abbr: string) => void
}

const classNames = (...c: string[]) => c.join(' ')

export default function LanguageBlock({ language, selected, select }: LanguageBlockProps) {
    const [abbr, setAbbr] = useState(language.abbr)

    return <div onClick={() => select(abbr)} className={classNames("rounded-[21.6981px] md:rounded-[25px] w-[106px] flex flex-col cursor-pointer items-center p-[13px]", selected ? 'bg-white border relative border-green shadow-lg shadow-primary/20' : 'bg-secondary-100')}>
        {selected && <div className="absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 after:absolute after:inset-2 after:bg-white after:-z-10">
            <CheckCircleIcon className="w-9 text-green z-10" />
        </div>}

        <div className="h-10 w-10 mb-[13px] overflow-hidden">
            <img src={`/images/flags/1x1/${language.flag}.svg`} alt="Flag" className="image-cover rounded-full" />
        </div>

        <div className={classNames(selected ? 'text-white bg-green' : 'text-secondary-700 bg-primary/20', "w-[66px] md:w-[76px] text-center py-[5.5px] font-medium text-[10px] md:text-xs rounded-3xl")}>
            {language.items ? <select onChange={e => setAbbr(e.target.value)} className="bg-transparent text-inherit p-0 m-0 text-center outline-none w-full">
                {language.items.map(item => <option key={JSON.stringify(item)} value={item.abbr} className="text-secondary-600">{item.name}</option>)}
            </select> : language.name}
        </div>
    </div>
}
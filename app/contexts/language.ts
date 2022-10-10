import { createContext, useContext } from 'react'

import LanguageType from '../types/language'

const LanguageContext = createContext<{
    language: LanguageType | null
    setLanguage: (language: LanguageType | null) => void
    languages: LanguageType[] | null,
    setLanguages: (languages: LanguageType[]) => void
}>({
    language: null,
    setLanguage: (language: LanguageType | null) => { },
    languages: null,
    setLanguages: (languages: LanguageType[]) => { }
})

export const useLanguageContext = () => useContext(LanguageContext);

export default LanguageContext